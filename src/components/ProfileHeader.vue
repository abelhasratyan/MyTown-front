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
                <div class="col-md-12 ">
                    <div class="userBox  row m-0">
                        <div class="col-lg-3 col-md-2 col-sm-12">
                            <div class="profileUserBox">
                                <img :src="msg.avatar" alt="img">
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-10 d-none d-md-block">
                            <ul class="userList">
                                <li class="hasChild">
                                    <a>
                                        <span class="textBox">Profile</span>
                                    </a>
                                    <ul class="subMenu shadow pt-3 pb-3  rounded">
                                        <li>
                                            <router-link to="">Edit</router-link>
                                        </li>
                                        <li>
                                            <router-link to="">Subscribe</router-link>
                                        </li>
                                        <li>
                                            <router-link to="">Customize</router-link>
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
                                    <a><span class="textBox">Still</span></a>
                                    <ul class="subMenu shadow pt-3 pb-3  rounded">
                                        <li><router-link to="">Ads</router-link></li>
                                        <li><router-link :to="{name: 'events'}">Events</router-link></li>
                                        <li><router-link :to="{name: 'Photos'}">Photos</router-link></li>
                                        <li><router-link :to="{name: ''}">Timeline</router-link></li>
                                        <li><router-link :to="{name: 'videos'}">Videos</router-link></li>
                                        <li><router-link :to="{name: ''}">Classifieds</router-link></li>
                                        <li><router-link :to="{name: 'fundraisers'}">Fund Raisers</router-link></li>
                                        <li><router-link :to="{name: ''}">Sites</router-link></li>
                                        <li><router-link :to="{name: ''}">Store</router-link></li>
                                        <li><router-link :to="{name: 'groups'}">Groups</router-link></li>
                                    </ul>
                                </li>
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
  import { mapState, mapActions } from 'vuex'

    export default {

      data() {
        return {
          currentUser: null,
        //   apiEndPoint,
        }
      },
      props: {
          msg: Object
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
    }

</script>
