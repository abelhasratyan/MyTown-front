<template>
  <header>
    <div class="container" v-if="msg">
      <div class="row headerContent">
        <div class="col-lg-2 col-3 pr-0 pr-md-auto order-0">
          <router-link :to="{name: 'User'}">
            <img src="../assets/images/logo.png" alt />
          </router-link>
        </div>
        <div class="col-lg-4 col-12 order-lg-1 order-2">
          <div class="searchBox">
            <input type="text" class="form-control"  v-model="searchUser"  v-on:keyup.enter="Search"/>
            <span class="searchIcon"  >
              <img src="../assets/images/icons/search.png" alt="search icon" style="cursor:pointer" @click="Search"/>
            </span>

            <ul v-if="isActive"  class="search-result">
              <div v-if="result.length > 0">
                <li v-for="(selectUser, selectedId) of result" :key="selectedId" @click="goSearchPage">
                  <img :src="selectUser.avatar" width="15%"  style="padding: 5px;" > 
                  <span>{{selectUser.name}}</span><span>{{selectUser.surname}}</span>
                </li>
              </div>
              <div v-else>
                <li>No result</li>
              </div>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-9 order-lg-2 order-1">
          <nav>
            <ul class="headerList">
              <li class="hasChild">
                <a>
                  <span class="iconBox Friends">
                    <img src="@/assets/images/icons/navIcon1.png" alt="icon" />
                    <span class="notiCount">4</span>
                  </span>
                  <span class="textBox">Friends</span>
                </a>
                <ul class="subMenu shadow rounded">
                  <li>
                    <router-link :to="{name: 'messages', params: { type: 'inbox'}}">Friend request1</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'messages', params: { type: 'outbox'}}">Friend request2</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'messages', params: { type: 'trash'}}">Friend request3</router-link>
                  </li>
                </ul>
              </li>
              <li class="hasChild">
                <a>
                  <span class="iconBox Messages">
                    <img src="@/assets/images/icons/navIcon2.png" alt="icon" />
                    <span class="notiCount">4</span>
                  </span>
                  <span class="textBox">Messages</span>
                </a>
                <ul class="subMenu shadow  rounded">
                  <li>
                    <router-link :to="{name: 'messages', params: { type: 'inbox'}}">Inbox(0)</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'messages', params: { type: 'outbox'}}">Outbox(0)</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'messages', params: { type: 'trash'}}">Trash(0)</router-link>
                  </li>
                </ul>
              </li>
              <li class="hasChild">
                <router-link to>
                  <a>
                    <span class="iconBox Notification">
                      <img src="@/assets/images/icons/navIcon3.png" alt="icon" />
                      <span class="notiCount">4</span>
                    </span>
                    <span class="textBox">Notification</span>
                  </a>
                  <ul class="subMenu shadow  rounded">
                    <li>
                      <router-link :to="{name: 'messages', params: { type: 'inbox'}}">Notification 1</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: 'messages', params: { type: 'outbox'}}">Notification 2</router-link>
                    </li>
                    <li>
                      <router-link :to="{name: 'messages', params: { type: 'trash'}}">Notification 3</router-link>
                    </li>
                  </ul>
                </router-link>
              </li>
              <li class="hasChild">
                <a>
                  <span class="iconBox">
                    <img src="../assets/images/icons/navIcon.png" alt="icon" />
                  </span>
                  <span class="textBox">Location</span>
                </a>
                <ul class="subMenu shadow  rounded">
                  <li class="p-2">
                    <select class="form-control">
                      <option>Canada</option>
                      <option>Canada</option>
                      <option>Canada</option>
                      <option>Canada</option>
                    </select>
                  </li>
                  <li class="p-2">
                    <select class="form-control">
                      <option>Canada</option>
                      <option>Canada</option>
                      <option>Canada</option>
                      <option>Canada</option>
                    </select>
                  </li>
                  <li class="p-2">
                    <select class="form-control">
                      <option>Canada</option>
                      <option>Canada</option>
                      <option>Canada</option>
                      <option>Canada</option>
                    </select>
                  </li>
                </ul>
              </li>
              <li class="hasChild user">
                <div class="userBox">
                  <!-- {{users.user}} -->
                  <div class="imgBox">
                    <img :src="msg.avatar" class="img-fluid" alt="user avatar" />
                  </div>
                  <!-- <div class="infoBox textBox">{{user && user.name}}</div> -->
                </div>
                <ul class="subMenu shadow rounded">
                  <router-link tag="li" :to="{ name: 'Profile'}">
                    <a class="pointer">Profile</a>
                  </router-link>
                  <li style="cursor:pointer" @click="logOut">
                    <a class="pointer">Log Out</a>
                  </li>
                </ul>
              </li>
              <li class="burgerMenu">
                <router-link to>
                  <span class="iconBox Friends">
                    <img src="../assets/images/icons/menu.png" alt="icon" />
                  </span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
//   import { apiEndPoint } from '@/links';
import { mapState, mapActions } from "vuex";
import { Token } from "../router/Auth";
import { APIService } from '@/APIService'

const apiService = new APIService()
export default {
  name: "Header",

  data() {
    return {
      //   apiEndPoint,
      currentUserId: null,
      searchUser: null,
        token: null,
        result: [],
        isActive: false
    };
  },
  props: {
    msg: Object
  },

  methods: {
    ...mapActions(["logout", "getSelectedUser", "findeUser"]),

    logOut() {
      if (Token.get.user()) {
        let currentUser = JSON.parse(Token.get.user());
        this.currentUserId = currentUser.user._id;

        localStorage.removeItem("user");
      }
      this.$router.push("/login");
      //this.logout();
    },
    Search(){ 
       this.isActive = true; 
       console.log( this.isActive,"ACTIVE")
      this.findeUser({
        searchUser : this.searchUser,
          token:  apiService.getToken()
      })
        .then(res => {
          console.log(res.data.result.length,"USEEEEERRRRRRR")
          if(res.data.result.length > 0){
            this.result = res.data.result
            console.log(this.result,"RESULT")
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    goSearchPage(){
      this.$router.push("/search");
      this.isActive = false
    }
  },
  computed: {
    ...mapState([])
  }
};
</script>

