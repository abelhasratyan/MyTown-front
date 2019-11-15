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
    <div class="shadow mb-2 bg-white newsContent">
      <div class="searchBox p-3">
        <div class="userBox">
          <div class="imgBox">
            <img src="../../../assets/images/userImg.png" alt="user image" />
          </div>
          <div class="infoBox">Tomas Hobbing</div>
        </div>
        <div class="userBox">
          <div class="imgBox">
            <img src="../../../assets/images/userImg.png" alt="user image" />
          </div>
          <div class="infoBox">Tomas Hobbing</div>
        </div>
        <div class="userBox">
          <div class="imgBox">
            <img src="../../../assets/images/userImg.png" alt="user image" />
          </div>
          <div class="infoBox">Tomas Hobbing</div>
        </div>
        <div class="userBox">
          <div class="imgBox">
            <img src="../../../assets/images/userImg.png" alt="user image" />
          </div>
          <div class="infoBox">Tomas Hobbing</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    methods:{

    },
    mounted(){
        console.log(this.search,"SEARCH")
    },
    computed:{
        ...mapState(['search'])
    }
}
</script>