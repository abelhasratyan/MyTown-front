import axios from 'axios'

export const actions = {
  async AddNewPost({ commit }, data) {
    const file = data.postImg
    const text = data.postValue
    const formData = new FormData()
    if (file,text) {
        formData.append('file', file)
        formData.append('text', text)
    } else {
        return {
            message: 'ERROR',
            success: false
        }
    }
    const response = await axios.post('/addpost', formData, {
      headers: {
        'Content-Type': 'application/json',
         "Authorization": data.token
      }
    })

    if (response.data.success) {
      commit('ADDPOST', response.data)
      return response
    }
  },
};
