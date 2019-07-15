<template>
  <div id="app">
    <div class="nav-menu">
      <router-link to="/" class="tab">例子</router-link>
      <router-link to="/doc" class="tab">文档</router-link>
      <a href="https://github.com/StriverF/vue-l10n-currency" target="_blank">GitHub
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('./assets/public.css');
.nav-menu {
  height: 60px;
  box-shadow: 0 0 5px #b9b9b9;
  text-align: center;
}
.nav-menu a {
  display: inline-block;
  line-height: 60px;
  padding: 0 50px;
  font-size: 16px;
}
.nav-menu .router-link-exact-active {
  background: #ff2556;
  color: #fff;
}
.main {
  padding-top: 50px;
}
</style>
