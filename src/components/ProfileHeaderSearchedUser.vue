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
            <div class="col-lg-3 col-md-2 col-sm-12 userAvatar">
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
  </section>
</template>

<script>
//   import { apiEndPoint } from '@/links';
import { mapState, mapActions, mapGetters } from "vuex";
import { Token } from "../router/Auth";
import { APIService } from "@/APIService";
import { TheMask } from "vue-the-mask";

const apiService = new APIService();

export default {
  components: {
    TheMask
  },
  data() {
    return {
      currentUser: null,
      currentUserId: "",
      friendRequestId: "",
      name: "",
      submittedNames: [],
      token: null
      //   apiEndPoint,
    };
  },
  props: {
    msg: Object
  },

  methods: {
    ...mapActions(["friendRequest", "updateUser"]),

    updateUserData() {
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
    ...mapState(["users", "search"])
  }
};
</script>


