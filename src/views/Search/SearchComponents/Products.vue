<template>
  <div class="centerContent col-lg-12 col-md-12">
    <div class="shadow mb-2 bg-white newsContent">
      <h1 class="underLine p-2 title-md">Video</h1>
      <div class="searchBox p-3">
        <div class="btnBox">
          <a class="btn_2" href="javascript:void(0);">Profiles</a>
          <a class="btn_2" href="javascript:void(0);">Ads</a>
          <a class="btn_2" href="javascript:void(0);">Events</a>
          <a class="btn_2" href="javascript:void(0);">Files</a>
          <a class="btn_2" href="javascript:void(0);">Photos</a>
          <a class="btn_2" href="javascript:void(0);">Feedbaack</a>
          <a class="btn_2" href="javascript:void(0);">Blogs</a>
          <a class="btn_2" href="javascript:void(0);">Groups</a>
          <a class="btn_2" href="javascript:void(0);">Polls</a>
          <a class="btn_2" href="javascript:void(0);">Sounds</a>
          <a class="btn_2" href="javascript:void(0);">Videos</a>
          <a class="btn_2" href="javascript:void(0);">Yellow Pages 2.0</a>
          <a class="btn_2" href="javascript:void(0);">Classified</a>
          <a class="btn_2" href="javascript:void(0);">News</a>
          <a class="btn_2" href="javascript:void(0);">Coupons</a>
        </div>
        <form class="searchContent my-3">
          <input type="text" class="form-control" />
          <span class="searchIcon">
            <img src="../../../assets/images/icons/search.png" alt="search icon" />
          </span>
        </form>
      </div>
    </div>
    <template  v-for="(user,index) of search.data.result">
      <router-link :key="index" :to="`searcheduser/${user.id}`">
      <div class="shadow mb-2 bg-white newsContent">
        <div class="searchBox p-3" v-if="search.data.result">
          <div
            class="userBox"
            @click="finde(index)"
          >
            <div class="imgBox">
              <img :src="user.avatar" alt="user image" />
            </div>
            <div class="infoBox">{{user.name}} {{user.surname}}</div>
          </div>
        </div>
      </div>
    </router-link>
    </template>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { APIService } from "@/APIService";

const apiService = new APIService();

export default {
  mounted() {
    console.log(this.search, "SEARCH");
  },
  computed: {
    ...mapState(["search"])
  },
  data() {
    return {
      token: null,
      id: null
    };
  },
  methods: {
    ...mapActions(['searcheduser']),
      finde(index) {
      //console.log(this.search.data.result[index].id,"TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")
      this.searcheduser({
        id: this.search.data.result[index].id,
        token: this.token
      })
        .then(res => {
          if (res.data.success) {
            localStorage.setItem('searchedUser', JSON.stringify(res.data))
             console.log(res, "RESPONSE");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  created() {
    this.token = apiService.getToken();
  }
};
</script>