<script setup lang="ts">
import { useBaseStore } from '@/stores/index';

const baseStore = useBaseStore();
</script>

<template>
    <div class="play-learn-dropdown dropdown">
        <div class="inner-container">
            <ul @click="baseStore.closeLearnEarnDropdown" class="list">
                <li class="item">
                    <router-link to="/academy" class="link">
                        <div class="icon-container">
                            <img src="@/assets/svg/nav/academy.svg" alt="" class="icon">
                        </div>
                        <span>Academy</span>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/gameList" class="link">
                        <div class="icon-container">
                            <img src="@/assets/svg/nav/games.svg" alt="" class="icon">
                        </div>
                        <span>Games</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.play-learn-dropdown {
    position: fixed;
    top: 5.5rem;
    left: 23%;
    border-radius: 1rem;
    width: 30rem;
    padding: 2.25rem 0;
    filter: drop-shadow(0 0 2rem rgba(0, 0, 0, .3));
    backdrop-filter: blur(80px);
    background-color: rgba(#1B1B1B, .8);

    @media only screen and (min-width: 1920px) {
        left: calc((100vw - 1920px) / 2 + 40rem);
    }

    @media only screen and (max-width: 850px) {
        position: absolute;
        top: 105%;
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