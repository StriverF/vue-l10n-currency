// import VueL10nCurrency from './index'

export default {
  beforeCreate () {
    const options = this.$options
    if (options.l10nCurrency) {
      this._l10nCurrency = options.l10nCurrency
      this._l10nCurrencyWatcher = this._l10nCurrency.watchL10nCurrencyData()
      this._l10nCurrency.subscribeDataChanging(this)
      if (options.l10nCurrency.sync === undefined || !!options.l10nCurrency.sync) {
        this._currencyWatcher = this.$l10nCurrency.watchCurrency()
      }
    } else if (this.$root && this.$root.$l10nCurrency) {
      // root i18n
      this._l10nCurrency = this.$root.$l10nCurrency
      this._l10nCurrency.subscribeDataChanging(this)
    } else if (options.parent && options.parent.$l10nCurrency) {
      // parent i18n
      this._l10nCurrency = options.parent.$l10nCurrency
      this._l10nCurrency.subscribeDataChanging(this)
    }
    console.log('[vue-l10n-currency] already beforeCreate.')
  },

  beforeDestroy () {
    if (!this._l10nCurrency) { return }
    var self = this
    this.$nextTick(function () {
      self._l10nCurrency.unsubscribeDataChanging(self)
      if (self._l10nCurrencyWatcher) {
        self._l10nCurrencyWatcher()
        self._l10nCurrency.destroyVM()
        delete self._l10nCurrencyWatcher
      }
      if (self._currencyWatcher) {
        self._currencyWatcher()
        delete self._currencyWatcher
      }
      self._l10nCurrency = null
    })
    console.log('[vue-l10n-currency] already beforeDestroy.')
  }
}
