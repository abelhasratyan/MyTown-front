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
            <flat-pickr v-model="birthday" class="form-control" id="birthday"></flat-pickr>
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <b-form-select v-model="selectedCountry" :options="countres"></b-form-select>
          </div>
          <div class="form-group">
            <label for="city">State</label>
            <b-form-select v-model="selectedRegion" :options="regions"></b-form-select>
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <b-form-select v-model="selectedCity" :options="cites"></b-form-select>
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
          <div v-if="userExist" class="alert alert-danger" role="alert">User already exist,use another mail !</div>
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
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { usa, canada } from "../../src/countries";

export default {
  components: {
    Footer,
    flatPickr
  },

  data() {
    return {
      errors: [],
      name: null,
      surname: null,
      email: null,
      birthday: null,
      country: null,
      state: null,
      city: null,
      password: null,
      c_password: null,
      userExist: false,
      //date: null,
      countres: [
        {
          text: "USA",
          value: "USA"
        },
        {
          text: "Canada",
          value: "Canada"
        }
      ],
      regionsList: [
        {
          name: "USA",
          region: usa
        },
        {
          name: "Canada",
          region: canada
        }
      ],
      cityList: [
        {
          name: "USA",
          region: usa
        },
        {
          name: "Canada",
          region: canada
        }
      ],
      regions: [],
      cites: [],
      selectedCountry: null,
      selectedRegion: null,
      selectedCity: null
    };
  },

  watch: {
    selectedCountry(country) {
      this.regions.length = 0;
      this.regionsList.forEach(region => {
        if (region.name === country) {
          for (let i = 0; i < region.region.length; i++) {
            this.regions.push(region.region[i][0]);
          }
        }
      });
    },
    selectedRegion(region) {
      this.cites.length = 0;
      this.regionsList.forEach(region => {
        if (region.name === this.selectedCountry) {
          region.region.forEach(regions => {
            if (regions[0] === this.selectedRegion) {
              for (let index = 0; index < regions[1].length; index++) {
                this.cites.push(regions[1][index]);
              }
            }
          });
        }
      });
    }
  },
  mounted() {
    this.setOptionsParams();
  },
  methods: {
    ...mapActions(["Register"]),

    setOptionsParams() {
      this.regions.push(usa);
    },

    registerUser() {
      let data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        birthday: this.birthday,
        country: this.selectedCountry,
        state: this.selectedRegion,
        city: this.selectedCity,
        password: this.password,
        c_password: this.c_password
      };
      this.Register(data).then(res => {
        if (res) {
          this.$router.push("/profile");
        } else {
         this.userExist = true;
        }
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
