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
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div
                  v-if="notFound"
                  class="alert alert-danger"
                  role="alert"
                >The email is not found!</div>
                <div class="form-group">
                  <input
                    type="button"
                    class="btn_4 w-100"
                    value="Send message"
                    @click="sendMessage()"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ValidateEmail  v-if="emailValid" ></ValidateEmail>
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters, mapActions } from "vuex";
import { Token } from "../router/Auth";
import ValidateEmail from "./ValidateEmail";

export default {
  name: "ForgetPassword",
  props: {},
  components: {
    Footer,
    ValidateEmail
  },
  data() {
    return {
      email: "",
      emailValid: false,
      notFound: false,
      userData: null
    };
  },
  methods: {
    ...mapActions(["ForgetPass"]),

    sendMessage() {
      this.ForgetPass({
        email: this.email
      })
        .then(res => {
          console.log(res);
          if (res.data.success) {
            this.emailValid = true;
            this.userData = JSON.parse(res.config.data).email;
            this.$router.push("/validatemail");
          }
        })
        .catch(err => {
          this.notFound = true;
          console.log(err);
        });
    }
  },
  ...mapState(["users"])
};
</script>
