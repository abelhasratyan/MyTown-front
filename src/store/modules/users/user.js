import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()


const state = {
    users: [],
    user: [],
    pass: [],
    token: ''
};

const getters = {};



const mutations = {
    LOGIN: (state, user) => {
        state.user = user
        if (user.status === 'success') {
          localStorage.setItem('user', JSON.stringify(user))
        }
    },
    
    FORGETPASS: (state, user) => {
        state.user = user
        if (user.status === 'success') {
          localStorage.setItem('user', JSON.stringify(user))
        }
    },
    REGISTER: (state, user) => {
        state.user = user
        if (user.success) {
            localStorage.setItem('user', JSON.stringify(user))
          }
    },

    FRIENDREQUEST: (state, data) => {
        state.data = data
        if (data.status === 'success') {
          localStorage.setItem('data', JSON.stringify(data))
        }
    },

    GET_USERS: (state, users) => {
        state.users = users.filter(user => user._id != apiService.getId())
    },
    GET_USER: (state, user) => {
        state.user = user
    },
    UPDATE_USER (state, user) {
        state.user = user
    },
    CHANGE_PASS(state, user) {
        state.pass = user
    },

    DELETE_USER(state, id) {
        const index = state.users.findIndex(user => user._id == id)
        state.users.splice(index, 1)
      
    },
};

export default {
    state,
    getters,
    actions,
    mutations
} 
