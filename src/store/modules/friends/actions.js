import axios from 'axios'

export const actions = {
    async getFriends ({ commit }, data) {
        const response = await axios.get('/friend', {
            headers: {
                "Authorization": data.token
            }
        })
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
        if (response.data.success) {
          commit('DELETEFRIEND', { response: response.data, deleteFriendId: data.deleteFriendId })
          return response
        }
      },
};