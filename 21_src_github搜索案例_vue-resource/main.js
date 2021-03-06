// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入插件
import vueResource from 'vue-resource';

// 关闭生产环境提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(vueResource);
// 创建Vue
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this;
    },
});
