<template>
    <div class="leftContent col-lg-4 col-md-4 d-none d-lg-block" v-if="msg">
        <div class="shadow  mb-2 bg-white">
            <p class="title-md  underLine  p-3">my info</p>
            <div class="myInfo p-3">
                <h3 class="title">Full Name</h3>
                <p class="description">{{ msg.name }} {{ msg.surname }}</p>
                <h3 class="title">Birthday</h3>
                <p class="description">undefined</p>
                <h3 class="title">Age</h3>
                <p class="description">unknown</p>
                <h3 class="title">Country</h3>
                <p class="description">Anglia</p>
                <h3 class="title">City</h3>
                <p class="description">London</p>
            </div>
        </div>
        <div class="shadow  mb-2 bg-white">
            <div class="underLine spaceBox p-3">
                <p class="title-md">Photo</p>
                <a href="javascript:void(0);" class="mainLink">Add Photo</a>
            </div>
            <div class="photoGallery p-3">
                <ul class="photoList">
                    <li><img src="@/assets/images/photoMore8.png" alt="img"></li>
                    <li><img src="@/assets/images/photoMore7.png" alt="img"></li>
                    <li><img src="@/assets/images/photoMore6.png" alt="img"></li>
                    <li><img src="@/assets/images/photoMore5.png" alt="img"></li>
                    <li><img src="@/assets/images/photoMore4.png" alt="img"></li>
                    <li><img src="@/assets/images/photoMore3.png" alt="img"></li>
                    <li><img src="@/assets/images/photoMore2.png" alt="img"></li>
                    <li><img src="@/assets/images/photoMore1.png" alt="img"></li>
                    <li><img src="@/assets/images/photoMore.png" alt="img"></li>
                </ul>
            </div>
        </div>
        <div class="shadow  mb-2 bg-white">
            <div class="underLine spaceBox p-3">
                <p class="title-md">Location</p>
                <a href="javascript:void(0);" class="mainLink">Add Location</a>
            </div>
            <div class=" p-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281080726!2d-0.24168024584704462!3d51.528771840474214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2s!4v1565422337643!5m2!1sru!2s" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftContent',
    props: {
        msg: Object
    }
}
</script>