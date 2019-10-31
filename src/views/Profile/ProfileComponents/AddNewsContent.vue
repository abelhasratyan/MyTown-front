<template>
    <div class="shadow p-3 mb-2 bg-white  addNewsContent" v-if="msg">
        <div class="headingBox"><h1 class="title">News Feed</h1></div>
        <form class="addNewsBox underLine">
            <textarea class="form-control addNewsArea" rows="3"></textarea>
            <div class="userBox">
                <div class="imgBox"><img :src="msg.avatar" alt="user img"></div>
                <div class="infoBox">What's on your mind, {{msg.name}}?</div>
            </div>
        </form>
        <div class="emojiBox">
            <div class="smileBox">
                <img src="@/assets/images/icons/smileIcon.png" alt="icon">
            </div>
            <div class="moreDetalsBox">
                <ul class="detalsList">
                    <li>
                        <div class="iconBox">
                            <img src="@/assets/images/icons/cameraIcon.png" alt="icon">
                        </div>
                        <div class="textBox">
                            Photo/Video
                        </div>

                    </li>
                    <li>
                        <div class="iconBox">
                            <img src="@/assets/images/icons/grupIcon.png" alt="icon">
                        </div>
                        <div class="textBox">
                            Grup
                        </div>
                    </li>
                    <li>
                        <div class="iconBox">
                            <img src="@/assets/images/icons/moreIcon.png" alt="icon">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddNewsContent',
    props: {
        msg: Object
    }
}
</script>