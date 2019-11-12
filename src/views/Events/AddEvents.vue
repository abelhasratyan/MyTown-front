<template>
<div>
    <ProfileHeader :msg="users.user.user" ></ProfileHeader>
     <section>
        <div class="container">
            <div class="row my-3">
                <div class="rightContent col-lg-2 d-none ">
                    <div class="tightSectionBar">
                        <h4 class="title_1">Shortcuts</h4>
                        <ul class="linkList">
                            <li><a href="profile.html"><img src="images/icons/leftMenuIcon5.png" alt="icon"> Profile</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon12.png" alt="icon"> Info</a></li>
                            <li><a href="poll.html"><img src="images/icons/leftMenuIcon9.png" alt="icon"> Poll</a></li>
                            <li><a href="friends.html"><img src="images/icons/leftMenuIcon14.png" alt="icon"> Friends</a></li>
                            <li><a href="photo.html"><img src="images/icons/leftMenuIcon13.png" alt="icon"> Photos</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon15.png" alt="iicon"> Blog</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon10.png" alt="icon"> Sound</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon3.png" alt="icon"> Ads</a></li>
                            <li><a href="events.html"><img src="images/icons/leftMenuIcon2.png" alt="icon"> Events</a></li>
                            <li><a href="index.html"><img src="images/icons/leftMenuIcon6.png" alt="icon"> Timeline</a></li>
                            <li><a href="video.html"><img src="images/icons/leftMenuIcon4.png" alt="icon"> Videos</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon.png" alt="icon"> Classifieds</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon1.png" alt="icon"> Files</a></li>
                            <li><a href="fundreisers.html"><img src="images/icons/leftMenuIcon3.png" alt="icon"> Fund Raisers</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon11.png" alt="icon"> Sites</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon7.png" alt="icon"> Coupons</a></li>
                            <li><a href="javascript:void(0)"><img src="images/icons/leftMenuIcon8.png" alt="icon"> Store</a></li>
                            <li><a href="groupAdmin.html"><img src="images/icons/leftMenuIcon14.png" alt="icon"> Groups</a></li>
                        </ul>
                    </div>
                    <div class="tightSectionBar">
                        <h4 class="title_1">Links</h4>
                        <ul class="linkList">
                            <li><a href="javascript:void(0)">About Us</a></li>
                            <li><a href="javascript:void(0)">Privacy</a></li>
                            <li><a href="javascript:void(0)">Terms</a></li>
                            <li><a href="javascript:void(0)">FAQ</a></li>
                            <li><a href="javascript:void(0)">Invite a friend</a></li>
                            <li><a href="javascript:void(0)">Contact us</a></li>
                            <li><a href="javascript:void(0)">Join ou</a></li>
                            <li><a href="javascript:void(0)">Marketing Team</a></li>
                            <li><a href="javascript:void(0)">Bookmark</a></li>
                            <li><a href="javascript:void(0)">Affiliate\Referrals</a></li>
                        </ul>
                    </div>
                </div>

                <div class="centerContent col-lg-12 col-md-12">
                    <div class="shadow  mb-2 bg-white">
                        <div class="underLine  p-2 title-md">Create a event</div>
                        <div class="eventBox p-3">
                            <form>
                                <div class="form-group ">
                                    <label class="w-100">Title <span class="importantFild">*</span>
                                        <input type="text" class="form-control">
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Tags <span class="importantFild">*</span>
                                        <input type="text" class="form-control">
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Description <span class="importantFild">*</span>
                                        <textarea class="form-control" rows="5"></textarea>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Categories <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Categories</option>
                                            <option>Categories</option>
                                            <option>Categories</option>
                                            <option>Categories</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Counntry <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Counntry</option>
                                            <option>Counntry</option>
                                            <option>Counntry</option>
                                            <option>Counntry</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">City <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>City</option>
                                            <option>City</option>
                                            <option>City</option>
                                            <option>City</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Place  Name <span class="importantFild">*</span>
                                        <input type="text" class="form-control">
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Data Start <span class="importantFild">*</span>
                                        <input type="text" class="form-control">
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Data  End <span class="importantFild">*</span>
                                        <input type="text" class="form-control">
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Events <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <div class="custom-file uploadFile">
                                        <input type="file" class="custom-file-input" id="customFile">
                                        <label class="custom-file-label" for="customFile"><img src="images/icons/upload.png" alt=""> Select file</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">View Event <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Allow Viewing Participants <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Allow To View And Post Comments <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Allow Rating <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Allow Posting In Forum <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Allow View Forum <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Allow Joining <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Join Confirmation <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Upload Photos <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Upload Videos <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Upload Sounds <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="w-100">Upload Files <span class="importantFild">*</span>
                                        <select class="form-control">
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                            <option>Public</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="rightBtnBox"><button class="btn_2">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</div>
</template>
<script>
import ProfileHeader from "../../components/ProfileHeader"
import Footer from "../../components/Footer"
import { mapState, mapActions } from 'vuex'

export default {
    name: 'addEvents',
    components:{
        ProfileHeader,
        Footer,
    },

  /*mounted() {
      console.log(this.users,'test')
  },
  ...mapState(["users"])*/
};

</script>