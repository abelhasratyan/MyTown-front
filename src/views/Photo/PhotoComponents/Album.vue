<template>
<div>
    <ProfileHeader :msg="users.user.user" />
    <div class="container">
        <div class="row my-3">
            <div class="centerContent col-lg-12 col-md-12">
                <div class="shadow  mb-2 bg-white newsContent">
                    <div class="underLine  p-2 spaceBox">
                        <h1 class="title-md">{{ album.title }}</h1>
                        <div>
                            <a class="btn_3 pointer" @click="addImage">Add Photo</a>
                        </div>
                        <div>
                            <a class="btn_3 pointer" @click="addAlbum">Add Album</a>
                        </div>
                    </div>
                    <div class="photoListBox p-3">
                        <div class="tab-content py-3" id="myTabContent">
                            <div class="photoListBox p-3">
                                <ul class="photoList">
                                    <li v-for="image in album.images" :key="image._id">
                                        <a href="javascript:void(0);">
                                            <img :src="image.imageId.link" alt="">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ProfileHeader from '@/components/ProfileHeader.vue'
import { mapState, mapActions } from 'vuex'
import { APIService } from '@/APIService'

const apiService = new APIService()


export default {
    name: 'Album',
    components: {
        ProfileHeader
    },
    data() {
        return {
            album: '',
            parent: '',
            album: {}
        }
    },
    methods: {
        ...mapActions(['createImage', 'CreateAlbum', 'getMyAlbum']),

        addImage() {
            this.$swal({
                title: 'Input something',
                html:
                    `<input type="file" id="swal-input1" class="swal2-input">
                    <select id="swal-input2" v-model="parent" name="parent" class="form-control">
                        <option value="">nothing</option>
                        ${this.photo.albums.docs.map(album => `<option value="${album.title}">${album.title}</option>`)}
                    </select>`,
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success btn-fill',
                cancelButtonClass: 'btn btn-danger btn-fill',
                buttonsStyling: false,
                preConfirm: () => {
                    return new Promise((resolve) => {
                        resolve([
                            document.getElementById('swal-input1').files[0],
                            document.getElementById('swal-input2').value
                        ])
                    })
                }
            }).then((result) => {
                if (result.value) {
                    this.createImage({
                        data: result.value,
                        token: apiService.getToken()
                    }).then(res => {
                        if (!res.success) {
                            this.$swal({
                                type: 'warning',
                                html: res.message,
                                confirmButtonClass: 'btn btn-success btn-fill',
                                buttonsStyling: false
                            })
                        } else {
                            this.getMyAlbums({
                                token: apiService.getToken()
                            })
                            this.$swal({
                                type: 'success',
                                html: 'Image successfully created',
                                confirmButtonClass: 'btn btn-success btn-fill',
                                buttonsStyling: false
                            })
                            this.$router.push('/photos')
                        }
                        
                    })
                    
                } else {
                    this.$swal.noop
                }
                
            }).catch(this.$swal.noop)
        },
        addAlbum() {
            this.$swal({
                title: 'Input something',
                input: 'text',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success btn-fill',
                cancelButtonClass: 'btn btn-danger btn-fill',
                buttonsStyling: false
            }).then((result) => {                
                if (result.value) {
                    this.CreateAlbum({
                        title: result.value,
                        token: apiService.getToken()
                    }).then(res => {
                        if (res.success) {
                            this.getMyAlbums({
                                token: apiService.getToken()
                            })
                            this.$router.push('/photos')
                        }
                    })
                    this.$swal({
                        type: 'success',
                        html: 'Image successfully created',
                        confirmButtonClass: 'btn btn-success btn-fill',
                        buttonsStyling: false
                    })
                } else {
                    this.$swal.noop
                }
                
            }).catch(this.$swal.noop)
        },
    },
    created: function () {
        this.getMyAlbum({
            token: apiService.getToken(),
            id: this.$route.params.id
        }).then(docs => {
            this.album = docs.album
        })
    },
    computed: {
        ...mapState(['users', 'photo'])
    }
}
</script>