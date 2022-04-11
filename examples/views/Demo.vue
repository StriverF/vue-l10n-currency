<template>
  <div class="main container">
    <H3>货币转换测试</H3>
    <ul>
      <li class="t0">
        <span>按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式, 按照本地货币标准保留小数位</span>
        <span> ------------------- </span>
        <span>$uts(1818340.62)</span>
        <p>{{$uts(1818340.62)}}</p>
      </li>

      <li class="t0">
        <span>按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式, 保留两位小数四舍五入</span>
        <span> ------------------- </span>
        <span>$uts(1818340.62, 'rounding')</span>
        <p>{{$uts(1818340.62, 'rounding')}}</p>
      </li>
      
      <li  class="t0">
        <span>按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式, 保留两位小数进位</span>
        <span> ------------------- </span>
        <span>$uts(1818340.62, 'carry')</span>
        <p>{{$uts(1818340.62, 'carry')}}</p>
      </li>
      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式，保留两位小数,舍去两位小数后的值不进位</span>
        <span> ------------------- </span>
        <span>$uts(1818340.62, 'truncation')</span>
        <p>{{$uts(1818340.62, 'truncation')}}</p>
      </li>
      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式，保留整数四舍五入</span>
        <span> ------------------- </span>
        <span>$uts(1818340.62, 'int')</span>
        <p>{{$uts(1818340.62, 'int')}}</p>
      </li>
      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式，保留整数进位</span>
        <span> ------------------- </span>
        <span>$uts(1818340.62, 'int_carry')</span>
        <p>{{$uts(1818340.62, 'int_carry')}}</p>
      </li>
      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式，保留整数舍去小数</span>
        <span> ------------------- </span>
        <span>$uts(1818340.997, 'int_truncation')</span>
        <p>{{$uts(1818340.997, 'int_truncation')}}</p>
      </li>
      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，IUC标准本地化货币格式，保留整数舍去小数</span>
        <span> ------------------- </span>
        <span>$uts(1818340.997, 'int_rt')</span>
        <p>{{$uts(1818340.997, 'int_rt')}}</p>
      </li>
      <li>
        <span>按照汇率从USD(美元)转换为Self(本地货币)，保留原始计算结果</span>
        <span> ------------------- </span>
        <span>$uts(1818340.62, 'original')</span>
        <p>{{$uts(1818340.62, 'original')}}</p>
      </li>
      

       <li>
        <span>按照汇率从Self(本地货币)转换为USD(美元)，IUC标准本地化货币格式, 按照本地货币标准保留小数位</span>
        <span> ------------------- </span>
        <span>$stu(1818340.62)</span>
        <p>{{$stu(1818340.62)}}</p>
      </li>
      <li>
        <span>按照汇率从Self(本地货币)转换为USD(美元)，IUC标准本地化货币格式，保留两位小数四舍五入</span>
        <span> ------------------- </span>
        <span>$stu(1818340.62, 'rounding')</span>
        <p>{{$stu(1818340.62, 'rounding')}}</p>
      </li>
      <li>
        <span>按照汇率从Self(本地货币)转换为USD(美元)，IUC标准本地化货币格式，保留整数四舍五入</span>
        <span> ------------------- </span>
        <span>$stu(1818340.62, 'int')</span>
        <p>{{$stu(1818340.62, 'int')}}</p>
      </li>
      <li>
        <span>按照汇率从Self(本地货币)转换为USD(美元)保留原始计算结果</span>
        <span> ------------------- </span>
        <span>$stu(1818340.62, 'original')</span>
        <p>{{$stu(1818340.62, 'original')}}</p>
      </li>

        <li>
        <span>将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入</span>
        <span> ------------------- </span>
        <span>$textUts("Text金额$1818340.62，金额$818340.62", 'rounding')</span>
        <p>{{$textUts("Text金额$1818340.62，金额$818340.62", 'rounding')}}</p>
      </li>
      
      <!-- <li>
        <span>将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入</span>
        <span> ------------------- </span>
        <span>$textUts("Text金额$1818340.62，金额$818340.62", 'int')</span>
        <p>{{$textUts("Text金额$1818340.62，金额$818340.62", 'int')}}</p>
      </li> -->
      <li>
        <span>$uts, $stu, $textUts 这三个函数都可以选择传入第二个可选参数：</span>
        <span>'rounding', 'carry', 'truncation', 'int', 'int_carry', 'int_truncation', 'original'</span>
        <router-link to="/doc">详细参数说明请查看文档</router-link>
      </li>
    </ul>
    <div class="operate-box">
      国家：
      <select @change="changeCountry(selectCountry)" v-model="selectCountry">
        <option v-for="country in countryData " :value ="country" :key="country.country_abbreviation">{{country.country_name}}</option>
      </select>
      货币：
      <select @change="changeCurrency(selectCurrency)" v-model="selectCurrency">
        <option v-for="currency in currencyData " :value ="currency" :key="currency.isoCode">{{currency.isoCode}}</option>
      </select>
      语言：
      <select @change="changeLanguage(selectLanguage)" v-model="selectLanguage">
        <option v-for="language in languageData " :value ="language" :key="language.abbreviation">{{language.name}}</option>
      </select>
      <button @click="exportMatchResults">导出当前选中语言匹配任何国家货币</button>
    </div>
  </div>
