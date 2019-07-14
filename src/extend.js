
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
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay)
  }

  /**
   * 美元转当地货币金额（保留两位小数，后面有值就进位）
   */
  Vue.prototype.$utsc = function (usdAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.CARRY
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay)
  }

  /**
   * 美元转当地货币金额（保留两位小数，直接舍去后面的小数）
   */
  Vue.prototype.$utst = function (usdAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.TRUNCATION
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay)
  }

  /**
   * 当地货币美元金额（保留两位小数，四舍五入）
   */
  Vue.prototype.$stu = function (selfAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDING
    const stuExchangeRate = l10nCurrency.currency.stuExchangeRate
    return l10nCurrency._stu(selfAmount, computeType, stuExchangeRate)
  }

  /**
   * 当地货币美元金额（保留原始计算结果）
   */
  Vue.prototype.$stuo = function (selfAmount) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ORIGINAL
    const stuExchangeRate = l10nCurrency.currency.stuExchangeRate
    return l10nCurrency._stu(selfAmount, computeType, stuExchangeRate)
  }

  /**
   * 美元字符串转当地货币字符串（保留两位小数，四舍五入）
   */
  Vue.prototype.$textUts = function (usdText) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.ROUNDING
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    return l10nCurrency._textUts(usdText, computeType, utsExchangeRate, symbolDisplay)
  }

  /**
   * 美元字符串转当地货币字符串（保留整数，四舍五入）
   */
  Vue.prototype.$textUtsi = function (usdText) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency._computeTypeEnum.INT
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    return l10nCurrency._textUts(usdText, computeType, utsExchangeRate, symbolDisplay)
  }
}
