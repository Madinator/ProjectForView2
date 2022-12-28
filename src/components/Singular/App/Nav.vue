<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useBaseStore } from '@/stores/index';
import { useUserStore } from '@/stores/user';
import PlayLearnDropdown from '@/components/Singular/App/NavDropdowns/PlayLearn.vue';
import LearnEarnDropdown from '@/components/Singular/App/NavDropdowns/LearnEarn.vue';
import NotificationsDropdown from '@/components/Singular/App/NavDropdowns/Notifications.vue';
import ProfileDropdown from '@/components/Singular/App/NavDropdowns/Profile.vue';

const baseStore = useBaseStore();
const { 
    playLearnDropdownOpenedIndicator, learnEarnDropdownOpenedIndicator, 
    notificationsDropdownOpenedIndicator, profileDropdownOpenedIndicator
    } = storeToRefs(baseStore);

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// ROUTE
const route = useRoute();

onMounted(() => {
      // CLOSE DROPDOWNs AND CHANGE STYLES BACK ON UNFOCUS
      window.addEventListener('click', (event: Event) => {

        // CLOSE PLAY LEARN DROPDOWN
        if (playLearnDropdownOpenedIndicator.value) {
            const target = event?.target as HTMLElement;
            const isClickInsideElement = target.closest('.play-learn-dropdown');
            const isClickInsideElement2 = target.closest('.play-learn-dropdown-opener');

            if (!isClickInsideElement && !isClickInsideElement2) {
                baseStore.closePlayLearnDropdown();
            }
        }

        // CLOSE LEARN EARN DROPDOWN
        if (learnEarnDropdownOpenedIndicator.value) {
            const target = event?.target as HTMLElement;
            const isClickInsideElement = target.closest('.learn-earn-dropdown');
            const isClickInsideElement2 = target.closest('.learn-earn-dropdown-opener');

            if (!isClickInsideElement && !isClickInsideElement2) {
                baseStore.closeLearnEarnDropdown();
            }
        }

        // CLOSE NOTIFICATIONS DROPDOWN
        if (notificationsDropdownOpenedIndicator.value) {
            const target = event?.target as HTMLElement;
            const isClickInsideElement = target.closest('.notifications-dropdown');

            if (!isClickInsideElement && !target.classList.contains('notifications-dropdown-opener')) {
                baseStore.closeNotificationsDropdown();
            }
        }

        // CLOSE PROFILE DROPDOWN
        if (profileDropdownOpenedIndicator.value) {
            const target = event?.target as HTMLElement;
            const isClickInsideElement = target.closest('.profile-dropdown');
            const isClickInsideElement2 = target.closest('.profile-dropdown-opener');

            if (!isClickInsideElement && !isClickInsideElement2) {
                baseStore.closeProfileDropdown();
            }
        }
      });
});
</script>

<template>
    <nav class="navigation">
        <div class="gradient-line desktop"></div>
        <div class="inner-container">
            <router-link to="/" class="logo-link">
                <img src="@/assets/img/logo.png" alt="" class="logo">
            </router-link>
            <ul class="links-list desktop">
                <!-- <li :class="{'active': route.name === 'home'}" class="item"> -->
                <li :class="{'active': route.fullPath.includes('leaderboard')}" class="item">
                    <img src="@/assets/svg/nav/activeNavItem.svg" alt="" class="polygon">
                    <router-link to="/leaderboard" class="link">Leaderboard</router-link>
                </li>
                <!-- <li :class="{'active': route.name === 'gameList' || route.fullPath.includes('game')}" class="item"> -->
                <li :class="{'active': route.name === 'gameList'}" class="item">
                    <img src="@/assets/svg/nav/activeNavItem.svg" alt="" class="polygon">
                    <!-- <router-link to="/gameList" class="link">Play&Learn</router-link> -->
                    <button @click="baseStore.togglePlayLearnDropdown" class="play-learn-dropdown-opener link">Play&Learn</button>
                    <!-- <router-link to="/" class="link">Play&Learn</router-link> -->
                </li>
                <!-- <li :class="{'active': route.name === 'NFTMarket' || route.name === 'NFTItem'}" class="item"> -->
                <li :class="{'active': route.name === 'NFTMarket'}" class="item">
                    <img src="@/assets/svg/nav/activeNavItem.svg" alt="" class="polygon">
                    <router-link to="/NFTMarket" class="link">NFT Market</router-link>
                    <!-- <router-link to="/" class="link">NFT Market</router-link> -->
                </li>
                <li class="item">
                    <img src="@/assets/svg/nav/activeNavItem.svg" alt="" class="polygon">
                    <button @click="baseStore.toggleLearnEarnDropdown" class="learn-earn-dropdown-opener link">Learn&Earn</button>
                    <!-- <button @click="baseStore.toggleLearnEarnDropdown" class="link">Learn&Earn</button> -->
                </li>
                <li :class="{'active': route.name === 'tournaments'}" class="item">
                    <img src="@/assets/svg/nav/activeNavItem.svg" alt="" class="polygon">
                    <router-link to="/tournaments" class="link">Tournaments</router-link>
                    <!-- <router-link to="/" class="link">Tournaments</router-link> -->
                </li>
                <li :class="{'active': route.name === 'streamList'}" class="item">
                    <img src="@/assets/svg/nav/activeNavItem.svg" alt="" class="polygon">
                    <router-link to="/streamList" class="link">News</router-link>
                    <!-- <router-link to="/" class="link">News</router-link> -->
                </li>
            </ul>
            <div class="notifications-profile-info-container">
                <div class="notifications-container">
                    <button @click="baseStore.toggleNotificationsDropdown" class="notifications-button notifications-dropdown-opener">
                        <img src="@/assets/svg/nav/bell.svg" alt="" class="icon">
                    </button>
                    <!-- <button @click="baseStore.toggleNotificationsDropdown" class="notifications-button">
                        <img src="@/assets/svg/nav/bell.svg" alt="" class="icon">
                    </button> -->
                </div>

                <div class="profile-info-container">
                    <div @click="baseStore.toggleProfileDropdown" class="profile-info profile-dropdown-opener">
                        <img src="@/assets/svg/nav/plus.svg" alt="" class="plus">
                        <span class="money">$ {{user.balance.toFixed(2)}}</span>
                        <img src="/img/user/avatar.png" alt="" class="avatar">
                        <!-- <span class="money">COMING SOON</span> -->
                    </div>
                    <!-- <div @click="baseStore.toggleProfileDropdown" class="profile-info">
                        <span class="money">COMING SOON</span>
                    </div> -->
                </div>
            </div>
        </div>
    </nav>
    <PlayLearnDropdown :class="{'closed': !playLearnDropdownOpenedIndicator}" class="desktop" />
    <LearnEarnDropdown :class="{'closed': !learnEarnDropdownOpenedIndicator}" class="desktop" />
    <NotificationsDropdown :class="{'closed': !notificationsDropdownOpenedIndicator}" />
    <ProfileDropdown :class="{'closed': !profileDropdownOpenedIndicator}" />
