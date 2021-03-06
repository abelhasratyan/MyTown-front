import axios from 'axios'

export const actions = {
  async AddNewPost({ commit }, data) {
    const file = data.postImg;
    const text = data.postValue
    const userId = data.userId
    const formData = new FormData()
    formData.append('text', text)
    formData.append('userId', userId)
    if (file) {
      formData.append('file', file[0])
    }
    const response = await axios.post('/user/newpost', formData, {
      headers: {
        //'Content-Type': 'multipart/form-data',
        "Authorization": data.token
      }
    });

    if (response.data.success) {
      commit('ADDPOST', response.data)
      return response
    }
  },

  async getPosts({ commit }, data = {}) {
    const id = data.userId;
    const response = await axios.get(`/user/${id}/posts`, {
      headers: {
        //'Content-Type': 'multipart/form-data',
        "Authorization": data.token,
      }
    });
    if (response.data.success) {
      commit('GETPOSTS', response.data)
      return response
    }
  },

  async DeletePost({ commit }, data) {
    const response = await axios.delete('/user/post/delete', {
      headers: {
        Authorization: data.token,
        //'Content-Type': 'application/json'
      },
      data
    })
    if (response.data.success) {
      commit('GETPOSTS', response.data)
      return response
    }
  },

};
