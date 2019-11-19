import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()


const state = {
    pass: [],
    data: [],
    searcheduser: [],
    token: ''
};

const getters = {};



const mutations = {

    GETUSER:(state, data) => {
        state.data = data
    },

    SEARCHEDUSER:(state,searcheduser) => {
        console.log(searcheduser.posts.posts,'STATWE')
        state.searcheduser = searcheduser
    }

};

export default {
    state,
    getters,
    actions,
    mutations
} 
