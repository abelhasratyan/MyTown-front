import axios from 'axios'

export const actions = {


  async findeUser({ commit }, data = {}) {
    //console.log('searching user =>>', data.sea)
    const response = await axios.post('/search', data, {
      headers: {
        //'Content-Type': 'multipart/form-data',
        "Authorization": data.token
      }
    });
    if (response.data.success) {
      console.log('in component search action response data = >>>', response.data)
      commit('GETUSER', response.data)
      return response
    }
  },

  async searcheduser ({ commit }, data = {}) {
    //console.log('searching user =>>', data.sea)
    const response = await axios.get('/user/?id', {
      headers: {
        //'Content-Type': 'multipart/form-data',
        "Authorization": data.token
      }
    });
    if (response.data.success) {
      console.log('in component search action response data = >>>', response.data)
      commit('SEARCHEDUSER', response.data)
      return response
    }
  },

};