import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()


const state = {
    pass: [],
    data: [],
    token: ''
};

const getters = {};



const mutations = {

    GETUSER:(state, data) => {
        state.data = data
    },

    SEARCHEDUSER:(state,data) => {
        state.data = data
    }

};

export default {
    state,
    getters,
    actions,
    mutations
} 
