<template>
<div>
    <ProfileHeader :msg="users.user.user" />
    <div class="container">
        <div class="row my-3">
            <div class="centerContent col-lg-12 col-md-12">
                <div class="shadow  mb-2 bg-white newsContent">
                    <div class="underLine  p-2 spaceBox">
                        <h1 class="title-md">{{ title }}</h1>
                        <div>
                            <a class="btn_3 pointer" @click="addImage">Add Photo</a>
                        </div>
                        <div>
                            <a class="btn_3 pointer" @click="addAlbum">Add Album</a>
                        </div>
                    </div>
                    <!-- <div class="underLine  p-2 spaceBox">
                        <h1 class="title-md">Album</h1>
                        
                    </div> -->
                    <div class="photoListBox p-3">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" @click="loc('Favorite Photos')">
                                <router-link to="/photos" class="nav-link" >
                                    Favorite
                                </router-link>
                            </li>
                            <li class="nav-item" @click="loc('Profile Photos')">
                                <router-link to="/photos/profilePhotos" class="nav-link">
                                    Profile Photo
                                </router-link>
                            </li>
                            <li class="nav-item" @click="loc('Cover Photos')">
                                <router-link to="/photos/coverPhotos" class="nav-link">
                                    Cover Photo
                                </router-link>
                            </li>
                            <li class="nav-item" @click="loc('Albums')">
                                <router-link to="/photos/albums" class="nav-link">
                                    Album
                                </router-link>
                            </li>
                        </ul>
                        <div class="tab-content py-3" id="myTabContent">
                            <router-view :msg="{users, photo}" ></router-view>
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
    name: 'Photos',
    components: {
        ProfileHeader
    },
    data() {
        return {
            album: '',
            parent: '',
            title: '',
            some: ''
        }
    },
    methods: {
        ...mapActions(['createImage', 'CreateAlbum', 'getMyAlbums']),

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

        loc(a) {
            this.title = a
            return this.title
        }
    },
    created: function () {
        
        this.loc('Favorite Photos')
        
        this.getMyAlbums({
            token: apiService.getToken()
        })
    },
    computed: {
        ...mapState(['users', 'photo'])
    }
}

</script>
