import Vue from 'vue'
import Vuex from 'vuex'
import server from './modules/server'
import view from './modules/view'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    view, server
  }
})
