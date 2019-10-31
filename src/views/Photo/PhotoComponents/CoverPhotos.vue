<template>
    <div class="tab-pane fade show active" id="coverPhoto" role="tabpanel" aria-labelledby="CoverPhoto-tab">
        <ul class="photoList">
            <li v-for="image in photo.images.response" :key="image._id">
                <a href="javascript:void(0);">
                    <img :src="image.link" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { APIService } from '@/APIService'

const apiService = new APIService()

export default {
    name: 'CoverPhotos',
    props: {
        msg: Object
    },
    methods: {
        ...mapActions(['getCoverPhotos'])
    },
    created() {
        this.getCoverPhotos({
            token: apiService.getToken()
        })
    },
    computed: {
        ...mapState(['users', 'photo'])
    }
}
</script>