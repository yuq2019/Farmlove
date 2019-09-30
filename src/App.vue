<template>
  <div id="app">
    <router-view></router-view>
    <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/homepage" >首页</router-link>
        </li>
      <li class="footer-bar-item">
        <router-link to="/division">分类</router-link>
        </li>
      <li class="footer-bar-item">
        <router-link to="/shopcart">购物车</router-link>
        </li>
      <li class="footer-bar-item">
        <router-link to="/mine">我的</router-link>
        </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer-bar{
  display: flex;
  position: fixed;
  bottom:0;
  background: #f0e8e8;
  width:100%;
  height: 1rem;
  line-height: 1rem;
  &-item{
    flex-grow: 1;
    text-align: center;
    
  
  }
}
</style>
