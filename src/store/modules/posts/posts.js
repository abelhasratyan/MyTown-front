import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()


const state = {
    users: [],
    user: [],
    pass: [],
    data: [],
    token: ''
};

const getters = {};



const mutations = {
    ADDPOST: (state, data) => {
        state.data = data
        if (data.success) {
           //localStorage.setItem('user', JSON.stringify(user))
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations
} 
