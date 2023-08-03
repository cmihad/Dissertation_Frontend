import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserSignUp from '../views/User/UserSIgnUp.vue'
import UserLogin from '../views/User/UserLogIn.vue'
import Landing from '../views/Landing.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/',
      name: 'userSignUp',
      component: UserSignUp
    },
    {
      path: '/user/login',
      name: 'userLogin',
      component: UserLogin
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
