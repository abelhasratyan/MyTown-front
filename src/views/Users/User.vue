<template>
  <div>
    <main>
      <section>
        <div class="container" v-if="msg">
          <div class="row my-3">
            <LeftBar />
            <div class="centerContent col-lg-6 col-md-12">
              <AddNewsContent :msg="users.user.user" />
               <div ref="container">
                 <PostOnTimeline 
                  v-for="(postElement, postIndex) of postsList"
                  :key="postIndex"
                  :postParams="postElement"
                 ></PostOnTimeline>
                </div>
              
              <div class="shadow mb-2 bg-white newsContent">
                <div class="addNewsBox">
                  <div class="userBox">
                    <div class="imgBox pl-3 pr-3 pt-3">
                      <img
                        src="@/assets/images/userImgBoy.png"
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
                  <div class="photoLikeBox p-2">
                    <div class="col-md-6 p-0">
                      <a href="#" class="icon-group">
                        <img src="@/assets/images/icons/like-icon.png" alt="icon" />
                      </a>
                      <span class="like-count">23</span>
                      <a href="#" class="icon-group">
                        <img src="@/assets/images/icons/talk-icon.png" alt="icon" />
                      </a>
                      <span class="like-count">23</span>
                      <a href="#" class="icon-group">
                        <img src="@/assets/images/icons/share-option.png" alt="icon" />
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
                        src="@/assets/images/userImgBoy.png"
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
                      <video class="videoContent" poster="@/assets/images/videoPoster.png">
                        <source src="#" type="video/mp4" />
                        <source src="#" type="video/ogg" />
                      </video>
                      <img src="@/assets/images/icons/play-icon.png" alt="icon" class="playIcon" />
                    </div>
                  </div>
                  <div class="photoLikeBox p-2 underLine">
                    <div class="col-md-6 p-0">
                      <a href="#" class="icon-group">
                        <img src="@/assets/images/icons/like-icon.png" alt="icon" />
                      </a>
                      <span class="like-count">23</span>
                      <a href="#" class="icon-group">
                        <img src="@/assets/images/icons/talk-icon.png" alt="icon" />
                      </a>
                      <span class="like-count">23</span>
                      <a href="#" class="icon-group">
                        <img src="@/assets/images/icons/share-option.png" alt="icon" />
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
                            src="@/assets/images/userImgBoy.png"
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
                            <img src="@/assets/images/icons/cameraIcon.png" alt="Icon" />
                          </a>
                          <a class="iconBtn">
                            <img src="@/assets/images/icons/smileIcon.png" alt="Icon" />
                          </a>
                        </div>
                      </div>
                      <div class="comented-group input-group mb-3 comentedBox">
                        <span class="userImgCircle">
                          <img
                            src="@/assets/images/userImg.png"
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
                            src="@/assets/images/userImgBoy.png"
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
                            <div class="replayComment mt-1">
                              <div class="input-group input-group-sm mb-3">
                                <span class="userImgCircle">
                                  <img
                                    src="@/assets/images/userImgBoy.png"
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
                                    <img src="@/assets/images/icons/cameraIcon.png" alt="Icon" />
                                  </a>
                                  <a class="iconBtn">
                                    <img src="@/assets/images/icons/smileIcon.png" alt="Icon" />
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
                  <img src="@/assets/images/icons/more-lg-icon.png" alt="Icon" />
                </a>
              </div>
            </div>
            <div class="leftContent col-lg-4 col-md-4 d-none d-lg-block">
              <div class="shadow mb-2 p-2 bg-white">
                <p class="title-md mb-2">NEWSLETTER</p>
                <p
                  class="newsText"
                >Subscribe now for MyTownSquare Online newsletter to receive news, updates, photos of top rated members, feedback and tips to your e-mail.</p>
              </div>
              <div class="shadow mb-2 bg-white">
                <p class="title-md underLine p-2">Friends</p>
                <div class="friendBox">
                  <a href="profile.html" class="imgBox pl-3 pr-3 pt-3">
                    <img src="@/assets/images/userImg.png" alt="user img" class="rounded-circle" />
                    <span class="friend-name">Jeff Kilde</span>
                    <span class="last-visited">yesterday</span>
                    <span class="dott-active dott rounded-circle"></span>
                  </a>
                  <a href="profile.html" class="imgBox p-3">
                    <img src="@/assets/images/userImg.png" alt="user img" class="rounded-circle" />
                    <span class="friend-name">Jeff Kilde</span>
                    <span class="last-visited">yesterday</span>
                    <span class="dott-active dott rounded-circle"></span>
                  </a>
                  <a href="profile.html" class="imgBox pl-3 pr-3">
                    <img src="@/assets/images/userImg.png" alt="user img" class="rounded-circle" />
                    <span class="friend-name">Jeff Kilde</span>
                    <span class="last-visited">yesterday</span>
                    <span class="dott-offline dott rounded-circle"></span>
                  </a>
                  <a href="profile.html" class="imgBox p-3">
                    <img src="@/assets/images/userImg.png" alt="user img" class="rounded-circle" />
                    <span class="friend-name">Jeff Kilde</span>
                    <span class="last-visited">yesterday</span>
                    <span class="dott-away dott rounded-circle"></span>
                  </a>
                  <a href="friends.html" class="seeMore p-3">See More</a>
                </div>
              </div>

              <div class="shadow mb-2 bg-white">
                <p class="title-md underLine p-2">groups</p>
                <div class="addGroupBox p-3">
                  <div class="imgBox">
                    <img class="img-fluid w-100" src="@/assets/images/GroupImage.png" alt="img" />
                  </div>
                  <div class="textBox">
                    <h4 class="title py-2">Lorem ipsum dolor sit ametvoluptatem.</h4>
                    <div class="spaceBox">
                      <p class="subscribeCount">27,224 participants</p>
                      <a href="javascript:void(0);" class="btn_1">
                        <img src="@/assets/images/icons/pluseIcon.png" alt />Join the group
                      </a>
                    </div>
                  </div>
                </div>
                <div class="addGroupBox p-3">
                  <div class="imgBox">
                    <img class="img-fluid w-100" src="@/assets/images/GroupImage1.png" alt="img" />
                  </div>
                  <div class="textBox">
                    <h4 class="title py-2">Lorem ipsum dolor sit ametvoluptatem.</h4>
                    <div class="spaceBox">
                      <p class="subscribeCount">27,224 participants</p>
                      <a href="javascript:void(0);" class="btn_1">
                        <img src="@/assets/images/icons/pluseIcon.png" alt />Join the group
                      </a>
                    </div>
                  </div>
                </div>
                <div class="addGroupBox p-3">
                  <div class="imgBox">
                    <img class="img-fluid w-100" src="@/assets/images/GroupImage2.png" alt="img" />
                  </div>
                  <div class="textBox">
                    <h4 class="title py-2">Lorem ipsum dolor sit ametvoluptatem.</h4>
                    <div class="spaceBox">
                      <p class="subscribeCount">27,224 participants</p>
                      <a href="javascript:void(0);" class="btn_1">
                        <img src="@/assets/images/icons/pluseIcon.png" alt />Join the group
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="shadow mb-2 bg-white">
                <p class="title-md underLine p-2">ads</p>
                <div class="seeMore p-3">See More</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import LeftBar from "@/components/LeftBar";
import { mapState, mapActions } from "vuex";
import { APIService } from "@/APIService";
import AddNewsContent from "../Profile/ProfileComponents/AddNewsContent";
import PostOnTimeline from "../Profile/ProfileComponents/PostOnTimeline";
import Vue from "vue";

const apiService = new APIService();

export default {
  name: "Dashboard",
  props: {
    msg: Object
  },
  components: {
    LeftBar,
    AddNewsContent,
    PostOnTimeline
  },
  computed: {
    ...mapState(["users"])
  },

  data() {
    return {
      postsList: [],
    }
  },

  methods: {},
  mounted() {
    this.bus.$on("your-call", (res) => {
      const postItem = res.data.result;
      this.postsList.push(postItem);
      this.postsList.reverse();
      console.log('postsList: ====================', this.postsList);

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
  }
};
</script>