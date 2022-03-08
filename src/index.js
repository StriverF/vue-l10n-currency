import { install, Vue } from './install'

var VueL10nCurrency = class VueL10nCurrency {
  static install
  static version

  _computeTypeEnum = {
    ROUNDING: 'rounding', // 保留两位小数，四舍五入
    CARRY: 'carry', // 保留两位小数，后面有值就进位
    TRUNCATION: 'truncation', // 保留两位小数，直接舍去后面的小数
    INT: 'int', // 保留整数，四舍五入
    ROUNDUP:'roundup', // 保留整数，向上取整
    ROUNDDOWN:'rounddown', // 保留整数，向下取整
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
    const symbolPosition = options.symbolPosition || 0
    const decimalSymbol = options.decimalSymbol || '.'
    const thousandSeparator = options.thousandSeparator || ''
    const currency = {
      isoCode,
      stuExchangeRate,
      utsExchangeRate,
      symbolDisplay,
      symbolPosition,
      decimalSymbol,
      thousandSeparator
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

  _formatAmount (amount, computeType, decimalSymbol, thousandSeparator) {
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
    } else if (computeType === this._computeTypeEnum.ROUNDUP) {
      // 向上取整 e.g: 20.3478 => 21, 20.5412 => 21
      result = Math.ceil(amount)
    } else if (computeType === this._computeTypeEnum.ROUNDDOWN) {
      // 向下取整 e.g: 20.3478 => 20, 20.5412 => 20
      result = Math.floor(amount)
    } else {
      // 保留原始计算结果
      result = amount
    }
    if (thousandSeparator) {
      var parts = result.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
      return parts.join(decimalSymbol);
    } else if (decimalSymbol) {
      result = result.toString().replace('.', decimalSymbol)
    }
    return result
  }

  _uts (usdAmount, computeType, usdToSelfExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator) {
    let selfAmount = usdAmount * usdToSelfExchangeRate
    let formatAmount = this._formatAmount(selfAmount, computeType, decimalSymbol, thousandSeparator)
    return symbolPosition ? formatAmount + symbolDisplay : symbolDisplay + formatAmount
  }
  _stu (selfAmount, computeType, SelfToUsdExchangeRate, decimalSymbol, thousandSeparator) {
    let usdAmount = selfAmount * SelfToUsdExchangeRate
    let formatAmount = this._formatAmount(usdAmount, computeType, decimalSymbol, thousandSeparator)
    return formatAmount
  }

  _textUts (usdText, computeType, usdToSelfExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator) {
    // console.log('[vue-l10n-currency] _textUts.')
    let selfText = usdText
    let l10n = this
    if (typeof (usdText) === 'string' && usdText !== '') {
      if (usdText.includes('$')) {
        let reg = /(\$\d*(\.\d*|\d*))/g
        let replaceTxt = usdText.replace(reg, function (value) {
          let usdAmount = value.slice(1)
          let selfAmount = usdAmount * usdToSelfExchangeRate
          let formatAmount = l10n._formatAmount(selfAmount, computeType, decimalSymbol, thousandSeparator)
          return symbolPosition ? formatAmount + symbolDisplay : symbolDisplay + formatAmount
        })
        selfText = replaceTxt
      }
    }
    return selfText
  }
}

VueL10nCurrency.install = install
VueL10nCurrency.version = '1.0.2'

export default VueL10nCurrency
