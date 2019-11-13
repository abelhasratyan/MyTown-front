<template>
  <div class="edit-profile-popup">
    <form class="edit-profile-popup-wrapper">
      <div class="edit-profile-popup-wrapper-header">
        <div class="line"></div>
        <span class="title">Edit Profile</span>
        <div class="line"></div>
      </div>
      <div class="edit-profile-popup-wrapper-content">
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="first-name">
            First name
            <span class="red-star">*</span>
          </label>
          <input
            class="input"
            id="first-name"
            v-model="users.user.user.name"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="last-name">
            Last Name
            <span class="red-star">*</span>
          </label>
          <input
            class="input"
            id="last-name"
            v-model="users.user.user.surname"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="Birthday-date">Birthday date</label>
          <the-mask
            :mask="['####.##.##']"
            placeholder="Birthday date"
            class="input"
            id="Birthday-date"
            v-model="users.user.user.birthday"
          />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="Country">Country</label>
          <input
            class="input"
            id="Country"
            v-model="users.user.user.country"
            type="text"
            placeholder="Country"
          />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="City">City</label>
          <input
            class="input"
            v-model="users.user.user.city"
            id="City"
            type="text"
            placeholder="City"
          />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="Email">
            Email
            <span class="red-star">*</span>
          </label>
          <input
            class="input"
            id="Email"
            v-model="users.user.user.email"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="edit-profile-popup-wrapper-footer">
        <button class="save-btn" type="button" @click="updateUserData">Save</button>
        <button class="cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>
<script>
import { TheMask } from "vue-the-mask";
import { mapState, mapActions, mapMutations } from "vuex";
import { APIService } from '@/APIService'

const apiService = new APIService()

export default {
  name: "EditUserData",
  components: { TheMask },
  data() {
    return {
      closeProfileEdit: true,
      name: null,
      surname: null,
      email: null,
      country: null,
      city: null,
      token:null,
    // password:null,
    // c_password:null,
    };
  },

  methods: {
       ...mapActions(["updateUser"]),

    updateUserData() {
      /* if (this.password !== this.c_password) {
        this.notFound = true;
      }*/
      this.updateUser({
        name: this.users.user.user.name,
        surname: this.users.user.user.surname,
        email: this.users.user.user.email,
        birthday: this.users.user.user.birthday,
        country: this.users.user.user.country,
        city: this.users.user.user.city,
        id: this.users.user.user._id,
        //password: this.password,
        //c_password: this.c_password,
        token: this.token
      })
        .then(res => {
          localStorage.removeItem("user");
          console.log(res.data.token,"USEEEEERRRRRRR")
          localStorage.setItem('user', JSON.stringify(res.data))
          console.log(res.data.token, "RESPONSE");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.token = apiService.getToken()
    console.log(this.users.user.user);
  },
  mounted() {},
  computed: {
    ...mapState(["users"])
  }
};
</script>
<style scoped>
* {
  outline: none !important;
}

.edit-profile-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  pointer-events: auto;
  transition: 0.2s;
  z-index: 10;
}

.edit-profile-popup-wrapper {
  max-width: 550px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 5px;
}
.edit-profile-popup-wrapper-header {
  padding: 20px 0;
  border-bottom: 1px solid #dcdbe4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-profile-popup-wrapper-header .line {
  width: 60px;
  height: 1px;
  background-color: #514c76;
}

.edit-profile-popup-wrapper-header .title {
  display: block;
  margin: 0 5px;
  text-transform: uppercase;
  font-weight: bold;
}
.edit-profile-popup-wrapper-content {
  padding: 25px;
}
.edit-profile-popup-wrapper-content-form-input {
  display: flex;
  flex-direction: column;
}

.edit-profile-popup-wrapper-content-form-input:not(:first-child) {
  margin-top: 20px;
}

.edit-profile-popup-wrapper-content-form-input .label {
  margin-bottom: 10px;
  font-size: 16px;
  margin-left: 15px;
}
.edit-profile-popup-wrapper-content-form-input .label .red-star {
  color: #e12525;
}
.edit-profile-popup-wrapper-content-form-input .input {
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 0 10px 15px;
  border: 1px solid #514c76;
  color: #404040;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.edit-profile-popup-wrapper-footer {
  padding: 25px;
  border-top: 1px solid #dcdbe4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.edit-profile-popup-wrapper-footer .save-btn {
  width: 105px;
  height: 35px;
  background: #514c76;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.edit-profile-popup-wrapper-footer .cancel {
  color: #404040;
  font-size: 15px;
  background: transparent;
  border: 0;
  cursor: pointer;
}
</style>

