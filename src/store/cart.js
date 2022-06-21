import axios from 'axios'

export default {
    actions: {
        async fetchCart({commit}, id) {
            const res = await axios.get('http://localhost:3001/products');
            const newProducts = res.data;
            const filteredProduct = newProducts[id];
            commit('addProductsCart', filteredProduct)
        },
        removeAll({commit}) {
            commit('clearProducts')
        },
        removeSingleProduct({commit}, receivedID) {
            commit('singleClear', receivedID)
        }
    },
    mutations: {
        addProductsCart(state, filteredProduct) {
            state.cart.push(filteredProduct)
            state.counter = state.cart.length
            state.total = state.total + filteredProduct.price
        },
        clearProducts(state) {
            state.cart = []
            state.counter = 0
            state.total = 0
        },
        singleClear(state, receivedID) {
            state.total = state.total - state.cart[receivedID].price
            state.cart.splice(receivedID, 1);
            state.counter -= 1
        }
    },
    state: {
        cart: [],
        counter: 0,
        total: 0
    },
    getters: {
        cartProducts(state) {
            return state.cart
        },
        counterStatus(state) {
            return state.counter
        },
        totalPrice(state) {
            return state.total
        }
    }
}