</template>

<script>
import countryData from '../assets/data/countryData.json'
import languageData from '../assets/data/languageData.json'
import * as xlsx from 'xlsx'

export default {
  data() {
    return {
      countryData: countryData,
      languageData:languageData,
      selectCountry: null,
      selectCurrency: null,
      selectLanguage: null
    }
  },
  created() {
    this.selectCountry = this.countryData[0]
    this.selectCurrency = this.currencyData[0]
    this.selectLanguage = this.languageData[0]
    this.setL10nCurrency()
  },
  computed: {
    currencyData () {
      const currencies = []
      this.countryData.map(item => {
        currencies[item.iso_code] = {
          isoCode: item.iso_code,
          stuExchangeRate: item.self_to_usd_exchange_rate,
          utsExchangeRate: item.usd_to_self_exchange_rate,
          symbolDisplay: item.symbol_display,
          symbolPosition: item.position || 0,
          decimalSymbol: item.decimal_point_style || '.',
          thousandSeparator: item.separator || ''
        }
      })
      return Object.values(currencies)
    },
  },
  methods: {
    changeCountry(selectCountry) {
      console.log('changeCountry', selectCountry)
      this.setL10nCurrency()
    },
    changeCurrency(selectCurrency) {
      console.log('changeCurrency', selectCurrency)
      this.setL10nCurrency()
    },
    changeLanguage(selectLanguage) {
      console.log('changeLanguage', selectLanguage)
      this.setL10nCurrency()
    },
    setL10nCurrency() {
      const isoCode = this.selectCurrency.isoCode
      const utsExchangeRate = this.selectCurrency.utsExchangeRate
      const stuExchangeRate = this.selectCurrency.stuExchangeRate
      const symbolDisplay = this.selectCurrency.symbolDisplay
      const locales = `${this.selectLanguage.abbreviation}-${this.selectCountry.country_abbreviation}`
      this.$l10nCurrency.currency = {
        isoCode,
        stuExchangeRate,
        utsExchangeRate,
        symbolDisplay,
        locales
      }
    },
    exportMatchResults () {
      let results = []
      this.countryData.forEach(country => {
        this.currencyData.forEach(currency => {
          results.push(
            {
              '参数': `${this.selectLanguage.abbreviation}-${country.country_abbreviation}, ${currency.isoCode}`,
              '结果': new Intl.NumberFormat(`${this.selectLanguage.abbreviation}-${country.country_abbreviation}`, { style: 'currency', currency: currency.isoCode }).format(1818340.62654)
            }
          )
        })
      })
      const ws = xlsx.utils.json_to_sheet(results)
      const wb = xlsx.utils.book_new()
      xlsx.utils.book_append_sheet(wb, ws, `语言-${this.selectLanguage.abbreviation} 匹配任意国家货币结果`)
      xlsx.writeFile(wb, `语言-${this.selectLanguage.abbreviation} 匹配任意国家货币结果`)
      
      console.log(results)
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
  display: flex;
  flex-wrap: wrap;
  /* width: 300px; */
}

li {
  width: 33.4%;
  height: 128px;
  border: 2px solid grey;
  box-sizing: border-box;
  margin-left: -2px; 
  margin-top: -2px;
  padding: 10px;
}
ul li span {
  display: block;
  font-size: 13px;
  color: #888;
}
ul li p {
  display: inline-block;
  padding-top: 10px;
  color: #ff2556;
}
ul li a {
  display: block;
  font-size: 13px;
  color: blue;
  text-decoration: underline;
}
li:nth-child(3n+1) {
  margin-left: 0;
}
.t0 {
  margin-top: 20px;
}
li:hover {
  border-color: #ff2556;
  z-index: 2
}

.operate-box {
  padding-top: 20px;
  padding-bottom: 20px;
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
  margin-left: 20px;
}

button:hover {
  background: #e21c49;
}

</style>



