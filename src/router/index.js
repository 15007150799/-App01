import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
// import Order from '@/components/Order.vue'
// import History from '@/components/History.vue'
// import Login from '@/components/Login.vue'
// import UserInfo from '@/components/UserInfo.vue'
// import Reg from '@/components/Reg.vue'
// import Detail from '@/components/Detail.vue'
import Good from '@/components/goods.vue'
import Seller from '@/components/SellerContent'
import Rating from '@/components/rating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/good',
      name: 'Good',
      component: Good
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/rating',
      name: 'Rating',
      component:Rating
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/reg',
    //   name: 'Reg',
    //   component: Reg
    // },
    // {
    //   path: '/userInfo',
    //   name: 'UserInfo',
    //   component: UserInfo
    // },
    // {
    //   path: '/history',
    //   name: 'History',
    //   component: History
    // },
    // {
    //   path: '/detail:id',
    //   name: 'Detail',
    //   component: Detail
    // },
    {
       path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
