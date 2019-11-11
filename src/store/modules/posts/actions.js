import axios from 'axios'

export const actions = {
  async AddNewPost({ commit }, data) {
    const file = data.postImg
   // const text = data.postValue
  //  const userId = data.userId
    const formData = new FormData()
    if (file) {
        formData.append('file', file)
       // formData.append('text', text)
       //formData.append('userId',userId)
        
    } else {
        return {
            message: 'ERROR',
            success: false
        }
    }
    const response = await axios.post('/user/newpost', formData, {
      headers: {
        //'Content-Type': 'multipart/form-data',
        "Authorization": data.token
      }
    })

    if (response.data.success) {
      commit('ADDPOST', response.data)
      return response
    }
  },
};
