<template>
  <section class="profile">
    <div class="container" v-if="msg">
      <!-- {{ msg }} -->
      <div class="row">
        <div class="col-md-12">
          <div class="coverImg" :style="{ 'background-image': `url(${msg.coverPhoto})`}">
            <!--<button class="changeImg">Change Cover
                            <img :src="currentUser.coverPhoto" alt="">
            </button>-->
          </div>
        </div>
        <div class="col-md-12">
          <div class="userBox row m-0">
            <div class="col-lg-3 col-md-2 col-sm-12">
              <div class="profileUserBox">
                <img :src="msg.avatar" alt="img" />
              </div>
            </div>
            <div class="col-lg-9 col-md-10 d-none d-md-block">
              <ul class="userList">
                <li class="hasChild">
                  <a>
                    <span class="textBox">Profile</span>
                  </a>
                  <ul class="subMenu shadow pt-3 pb-3 rounded">
                    <li>
                      <div>Edit</div>
                    </li>
                    <li>
                      <router-link to>Subscribe</router-link>
                    </li>
                    <li>
                      <router-link to>Customize</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link :to="{name: 'polls'}">Poll</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Friends'}">Friends</router-link>
                </li>
                <li>
                  <router-link to="/photos">Photos</router-link>
                </li>
                <li>
                  <router-link :to="{name: ''}">Blog</router-link>
                </li>
                <li class="hasChild">
                  <a>
                    <span class="textBox">Still</span>
                  </a>
                  <ul class="subMenu shadow pt-3 pb-3 rounded">
                    <li>
                      <router-link to>Ads</router-link>
                    </li>
                    <li>
                      <router-link :to="'events'">Events</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: 'Photos'}">Photos</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: ''}">Timeline</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: 'videos'}">Videos</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: ''}">Classifieds</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: 'fundraisers'}">Fund Raisers</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: ''}">Sites</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: ''}">Store</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: 'groups'}">Groups</router-link>
                    </li>
                  </ul>
                </li>
                <li style="cursor:pointer" @click="test">Send friend request</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            First Name
            <span class="red-star">*</span>
          </label>
          <input class="input" id="first-name" type="text" placeholder="First Name" />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="last-name">
            Last Name
            <span class="red-star">*</span>
          </label>
          <input class="input" id="last-name" type="text" placeholder="Last Name" />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="Birthday-date">Birthday date</label>
          <input class="input" id="Birthday-date" type="number" placeholder="Birthday date" />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="Country">Country</label>
          <input class="input" id="Country" type="text" placeholder="Country" />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="City">City</label>
          <input class="input" id="City" type="text" placeholder="City" />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="Email">
            Email
            <span class="red-star">*</span>
          </label>
          <input class="input" id="Email" type="email" placeholder="Email" />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="Password">
            Password
            <span class="red-star">*</span>
          </label>
          <input class="input" id="Password" type="password" placeholder="Password" />
        </div>
        <div class="edit-profile-popup-wrapper-content-form-input">
          <label class="label" for="Confirm-password">
            Confirm password
            <span class="red-star">*</span>
          </label>
          <input class="input" id="Confirm-password" type="text" placeholder="Confirm password" />
        </div>
      </div>
      <div class="edit-profile-popup-wrapper-footer">
        <button class="save-btn">Save</button>
        <button class="cancel">Cancel</button>
      </div>
    </form>
  </div>
  </section>
</template>

<script>
//   import { apiEndPoint } from '@/links';
import { mapState, mapActions, mapGetters } from "vuex";
import { Token } from "../router/Auth";
export default {
  data() {
    return {
      currentUser: null,
      currentUserId: "",
      friendRequestId: ""
      //   apiEndPoint,
    };
  },
  props: {
    msg: Object
  },
  methods: {
    ...mapActions(["friendRequest"]),

    test() {
      console.log(this.currentUserId, "testts");
      /* this.friendRequest({
                currentUserId: this.currentUserId,
                friendRequestId: this.friendRequestId
            }).then(res => {
                if (res.data.status === 'success') {
                    this.$router.push('/')
                }
            })*/
      if (Token.get.user()) {
        let currentUser = JSON.parse(Token.get.user());
        this.currentUserId = currentUser.user._id;

        console.log(this.currentUserId, "test");
      }
    }
  }

  //   computed: {
  //     ...mapState('users', {
  //       user: state => state.user,
  //       selectedUser: state => state.selectedUser,
  //     }),

  //     query() {
  //       return this.selectedUser ? {
  //         id: this.selectedUser._id
  //       } : {};
  //     }
  //   },

  //   beforeUpdate() {
  //     this.currentUser = this.selectedUser ? this.selectedUser : this.user
  //   },

  //   mounted() {
  //     this.currentUser = this.selectedUser ? this.selectedUser : this.user
  //   }
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
  opacity: 0;
  pointer-events: none;
  transition: .2s;
  z-index: 1;
}

.edit-profile-popup.open{
    opacity: 1;
    pointer-events: auto;
    
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
