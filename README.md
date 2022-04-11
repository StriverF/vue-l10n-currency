# vue-l10n 一个货币显示本地化的Vue插件

## 介绍
vue-l10n-currency 是参照vue-i18n 的vue插件方式实现的一个 货币本地化转换Vue插件。
Dmoe预览和文档 [vue-l10n example](http://docs.patpat.site/)
货币格式本地化使用[Intl.NumberFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat#%E4%BE%8B%E5%AD%90)

### 安装

```
npm install vue-l10n -D
```

### v1.1.0 版本后弃用以下函数
弃用utsc、utst、stuo、textUtsi、utsu、utsd 改用uts、stu、textUts通过传第二个参数来确定输出格式


```javaScript
{
  DEFAULT: 'default',   // 默认ICU标准全数据格式
  ROUNDING: 'rounding', // 保留两位小数，四舍五入
  CARRY: 'carry', // 保留两位小数，后面有值就进位
  TRUNCATION: 'truncation', // 保留两位小数，直接舍去后面的小数
  INT: 'int', // 保留整数，四舍五入
  INT_CARRY: 'int_carry', // 整数进位
  INT_TRUNCATION: 'int_truncation', // 整数舍去小数
  INT_RT: 'int_rt',                   // 先保留两位小数四舍五入，再取整数舍去小数，避免小数临界四舍五入只正好进位到整数
  ORIGINAL: 'original' // 保留原始计算结果
}
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
  symbolDisplay: '$',
  locales: 'en-US'
})

new Vue({
  l10nCurrency,
  router,
  render: h => h(App)
}).$mount('#app')

```

#### 在Vue项目的模板中

```javaScript
  <p>{{$uts(1818340.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式, 按照本地货币标准保留小数位
  <p>{{$uts(1818340.62, 'rounding')}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式, 保留两位小数四舍五入
  <p>{{$uts(1818340.62, 'int')}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式，保留整数四舍五入
  <p>{{$stu(1818340.62, 'int')}}</p> // 按照汇率从Self(本地货币)转换为USD(美元)，IUC标准本地化货币格式，保留整数四舍五入
  <p>{{$textUts("Text金额$1818340.62，金额$818340.62", 'rounding')}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入
```

#### 在js中切换货币

```javaScript
  const isoCode = 'CNY'
  const utsExchangeRate = 6.85765
  const stuExchangeRate = 0.14582
  const symbolDisplay = '￥'
  const locales = 'zh-CN'
  this.$l10nCurrency.currency = {
    isoCode,
    stuExchangeRate,
    utsExchangeRate,
    symbolDisplay,
    locales
  }
```

### API文档

**Vue全局对象**

l10nCurrency

`this.$l10nCurrency `
 
对象属性：
 

```javaScript
// 初始化参数
{
    isoCode:'USD',
    stuExchangeRate: 1,
    utsExchangeRate: 1,
    symbolDisplay: ‘$’,
    locales: 'en-US'
}

// type参数枚举
{
  DEFAULT: 'default',   // 默认ICU标准全数据格式
  ROUNDING: 'rounding', // 保留两位小数，四舍五入
  CARRY: 'carry', // 保留两位小数，后面有值就进位
  TRUNCATION: 'truncation', // 保留两位小数，直接舍去后面的小数
  INT: 'int', // 保留整数，四舍五入
  INT_CARRY: 'int_carry', // 整数进位
  INT_TRUNCATION: 'int_truncation', // 整数舍去小数
  INT_RT: 'int_rt',                   // 先保留两位小数四舍五入，再取整数舍去小数，避免小数临界四舍五入只正好进位到整数
  ORIGINAL: 'original' // 保留原始计算结果
}
```

| Vue全局函数 | 使用 | 描述 |
| --- | --- | --- |
| uts  | $uts(34.62)  | 美元转当地货币金额, 可选传第二个type参数 |
| stu | $stu(237.41) | 当地货币美元金额, 可选传第二个type参数 |
| textUts | $textUts("Text金额$1818340.62，金额$818340.62", 'int') | 美元字符串转当地货币字符串, 可选传第二个type参数 |



---
---
### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
