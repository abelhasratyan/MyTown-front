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
                  <label for="exampleFormControlInput1">Enter number</label>
                  <input
                    v-model="value"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    maxlength="6"
                  />
                </div>
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
      <CreateNewPassword v-if="mailValid" :email="mail"></CreateNewPassword>
    </main>
    </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters, mapActions } from "vuex";
import { Token } from "../router/Auth";
import CreateNewPassword from "./CreateNewPassword"

export default {
  name: "ValidateEmail",
  props: {
       email: String,
  },
  components: {
    Footer,CreateNewPassword
  },
  data() {
    return {
      value: "",
      mailValid:false,
      mail : this.email
    };
  },
  methods: {
    ...mapActions(["ValidEmail"]),

    sendMessage() {
      this.ValidEmail({
        value: this.value
      })
        .then(res => {
          console.log(res);
          if (res.data.success) {
              this.mailValid = true;
            console.log("yessssss", res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created(){
      console.log(this.mail, 'testMEIL')
  },
  ...mapState(["users"])
};
</script>
