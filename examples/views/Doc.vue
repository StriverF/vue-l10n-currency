<template>
  <div class="main">
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

<style scoped>
.main {
  background-color: beige;
  text-align: left;
  padding-left: 20%;
  padding-right: 20%
}
</style>
