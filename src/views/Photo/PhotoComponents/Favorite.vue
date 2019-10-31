<template>
    <div class="tab-pane fade show active" id="Favorite" role="tabpanel" aria-labelledby="Favorite-tab">
        <ul class="photoList">
            <li v-for="image in photo.images" :key="image._id">
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
    name: 'Favorite',
    props: {
        msg: Object
    },
    methods: {
        ...mapActions(['getFavoritePhotos'])
    },
    created: function () {
        this.getFavoritePhotos({
            token: apiService.getToken()
        })
    },
    computed: {
        ...mapState(['users', 'photo'])
    }
}
</script>