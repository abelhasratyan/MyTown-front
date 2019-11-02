import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()


const state = {
    friends: []
};

const getters = {};



const mutations = {
    GET_FRIENDS: (state, friends) => {
        state.friends = friends
    }
};

export default {
    state,
    getters,
    actions,
    mutations
} 
