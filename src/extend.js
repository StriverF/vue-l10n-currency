
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
   * 美元转当地货币金额
   * @param {*} usdAmount 
   * @param {*} type _computeTypeEnum 全局配置>局部配置>默认
   * @returns 
   */
  Vue.prototype.$uts = function (usdAmount, type) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency.currency.type || type || 'default'
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    return l10nCurrency._uts(usdAmount, computeType, utsExchangeRate, symbolDisplay)
  }

  /**
   * 当地货币转美元金额
   * @param {*} selfAmount 
   * @param {*} type _computeTypeEnum 全局配置>局部配置>默认
   * @returns 
   */
  Vue.prototype.$stu = function (selfAmount, type) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency.currency.type || type || 'default'
    const stuExchangeRate = l10nCurrency.currency.stuExchangeRate
    return l10nCurrency._stu(selfAmount, computeType, stuExchangeRate)
  }

  /**
   * 美元字符串转当地货币字符串
   * @param {*} usdText 
   * @param {*} type _computeTypeEnum 全局配置>局部配置>默认
   * @returns 
   */
  Vue.prototype.$textUts = function (usdText, type) {
    const l10nCurrency = this.$l10nCurrency
    const computeType = l10nCurrency.currency.type || type || 'default'
    const utsExchangeRate = l10nCurrency.currency.utsExchangeRate
    const symbolDisplay = l10nCurrency.currency.symbolDisplay
    return l10nCurrency._textUts(usdText, computeType, utsExchangeRate, symbolDisplay)
  }

}
