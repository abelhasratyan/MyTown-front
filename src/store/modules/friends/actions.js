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
    }
    
};