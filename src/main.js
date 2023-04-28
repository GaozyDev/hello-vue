import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue'
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const routes = [
    { path: '/', component: () => import('./page/home/home.vue') },
    { path: '/login', component: () => import('./page/login/login.vue') },
    { path: '/page1', component: () => import('./page/page1/page1.vue') },
    { path: '/page2', component: () => import('./page/page2/page2.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const api = axios.create({
    baseURL: 'http://127.0.0.1:8080/',
});

// 添加请求拦截器
api.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token = window.localStorage.getItem('Authorization');
    // 添加token
    token && (config.headers.Authorization = token)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
api.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


const app = createApp(App);
app.use(router)
app.mount('#app')
app.use(ElementPlus)
app.use(VueAxios, api)
