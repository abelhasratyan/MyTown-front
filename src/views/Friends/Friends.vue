<template>
    <div>
        <ProfileHeader :msg="users.user.user" />
        <div class="container">
            <div class="row my-3">
                <List />
                <Requests />
            </div>
        </div>
        
    </div>
</template>

<script>
import ProfileHeader from '@/components/ProfileHeader'
import List from './FriendComponents/FriendsList'
import Requests from './FriendComponents/Requests'
import { mapState, mapActions } from 'vuex'
import { APIService } from '@/APIService'

const apiService = new APIService()

export default {
    name: 'Friends',
    components: {
        ProfileHeader,
        List,
        Requests
    },
    methods: {
        ...mapActions(['getFriends'])
    },
    created() {
        this.getFriends({
            token: apiService.getToken()
        }).then(friends => {
            console.log(friends);
        })
    },
    computed: {
        ...mapState([ 'users', 'friends'])
    },
}
</script>