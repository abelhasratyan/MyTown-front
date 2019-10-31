<template>
    <div id="home">
        <main>
            <section class="logReg">
                <div class="container">
                    <div class="row my-3">
                        <div class="col-md-5 m-auto">
                            <form class="logRegBox">
                                <div class="text-center py-2">
                                    <img src="@/assets/images/logo.png" alt="">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput2">Password</label>
                                    <input v-model="password" type="password" class="form-control" id="exampleFormControlInput2" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <input type="button" class="btn_4 w-100" value="Sign In" @click="userLogin">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import { Token } from '../router/Auth'

export default {

    components: {
        Footer
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['Login']),
        
        userLogin() {
            this.Login({
                email: this.email,
                password: this.password
            }).then(res => {
                if (res.data.status === 'success') {
                    this.$router.push('/')
                }
            })
        }
    },
    created() {        
        if (Token.get.user()) {
            this.$router.push('/')
        }
    },
    // computed: {
    //     ...mapState('users', {
    //         user: state => state.user,
    //     })
    // }
}
</script>
