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
                                    <label for="exampleFormControlInput3">First Name</label>
                                    <input v-model="name" type="email" class="form-control" id="exampleFormControlInput3" placeholder="First Name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput4">Last Name</label>
                                    <input v-model="surname" type="email" class="form-control" id="exampleFormControlInput4" placeholder="Last Name">
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
                                    <label for="exampleFormControlInput5">Confirm Password</label>
                                    <input v-model="c_password" type="password" class="form-control" id="exampleFormControlInput5" placeholder="Confirm Password">
                                </div>
                                <div class="form-group">
                                    <input @click.prevent="registerUser" type="submit" class="btn_4 w-100" value="Sign In">
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
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            password: '',
            c_password: ''
        }
    },
    components: {
        Footer
    },
    methods: {
        ...mapActions(['Register']),

        registerUser() {
            let data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                password: this.password,
                c_password: this.c_password
            };
            this.Register(data).then(res => {
                console.log('user', res); 
                this.$router.push('/profile')
            })
        }
    },
    created() {
        if (Token.get.user()) {
            this.$router.push('/')
        }
    },
    computed: {
      /*...mapGetters(['loading']),

      isLoading() {
        return this.loading;
      }*/
    },
}
</script>
