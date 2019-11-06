import axios from 'axios'

export const actions = {
    async getFriends ({ commit }, data) {
        const response = await axios.get('/friend', {
            headers: {
                "Authorization": data.token
            }
        })
        console.log(response);
        commit('GET_FRIENDS', response.data)
        return response.data
    },
    
    async deleteFriend({ commit }, data) {
        const response = await axios.delete('/friend', {
          headers: {
            Authorization: data.token,
            //'Content-Type': 'application/json'
          },
          data
        })
    
        if (response.data.status === 'true') {
          commit('DELETEFRIEND', response.data)
          return response
        }
      },
};