</template>

<style lang="scss" scoped>
.item.active {
    
    .polygon {
        display: block !important;
    }

    .link {
        opacity: 1 !important;
        cursor: default !important;
    }
}

.navigation {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 100%;
    height: 5.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);

    @supports not (backdrop-filter: blur(20px)) {
        background-color: rgba(0, 0, 0, 0.7);
    }

    @media only screen and (max-width: 850px) {
        top: 2rem;
        background: none;
        backdrop-filter: none;
    }

    .gradient-line {
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(90deg, #4709A0 55.98%, #D369F6 71.44%);
        width: 100%;
        height: 2px;
    }

    .inner-container {
        @include width-restriction;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding: 2px 6.35rem;

        @media only screen and (max-width: 1200px) {
            padding: 2px 3%;
        }

        @media only screen and (max-width: 1100px) {
            padding: 2px 2%;
        }

        @media only screen and (max-width: 850px) {
            padding: 2px 0;
        }
    }

    .logo-link {
        width: 11rem;

        .logo {
            width: 100%;
        }
    }

    .links-list {
        @include flex-center;
        text-align: center;
        height: 100%;
        padding-left: 6rem;

        @media only screen and (max-width: 1500px) {
            width: 70%;
        }

        @media only screen and (max-width: 1100px) {
            padding-left: 2rem;
        }

        @media only screen and (max-width: 1000px) {
            width: 65%;
        }

        .item {
            @include flex-center;
            position: relative;
            width: 18rem;
            height: 100%;
            text-align: center;

            @media only screen and (max-width: 1500px) {
                width: 100%;
            }
            
            &:not(:first-of-type) {
                margin-left: -3rem;
            }

            .polygon {
                display: none;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 110%;
                height: 100%;

                @media only screen and (max-width: 1000px) {
                    top: -1px;
                }
            }
            
            .link {
                font-weight: 500;
                display: inline-block;
                position: relative;
                z-index: 100;
                margin-top: -.3rem;

                &:hover {
                    opacity: .7;
                }
            }
        }
    }

    .notifications-profile-info-container {
        @include flex-center;
        position: relative;
        z-index: 150;
        height: 100%;

        .notifications-container {
            @include flex-center;
            position: relative;
            height: 100%;

            .notifications-button {
                margin-right: 3.5rem;
                width: 2.45rem;

                &:hover {
                    opacity: .8;
                }

                @media only screen and (max-width: 1100px) {
                    margin-right: 2.5rem;
                }

                @media only screen and (max-width: 850px) {
                    width: 24px;
                    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1));
                }

                .icon {
                    width: 100%;
                }
            }
        }

        .profile-info-container {
            position: relative;
            z-index: 150;

            .profile-info {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(255, 255, 255, 0.2);
                border-radius: 30px;
                padding-left: 2.35rem;
                border: 1.5px solid rgba(255, 255, 255, 0.2);
                cursor: pointer;
                transition: all .3s;
                white-space: nowrap;
                backdrop-filter: blur(24px);

                @supports not (backdrop-filter: blur(20px)) {
                    background-color: rgba(255, 255, 255, 0.3);
                }

                &:hover {
                    background-color: rgba(255, 255, 255, 0.3);
                }

                .plus {
                    display: inline-block;
                    margin-right: 1.25rem;
                }

                .money {
                    display: inline-block;
                    margin-right: 1.5rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 14px;
                    }
                }

                .avatar {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50px;

                    @media only screen and (max-width: 850px) {
                        width: 33px;
                        height: 33px;
                    }
                }
            }
        }
    }
}
</style>