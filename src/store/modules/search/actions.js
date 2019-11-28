import axios from 'axios'

export const actions = {


  async findeUser({ commit }, data = {}) {
    const response = await axios.post('/search', data, {
      headers: {
        //'Content-Type': 'multipart/form-data',
        "Authorization": data.token
      }
    });
    if (response.data.success) {
      commit('GETUSER', response.data)
      return response
    }
  },

  async searcheduser ({ commit }, data = {}) {
    console.log('searching user =>>', data)
    const id = data.id;
    const response = await axios.get(`/user/${id}`, {
      headers: {
        //'Content-Type': 'multipart/form-data',
        "Authorization": data.token
      }
    });
    if (response.data.success) {
      commit('SEARCHEDUSER', response.data)
      return response
    }
  },

};