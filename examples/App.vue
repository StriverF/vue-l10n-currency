<template>
  <div id="app">
    <div class="nav-menu">
      <router-link to="/" class="tab">例子</router-link>
      <router-link to="/doc" class="tab">文档</router-link>
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
