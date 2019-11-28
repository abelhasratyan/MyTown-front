import axios from 'axios'

export const actions = {
    async createEvent({ commit }, data) {
        const response = await axios.post('/user/event/create', { data }, {
            headers: {
                "Authorization": data.token
            }
        })
        if (response.data.success) {
            commit('EVENT', response.data)
            return response
        }
    },

    async getEvents({ commit }, data) {
        const response = await axios.get(`/user/events/${data.id}`, {
            headers: {
                "Authorization": data.token
            }
        })
        commit('GET_EVENTS', response.data)
        return response.data
    },
    
    async editEvent({ commit }, data) {
        const response = await axios.post('/user/event/update', data, {
            headers: {
                "Authorization": data.token
            }
        })
        commit('GET_EVENTS', response.data)
        return response.data
    },
    
    async DeleteEvent({ commit }, data) {
        const response = await axios.post('/user/event/delete', data, {
            headers: {
                "Authorization": data.token
            }
        })
        commit('GET_EVENTS', response.data)
        return response.data
    },
};
