<template>
  <div class="shadow mb-2 bg-white addNewsContent" v-if="msg">
    <div class="headingBox">
      <h2 class="title">News Feed</h2>
    </div>
    <form class="addNewsBox underLine" onsubmit="return false">
      <div class="userBox">
        <div class="imgBox">
          <img :src="msg.avatar" alt="user img" />
        </div>
        <div class="infoBox">
          <div class="wrapper">
            <textarea class="regular-input" v-model="value"></textarea>
            
          </div>
        </div>
      </div>
    </form>
    <div class="emojiBox">
      <div class="smileBox">
        <emoji-picker @emoji="append" :search="search">
              <div
                class="emoji-invoker"
                slot="emoji-invoker"
                slot-scope="{ events: { click: clickEvent } }"
                @click.stop="clickEvent"
              >
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                  />
                </svg>
              </div>
              <div slot="emoji-picker" slot-scope="{ emojis, insert }">
                <div class="emoji-picker">
                  <div class="emoji-picker__search">
                    <input type="text" v-model="search" v-focus />
                  </div>
                  <div>
                    <div v-for="(emojiGroup, category) in emojis" :key="category">
                      <h5>{{ category }}</h5>
                      <div class="emojis">
                        <span
                          v-for="(emoji, emojiName) in emojiGroup"
                          :key="emojiName"
                          @click="insert(emoji)"
                          :title="emojiName"
                        >{{ emoji }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </emoji-picker>
      </div>
      <div class="moreDetalsBox">
        <ul class="detalsList">
          <li>
            <div class="iconBox" @click="addImage" style="cursor:pointer">
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
          <li>
            <button class="addNews_post" @click="addNews">Add</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/*    <div id="app">
      <h2>Dynamically inserted:</h2>
      <div ref="container">
        <button @click="onClick">Click to insert</button>
      </div>
    </div> 
    <button class="addNews_post" @click="addNews">Add</button>*/
import { mapState, mapActions, mapMutations } from "vuex";
import { APIService } from '@/APIService'

const apiService = new APIService()

export default {
  name: "AddNewsContent",
  data() {
    return {
      // postText: "",
      news: null,
      value: "",
      search: "",
      album: "",
      title: "",
      user_id: "",
      image: {}
    };
  },
  props: {
    msg: Object
  },
  components: {},
  methods: {
    ...mapActions(["AddNewPost", "createImage"]),

    append(emoji) {
      this.value += emoji;
    },

    addImage() {
      this.$swal({
        title: `<span style="color: #64636b;font-weight: 500;" class="test">Add Image</span>`,
        html: `<input type="file" id="swal-input1">`,
        showCancelButton: true,
        confirmButtonClass: "btn btn-success btn-fill",
        cancelButtonClass: "btn btn-danger btn-fill",
        buttonsStyling: false,
        preConfirm: () => {
          return new Promise(resolve => {
            resolve([
              document.getElementById("swal-input1").files[0]
              //document.getElementById("swal-input2").value
            ]);
          });
        }
      })
        .then(result => {
          if (result.value) {
            console.log(result.value,'RESULTMEEE')
            this.image = result.value
          /*  this.createImage({
              data: result.value,
              token: apiService.getToken()
            }).then(res => {
              if (!res.success) {
                this.$swal({
                  type: "warning",
                  html: res.message,
                  confirmButtonClass: "btn btn-success btn-fill",
                  buttonsStyling: false
                });
              } else {
                this.getMyAlbums({
                  token: apiService.getToken()
                });
                this.$swal({
                  type: "success",
                  html: "Image successfully created",
                  confirmButtonClass: "btn btn-success btn-fill",
                  buttonsStyling: false
                });
                this.$router.push("/photos");
              }
            });
          */} else {
           // this.$swal.noop;
          }
        })
        //.catch(this.$swal.noop);
    },

    addNews() {
        this.AddNewPost({
        //postText: this.postText,
        postValue: this.value,
        postImg: this.image,
        userId: this.users.user.user._id,
        token: apiService.getToken()
      })
        .then(res => {
        this.bus.$emit('your-call', {test:'test'}) 
          console.log("----------------", res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  mounted(){
    console.log(this.users.user.user._id,'USER');
   
  },
  computed: {
    ...mapState(["photo","users"])
  }
};
</script>
<style scoped>
.addNews {
  border-color: transparent;
  outline: none;
  border-bottom: 1px solid transparent;
  width: 87%;
  font-size: 14px;
  resize: none;
}
.addNews:focus {
  border: none;
}
.addNews_post {
  top: 45px;
  right: 0;
  border: none;
  background: #514c76;
  color: #fff;
  font-size: 14px;
  padding: 2px 15px;
  border-radius: 3px;
}
/*.addNews:focus + .addNews_post{
        display: block
    }*/
.addNews :focus {
  display: block;
}
/* Tailwind CSS-styled demo is available here: https://codepen.io/DCzajkowski/pen/Brxvzj */

.wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.regular-input {
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: none;
  max-width: 450px;
  width: 100%;
  height: 65px;
  outline: none;
}

.regular-input:focus {
  /* box-shadow: 0 0 0 3px rgba(55, 3, 139, 0.5); */
  border-bottom: 1px solid rebeccapurple
  
}

.emoji-invoker {
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}
.emoji-invoker > svg {
  fill: #b1c6d0;
}

.emoji-picker {
  position: absolute;
  z-index: 1;
  font-family: Montserrat;
  border: 1px solid #ccc;
  width: 20rem;
  height: 20rem;
  overflow: scroll;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 1px 1px 8px #c7dbe6;
}
.emoji-picker__search {
  display: flex;
}
.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
}
.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}
.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}
.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}
textarea {
  resize: none;
}
textarea:focus {
}
./deep/.test {
  color: red;
}
</style>
