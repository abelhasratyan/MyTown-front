<template>
  <div id="home">
    <main>
      <section class="logReg">
        <div class="container">
          <div class="row my-3">
            <div class="col-md-5 m-auto">
              <form class="logRegBox">
                <div class="text-center py-2">
                  <img src="@/assets/images/logo.png" alt />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput3">First Name</label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput3"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput4">Last Name</label>
                  <input
                    v-model="surname"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput4"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput4">Birthday date</label>
                  <input
                    v-model="birthday"
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput4"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput4">Address</label>
                  <input
                    v-model="address"
                    type="address"
                    class="form-control"
                    id="exampleFormControlInput4"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput2">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput2"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput5">Confirm Password</label>
                  <input
                    v-model="c_password"
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput5"
                  />
                </div>
                <div class="form-group">
                  <input
                    @click.prevent="registerUser"
                    type="submit"
                    class="btn_4 w-100"
                    value="Sign In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters, mapActions } from "vuex";
import { Token } from "../router/Auth";

export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      birthday: "",
      address: "",
      password: "",
      c_password: ""
    };
  },
  components: {
    Footer
  },
  methods: {
    ...mapActions(["Register"]),

    registerUser() {
      let data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        birthday: this.birthday,
        address: this.address,
        password: this.password,
        c_password: this.c_password
      };
      this.Register(data).then(res => {
        console.log("user", res);
        this.$router.push("/profile");
      });
    }
  },
  created() {
    if (Token.get.user()) {
      this.$router.push("/");
    }
  },
  computed: {
    /*...mapGetters(['loading']),

      isLoading() {
        return this.loading;
      }*/
  }
};
</script>
