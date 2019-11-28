import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()


const state = {
    events: []
};

const getters = {};



const mutations = {
    EVENT: (state, events) => {
        state.events = events
    },

    GET_EVENTS: (state, events) => {
        state.events = events
    }
};

export default {
    state,
    getters,
    actions,
    mutations
} 
