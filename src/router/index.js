import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserSignUp from '../views/User/UserSIgnUp.vue'
import UserLogin from '../views/User/UserLogIn.vue'
import Landing from '../views/Landing.vue'
import UserDashboard from '../views/User/UserDashBoard.vue'
import AdminDashboard from '../views/Admin/Dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/user/register',
      name: 'userSignUp',
      component: UserSignUp
    },
    {
      path: '/user/login',
      name: 'userLogin',
      component: UserLogin
    },
    {
      path: '/user/dashboard',
      name: 'userDashboard',
      component: UserDashboard
    },
    {
      path: '/admin/dashboard',
      name: 'adminDashboard',
      component: AdminDashboard
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
