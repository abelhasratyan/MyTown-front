<template>
  <div class="shadow pt-3 px-3 mb-2 bg-white addNewsContent" v-if="msg">
    <div class="headingBox">
      <h1 class="title">News Feed</h1>
    </div>
    <form class="addNewsBox underLine">
      <div class="userBox">
        <div class="imgBox">
          <img :src="msg.avatar" alt="user img" />
        </div>
        <div class="infoBox">
     
          <textarea v-on:keyup.enter="addNews"
            class="addNews"
            v-model="newsValue"
            :placeholder="'What is on your mind, ' + [[ msg.name ]]" rows="2"></textarea>
            <button type="btn success" class="post">Add</button>
        </div>
      </div>
    </form>
    <div class="emojiBox">
      <div class="smileBox">
        <img src="@/assets/images/icons/smileIcon.png" alt="icon" />
      </div>
      <div class="moreDetalsBox">
        <ul class="detalsList">
          <li>
            <div class="iconBox">
              <img src="@/assets/images/icons/cameraIcon.png" alt="icon" />
            </div>
            <div class="textBox">Photo/Video</div>
          </li>
          <li>
            <div class="iconBox">
              <img src="@/assets/images/icons/grupIcon.png" alt="icon" />
            </div>
            <div class="textBox">Grup</div>
          </li>
          <li>
            <div class="iconBox">
              <img src="@/assets/images/icons/moreIcon.png" alt="icon" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewsContent",
  data() {
    return {
        newsValue:''
    };
  },
  props: {
    msg: Object
  },
  methods:{
      addNews(){
          console.log(this.newsValue,'test Add news');
      }
  }
};
</script>
<style scoped>
    .addNews{
        border-color:transparent;
        outline: none;
        border-bottom: 1px solid transparent;
        width: 87%;
        font-size: 14px;
        resize: none;
    }
    .addNews:focus{
        border:none
    }
    .post{
        display: none;
        position: absolute;
        top: 15px;
        right: 0;
        border: none;
        background: #514c76;
        color: #fff;
        font-size: 14px;
        padding: 2px 15px;
        border-radius: 3px;
    }
    .addNews:focus + .post{
        display: block
    }
</style>