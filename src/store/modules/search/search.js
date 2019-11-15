import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()


const state = {
    data: [],
    pass: [],
    data: [],
    token: ''
};

const getters = {};



const mutations = {

    GETUSER:(state, data) => {
        if (data.success) {
            state.data = data

           //localStorage.setItem('user', JSON.stringify(user))
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
} 
