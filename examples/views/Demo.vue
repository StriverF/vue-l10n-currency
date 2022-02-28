<template>
  <div class="main container">
    <H3>货币转换测试</H3>
    <ul>
      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入</span>
        <p>{{$uts(34.62)}}</p>
      </li>

      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,两位小数后值大于0就进位</span>
        <p>{{$utsc(34.62)}}</p>
      </li>

      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,舍去两位小数后的值不进位</span>
        <p>{{$utst(34.62)}}</p>
      </li>

      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，不保留小数,向上取整</span>
        <p>{{$utsu(34.62)}}</p>
      </li>

      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，不保留小数,向下取整</span>
        <p>{{$utsd(34.62)}}</p>
      </li>

      <li>
        <span>按照汇率从Self(本地货币)转换为USD(美元)保留两位小数四舍五入</span>
        <p>{{$stu(237.41)}}</p>
      </li>

      <li>
        <span>按照汇率从Self(本地货币)转换为USD(美元)保留原始计算结果</span>
        <p>{{$stuo(237.41)}}</p>
      </li>

      <li>
        <span>按照汇率从Self(本地货币)转换为USD(美元),不保留小数,向上取整</span>
        <p>{{$stuu(237.41)}}</p>
      </li>

      <li>
        <span>按照汇率从Self(本地货币)转换为USD(美元),不保留小数,向下取整</span>
        <p>{{$stud(237.41)}}</p>
      </li>

      <li>
        <span>将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入</span>
        <p>{{$textUts("这个金额是$23.5,那个金额是$18.99")}}</p>
      </li>

      <li>
        <span>将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入</span>
        <p>{{$textUtsi("这个金额是$23.5,那个金额是$18.99")}}</p>
      </li>

      <li>
        <span>将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，不保留小数,向上取整</span>
        <p>{{$textUtsRu("这个金额是$23.5,那个金额是$18.99")}}</p>
      </li>

      <li>
        <span>将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，不保留小数,向下取整</span>
        <p>{{$textUtsRd("这个金额是$23.5,那个金额是$18.99")}}</p>
      </li>

      <li>
        <span>可配置化的千位分割符号，以及小数点符号</span>
        <p>{{$textUts("这个金额是$236893.5,那个金额是$18.99")}}</p>
      </li>
    </ul>
    <button class="c-button" @click="cL10nUSD()">切换切换货币USD</button>
    <button class="c-button" @click="cL10nCNY()">切换切换货币CNY</button>
    <button class="c-button" @click="cL10nCNY1()">切换切换货币CNY以及千位分割符号，小数点符号</button>
  </div>
</template>

<script>
export default {
    methods: {
    cL10nCNY () {
      console.log("点击切换货币CNY")
      const isoCode = 'CNY'
      const utsExchangeRate = 6.85765
      const stuExchangeRate = 0.14582
      const symbolDisplay = '￥'
      this.$l10nCurrency.currency = {
        isoCode,
        stuExchangeRate,
        utsExchangeRate,
        symbolDisplay,
      }
    },
    cL10nCNY1 () {
      console.log("点击切换货币CNY1")
      const isoCode = 'CNY'
      const utsExchangeRate = 6.85765
      const stuExchangeRate = 0.14582
      const symbolDisplay = '￥'
      const symbolPosition = 1
      const decimalSymbol = ','
      const thousandSeparator = ' '
      this.$l10nCurrency.currency = {
        isoCode,
        stuExchangeRate,
        utsExchangeRate,
        symbolDisplay,
        symbolPosition,
        decimalSymbol,
        thousandSeparator
      }
    },
    cL10nUSD () {
      console.log("点击切换货币USD")
      const isoCode = 'USD'
      const utsExchangeRate = 1
      const stuExchangeRate = 1
      const symbolDisplay = '$'
      this.$l10nCurrency.currency = {
        isoCode,
        stuExchangeRate,
        utsExchangeRate,
        symbolDisplay
      }
    }
  }
}
</script>
<style scoped>
h3 {
  /* display: inline-block; */
  font-size: 18px;
  padding-bottom: 10px;
  border-bottom: 2px solid #dadada;
}
ul {
  display: block;
  padding: 30px 0;
}
ul li {
  padding: 10px 0;
  border: 1px solid #e4e4e4;
  margin-bottom: 20px;
  padding: 10px 20px;
}
ul li span {
  display: block;
  font-size: 16px;
}
ul li p {
  display: inline-block;
  padding-top: 10px;
  color: #ff2556;
}
button {
  display: inline-block;
  height: 30px;
  padding: 0 20px;
  margin-right: 20px;
  background: #ff2556;
  border: none;
  border-radius: 5px;
  color: #fff;
  outline: none;
  transition: .3s;
  cursor: pointer;
}

button:hover {
  background: #e21c49;
}

</style>



