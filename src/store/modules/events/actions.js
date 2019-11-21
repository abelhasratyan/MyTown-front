import axios from 'axios'

export const actions = {
    async createEvent({ commit }, data) {
        console.log(data, 'ACTIONJS')
        const response = await axios.post('/user/addevent', { data }, {
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
        console.log(response);
        commit('GET_EVENTS', response.data)
        return response.data
    },
};
