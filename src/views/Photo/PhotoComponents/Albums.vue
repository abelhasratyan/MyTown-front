<template>
    <div class="tab-pane fade show active" id="Album" role="tabpanel" aria-labelledby="Album-tab">
        <ul class="photoList">
            <li v-for="album in msg.photo.albums.docs" :key="album._id">
                <router-link :to='"/albums/"+album._id'>
                    <img :src="album.backImage" alt="">
                    <p class="infoBox">
                        <span class="title">{{album.title}}</span>
                        <span class="description">{{album.images.length}} object</span>
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Albums',
    props: {
        msg: Object
    }
}
</script>