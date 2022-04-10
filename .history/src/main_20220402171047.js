// 引入Vue
import { from } from 'core-js/core/array';
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入混合
import {mixin,mixin2} from ''
// 关闭生产环境提示
Vue.config.productionTip = false;

// 可以在main.js中全局引用混合

// 创建Vue
new Vue({
    el: '#app',
    render: h => h(App),
});
