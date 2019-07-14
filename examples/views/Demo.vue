<template>
    <div>
    <p>货币转换测试</p>
      <p>{{$uts(34.62)}}</p>
      <p>{{$utsc(34.62)}}</p>
      <p>{{$utst(34.62)}}</p>
      <p>{{$stu(237.41)}}</p>
      <p>{{$textUts("这个金额是$23.5,那个金额是$18.99")}}</p>
      <p>{{$textUtsi("这个金额是$23.5,那个金额是$18.99")}}</p>

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
  .c-button {
    margin-left: 8px;
    padding-left: 8px;
    padding-right: 8px;
    height: 30px;
    background-color: aquamarine 
  }
</style>



