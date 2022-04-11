import { install, Vue } from './install'

var VueL10nCurrency = class VueL10nCurrency {
  static install
  static version

  _computeTypeEnum = {
    DEFAULT: 'default',                 // 默认ICU标准全数据格式
    ROUNDING: 'rounding',               // 保留两位小数，四舍五入
    CARRY: 'carry',                     // 保留两位小数，后面有值就进位
    TRUNCATION: 'truncation',           // 保留两位小数，直接舍去后面的小数
    INT: 'int',                         // 保留整数，四舍五入
    INT_CARRY: 'int_carry',             // 整数进位
    INT_TRUNCATION: 'int_truncation',   // 整数舍去小数
    INT_RT: 'int_rt',                   // 先保留两位小数四舍五入，再取整数舍去小数，避免小数临界四舍五入只正好进位到整数
    ORIGINAL: 'original'                // 保留原始计算结果
  }
  _vm
  _root
  _dataListeners

  constructor (options) {
    if (!Vue && typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }

    const isoCode = options.isoCode || 'USD'
    const stuExchangeRate = options.stuExchangeRate || '1'
    const utsExchangeRate = options.utsExchangeRate || '1'
    const symbolDisplay = options.symbolDisplay || '$'
    const locales = options.locales || 'en-US'
    const currency = {
      isoCode,
      stuExchangeRate,
      utsExchangeRate,
      symbolDisplay,
      locales
    }

    this._vm = null
    this._root = options.root || null
    this._sync = options.sync === undefined ? true : !!options.sync
    this._dataListeners = []

    this._initVM({
      currency
    })
  }

  _initVM (data) {
    const silent = Vue.config.silent
    Vue.config.silent = true
    this._vm = new Vue({ data })
    Vue.config.silent = silent
  }

  destroyVM () {
    this._vm.$destroy()
  }

  subscribeDataChanging (vm) {
    this._dataListeners.push(vm)
  }

  unsubscribeDataChanging (vm) {
    let arr = this._dataListeners
    if (arr.length) {
      const index = arr.indexOf(vm)
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  watchL10nCurrencyData () {
    const self = this
    return this._vm.$watch('$data', () => {
      let i = self._dataListeners.length
      while (i--) {
        Vue.nextTick(() => {
          self._dataListeners[i] && self._dataListeners[i].$forceUpdate()
        })
      }
    }, { deep: true })
  }

  watchCurrency () {
    /* istanbul ignore if */
    if (!this._sync || !this._root) { return null }
    const target = this._vm
    return this._root.$l10nCurrency.vm.$watch('currency', (val) => {
      target.$set(target, 'currency', val)
      target.$forceUpdate()
    }, { immediate: true })
  }

  get vm () {
    return this._vm
  }

  get currency () {
    return this._vm.currency
  }
  set currency (currency) {
    this._vm.$set(this._vm, 'currency', currency)
  }

  _formatAmount (amount, computeType) {
    let computeResult
    switch (computeType) {
      case this._computeTypeEnum.DEFAULT:
        computeResult = amount
        break
      case this._computeTypeEnum.ROUNDING:
        computeResult = amount.toFixed(2)
        break
      case this._computeTypeEnum.CARRY:
        computeResult = Math.ceil(amount * 100) / 100
        break
      case this._computeTypeEnum.TRUNCATION:
        computeResult = Math.floor(amount * 100) / 100
        break
      case this._computeTypeEnum.INT:
        computeResult = amount.toFixed()
        break
      case this._computeTypeEnum.INT_CARRY:
        computeResult = Math.ceil(amount)
        break
      case this._computeTypeEnum.INT_TRUNCATION:
        computeResult = Math.floor(amount)
        break
      case this._computeTypeEnum.INT_RT:
        computeResult = amount.toFixed(2)
        computeResult = Math.floor(computeResult)
        break
      case this._computeTypeEnum.ORIGINAL:
        computeResult = amount
        break
      default:
        computeResult = amount
        break
    }
    let formatResult = computeResult
    if (computeType != this._computeTypeEnum.ORIGINAL) {
      const options = { style: 'currency', currency: this.currency.isoCode }
      const intTypeArr = [
        this._computeTypeEnum.INT, 
        this._computeTypeEnum.INT_CARRY, 
        this._computeTypeEnum.INT_TRUNCATION, 
        this._computeTypeEnum.INT_RT
      ]
      const decimalsTypeArr = [
        this._computeTypeEnum.ROUNDING, 
        this._computeTypeEnum.CARRY, 
        this._computeTypeEnum.TRUNCATION
      ]
      if (intTypeArr.includes(computeType)) {
        options.minimumFractionDigits = 0
      } else if (decimalsTypeArr.includes(computeType)) {
        options.minimumFractionDigits = 2
      }
      formatResult = new Intl.NumberFormat(this.currency.locales, options).format(computeResult)
    }
    return formatResult
  }

  _uts (usdAmount, computeType, usdToSelfExchangeRate) {
    // console.log('[vue-l10n-currency] _uts.')
    let selfAmount = usdAmount * usdToSelfExchangeRate
    return this._formatAmount(selfAmount, computeType)
  }
  _stu (selfAmount, computeType, SelfToUsdExchangeRate) {
    // console.log('[vue-l10n-currency] _stu.')
    let usdAmount = selfAmount * SelfToUsdExchangeRate
    return this._formatAmount(usdAmount, computeType)
  }

  _textUts (usdText, computeType, usdToSelfExchangeRate) {
    let selfText = usdText
    let l10n = this
    if (typeof (usdText) === 'string' && usdText !== '') {
      if (usdText.includes('$')) {
        let reg = /(\$\d*(\.\d*|\d*))/g
        let replaceTxt = usdText.replace(reg, function (value) {
          let usdAmount = value.slice(1)
          let selfAmount = usdAmount * usdToSelfExchangeRate
          return l10n._formatAmount(selfAmount, computeType)
        })
        selfText = replaceTxt
      }
    }
    return selfText
  }
}

VueL10nCurrency.install = install
VueL10nCurrency.version = '1.1.3'

export default VueL10nCurrency
