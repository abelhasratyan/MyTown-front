<template>
  <div>
    <ProfileHeader :msg="users.user.user" />
    <div class="container">
      <div class="row my-3">
        <LeftContent :msg="users.user.user" />
        <div class="centerContent col-lg-8 col-md-12">
          <AddNewsContent :msg="users.user.user" />
               <div ref="container">
                 <PostOnTimeline 
                  v-for="(postElement, postIndex) of postsList"
                  :key="postIndex"
                  :postParams="postElement"
                 ></PostOnTimeline>
                </div>          <div class="shadow mb-2 bg-white newsContent">
            <div class="addNewsBox">
              <div class="userBox">
                <div class="imgBox pl-3 pr-3 pt-3">
                  <img
                    src="../../assets/images/userImgBoy.png"
                    alt="user img"
                    class="rounded-circle"
                  />
                  <span class="user-name">Tomas Hobbing</span>
                  <span class="add-photo">added a new poll &#45;</span>
                  <span class="albom-name">What do you like to eat?</span>
                  <span class="about-hours">about 18 hours ago</span>
                </div>
              </div>
              <div class="aboutPhotoBox underLine">
                <p class="aboutPhoto-txt text-left p-3">
                  Lorem ipsum dolor sit ametvoluptatem.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do et dolore magna aliqua.
                </p>
                <div class="chooseEatBtn overLine p-3">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadioInline1"
                      name="customRadioInline1"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadioInline1"
                    >Lorem ipsum dolor sit ametvoluptatem.</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadioInline2"
                      name="customRadioInline1"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadioInline2"
                    >Lorem ipsum dolor sit ametvoluptatem.</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadioInline3"
                      name="customRadioInline1"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadioInline3"
                    >Lorem ipsum dolor sit ametvoluptatem.</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadioInline4"
                      name="customRadioInline1"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadioInline4"
                    >Lorem ipsum dolor sit ametvoluptatem.</label>
                  </div>
                </div>
              </div>
              <div class="photoLikeBox p-3">
                <div class="col-md-6 p-0">
                  <a href="#" class="icon-group">
                    <img src="../../assets/images/icons/like-icon.png" alt="icon" />
                  </a>
                  <span class="like-count">23</span>
                  <a href="#" class="icon-group">
                    <img src="../../assets/images/icons/talk-icon.png" alt="icon" />
                  </a>
                  <span class="like-count">23</span>
                  <a href="#" class="icon-group">
                    <img src="../../assets/images/icons/share-option.png" alt="icon" />
                  </a>
                  <span class="like-count">2</span>
                </div>
                <div class="col-md-6 text-right p-0">
                  <a href="#" class="icon-txt-group text-uppercase mr-4">Like</a>
                  <a href="#" class="icon-txt-group text-uppercase mr-4">Comment</a>
                  <a href="#" class="icon-txt-group text-uppercase">Share</a>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow mb-2 bg-white newsContent">
            <div class="addNewsBox">
              <div class="userBox">
                <div class="imgBox pl-3 pr-3 pt-3">
                  <img
                    src="../../assets/images/userImgBoy.png"
                    alt="user img"
                    class="rounded-circle"
                  />
                  <span class="user-name">Tomas Hobbing</span>
                  <span class="add-photo">added a new video &#45;</span>
                  <span class="albom-name">Adel -hllo</span>
                  <span class="about-hours">about 18 hours ago</span>
                </div>
              </div>
              <div class="aboutPhotoBox pb-3 underLine">
                <p class="aboutPhoto-txt text-left pl-3 pr-3 mb-3">
                  Lorem ipsum dolor sit ametvoluptatem.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do et dolore magna aliqua.
                </p>
                <div class="videoBox">
                  <video class="videoContent" poster="../../assets/images/videoPoster.png">
                    <source src="#" type="video/mp4" />
                    <source src="#" type="video/ogg" />
                  </video>
                  <img src="../../assets/images/icons/play-icon.png" alt="icon" class="playIcon" />
                </div>
              </div>
              <div class="photoLikeBox p-3 underLine">
                <div class="col-md-6 p-0">
                  <a href="#" class="icon-group">
                    <img src="../../assets/images/icons/like-icon.png" alt="icon" />
                  </a>
                  <span class="like-count">23</span>
                  <a href="#" class="icon-group">
                    <img src="../../assets/images/icons/talk-icon.png" alt="icon" />
                  </a>
                  <span class="like-count">23</span>
                  <a href="#" class="icon-group">
                    <img src="../../assets/images/icons/share-option.png" alt="icon" />
                  </a>
                  <span class="like-count">2</span>
                </div>
                <div class="col-md-6 text-right p-0">
                  <a href="#" class="icon-txt-group text-uppercase mr-4">Like</a>
                  <a href="#" class="icon-txt-group text-uppercase mr-4">Comment</a>
                  <a href="#" class="icon-txt-group text-uppercase">Share</a>
                </div>
              </div>
              <div class="commentBox p-3">
                <form class="commentForm">
                  <div class="input-group input-group-sm mb-3">
                    <span class="userImgCircle">
                      <img
                        src="../../assets/images/userImgBoy.png"
                        alt="User Img"
                        class="rounded-circle"
                      />
                    </span>
                    <input
                      type="text"
                      class="form-control rounded writeComment"
                      placeholder="Write a reply..."
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    <div class="choozBtnGroup">
                      <a class="iconBtn">
                        <img src="../../assets/images/icons/cameraIcon.png" alt="Icon" />
                      </a>
                      <a class="iconBtn">
                        <img src="../../assets/images/icons/smileIcon.png" alt="Icon" />
                      </a>
                    </div>
                  </div>
                  <div class="comented-group input-group mb-3 comentedBox">
                    <span class="userImgCircle">
                      <img
                        src="../../assets/images/userImg.png"
                        alt="User Img"
                        class="rounded-circle"
                      />
                    </span>
                    <div class="commentTxtBox p-0">
                      <span class="user-name">Tomas Hobbing</span>
                      <p
                        class="form-control rounded commentTxt"
                      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                      <div class="commentBtnGroup">
                        <span>18hr</span>
                        <a href="#">Like</a>
                        <a href="#">Reply</a>
                      </div>
                    </div>
                  </div>
                  <div class="comented-group input-group mb-3 comentedBox">
                    <span class="userImgCircle">
                      <img
                        src="../../assets/images/userImgBoy.png"
                        alt="User Img"
                        class="rounded-circle"
                      />
                    </span>
                    <div class="commentTxtBox p-0">
                      <span class="user-name">Anna Hobbing</span>
                      <p
                        class="form-control rounded commentTxt"
                      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedLorem ipsum dolor sit amet, consectetur adipisicing</p>
                      <div class="commentBtnGroup">
                        <span>18hr</span>
                        <a href="#">Like</a>
                        <a href="#">Reply</a>
                        <div class="replayComment mt-3">
                          <div class="input-group input-group-sm mb-3">
                            <span class="userImgCircle">
                              <img
                                src="../../assets/images/userImgBoy.png"
                                alt="User Img"
                                class="rounded-circle"
                              />
                            </span>
                            <input
                              type="text"
                              class="form-control rounded writeComment"
                              placeholder="Write a reply..."
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                            />
                            <div class="choozBtnGroup">
                              <a class="iconBtn">
                                <img src="../../assets/images/icons/cameraIcon.png" alt="Icon" />
                              </a>
                              <a class="iconBtn">
                                <img src="../../assets/images/icons/smileIcon.png" alt="Icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="moreIcon text-center mt-3">
            <a href="#">
              <img src="../../assets/images/icons/more-lg-icon.png" alt="Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '@/components/ProfileHeader.vue'
