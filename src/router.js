import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import Division from './views/Division'
import ShopCart from './views/ShopCart'
import Mine from './views/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/homepage',
      name:'homepage',
      component:HomePage

    },{
      path:'/division',
      name:'division',
      component:Division
    },{
      path:'/shopcart',
      name:'shopcart',
      component:ShopCart
    },{
      path:'/mine',
      name:'mine',
      component:Mine

    }
  ]
})
