import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cart from './cart.js'
import users from './users.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchProducts(result) {
      const res = await axios.get('http://localhost:3001/products');
      const newProducts = res.data;
      result.commit('updateProducts', newProducts);
    }
  },
  mutations: {
    updateProducts(state, newProducts) {
      state.products = newProducts
    }
  },
  state: {
    products: []
  },
  getters: {
    allProducts(state) {
      return state.products
    }
  },
  modules: {
    cart, users
  }
})
