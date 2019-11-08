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
                  <label for="exampleFormControlInput1">Create new password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Confirm new password</label>
                  <input
                    v-model="c_password"
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div
                  v-if="notFound"
                  class="alert alert-danger"
                  role="alert"
                >Does not math!</div>
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
    </main>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters, mapActions } from "vuex";
import { Token } from "../router/Auth";

export default {
  name: "createNewPassword",
    props: {
       email: String,
  },
  components: {
    Footer
  },
  data() {
    return {
      password: "",
      c_password: "",
      notFound:false
    };
  },
  methods: {
    ...mapActions(["createNewPassword"]),

    sendMessage() {
      /*if(this.password !== this.c_password){
        this.notFound = true;
      }*/
      this.createNewPassword({
        password: this.password,
        c_password: this.c_password
      })
        .then(res => {
          console.log(res,'yeeeeeeeeeeeeeeeeeeeesssssssssssssssssssssssssssssssss');
          if (res.data.success) {
            this.$router.push('/')
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    if (Token.get.user()) {
      this.$router.push("/");
    }
          console.log(this.email,'teteteteteteteteEMAIL')

  },
  ...mapState(["users"])
};
</script>
