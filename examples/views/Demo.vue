<template>
    <div class="main">
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
          <span>按照汇率从Self(本地货币)转换为USD(美元)保留两位小数四舍五入</span>
          <p>{{$stu(237.41)}}</p>
        </li>

        <li>
          <span>按照汇率从Self(本地货币)转换为USD(美元)保留原始计算结果</span>
          <p>{{$stu(237.41)}}</p>
        </li>

         <li>
          <span>将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入</span>
          <p>{{$textUts("这个金额是$23.5,那个金额是$18.99")}}</p>
        </li>
        
        <li>
          <span>将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入</span>
          <p>{{$textUtsi("这个金额是$23.5,那个金额是$18.99")}}</p>
        </li>
      </ul>
      
      <button class="c-button" @click="cL10nUSD()">切换切换货币USD</button>
      <button class="c-button" @click="cL10nCNY()">切换切换货币CNY</button>
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
        symbolDisplay
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
  .main {
    text-align: left;
    padding-left: 20%;
    padding-right: 20%;
  }
  .c-button {
    margin-left: 8px;
    padding-left: 8px;
    padding-right: 8px;
    height: 30px;
    background-color: aquamarine 
  }
</style>



