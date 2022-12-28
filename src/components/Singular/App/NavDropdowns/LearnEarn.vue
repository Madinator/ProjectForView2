<script setup lang="ts">
import { useBaseStore } from '@/stores/index';

const baseStore = useBaseStore();
</script>

<template>
    <div class="learn-earn-dropdown dropdown">
        <div class="inner-container">
            <ul @click="baseStore.closeLearnEarnDropdown" class="list">
                <li class="item">
                    <router-link to="/staking" class="link">
                        <div class="icon-container">
                            <img src="@/assets/svg/nav/stakeEarn.svg" alt="" class="icon">
                        </div>
                        <span>Stake & Earn</span>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/mysteryBox" class="link">
                        <div class="icon-container">
                            <img src="@/assets/svg/nav/mysteryBox.svg" alt="" class="icon">
                        </div>
                        <span>Mystery Box</span>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/governance" class="link">
                        <div class="icon-container">
                            <img src="@/assets/svg/nav/governance.svg" alt="" class="icon">
                        </div>
                        <span>Governance</span>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/leaderboard/guild" class="link">
                        <div class="icon-container">
                            <img src="@/assets/svg/nav/guilds.svg" alt="" class="icon">
                        </div>
                        <span>Guilds</span>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/Launchpad" class="link">
                        <div class="icon-container">
                            <img src="@/assets/svg/nav/launchpad.svg" alt="" class="icon">
                        </div>
                        <span>Launchpad</span>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/ambassadors" class="link">
                        <div class="icon-container">
                            <img src="@/assets/svg/nav/ambassadors.svg" alt="" class="icon">
                        </div>
                        <span>Ambassadors</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.learn-earn-dropdown {
    position: fixed;
    top: 5.5rem;
    right: 37%;
    border-radius: 1rem;
    width: 30rem;
    padding: 2.25rem 0;
    filter: drop-shadow(0 0 2rem rgba(0, 0, 0, .3));
    backdrop-filter: blur(80px);
    // background-color: rgba(0, 0, 0, .2);
    background-color: rgba(#1B1B1B, .8);

    // @supports not (backdrop-filter: blur(80px)) {
    //     background-image: linear-gradient(255deg, #8A2B9A -32%, #4d036f 115%);
    // }

    @media only screen and (min-width: 1920px) {
        right: calc((100vw - 1920px) / 2 + 63rem);
    }

    @media only screen and (max-width: 850px) {
        position: absolute;
        top: 105%;
        right: auto;
        left: 0;
        box-shadow: 0 0 30px rgba(0, 0, 0, .3);
        
        span, button, a {
            font-size: 16px !important;
        }
    }

    .inner-container {

        .list {

            .item {

                .link {
                    display: flex;
                    align-items: center;
                    padding: 1rem 2.5rem;
                    border-radius: 1rem;

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

                        .icon {
                            width: 2rem;
                            height: 2rem;
                        }
                    }
                }
            }
        }
    }
}
</style>