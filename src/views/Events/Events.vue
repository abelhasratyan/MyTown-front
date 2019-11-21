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
                  <img src="@/assets/images/empty.png" alt />
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
              <div class="fundreiserslist p-3" v-for="(event,index) of events" :key="index">
                <div class="fundreisersBox py-2">
                  <div class="imgBox">
                    <img class="img-fluid" src="@/assets/images/fundreisers1.png" alt />
                  </div>
                  <div class="infoBox">
                    <h4 class="title spaceBox">
                      <span>{{event.title}}</span>
                      <div class="dropdown dropleft show">
                        <b-dropdown
                          size="lg"
                          variant="link"
                          toggle-class="text-decoration-none"
                          no-caret
                        >
                          <template v-slot:button-content>
                            <img src="@/assets/images/icons/moreIconPost.png" alt />
                            <span class="sr-only">Search</span>
                          </template>
                          <b-dropdown-item href="#" @click="Delete(index)">Delete Event</b-dropdown-item>
                          <b-dropdown-item href="#">Edit Event</b-dropdown-item>
                          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                        </b-dropdown>
                      </div>
                    </h4>
                    <span class="activityTime">{{event.data_start}} - {{event.data_end}}</span>
                    <div class="description">{{event.description}}</div>
                    <p class="catName">
                      <span class="category">Categories:</span>
                      {{event.categories}}
                    </p>
                    <p class="catName">
                      <span class="category">Country:</span>
                      {{event.country}}
                      <span class="category">City:</span>
                      {{event.city}}
                    </p>
                    <p class="catName">
                      <span class="category">Place name:</span>
                      {{event.place_name}}
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
  data() {
    return {
      events: []
    };
  },
  mounted() {},
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
    ...mapActions(["getEvents", "DeleteEvent"]),

    Delete(event_index) {
      this.events.shift(event_index);
      this.DeleteEvent({
        index: event_index,
        token: apiService.getToken()
      });
      console.log(this.events, "EVENT_INDEX");
    }
  }
};
</script>