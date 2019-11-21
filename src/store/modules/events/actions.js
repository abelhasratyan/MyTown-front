import axios from 'axios'

export const actions = {
    async createEvent({ commit }, data) {
        console.log(data, 'ACTIONJS')
        const response = await axios.post('/user/addevent',{ data } , {
          headers: {
            "Authorization": data.token
          }
        })
        if (response.data.success) {
          commit('GET_EVENTS', response.data)
          return response
        }
      },
};
