(function(n){function t(t){for(var r,o,a=t[0],s=t[1],i=t[2],y=0,p=[];y<a.length;y++)o=a[y],c[o]&&p.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,a=1;a<e.length;a++){var s=e[a];0!==c[s]&&(r=!1)}r&&(u.splice(t--,1),n=o(o.s=e[0]))}return n}var r={},c={index:0},u=[];function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var l=s;u.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("c31f")},"42b1":function(n,t,e){"use strict";var r=e("880c"),c=e.n(r);c.a},"583d":function(n,t,e){},"82a9":function(n,t){n.exports="# vue-l10n 一个货币显示本地化的Vue插件\n\n## 介绍\nvue-l10n-currency 是参照vue-i18n 的vue插件方式实现的一个 货币本地化转换Vue插件。\nDmoe预览和文档 [vue-l10n example](http://docs.patpat.site/)\n\n### 安装\n\n```\nnpm install vue-l10n -D\n```\n\n### 使用\n#### 在Vue项目的main.js中\n\n```javaScript\nimport VueL10nCurrency from 'vue-l10n'\nVue.use(VueL10nCurrency)\nconst l10nCurrency = new VueL10nCurrency({\n  isoCode: 'USD',\n  stuExchangeRate: 1,\n  utsExchangeRate: 1,\n  symbolDisplay: '$'\n})\n\nnew Vue({\n  l10nCurrency,\n  router,\n  render: h => h(App)\n}).$mount('#app')\n\n```\n\n#### 在Vue项目的模板中\n\n```javaScript\n  <p>{{$uts(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入\n  <p>{{$utsc(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,两位小数后值大于0就进位\n  <p>{{$utst(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,舍去两位小数后的值不进位\n  <p>{{$stu(237.41)}}</p> // 按照汇率从Self(本地货币)转换为USD(美元)保留两位小数四舍五入\n  <p>{{$textUts(\"这个金额是$23.5,那个金额是$18.99\")}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入\n  <p>{{$textUtsi(\"这个金额是$23.5,那个金额是$18.99\")}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入\n```\n\n#### 在js中切换货币\n\n```javaScript\n  const isoCode = 'CNY'\n  const utsExchangeRate = 6.85765\n  const stuExchangeRate = 0.14582\n  const symbolDisplay = '￥'\n  this.$l10nCurrency.currency = {\n    isoCode,\n    stuExchangeRate,\n    utsExchangeRate,\n    symbolDisplay\n  }\n```\n\n### API文档\n\n**Vue全局对象**\n\nl10nCurrency\n\n`this.$l10nCurrency `\n \n对象属性：\n \n\n```\ncurrency: {\n    isoCode:'USD',\n    stuExchangeRate: 1,\n    utsExchangeRate: 1,\n    symbolDisplay: ‘$’,  // 货币符号\n    symbolPosition: 0,  // 货币符号位置 0 为前， 1 为后\n    decimalSymbol: '.',  // 小数点符号， 默认 .\n    thousandSeparator: ''  // 千位分隔符， 默认不分割\n}\n_computeTypeEnum: {\n    ROUNDING: 'rounding', // 保留两位小数，四舍五入\n    CARRY: 'carry', // 保留两位小数，后面有值就进位\n    TRUNCATION: 'truncation', // 保留两位小数，直接舍去后面的小数\n    INT: 'int', // 保留整数，四舍五入\n    ORIGINAL: 'original' // 保留原始计算结果\n}\n```\n\n| Vue全局函数 | 使用 | 描述 |\n| --- | --- | --- |\n| uts  | $uts(34.62)  | 美元转当地货币金额（保留两位小数，四舍五入） |\n| utsc | $utsc(34.62) | 美元转当地货币金额（保留两位小数，后面有值就进位） |\n| utst | $utst(34.62) | 美元转当地货币金额（保留两位小数，直接舍去后面的小数） |\n| stu | $stu(237.41) | 当地货币美元金额（保留两位小数，四舍五入） |\n| stuo | $stuo(237.41) | 当地货币美元金额（保留原始计算结果） |\n| textUts | $textUts(\"这个金额是$23.5,那个金额是$18.99\") | 美元字符串转当地货币字符串（保留两位小数，四舍五入） |\n| textUtsi | $textUtsi(\"这个金额是$23.5,那个金额是$18.99\") | 美元字符串转当地货币字符串（保留整数，四舍五入） |\n\n\n### Customize configuration\n\nSee [Configuration Reference](https://cli.vuejs.org/config/).\n"},"83b8":function(n,t,e){},"880c":function(n,t,e){},b8da:function(n,t,e){"use strict";var r=e("83b8"),c=e.n(r);c.a},c31f:function(n,t,e){"use strict";e.r(t);e("ac6a"),e("cadf"),e("551c"),e("f751"),e("097d");var r=e("a026"),c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"nav-menu"},[e("router-link",{staticClass:"tab",attrs:{to:"/"}},[n._v("例子")]),e("router-link",{staticClass:"tab",attrs:{to:"/doc"}},[n._v("文档")]),e("a",{attrs:{href:"https://github.com/StriverF/vue-l10n-currency",target:"_blank"}},[n._v("GitHub\n    "),e("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[e("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),e("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])],1),e("router-view")],1)},u=[],o=(e("42b1"),e("2877")),a={},s=Object(o["a"])(a,c,u,!1,null,null,null),i=s.exports,l=e("8c4f"),y=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"main container"},[e("H3",[n._v("货币转换测试")]),e("ul",[e("li",[e("span",[n._v("按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入")]),e("p",[n._v(n._s(n.$uts(34.62)))])]),e("li",[e("span",[n._v("按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,两位小数后值大于0就进位")]),e("p",[n._v(n._s(n.$utsc(34.62)))])]),e("li",[e("span",[n._v("按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,舍去两位小数后的值不进位")]),e("p",[n._v(n._s(n.$utst(34.62)))])]),e("li",[e("span",[n._v("按照汇率从Self(本地货币)转换为USD(美元)保留两位小数四舍五入")]),e("p",[n._v(n._s(n.$stu(237.41)))])]),e("li",[e("span",[n._v("按照汇率从Self(本地货币)转换为USD(美元)保留原始计算结果")]),e("p",[n._v(n._s(n.$stuo(237.41)))])]),e("li",[e("span",[n._v("将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入")]),e("p",[n._v(n._s(n.$textUts("这个金额是$23.5,那个金额是$18.99")))])]),e("li",[e("span",[n._v("将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入")]),e("p",[n._v(n._s(n.$textUtsi("这个金额是$23.5,那个金额是$18.99")))])]),e("li",[e("span",[n._v("将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)")]),e("p",[n._v(n._s(n.$textUts("这个金额是$236893.5,那个金额是$18.99")))])])]),e("button",{staticClass:"c-button",on:{click:function(t){return n.cL10nUSD()}}},[n._v("切换切换货币USD")]),e("button",{staticClass:"c-button",on:{click:function(t){return n.cL10nCNY()}}},[n._v("切换切换货币CNY")]),e("button",{staticClass:"c-button",on:{click:function(t){return n.cL10nCNY1()}}},[n._v("切换切换货币CNY以及千位分割符号，小数点符号")])],1)},p=[],h={methods:{cL10nCNY:function(){console.log("点击切换货币CNY");var n="CNY",t=6.85765,e=.14582,r="￥";this.$l10nCurrency.currency={isoCode:n,stuExchangeRate:e,utsExchangeRate:t,symbolDisplay:r}},cL10nCNY1:function(){console.log("点击切换货币CNY1");var n="CNY",t=6.85765,e=.14582,r="￥",c=1,u=",",o=" ";this.$l10nCurrency.currency={isoCode:n,stuExchangeRate:e,utsExchangeRate:t,symbolDisplay:r,symbolPosition:c,decimalSymbol:u,thousandSeparator:o}},cL10nUSD:function(){console.log("点击切换货币USD");var n="USD",t=1,e=1,r="$";this.$l10nCurrency.currency={isoCode:n,stuExchangeRate:e,utsExchangeRate:t,symbolDisplay:r}}}},f=h,v=(e("d848"),Object(o["a"])(f,y,p,!1,null,"2a9b7fa6",null)),d=v.exports,m=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"main container"},[e("vue-markdown",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"article",attrs:{source:n.content}})],1)},_=[],b=e("9ce6"),C=e.n(b),$=e("82a9"),g=e.n($),S=e("d258"),x=e.n(S),D={data:function(){return{content:g.a,html:""}},components:{VueMarkdown:C.a,MarkDown:x.a},mounted:function(){}},U=D,R=(e("b8da"),Object(o["a"])(U,m,_,!1,null,null,null)),E=R.exports;r["a"].use(l["a"]);var w=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"demo",component:d},{path:"/doc",name:"doc",component:E}]}),N=(e("6762"),e("2fdb"),e("a481"),e("6b54"),e("28a5"),e("d225")),O=e("b0b4"),T=e("bd86");function j(n){n.prototype.hasOwnProperty("$l10nCurrency")||Object.defineProperty(n.prototype,"$l10nCurrency",{get:function(){return this._l10nCurrency}}),n.prototype.$uts=function(n){var t=this.$l10nCurrency,e=t._computeTypeEnum.ROUNDING,r=t.currency.utsExchangeRate,c=t.currency.symbolDisplay,u=t.currency.symbolPosition,o=t.currency.decimalSymbol,a=t.currency.thousandSeparator;return t._uts(n,e,r,c,u,o,a)},n.prototype.$utsc=function(n){var t=this.$l10nCurrency,e=t._computeTypeEnum.CARRY,r=t.currency.utsExchangeRate,c=t.currency.symbolDisplay,u=t.currency.symbolPosition,o=t.currency.decimalSymbol,a=t.currency.thousandSeparator;return t._uts(n,e,r,c,u,o,a)},n.prototype.$utst=function(n){var t=this.$l10nCurrency,e=t._computeTypeEnum.TRUNCATION,r=t.currency.utsExchangeRate,c=t.currency.symbolDisplay,u=t.currency.symbolPosition,o=t.currency.decimalSymbol,a=t.currency.thousandSeparator;return t._uts(n,e,r,c,u,o,a)},n.prototype.$stu=function(n){var t=this.$l10nCurrency,e=t._computeTypeEnum.ROUNDING,r=t.currency.stuExchangeRate,c=t.currency.decimalSymbol,u=t.currency.thousandSeparator;return t._stu(n,e,r,c,u)},n.prototype.$stuo=function(n){var t=this.$l10nCurrency,e=t._computeTypeEnum.ORIGINAL,r=t.currency.stuExchangeRate,c=t.currency.decimalSymbol,u=t.currency.thousandSeparator;return t._stu(n,e,r,c,u)},n.prototype.$textUts=function(n){var t=this.$l10nCurrency,e=t._computeTypeEnum.ROUNDING,r=t.currency.utsExchangeRate,c=t.currency.symbolDisplay,u=t.currency.symbolPosition,o=t.currency.decimalSymbol,a=t.currency.thousandSeparator;return t._textUts(n,e,r,c,u,o,a)},n.prototype.$textUtsi=function(n){var t=this.$l10nCurrency,e=t._computeTypeEnum.INT,r=t.currency.utsExchangeRate,c=t.currency.symbolDisplay,u=t.currency.symbolPosition,o=t.currency.decimalSymbol,a=t.currency.thousandSeparator;return t._textUts(n,e,r,c,u,o,a)}}var k,I,L,A={beforeCreate:function(){var n=this.$options;n.l10nCurrency?(this._l10nCurrency=n.l10nCurrency,this._l10nCurrencyWatcher=this._l10nCurrency.watchL10nCurrencyData(),this._l10nCurrency.subscribeDataChanging(this),(void 0===n.l10nCurrency.sync||n.l10nCurrency.sync)&&(this._currencyWatcher=this.$l10nCurrency.watchCurrency())):this.$root&&this.$root.$l10nCurrency?(this._l10nCurrency=this.$root.$l10nCurrency,this._l10nCurrency.subscribeDataChanging(this)):n.parent&&n.parent.$l10nCurrency&&(this._l10nCurrency=n.parent.$l10nCurrency,this._l10nCurrency.subscribeDataChanging(this))},beforeDestroy:function(){if(this._l10nCurrency){var n=this;this.$nextTick(function(){n._l10nCurrency.unsubscribeDataChanging(n),n._l10nCurrencyWatcher&&(n._l10nCurrencyWatcher(),n._l10nCurrency.destroyVM(),delete n._l10nCurrencyWatcher),n._currencyWatcher&&(n._currencyWatcher(),delete n._currencyWatcher),n._l10nCurrency=null})}}};function P(n){P.installed=!0,k=n,j(k),k.mixin(A);var t=k.config.optionMergeStrategies;t.l10nCurrency=function(n,t){return void 0===t?n:t}}var V=(L=I=function(){function n(t){Object(N["a"])(this,n),Object(T["a"])(this,"_computeTypeEnum",{ROUNDING:"rounding",CARRY:"carry",TRUNCATION:"truncation",INT:"int",ORIGINAL:"original"}),Object(T["a"])(this,"_vm",void 0),Object(T["a"])(this,"_root",void 0),Object(T["a"])(this,"_dataListeners",void 0),!k&&"undefined"!==typeof window&&window.Vue&&P(window.Vue);var e=t.isoCode||"USD",r=t.stuExchangeRate||"1",c=t.utsExchangeRate||"1",u=t.symbolDisplay||"$",o=t.symbolPosition||0,a=t.decimalSymbol||".",s=t.thousandSeparator||"",i={isoCode:e,stuExchangeRate:r,utsExchangeRate:c,symbolDisplay:u,symbolPosition:o,decimalSymbol:a,thousandSeparator:s};this._vm=null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._dataListeners=[],this._initVM({currency:i})}return Object(O["a"])(n,[{key:"_initVM",value:function(n){var t=k.config.silent;k.config.silent=!0,this._vm=new k({data:n}),k.config.silent=t}},{key:"destroyVM",value:function(){this._vm.$destroy()}},{key:"subscribeDataChanging",value:function(n){this._dataListeners.push(n)}},{key:"unsubscribeDataChanging",value:function(n){var t=this._dataListeners;if(t.length){var e=t.indexOf(n);if(e>-1)return t.splice(e,1)}}},{key:"watchL10nCurrencyData",value:function(){var n=this;return this._vm.$watch("$data",function(){var t=n._dataListeners.length;while(t--)k.nextTick(function(){n._dataListeners[t]&&n._dataListeners[t].$forceUpdate()})},{deep:!0})}},{key:"watchCurrency",value:function(){if(!this._sync||!this._root)return null;var n=this._vm;return this._root.$l10nCurrency.vm.$watch("currency",function(t){n.$set(n,"currency",t),n.$forceUpdate()},{immediate:!0})}},{key:"_formatAmount",value:function(n,t,e,r){var c;if(c=t===this._computeTypeEnum.ROUNDING?n.toFixed(2):t===this._computeTypeEnum.CARRY?Math.ceil(100*n)/100:t===this._computeTypeEnum.TRUNCATION?Math.floor(100*n)/100:t===this._computeTypeEnum.INT?n.toFixed():n,r){var u=c.toString().split(".");return u[0]=u[0].replace(/\B(?=(\d{3})+(?!\d))/g,r),u.join(e)}return c}},{key:"_uts",value:function(n,t,e,r,c,u,o){var a=n*e,s=this._formatAmount(a,t,u,o);return c?s+r:r+s}},{key:"_stu",value:function(n,t,e,r,c){var u=n*e,o=this._formatAmount(u,t,r,c);return o}},{key:"_textUts",value:function(n,t,e,r,c,u,o){var a=n,s=this;if("string"===typeof n&&""!==n&&n.includes("$")){var i=/(\$\d*(\.\d*|\d*))/g,l=n.replace(i,function(n){var a=n.slice(1),i=a*e,l=s._formatAmount(i,t,u,o);return c?l+r:r+l});a=l}return a}},{key:"vm",get:function(){return this._vm}},{key:"currency",get:function(){return this._vm.currency},set:function(n){this._vm.$set(this._vm,"currency",n)}}]),n}(),Object(T["a"])(I,"install",void 0),Object(T["a"])(I,"version",void 0),L);V.install=P,V.version="1.0.2";var Y=V,M=e("1487"),G=e.n(M);e("eba2");r["a"].directive("highlight",function(n){var t=n.querySelectorAll("pre code");t.forEach(function(n){G.a.highlightBlock(n)})}),r["a"].use(Y);var W=new Y({});r["a"].config.productionTip=!1,new r["a"]({l10nCurrency:W,router:w,render:function(n){return n(i)}}).$mount("#app")},d848:function(n,t,e){"use strict";var r=e("583d"),c=e.n(r);c.a}});
//# sourceMappingURL=index.4c3d7991.js.map