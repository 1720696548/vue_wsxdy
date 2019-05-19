import Vue from 'vue'
import Router from 'vue-router'
import Muen from './components/muen/MuenUtils.vue'
import Muen1 from './components/muen/Muen1.vue'
import Muen2 from './components/muen/Muen2.vue'
import Muen3 from './components/muen/Muen3.vue'
import Muen4 from './components/muen/Muen4.vue'
import AddOrder from './components/order/AddOrder'
import MainOrder from './components/order/MainOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'muen', component: Muen4},
    {path: '/muen1', name: 'muen1', component: Muen1},
    {path: '/muen2', name: 'muen2', component: Muen2},
    {path: '/muen3', name: 'muen3', component: Muen3},
    {path: '/muen4', name: 'muen4', component: Muen4},
    {path: '/addOrder', name: 'addOrder', component: AddOrder},
    {path: '/mainOrder', name: 'mainOrder', component: MainOrder},
  ],
  mode: "history"
})
