import axios from 'axios';
// import { APIService } from "../../APIService";
import { actions } from './actions'
import VueAxios from 'vue-axios'

// const apiService = new APIService()

const state = {
    album: [],
    albums: [],
    image: [],
    images: []
};

const getters = {};

const mutations = {

    GET_MY_ALBUMS: (state, albums) => {
        state.albums = albums
    },

    GET_MY_ALBUM: (state, album) => {
        state.album = album
    },

    GET_MY_PROFILE_PHOTOS: (state, images) => {
        state.images = images
    },

    GET_MY_COVER_PHOTOS: (state, images) => {
        state.images = images
    },

    GET_MY_FAVORITE_PHOTOS: (state, images) => {
        state.images = images.response.filter(image => image.type == 'favorite')
    },

    CREATE_ALBUM: (state, album) => {
        state.album = album
    },

    CREATE_IMAGE: (state, image) => {
        state.image = image
    }
    
};

export default {
    state,
    getters,
    actions,
    mutations
} 
