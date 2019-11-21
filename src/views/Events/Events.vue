<template>
  <div>
    <profileHeader :msg="users.user.user"></profileHeader>
    <section>
      <div class="container">
        <div class="row my-3">
          <div class="leftContent col-lg-4 col-md-12">
            <div class="shadow mb-2 bg-white">
              <p class="title-md underLine p-2">my events</p>
              <div class="funderesiserBox p-3">
                <h4 class="title">No posts yet</h4>
                <div
                  class="description"
                >Create questions that your friends and other users can answer.</div>
                <div class="imgBox my-2">
                  <img src="assets/images/empty.png" alt />
                </div>
                <div class="text-center my-2">
                  <a class="btn_3" href="javascript:void(0);">Add Post</a>
                </div>
              </div>
            </div>
          </div>
          <div class="centerContent col-lg-8 col-md-12">
            <div class="shadow mb-2 bg-white">
              <div class="underLine p-2 title-md">Events</div>
              <div class="fundreiserslist p-3" v-for="(event,index) of events" :key="index" >
                <div class="fundreisersBox py-2">
                  <div class="imgBox">
                    <img class="img-fluid" src="../../assets/images/fundreisers1.png" alt />
                  </div>
                  <div class="infoBox">
                    <h4 class="title spaceBox">
                      <span>{{event.title}}</span>
                      <div class="dropdown dropleft show">
                        <a
                          class
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img src="../../assets/images/icons/moreIconPost.png" alt />
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </h4>
                    <span class="activityTime">{{event.dataStart}} - {{event.dataEnd}}</span>
                    <div
                      class="description">{{event.description}}</div>
                    <p class="catName">
                      <span class="category">Categories:</span> {{event.categories}}
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import profileHeader from "../../components/ProfileHeader";
import { APIService } from "@/APIService";

const apiService = new APIService();
export default {
  name: "Event",
  components: {
    profileHeader
  },
    data(){
        return{
            events: [],
        }
    },
  mounted() {
    console.log(this.events, "EVENTS");
  },
  computed: {
    ...mapState(["users"])
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.getEvents({
      token: apiService.getToken(),
      id: user.user._id
    })
      .then(res => {
          this.events = res.result;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    ...mapActions(["getEvents"])
  }
};
</script>