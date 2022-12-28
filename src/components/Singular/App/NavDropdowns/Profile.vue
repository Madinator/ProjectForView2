<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBaseStore } from '@/stores/index';
import { useUserStore } from '@/stores/user';
import LearnEarnDropdown from '@/components/Singular/App/NavDropdowns/LearnEarn.vue';
import PlayLearnDropdown from '@/components/Singular/App/NavDropdowns/PlayLearn.vue';

const baseStore = useBaseStore();
const { playLearnDropdownOpenedIndicator, learnEarnDropdownOpenedIndicator } = storeToRefs(baseStore);

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// CLOSE PROFILE DROPDOWN IF CLICK ON LINK INSIDE IT
const closeWindow = (event: Event): void => {
    const target = event.target as HTMLElement;
    const isLinkClicked = target.closest('a');

    if (isLinkClicked) {
        baseStore.closeProfileDropdown();
    }
};
</script>

<template>
    <div class="profile-dropdown dropdown">
        <div @click="closeWindow" class="inner-container">
            <button @click="baseStore.closeProfileDropdown" class="button-close mobile">
                <img src="@/assets/svg/Reusable/arrow2.svg" alt="" class="icon">
            </button>
            <!-- <img :src="user.profileBanner" alt="" class="profile-banner"> -->
            <router-link to="/profile" class="profile-banner-container">
                <img src="@/assets/img/Landing/headerBackground/1.9k.jpg" alt="" class="profile-banner">
            </router-link>
            <div class="profile-info">
                <router-link to="/profile" class="info">
                    <img :src="user.avatar" alt="" class="avatar">
                    <strong class="username">{{user.username}}</strong>
                    <div class="status-container">
                        <img src="@/assets/svg/Reusable/tickPurple.svg" alt="" class="tick">
                        <span class="status">{{user.status}}</span>
                    </div>
                </router-link>
                <router-link to="/profile/wallet" class="balance-button mobile">
                    <span class="subtitle">Your balance</span>
                    <div class="balance-container">
                        <span class="balance">$ {{user.balance.toFixed(2)}}</span>
                        <img src="@/assets/svg/Reusable/arrow.svg" alt="" class="arrow">
                    </div>
                </router-link>
            </div>
            <nav class="navigation">
                <div class="line"></div>
                <ul class="navigation-list mobile">
                    <li class="item">
                        <router-link to="/leaderboard" class="link">Leaderboard</router-link>
                    </li>
                    <li class="item play-learn-dropdown-item">
                        <!-- <router-link to="/gameList" class="link">Play&Learn</router-link> -->
                        <button @click="baseStore.togglePlayLearnDropdown" class="play-learn-dropdown-opener link">
                            <span>Play&Learn</span>
                            <img src="@/assets/svg/Reusable/arrow.svg" alt="" :class="{'arrow-active': playLearnDropdownOpenedIndicator}" class="arrow">
                        </button>
                        <PlayLearnDropdown :class="{'closed': !playLearnDropdownOpenedIndicator}" />
                    </li>
                    <li class="item">
                        <router-link to="/NFTMarket" class="link">NFT Market</router-link>
                    </li>
                    <li class="item learn-earn-dropdown-item">
                        <button @click="baseStore.toggleLearnEarnDropdown" class="learn-earn-dropdown-opener link">
                            <span>Learn&Earn</span>
                            <img src="@/assets/svg/Reusable/arrow.svg" alt="" :class="{'arrow-active': learnEarnDropdownOpenedIndicator}" class="arrow">
                        </button>
                        <LearnEarnDropdown :class="{'closed': !learnEarnDropdownOpenedIndicator}" />
                    </li>
                    <li class="item">
                        <router-link to="/tournaments" class="link">Tournaments</router-link>
                    </li>
                    <li class="item">
                        <router-link to="/streamList" class="link">News</router-link>
                    </li>
                </ul>
                <div class="line mobile"></div>
                <ul class="settings-support-list">
                    <li class="item">
                        <router-link to="/profile/settings" class="link">
                            <div class="icon-container">
                                <img src="@/assets/svg/nav/settings.svg" alt="" class="icon">
                            </div>
                            <span>Settings</span>
                        </router-link>
                        <router-link to="/" class="link">
                            <div class="icon-container">
                                <img src="@/assets/svg/nav/support.svg" alt="" class="icon">
                            </div>
                            <span>Support</span>
                        </router-link>
                    </li>
                </ul>
                <div class="line"></div>
                <div class="buttons">
                    <router-link to="/connectWallet" class="btn btn-gradient-purple">Connect wallet</router-link>
                    <router-link to="/upload" class="btn btn-transparent">Add video</router-link>
                    <router-link to="/creativeStudio" class="btn btn-transparent">Studio</router-link>
                </div>
                <button class="logout">
                    <img src="@/assets/svg/nav/leave.svg" alt="" class="icon">
                    <span>Leave</span>
                </button>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile-dropdown {
    position: fixed;
    top: 5.5rem;
    right: 3%;
    border-radius: 1rem;
    width: 34rem;
    padding: .5rem .5rem 2rem;
    filter: drop-shadow(0 0 2rem rgba(0, 0, 0, .3));
    backdrop-filter: blur(80px);
    // background-color: rgba(0, 0, 0, 0.2);
    background-color: rgba(#1B1B1B, .8);

    // @supports not (backdrop-filter: blur(80px)) {
    //     background-image: linear-gradient(255deg, #8A2B9A -32%, #4d036f 115%);
    // }

    @media only screen and (max-height: 700px) and (min-width: 1300px) {
        top: 2.5rem;
        transform: scale(.9);
    }

    @media only screen and (max-height: 600px) and (min-width: 850px) {
        top: -6px;
        transform: scale(.8);
    }

    @media only screen and (max-height: 400px) and (min-width: 850px) {
        top: -17px;
        transform: scale(.75);

        .line {
            margin: 7px !important;
        }
    }

    @media only screen and (min-width: 1920px) {
        right: calc((100vw - 1920px) / 2 + 5rem);
    }

    @media only screen and (max-width: 1100px) {
        right: 2%;
    }

    @media only screen and (max-width: 850px) {
        background-color: unset;
        background-image: var(--gradient-purple);
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100000;
        height: var(--app-height);
        width: 100%;
        padding: .5rem 25% 1rem;
        overflow: scroll;

        span, button, a {
            font-size: 16px !important;
        }
    }

    @media only screen and (max-width: 750px) {
        padding: .75rem 22% 1rem;
    }

    @media only screen and (max-width: 650px) {
        padding: .75rem 19% 1rem;
    }

    @media only screen and (max-width: 550px) {
        padding: .75rem 13% 1rem;
    }

    @media only screen and (max-width: 450px) {
        padding: .75rem 9% 1rem;
    }

    @media only screen and (max-width: 850px) and (min-height: 850px) {
        @include flex-center;
        padding-top: 0;
        padding-bottom: 5rem;
    }

    .inner-container {
        position: relative;
        width: 100%;
        height: 100%;

        @media only screen and (max-width: 850px) {
            min-height: 800px;
            max-height: 800px;       
        }

        .button-close {
            @include flex-center;
            position: absolute;
            top: 1.75rem;
            left: 1.25rem;
            z-index: 10000;
            width: 4rem;
            height: 4rem;

            .icon {
                width: 2.25rem;
                height: 2.25rem;
            }
        }

        .profile-banner-container {
            border-radius: .6rem;
            overflow: hidden;
            width: 100%;
            height: 12.5rem;

            @media only screen and (max-width: 850px) {
                height: 13.5rem;
            }

            .profile-banner {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .profile-info {

            @media only screen and (max-width: 850px) {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
            }

            .info {
                @include flex-center;
                flex-direction: column;
                margin-top: -4rem;

                .avatar {
                    min-width: 70px;
                    min-height: 70px;
                    width: 7.25rem;
                    height: 7.25rem;
                    border-radius: 100rem;
                    margin-bottom: .5rem;
                }

                .username {
                    font-weight: 600;
                    font-size: 2.7rem;
                    display: inline-block;
                    margin-bottom: .2rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 28px;
                    }
                }

                .status-container {
                    display: flex;
                    align-items: center;

                    .tick {
                        width: 1.4rem;
                        margin-right: .5rem;

                        @media only screen and (max-width: 850px) {
                            width: 14px;
                        }
                    }

                    .status {
                        font-size: 1.5rem;
                        color: var(--color-white);
                        opacity: .6;
                    }
                }
            }

            .balance-button {
                background-color: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(23.5px);
                border: 1.5px solid rgba(255, 255, 255, 0.2);
                padding: 14px 12px;
                border-radius: 8px;
                width: 160px;

                @media only screen and (max-width: 400px) {
                    width: 150px;
                }

                .subtitle {
                    display: inline-block;
                    margin-bottom: 5px;
                    font-size: 14px !important;
                    opacity: .7;
                }

                .balance-container {
                    display: flex;
                    align-items: center;

                    .balance {
                        font-size: 21px !important;
                        white-space: nowrap;

                        @media only screen and (max-width: 400px) {
                            font-size: 20px !important;
                        }
                    }

                    .arrow {
                        width: 6px;
                        margin-left: 15px;
                    }
                }
            }
        }

        .navigation {
            padding: 0 2.15rem;

            @media only screen and (max-width: 850px) {
                padding: 0;
            }

            .line {
                margin: 1.75rem 0;
                height: 2px;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 10px;

                @media only screen and (max-width: 850px) {
                    margin: 15px 0;
                }

                @media only screen and (max-width: 850px) and (min-height: 800px) {
                    margin: 18px 0;
                }
            }

            .navigation-list {

                .item {
                    &:not(:last-of-type) {
                        margin-bottom: 15px;

                        @media only screen and (max-width: 850px) and (min-height: 820px) {
                            margin-bottom: 17px;
                        }
                    }

                    .link {
                        font-size: 18px !important;
                    }
                }

                .learn-earn-dropdown-item,
                .play-learn-dropdown-item {
                    position: relative;

                    .link {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                    }

                    .arrow {
                        transform: rotate(90deg);
                    }

                    .arrow-active {
                        transform: rotate(-90deg) !important;
                    }
                }
            }

            .settings-support-list {

                .item {

                    .link {
                        display: flex;
                        align-items: center;
                        padding: 1rem 1.25rem;
                        border-radius: 1rem;

                        @media only screen and (max-width: 850px) {
                            padding: 10px 12px;
                        }

                        &:hover {
                            background-color: rgba(255, 255, 255, .1)
                        }

                        .icon-container {
                            @include flex-center;
                            width: 3.25rem;
                            height: 3.25rem;
                            background-color: rgba(255, 255, 255, 0.1);
                            border-radius: .8rem;
                            margin-right: 1.25rem;

                            @media only screen and (max-width: 850px) {
                                width: 32px;
                                height: 32px;
                            }

                            .icon {
                                width: 2rem;
                                height: 2rem;

                                @media only screen and (max-width: 850px) {
                                    width: 20px;
                                    height: 20px;
                                }
                            }
                        }
                    }
                }
            }

            .buttons {
                text-align: center;
                margin-bottom: 1.5rem;

                @media only screen and (max-width: 850px) {
                    margin-bottom: 15px;
                }

                .btn {
                    font-weight: 400;
                    width: 100%;
                    padding: 1rem;
                    border: 1.5px solid rgba(255, 255, 255, 0.2);
                    border-radius: .7rem;

                    &:not(:last-of-type) {
                        margin-bottom: .85rem;

                        @media only screen and (max-width: 850px) {
                            margin-bottom: 9px;
                        }

                        @media only screen and (max-width: 850px) and (min-height: 800px) {
                            margin-bottom: 10px
                        }
                    }

                    @media only screen and (max-width: 850px) {
                        border-radius: 1rem;
                        font-size: 16px;
                    }
                }

                .btn-gradient-purple {

                    @media only screen and (max-width: 850px) {
                        border: 1.5px solid #9037D6;
                        background-image: unset !important;
                        background: rgba(144, 55, 214, .2);
                    }
                }
            }

            .logout {
                font-weight: 500;
                display: flex;
                align-items: center;
                color: var(--color-red);

                @media only screen and (max-width: 850px) {
                    font-size: 16px;
                }

                .icon {
                    width: 2.2rem;
                    height: 2.2rem;
                    margin-right: 1.2rem;

                    @media only screen and (max-width: 850px) {
                        min-width: 22px;
                        min-height: 22px;
                    }
                }
            }
        }
    }
}
</style>