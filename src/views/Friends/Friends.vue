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

export default {
    name: 'Friends',
    components: {
        ProfileHeader,
        List,
        Requests
    },
    computed: {
        ...mapState(['users'])
    },
}
</script>