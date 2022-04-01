import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import pokemondetails from '../views/pokemondetails.vue'
import blindtest from '../views/blindtest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/pokemondetails/:id',
    name: 'PokemonDetails',
    component: pokemondetails
  },
  {
    path: '/blindtest',
    name: 'blindtest',
    component: blindtest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
