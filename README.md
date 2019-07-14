# vue-l10n-currency 一个货币显示本地化的Vue插件

## 介绍
vue-l10n-currency 是参照vue-i18n 的vue插件方式实现的一个 货币本地化转换Vue插件。

### 安装

```
npm install vue-l10n-currency -D
```

### 使用
#### 在Vue项目的main.js中

```
import VueL10nCurrency from 'vue-l10n-currency'
Vue.use(VueL10nCurrency)
const l10nCurrency = new VueL10nCurrency({
  isoCode: 'USD',
  stuExchangeRate: 1,
  utsExchangeRate: 1,
  symbolDisplay: '$'
})

new Vue({
  l10nCurrency,
  router,
  render: h => h(App)
}).$mount('#app')

```

#### 在Vue项目的模板中

```
  <p>{{$uts(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入
  <p>{{$utsc(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,两位小数后值大于0就进位
  <p>{{$utst(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,舍去两位小数后的值不进位
  <p>{{$stu(237.41)}}</p> // 按照汇率从Self(本地货币)转换为USD(美元)保留两位小数四舍五入
  <p>{{$textUts("这个金额是$23.5,那个金额是$18.99")}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入
  <p>{{$textUtsi("这个金额是$23.5,那个金额是$18.99")}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入
```

#### 在js中切换货币

```
  const isoCode = 'CNY'
  const utsExchangeRate = 6.85765
  const stuExchangeRate = 0.14582
  const symbolDisplay = '￥'
  this.$l10nCurrency.currency = {
    isoCode,
    stuExchangeRate,
    utsExchangeRate,
    symbolDisplay
  }
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
