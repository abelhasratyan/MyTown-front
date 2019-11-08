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
                  <label for="exampleFormControlInput1">Enter number</label><br>
                  <span style="font-size: 0.9rem;">You will receive messages on your mail, please enter the number in the input filed.</span>
                  <input
                    v-model="value"
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    maxlength="6"
                  />
                </div>
                <div
                  v-if="notFound"
                  class="alert alert-danger"
                  role="alert"
                >Please,enter correct number!</div>
                <div class="form-group">
                  <input
                    type="button"
                    class="btn_4 w-100"
                    value="Send message"
                    maxlength="6"
                    @click="sendMessage()"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <CreateNewPassword v-if="mailValid" ></CreateNewPassword>
    </main>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters, mapActions } from "vuex";
import { Token } from "../router/Auth";
import CreateNewPassword from "./CreateNewPassword";

export default {
  name: "ValidateEmail",
 
  components: {
    Footer,
    CreateNewPassword
  },
  data() {
    return {
      value: "",
      mailValid: false,
      notFound: false,
      mail: this.usermail
    };
  },
  methods: {
    ...mapActions(["ValidEmail"]),

    sendMessage() {
      this.ValidEmail({
        value: this.value,
        mail: this.mail
      })
        .then(res => {
          if (res.data.success) {
            this.mailValid = true;
            this.$router.push("/createnewpassword");
          }
        })
        .catch(err => {
          this.notFound = true;
        });
    }
  },
  ...mapState(["users"])
};
</script>
<style scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>
