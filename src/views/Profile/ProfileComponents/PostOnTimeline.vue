<template>
    <div class="shadow  mb-2 bg-white newsContent">
    <div class="addNewsBox">
        <div class="userBox">
            <div class="imgBox pl-3 pr-3 pt-3">
                <img src="../../../assets/images/userImg.png" alt="user img" class="rounded-circle">
                <span class="user-name">{{users.user.user.name}}</span>
                <span class="add-photo">added a new photo &#45; </span>
                <span class="albom-name"> My city </span>
                <span class="about-hours">about 18 hours ago</span>
            </div>
        </div>
        <div class="aboutPhotoBox pb-3 underLine">
            <p class="aboutPhoto-txt text-left pl-3 pr-3 mb-3">Lorem ipsum dolor sit ametvoluptatem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do et dolore magna aliqua.</p>
            <img src="../../../assets/images/loadPhoto.jpg" alt="Loaded Photo" class="fullWidthImg">
        </div>
        <div class="photoLikeBox p-3">
            <div class="col-md-6 p-0">
                <a href="#" class="icon-group"><img src="../../../assets/images/icons/like-icon.png" alt="icon"></a> <span class="like-count">23</span>
                <a href="#" class="icon-group"><img src="../../../assets/images/icons/talk-icon.png" alt="icon"></a><span class="like-count">23</span>
                <a href="#" class="icon-group"><img src="../../../assets/images/icons/share-option.png" alt="icon"></a><span class="like-count">2</span>
            </div>
            <div class="col-md-6 text-right p-0">
                <a href="#" class="icon-txt-group mr-3">Like</a>
                <a href="#" class="icon-txt-group mr-3">Comment</a>
                <a href="#" class="icon-txt-group">Share</a>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name:"PostOnTimeline",
    data(){
        return{
        user_name: 'this.users.user.user.name'
        }
    },
    created(){
            console.log(this.users.user.user.name,"POSTONTIMELINE")
    },
    computed:{
     ...mapState(['users'])
    }
    
}
</script>