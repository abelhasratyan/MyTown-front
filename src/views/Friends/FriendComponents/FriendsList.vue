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
          <li class="userBox" v-for="friend in friends.friends" :key="friend._id">
            <div class="imgBox">
              <img src="@/assets/images/friends.png" alt="user" />
            </div>
            <div class="infoBox">{{friend.name}}</div>
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
  props: {
    msg: Object
  },
  methods: {
    ...mapActions(["getFriends"])
  },
  created() {
    this.getFriends({
      token: apiService.getToken()
    }).then(friends => {
      console.log(friends);
    });
    console.log(this.friends, "friends1111111111");
  },
  computed: {
    ...mapState(["users", "friends"])
  }
};
</script>