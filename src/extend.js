
export default function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$l10nCurrency')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$l10nCurrency', {
      get () {
        return this._l10nCurrency
      }
    })
  }

  /**
   * 美元转当地货币金额（保留两位小数，四舍五入）
   */
  Vue.prototype.$uts = function (usdAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDING
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
  }

  /**
   * 美元转当地货币金额（保留两位小数，后面有值就进位）
   */
  Vue.prototype.$utsc = function (usdAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.CARRY
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
  }

  /**
   * 美元转当地货币金额（保留两位小数，直接舍去后面的小数）
   */
  Vue.prototype.$utst = function (usdAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.TRUNCATION
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
  }

  /**
   * 美元转当地货币金额（不保留小数，向上取整）
   */
  Vue.prototype.$utsu = function (usdAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDUP
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
  }

  /**
   * 美元转当地货币金额（不保留小数，向下取整）
   */
  Vue.prototype.$utsd = function (usdAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDDOWN
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
  }

  /**
   * 当地货币美元金额（保留两位小数，四舍五入）
   */
  Vue.prototype.$stu = function (selfAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDING
    const stuExchangeRate = l10nCurrency.currency.stuExchangeRate
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._stu(selfAmount, computeType, stuExchangeRate, decimalSymbol, thousandSeparator)
  }

  /**
   * 当地货币美元金额（保留原始计算结果）
   */
  Vue.prototype.$stuo = function (selfAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ORIGINAL
    const stuExchangeRate = l10nCurrency.currency.stuExchangeRate
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._stu(selfAmount, computeType, stuExchangeRate, decimalSymbol, thousandSeparator)
  }

  /**
   * 当地货币美元金额（不保留小数，向上取整）
   */
  Vue.prototype.$stuu = function (selfAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDUP
    const stuExchangeRate = l10nCurrency.currency.stuExchangeRate
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._stu(selfAmount, computeType, stuExchangeRate, decimalSymbol, thousandSeparator)
  }

  /**
 * 当地货币美元金额（不保留小数，向下取整）
 */
  Vue.prototype.$stud = function (selfAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDDOWN
    const stuExchangeRate = l10nCurrency.currency.stuExchangeRate
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._stu(selfAmount, computeType, stuExchangeRate, decimalSymbol, thousandSeparator)
  }

  /**
   * 美元字符串转当地货币字符串（保留两位小数，四舍五入）
   */
  Vue.prototype.$textUts = function (usdText) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDING
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._textUts(usdText, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
  }

  /**
   * 美元字符串转当地货币字符串（保留整数，四舍五入）
   */
  Vue.prototype.$textUtsi = function (usdText) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.INT
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._textUts(usdText, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
  }

  /**
   * 美元字符串转当地货币字符串（不保留小数，向上取整）
   */
  Vue.prototype.$textUtsRu = function (usdText) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDUP
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._textUts(usdText, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
  }

  /**
   * 美元字符串转当地货币字符串（不保留小数，向下取整）
   */
  Vue.prototype.$textUtsRd = function (usdText) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDDOWN
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    const symbolPosition = l10nCurrency.currency.symbolPosition
    const decimalSymbol = l10nCurrency.currency.decimalSymbol
    const thousandSeparator = l10nCurrency.currency.thousandSeparator
    return l10nCurrency._textUts(usdText, computeType, utsExchangeRate, symbolDisplay, symbolPosition, decimalSymbol, thousandSeparator)
}
}
