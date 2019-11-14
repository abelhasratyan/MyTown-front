import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()


const state = {
    data: [],
    user: [],
    pass: [],
    data: [],
    token: ''
};

const getters = {};



const mutations = {
    ADDPOST: (state, data) => {
        if (data.success) {
            state.data = data
            console.log(data,'POSTSTATE')
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
