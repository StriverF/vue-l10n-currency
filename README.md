# vue-l10n 一个货币显示本地化的Vue插件

## 介绍
vue-l10n-currency 是参照vue-i18n 的vue插件方式实现的一个 货币本地化转换Vue插件。
Dmoe预览和文档 [vue-l10n example](http://docs.patpat.site/)

### 安装

```
npm install vue-l10n -D
```

### 使用
#### 在Vue项目的main.js中

```javaScript
import VueL10nCurrency from 'vue-l10n'
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

```javaScript
  <p>{{$uts(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入
  <p>{{$utsc(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,两位小数后值大于0就进位
  <p>{{$utst(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,舍去两位小数后的值不进位
  <p>{{$stu(237.41)}}</p> // 按照汇率从Self(本地货币)转换为USD(美元)保留两位小数四舍五入
  <p>{{$textUts("这个金额是$23.5,那个金额是$18.99")}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入
  <p>{{$textUtsi("这个金额是$23.5,那个金额是$18.99")}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入
```

#### 在js中切换货币

```javaScript
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

### API文档

**Vue全局对象**

l10nCurrency

`this.$l10nCurrency `
 
对象属性：
 

```
currency: {
    isoCode:'USD',
    stuExchangeRate: 1,
    utsExchangeRate: 1,
    symbolDisplay: ‘$’,  // 货币符号
    symbolPosition: 0,  // 货币符号位置 0 为前， 1 为后
    decimalSymbol: '.',  // 小数点符号， 默认 .
    thousandSeparator: ''  // 千位分隔符， 默认不分割
}
_computeTypeEnum: {
    ROUNDING: 'rounding', // 保留两位小数，四舍五入
    CARRY: 'carry', // 保留两位小数，后面有值就进位
    TRUNCATION: 'truncation', // 保留两位小数，直接舍去后面的小数
    INT: 'int', // 保留整数，四舍五入
    ORIGINAL: 'original' // 保留原始计算结果
}
```

| Vue全局函数 | 使用 | 描述 |
| --- | --- | --- |
| uts  | $uts(34.62)  | 美元转当地货币金额（保留两位小数，四舍五入） |
| utsc | $utsc(34.62) | 美元转当地货币金额（保留两位小数，后面有值就进位） |
| utst | $utst(34.62) | 美元转当地货币金额（保留两位小数，直接舍去后面的小数） |
| stu | $stu(237.41) | 当地货币美元金额（保留两位小数，四舍五入） |
| stuo | $stuo(237.41) | 当地货币美元金额（保留原始计算结果） |
| textUts | $textUts("这个金额是$23.5,那个金额是$18.99") | 美元字符串转当地货币字符串（保留两位小数，四舍五入） |
| textUtsi | $textUtsi("这个金额是$23.5,那个金额是$18.99") | 美元字符串转当地货币字符串（保留整数，四舍五入） |


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
