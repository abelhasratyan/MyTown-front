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
    const response = await axios.post('/validateuser', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.data.success) {
      commit('FORGETPASS', response.data)
      return response
    }
  },

  async ValidEmail({ commit }, data) {
    const response = await axios.post('/validatenumber', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.data.success) {
      commit('VALIDEMAIL', response.data)
      return response
    }
  },

  async createNewPassword({ commit }, data) {
    console.log(data, 'ACTIONJS')
    const response = await axios.post('/changepassword',{ data} , {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.data.success) {
      commit('CREATENEWPASSWORD', response.data)
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
    console.log('token ->>>>>>>>>>>>>', token)
    const response = await axios.post('/user', {}, {
      headers: {
        "Authorization": token
      }
    })
    console.log('response--------',response.result)
    if (response.data.success) {
      console.log('test', response.data)
      commit('GET_USER', response.data)
      return response.data
    }
  },

  async updateUser({ commit }, data) {
    const response = await axios.post('/updateuser',data  , {
      headers: {
        "Authorization": data.token
      }
    })
    if (response.data.success) {
      commit('UPDATE_USER', response.data)
      return response
    }
  },

};