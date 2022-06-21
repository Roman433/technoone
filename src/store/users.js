import axios from 'axios'
export default {
    actions: {
        async fetchUsers(result) {
            const res = await axios.get('http://localhost:3001/users');
            const newUsers = res.data;
            result.commit('updateUsers', newUsers);
        }
    },
    mutations: {
        updateUsers(state, newUsers) {
            state.users = newUsers
        }
    },
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    }
}