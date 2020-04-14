import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入移动端样式
import '../src/assets/style/border.css'
import '../src/assets/style/reset.css'
import '../src/assets/style/iconfont.css'
import fastClick from 'fastclick'
//引入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')