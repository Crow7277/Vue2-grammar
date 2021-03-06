// 该文件用于创建Vuex中最为核心的store

// 引入Vuex
import Vuex from 'vuex';

// 准备actions —— 用于响应组件中的动作
const actions = {};
// 准备mutations —— 用于操作数据(state)
const mutations = {};
// 准备state —— 用于存储数据
const state = {};

// 创建Store
const store = new Vuex.Store({
    actions
});
