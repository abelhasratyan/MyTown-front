<template>
  <div class="centerContent col-lg-8 col-md-12">
    <div class="shadow mb-2 bg-white">
      <div class="underLine p-2 spaceBox">
        <h1 class="title-md">friend</h1>
        <select class="styled">
          <option>Simple</option>
          <option>Simple</option>
          <option>Simple</option>
          <option>Simple</option>
        </select>
      </div>
      <div class="friendListBox p-3">
        <div class="spaceBox align-items-start">
          <div class="infoBox">
            <p class="description">Order by:</p>
            <select class="styled1">
              <option>Latest activity</option>
              <option>Latest activity</option>
              <option>Latest activity</option>
              <option>Latest activity</option>
            </select>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Online only</label>
            </div>
          </div>
          <div>
            <select class="styled1">
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <ul class="friendList py-3" v-if="friends.length != 0">
          <li class="userBox" v-for="(friend, friend_index) of friends.friends" :key="friend_index">
            <div class="imgBox">
              <img src="@/assets/images/friends.png" alt="user" />
            </div>
            <div class="friendName">
              <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                <template v-slot:button-content>
                  {{friend.name}}
                  <span>
                    <i class="far fa-chevron-down"></i>
                  </span>
                </template>
                <b-dropdown-item href="#" @click="deleteFriend_req(friend)">Delete Friend</b-dropdown-item>
              </b-dropdown>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { APIService } from "@/APIService";

const apiService = new APIService();

export default {
  name: "FriendsList",
  data() {
    return {
      currentUserId: "",
      friendId: ""
    };
  },
  props: {
    msg: Object
  },
  methods: {
    ...mapActions(["getFriends", "deleteFriend"]),

    deleteFriend_req(friend) {
      const { token } = JSON.parse(localStorage.getItem("user"));
      this.deleteFriend({
        deleteFriendId: friend._id,
        currentUserId: this.users.user.user._id,
        token: `Bearer ${token}`
      })
        .then(res => {
          if (res.data.status) {
            // this.$router.push("/");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getFriends({
      token: apiService.getToken()
    }).then(friends => {
      console.log(friends);
    });
  },
  computed: {
    ...mapState(["users", "friends"])
  }
};
</script>
<style  scoped>
.friendName/deep/.btn-link {
  color: black !important;
}
</style>