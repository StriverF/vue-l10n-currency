<template>
  <div class="main container">
    <vue-markdown class="article" :source="content" v-highlight></vue-markdown>
    <!-- <mark-down :initialValue ='md' :theme='vscode'/> -->
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import readme from '../../README.md'
import MarkDown from 'vue-meditor'

export default {
  data() {
    return {
      content: readme,
      html: ''
    }
  },
  components:{
    VueMarkdown, MarkDown
  },
  mounted () {
    // debugger
    // let converter = new showdown.Converter()
    // let text = this.md.toString()
    // this.html = converter.makeHtml(text)
  }
}
</script>
<style>
.article h1 {
  font-size: 18px;
  padding-bottom: 10px;
  border-bottom: 2px solid #dadada;
  margin-bottom: 20px;
}
.article p {
  padding: 10px 0 30px 0;
}
.article p a {
  display: inline-block;
  margin-left: 5px;
  text-decoration: underline;
}
.article p a:hover {
  color: #ff2556;
}
.article h2, .article h3 {
  font-size: 16px;
}
.article pre {
  margin: 10px 0 30px 0;
  -webkit-box-shadow: 0 0 5px #b9b9b9;
  box-shadow: 0 0 5px #b9b9b9;
}
.article pre .hljs {
  padding: 20px;
  background: #f9f9f9;
}
</style>

