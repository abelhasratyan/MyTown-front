import axios from 'axios'

export const actions = {

    async CreateAlbum({ commit }, data) {
        const albumData = {
            title: data.title
        }
        const response = await axios.post('/album', albumData, {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data) {
            commit('CREATE_ALBUM', response.data)
            return response.data
        }
    },

    async createImage({ commit }, data) {
        const file = data.data[0]
        const album = data.data[1]
        const formData = new FormData()
        if (file, album) {
            formData.append('file', file)
            formData.append('album', album)            
        } else {
            return {
                message: "fill in all fields",
                success: false
            }
        }
        const response = await axios.post('/photo', formData, {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data) {
            commit('CREATE_IMAGE', response.data)
            return {
                success: true,
                data: response.data
            }
        }
    },

    async changeAvatar({ commit }, data) {
        const file = data.file;
        const id = data.id
        const formData = new FormData()
        if (file,id) {
            formData.append('file', file)
            formData.append('id', id)
        } else {
            return {
                message: "fill in the field",
                success: false
            }
        }
        const response = await axios.post('/user/avatar/update', formData, {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data) {
            commit('CHANGE_AVATAR', response.data)
            return {
                success: true,
                data: response.data
            }
        }
    },

    async getMyAlbums({ commit }, data) {
        const response = await axios.get('/albums/user', {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data) {
            commit('GET_MY_ALBUMS', response.data)
        }        
    },

    async getMyAlbum({ commit }, data) {
        console.log(data);
        
        const response = await axios.get(`/albums/${data.id}`, {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data) {
            commit('GET_MY_ALBUM', response.data)
            return response.data
        }        
    },

    async getProfilePhotos({ commit }, data) {
        const response = await axios.get('/profilePhotos', {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data) {
            commit('GET_MY_PROFILE_PHOTOS', response.data)
        }
    },

    async getFavoritePhotos({ commit }, data) {
        const response = await axios.get('/profilePhotos', {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data) {
            commit('GET_MY_FAVORITE_PHOTOS', response.data)
        }
    },

    async getCoverPhotos({ commit }, data) {
        const response = await axios.get('/coverPhotos', {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data) {
            commit('GET_MY_COVER_PHOTOS', response.data)
        }
    }
}