<template>
  <section class="profile">
    <div class="container" v-if="msg">
      <!-- {{ msg }} -->
      <div class="row">
        <div class="col-md-12">
          <div class="coverImg" :style="{ 'background-image': `url(${msg.coverPhoto})`}">
            <div class="iconBtn">
              <div v-b-modal.changeCavor style="cursor:pointer">
                <button class="changeImg">
                  Change Cover
                  <img src="../assets/images/icons/changeCover.png" alt />
                </button>
              </div>
              <b-modal
                header-class="profile-edit-modal-header"
                id="changeCavor"
                ref="modal"
                title="Edit Cover  Photo"
                title-class="edit-modal-title"
                footer-class="edit-modal-footer"
                @ok="changeCavor"
              >
                <div class="my-4">
                  <div v-if="!image">
                    <h3>Select an image</h3>
                    <input type="file" @change="onCoverChange" />
                  </div>
                  <div v-else>
                    <img :src="image" />
                    <button @click="removeImage">Remove image</button>
                  </div>
                </div>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="userBox row m-0">
            <div class="col-lg-3 col-md-2 col-sm-12 profileImageWrapper">
              <div class="profileUserBox">
                <img :src="msg.avatar" alt="img" />
              </div>
              <div class="iconBtn centeredIcon">
                <div v-b-modal.changeAvatar>
                  <img src="../assets/images/icons/changeCover.png" alt />
                </div>
                <b-modal
                  header-class="profile-edit-modal-header"
                  id="changeAvatar"
                  ref="modal"
                  title="Edit Profile Photo"
                  title-class="edit-modal-title"
                  footer-class="edit-modal-footer"
                  @ok="changePicture"
                >
                  <div class="my-4">
                    <div v-if="!image">
                      <h3>Select an image</h3>
                      <input type="file" @change="onFileChange" />
                    </div>
                    <div v-else>
                      <img :src="image" />
                      <button @click="removeImage">Remove image</button>
                    </div>
                  </div>
                </b-modal>
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
                      <div style="cursor:pointer" v-b-modal.modal-1>Edit</div>
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
                      <router-link :to="'addevents'">Add Events</router-link>
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

      <b-modal
        header-class="profile-edit-modal-header"
        id="modal-1"
        ref="modal"
        title="Edit Profile"
        title-class="edit-modal-title"
        footer-class="edit-modal-footer"
        @ok="updateUserData"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="First name"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input id="name-input" v-model="users.user.user.name" required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Last name"
            label-for="last-input"
            invalid-feedback="last name is required"
          >
            <b-form-input id="last-input" v-model="users.user.user.surname" required></b-form-input>
          </b-form-group>
          <b-form-group label="Email" label-for="mail-input" invalid-feedback="mail is required">
            <b-form-input id="mail-input" v-model="users.user.user.email" required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Birthday"
            label-for="birthday-input"
            invalid-feedback="Birthday is required"
          >
            <the-mask
              :mask="['####.##.##']"
              placeholder="Birthday date"
              class="input form-group"
              id="Birthday-date"
              v-model="users.user.user.birthday"
            />
          </b-form-group>
          <b-form-group
            label="Country name"
            label-for="country-input"
            invalid-feedback="Country is required"
          >
            <b-form-input id="country-input" v-model="users.user.user.country" required></b-form-input>
          </b-form-group>
          <b-form-group
            label="City name"
            label-for="city-input"
            invalid-feedback="City is required"
          >
            <b-form-input id="last-input" v-model="users.user.user.city" required></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    <EditUserData v-if="showEdit" />
  </section>
</template>

<script>
//   import { apiEndPoint } from '@/links';
import { mapState, mapActions, mapGetters } from "vuex";
import { Token } from "../router/Auth";
import { APIService } from "@/APIService";
import EditUserData from "../views/EditUserData";
import { TheMask } from "vue-the-mask";

const apiService = new APIService();

export default {
  components: {
    EditUserData: EditUserData,
    TheMask
  },
  data() {
    return {
      currentUser: null,
      currentUserId: null,
      friendRequestId: null,
      showEdit: false,
      name: null,
      submittedNames: [],
      token: null,
      //   apiEndPoint,
      image: "",
      file_profile: null,
      file_cover: null
    };
  },
  props: {
    msg: Object
  },

  methods: {
    ...mapActions([
      "friendRequest",
      "updateUser",
      "changeAvatar",
      "changeCavorPhoto"
    ]),

    showEditProfile() {
      this.showEdit = true;
    },
    onFileChange(e) {
      this.file_profile = e.target.files[0];
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    },

    onCoverChange(e) {
      this.file_cover = e.target.files[0];
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    },

    updateUserData() {
      console.log("dataaaaaa");
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
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch(err => {
          console.log(err);
        });
    },
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
      }
    },
    changePicture() {
      this.changeAvatar({
        id: this.users.user.user._id,
        file_profile: this.file_profile,
        token: apiService.getToken()
      })
        .then(res => {
          if (res.data.success) {
            this.image = null;
            console.log(res.data.posts.posts, "Profile");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeCavor() {
      this.changeCavorPhoto({
        id: this.users.user.user._id,
        file_cover: this.file_cover,
        token: apiService.getToken()
      })
        .then(res => {
          if (res.data.success) {
            this.image = null;
            console.log(res.data.posts.posts, "Cover");
          }
        })
        .catch(err => {
          console.log(err);
        });
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
  },
  created() {
    this.token = apiService.getToken();
  },
  computed: {
    ...mapState(["users"])
  }
};
</script>
<style  >
.profile-edit-modal-header {
  background-color: white;
}
.edit-modal-title {
  display: flex;
  justify-content: center;
}
.edit-modal-footer {
  background-color: white;
}
.centeredIcon {
  top: 50%;
  left: 50%;
  position: absolute;
  margin-left: -60px;
  margin-top: -30px;
  opacity: 0;
  cursor: pointer;
}

.profileUserBox {
  position: relative;
  width: 150px;
  height: 150px;
}
.profileUserBox:after {
  content: "";
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d4d4d496;
  border-radius: 50%;
}
button {
}
.profileImageWrapper:hover > .profileUserBox:after,
.profileImageWrapper:hover > .centeredIcon {
  opacity: 1;
}
</style>
