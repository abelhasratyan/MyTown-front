<template>
  <div>
    <ProfileHeader :msg="users.user.user"></ProfileHeader>
    <section>
      <div class="container">
        <div class="row my-3">
          <div class="centerContent col-lg-12 col-md-12">
            <div class="shadow mb-2 bg-white">
              <div class="underLine p-2 title-md">Create an event</div>
              <div class="eventBox p-3">
                  <div class="form-group">
                    <label class="w-100">
                      Title
                      <span class="importantFild">*</span>
                      <input type="text" class="form-control" v-model="title" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Tags
                      <input type="text" class="form-control" v-model="tag" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Description
                      <span class="importantFild">*</span>
                      <textarea class="form-control" rows="5" v-model="description"></textarea>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Categories
                      <span class="importantFild">*</span>
                      <input type="text" class="form-control" v-model="categories" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Country
                      <span class="importantFild">*</span>
                      <input type="text" class="form-control" v-model="counntry" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      City
                      <span class="importantFild">*</span>
                      <input type="text" class="form-control" v-model="city" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Place Name
                      <span class="importantFild">*</span>
                      <input type="text" class="form-control" v-model="placeName" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Data Start
                      <span class="importantFild">*</span>
                      <input type="text" class="form-control" v-model="dataStart" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Data End
                      <span class="importantFild">*</span>
                      <input type="text" class="form-control" v-model="dataEnd" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Events
                      <span class="importantFild">*</span>
                        <input type="text" class="form-control" v-model="events" />
                    </label>
                  </div>
                  <!-- <div class="form-group">
                    <div class="custom-file uploadFile">
                      <input type="file" class="custom-file-input" id="customFile" />
                      <label class="custom-file-label" for="customFile">
                        <img src="images/icons/upload.png" alt /> Select file
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      View Event
                      <span class="importantFild">*</span>
                      <select class="form-control" v-model="view_event">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Allow Viewing Participants
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Allow To View And Post Comments
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Allow Rating
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Allow Posting In Forum
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Allow View Forum
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Allow Joining
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Join Confirmation
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Upload Photos
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Upload Videos
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Upload Sounds
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="w-100">
                      Upload Files
                      <span class="importantFild">*</span>
                      <select class="form-control">
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                        <option>Public</option>
                      </select>
                    </label>
                  </div>-->
                  <div class="rightBtnBox">
                    <button class="btn_2" type="button" @click="addEvent">Submit</button>
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
import ProfileHeader from "../../components/ProfileHeader";
import { mapState, mapActions } from "vuex";
import { APIService } from "@/APIService";

const apiService = new APIService();

export default {
  name: "AddEvents",
  components: {
    ProfileHeader
  },
  data() {
    return {
      title: null,
      tag: null,
      description: null,
      categories: null,
      counntry: null,
      city: null,
      placeName: null,
      dataStart: null,
      dataEnd: null,
      events: null,
      token: null
    };
  },

  methods: {
    ...mapActions(["createEvent"]),

    addEvent() {
      this.createEvent({
        id: this.users.user.user._id,
        title: this.title,
        tag: this.tag,
        description: this.description,
        categories: this.categories,
        counntry: this.counntry,
        city: this.city,
        place_name: this.placeName,
        data_start: this.dataStart,
        data_end: this.dataEnd,
        events: this.events,
        token: this.token
      })
        .then(res => {
          if (res.data.success) {
              this.$router.push('/events')
            this.title = null,
              this.tag = null,
              this.description = null,
              this.categories = null,
              this.counntry = null,
              this.city = null,
              this.placeName = null,
              this.dataNtart = null,
              this.dataEnd = null,
              this.events = null
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
    mounted() {
  },
  computed: {
    ...mapState(["users"])
  },
  created() {
    this.token = apiService.getToken();
  }
};
</script>