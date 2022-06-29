import { createApp } from 'vue'
import App from './App.vue'
import router from '@router/index.js'
import store from '@store/index.js'
import NProgress from 'nprogress'  // 进度条；进度指示器
import 'nprogress/nprogress.css' // 进度条；进度指示器 样式
import 'element-plus/es/components/message/style/css'
NProgress.configure({
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach(() => {
    NProgress.done()
})


createApp(App).use(router).use(store).mount('#app');
