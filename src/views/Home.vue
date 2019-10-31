<template>
    <div>
        <Header :msg="users.user.user" />
        <div id="app">
            <router-view :msg="users.user.user"></router-view>  
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { mapState, mapActions } from 'vuex'
import { APIService } from '@/APIService'

const apiService = new APIService()

export default {
    name: 'Home',
    data() {
        return {
            user: {}
        }
    },
    components: {
        Header,
        Footer
    },
    methods: {
        ...mapActions(['getUser'])
    },
    created() {
        this.getUser(apiService.getToken()).then(user => {
            this.user = user.user
        })
    },
    computed: mapState([
        'users'
    ]),
}
</script>