import { APIService } from "@/APIService";
import LeftContent from '../Profile/ProfileComponents/LeftContent'
import AddNewsContent from '../Profile/ProfileComponents/AddNewsContent'
import PostOnTimeline from '../Profile/ProfileComponents/PostOnTimeline'
import { mapState, mapActions } from 'vuex'
import { Token } from "../../router/Auth";
import Vue from "vue";

const apiService = new APIService();
export default {
    name: 'SearchedUser',
    components: {
        ProfileHeader,
        LeftContent,
        AddNewsContent,
        PostOnTimeline
    },
    computed: {
        ...mapState(['users'])
    },
      data() {
    return {
      postsList: [],
    }
  },
  

  methods: {
    ...mapActions(["getPosts",]),
  },
  mounted() {
    this.bus.$on("your-call", (res) => {
      if(res){
        if(res.data) {
          const postItem = res.data.result;
          this.postsList.unshift(postItem);
        }
      }
      /*var ComponentClass = Vue.extend(PostOnTimeline);
      var instance = new ComponentClass({
        propsData: { type: "primary",
                      value: "tesxt" }
      });
      //instance.$slots.default = ['Click me!']
      instance.$mount(); // pass nothing
      // console.log(this.$refs)
      this.$refs.container.appendChild(instance.$el);*/
    });
    if(Token.get.user()) {
        let currentUser = JSON.parse(Token.get.user());
        this.getPosts({
          token: apiService.getToken(),
          userId: currentUser.user._id
        })
        .then(res => {
            this.postsList = res.data.postsList
            console.log(res);
          })
        .catch(err => {
            console.log(err);
      });
    }
    
  }
}
</script>
