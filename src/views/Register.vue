<template>
  <div id="home">
    <main>
      <section class="logReg">
        <form class="logRegBox" @submit.prevent="registerUser">
          <div class="text-center py-2">
            <img src="@/assets/images/logo.png" alt />
          </div>
          <div class="form-group">
            <label for="name">
              Name
              <span style="color:red">*</span>
            </label>
            <input v-model="name" type="text" class="form-control" id="name" />
          </div>
          <div class="form-group">
            <label for="lastname">
              Last Name
              <span style="color:red">*</span>
            </label>
            <input v-model="surname" type="text" class="form-control" id="lastname" />
          </div>
          <div class="form-group">
            <label for="birthday">
              Birthday date
              <span style="color:red">*</span>
            </label>
            <input v-model="birthday" type="text" class="form-control" id="birthday" />
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <input v-model="country" type="text" class="form-control" id="country" />
            <label for="city">City</label>
            <input v-model="city" type="text" class="form-control" id="city" />
          </div>
          <div class="form-group">
            <label for="mail">
              Email
              <span style="color:red">*</span>
            </label>
            <input v-model="email" type="email" class="form-control" id="mail" />
          </div>
          <div class="form-group">
            <label for="password">
              Password
              <span style="color:red">*</span>
            </label>
            <input v-model="password" type="password" class="form-control" id="password" />
          </div>
          <div class="form-group">
            <label for="c_password">
              Confirm Password
              <span style="color:red">*</span>
            </label>
            <input v-model="c_password" type="password" class="form-control" id="c_password" />
          </div>
          <div class="form-group">
            <input @click.prevent="registerUser" type="submit" class="btn_4 w-100" value="Sign In" />
          </div>
        </form>
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
      errors: [],
      name: null,
      surname: null,
      email: null,
      birthday: null,
      country: null,
      city: null,
      password: null,
      c_password: null
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
        country: this.country,
        city: this.city,
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
