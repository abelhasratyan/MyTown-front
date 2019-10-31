<template>
    <div class="rightContent col-lg-2 d-none d-lg-block">
        <div class="tightSectionBar">
            <h4 class="title_1">Shortcuts</h4>
            <ul class="linkList">
                <li>
                    <router-link :to="{name: 'Profile'}">
                        <img src="../assets/images/icons/leftMenuIcon5.png" alt="icon">
                        Profile
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon12.png" alt="icon">
                        Info
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'polls'}">
                        <img src="../assets/images/icons/leftMenuIcon9.png" alt="icon">
                        Poll
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Friends'}">
                        <img src="../assets/images/icons/leftMenuIcon14.png" alt="icon">
                        Friends
                    </router-link>
                </li>
                <li>
                    <router-link to="/photos">
                        <img src="../assets/images/icons/leftMenuIcon13.png" alt="icon">
                        Photos
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon15.png" alt="iicon">
                        Blog
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon10.png" alt="icon">
                        Sound
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon3.png" alt="icon">
                        Ads
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'events'}">
                        <img src="../assets/images/icons/leftMenuIcon2.png" alt="icon">
                        Events
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon6.png" alt="icon">
                        Timeline
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'videos'}">
                        <img src="../assets/images/icons/leftMenuIcon4.png" alt="icon">
                        Videos
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon.png" alt="icon">
                        Classifieds
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon1.png" alt="icon">
                        Files
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'fundraisers'}">
                        <img src="../assets/images/icons/leftMenuIcon3.png" alt="icon">
                        Fund Raisers</router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon11.png" alt="icon">
                        Sites
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon7.png" alt="icon">
                        Coupons
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: ''}">
                        <img src="../assets/images/icons/leftMenuIcon8.png" alt="icon">
                        Store
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'groups'}">
                        <img src="../assets/images/icons/leftMenuIcon14.png" alt="icon">
                        Groups
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="tightSectionBar">
            <h4 class="title_1">Links</h4>
            <ul class="linkList">
                <li>
                    <router-link to="">About Us</router-link>
                </li>
                <li>
                    <router-link to="">Privacy</router-link>
                </li>
                <li>
                    <router-link to="">Terms</router-link>
                </li>
                <li>
                    <router-link to="">FAQ</router-link>
                </li>
                <li>
                    <router-link to="">Invite a friend</router-link>
                </li>
                <li>
                    <router-link to="">Contact us</router-link>
                </li>
                <li>
                    <router-link to="">Join ou</router-link>
                </li>
                <li>
                    <router-link to="">Marketing Team</router-link>
                </li>
                <li>
                    <router-link to="">Bookmark</router-link>
                </li>
                <li>
                    <router-link to="">Affiliate\Referrals</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
