import axios from 'axios'

export const actions = {
  async Login({ commit }, data) {
    const response = await axios.post('/login', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.data.status === 'success') {
      commit('LOGIN', response.data)
      return response
    }
  },

  async ForgetPass({ commit }, data) {
    const response = await axios.post('/forget', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.data.status === 'success') {
      commit('FORGETPASS', response.data)
      return response
    }
  },

  async Register({ commit }, data) {
    const response = await axios.post('/registration', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.data.success) {
      commit('REGISTER', response.data)
      return response.data
    }
  },

  async getUsers({ commit }, token) {
    const response = await axios.get('/admin/users', {
      headers: {
        "Authorization": token
      }
    })
    commit('GET_USERS', response.data.users)
  },


  async friendRequest({ commit }, data) {
    const response = await axios.post('/friendrequest', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },

  async getUser({ commit }, token) {

    const response = await axios.get('/user', {
      headers: {
        "Authorization": token
      }
    })
    if (response.data.success) {
      commit('GET_USER', response.data)
      return response.data
    }
  }
};