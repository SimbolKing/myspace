import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import UserListView from '../views/UserListView'
import UserProfileView from '../views/UserProfileView'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/404/',
        name: 'NotFound',
        component: NotFoundView
    },
    {
        path: '/login/',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/register/',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/userlist/',
        name: 'UserList',
        component: UserListView
    },
    {
        path: '/userprofile/:userId/',
        name: 'UserProfile',
        component: UserProfileView
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
