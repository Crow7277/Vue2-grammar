//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
//按需引入
import { Button ,Row} from 'element-ui';
//
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);

//关闭Vue的生产提示
Vue.config.productionTip = false;
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
});