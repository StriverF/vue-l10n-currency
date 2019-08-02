import { install, Vue } from './install'

var VueL10nCurrency = class VueL10nCurrency {
  static install
  static version

  _computeTypeEnum = {
    ROUNDING: 'rounding', // 保留两位小数，四舍五入
    CARRY: 'carry', // 保留两位小数，后面有值就进位
    TRUNCATION: 'truncation', // 保留两位小数，直接舍去后面的小数
    INT: 'int', // 保留整数，四舍五入
    ORIGINAL: 'original' // 保留原始计算结果
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
    const currency = {
      isoCode,
      stuExchangeRate,
      utsExchangeRate,
      symbolDisplay
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
    // 保留两位小数四舍五入 e.g: 20.3478 => 20.35, 20.3412 => 20.34, 20.3452 => 20.35
    let result
    if (computeType === this._computeTypeEnum.ROUNDING) {
      // 保留两位小数进位 e.g: 20.3478 => 20.35, 20.3412 => 20.35, 20.3452 => 20.35
      result = amount.toFixed(2)
    } else if (computeType === this._computeTypeEnum.CARRY) {
      // 保留两位小数进位 e.g: 20.3478 => 20.35, 20.3412 => 20.35, 20.3452 => 20.35
      result = Math.ceil(amount * 100) / 100
    } else if (computeType === this._computeTypeEnum.TRUNCATION) {
      // 保留两位小数不进位 e.g: 20.3478 => 20.34, 20.3412 => 20.34, 20.3452 => 20.34
      result = Math.floor(amount * 100) / 100
    } else if (computeType === this._computeTypeEnum.INT) {
      // 保留整数四舍五入 e.g: 20.3478 => 20, 20.5412 => 21
      result = amount.toFixed()
    } else {
      // 保留原始计算结果
      result = amount
    }
    return result
  }

  _uts (usdAmount, computeType, usdToSelfExchangeRate, symbolDisplay) {
    // console.log('[vue-l10n-currency] _uts.')
    let selfAmount = usdAmount * usdToSelfExchangeRate
    let formatAmount = this._formatAmount(selfAmount, computeType)
    return symbolDisplay + formatAmount
  }
  _stu (selfAmount, computeType, SelfToUsdExchangeRate) {
    // console.log('[vue-l10n-currency] _stu.')
    let usdAmount = selfAmount * SelfToUsdExchangeRate
    let formatAmount = this._formatAmount(usdAmount, computeType)
    return formatAmount
  }

  _textUts (usdText, computeType, usdToSelfExchangeRate, symbolDisplay) {
    // console.log('[vue-l10n-currency] _textUts.')
    let selfText = usdText
    let l10n = this
    if (typeof (usdText) === 'string' && usdText !== '') {
      if (usdText.includes('$')) {
        let reg = /(\$\d*(\.\d*|\d*))/g
        let replaceTxt = usdText.replace(reg, function (value) {
          let usdAmount = value.slice(1)
          let selfAmount = usdAmount * usdToSelfExchangeRate
          let formatAmount = l10n._formatAmount(selfAmount, computeType)
          return symbolDisplay + formatAmount
        })
        selfText = replaceTxt
      }
    }
    return selfText
  }
}

VueL10nCurrency.install = install
VueL10nCurrency.version = '1.0.1'

export default VueL10nCurrency
