<template>
    <div class="leftContent col-lg-4 col-md-4 d-none d-lg-block">
        <div class="shadow  mb-2 bg-white">
            <p class="title-md  underLine  p-2">friend requests</p>
            <div class="friendRequest p-3">
                <h4 class="title">NO FRIEND REQUESTS. GET PRO-ACTIVE AND</h4>
                <div class="text-center"> <a href="javascript:void(0);" class="mainLink"> LOOK FOR NEW FRIENDS.</a></div>
                <div class="imgBox my-2">
                    <img src="@/assets/images/empty.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FriendRequsts',
    props: {
        msg: Object
    }
}
</script>