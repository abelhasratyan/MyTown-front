import axios from 'axios'

export const actions = {
    async Login ({ commit }, data) {
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

    async getUsers({ commit }, token) {
        const response = await axios.get('/admin/users', {
            headers: {
                "Authorization": token
            }
        })
        commit('GET_USERS', response.data.users)
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
    },
    updateUser({ commit }, data) {
        return new Promise((resolve, reject) => {
            axios.put('/admin/user/update', data.data, {
                headers: {
                    "Authorization": data.token
                }
            }).then(r => {
                resolve(r.data)
                commit('UPDATE_USER', r.data)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    changePassword({ commit }, data) {
        return new Promise((resolve, reject) => {
            axios.post(`/admin/user/${data.id}`, data.data, {
                headers: {
                    "Authorization": data.token
                }
            }).then(r => {
                resolve(r.data)
                commit('CHANGE_PASS', r.data)
                delete r.data.data.password
            }), error => {
                reject(error)
            }
        })
    },
    deleteUser({ commit }, data) {
        return new Promise((resolve, reject) => {
            axios.delete(`/admin/user/${data.id}`, {
                headers: {
                    "Authorization": data.token
                }
            }).then(r => {
                resolve(r)
                commit('DELETE_USER', r.data.user_id)
            })
        }) 
    },
};