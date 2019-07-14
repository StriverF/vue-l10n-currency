import extend from './extend'
import mixin from './mixin'

export let Vue

export function install (_Vue) {
  if (
    process.env.NODE_ENV !== 'production' &&
    install.installed &&
    _Vue === Vue
  ) {
    console.warn('[vue-l10n-currency] already installed.')
    return
  }
  install.installed = true

  Vue = _Vue

  extend(Vue)
  Vue.mixin(mixin)
  const strats = Vue.config.optionMergeStrategies
  strats.l10nCurrency = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal
  }
}
