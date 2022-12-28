<script setup lang="ts">
import NavigationButton from '@/components/Reusable/NavigationButton.vue';
import { ref, watch } from 'vue';
import {useRoute} from 'vue-router';

const isAboutActive = ref(true);
const route=useRoute();

const tab = () => {
    isAboutActive.value = !isAboutActive.value;
};

watch(route, () => {
    if(route.path === '/gameAbout') {
        isAboutActive.value = true;
    }
    else {
        isAboutActive.value = false;
    }
})

</script>

<template>
    <div class="page page-game-page">
        <div class="page-game-page__header mobile">
            <img class="page-game-page__logo-mobile" src="@/assets/img/game/gamePageMobile.png" alt="" />
        </div>
        <div class="page-game-page__game">
            <div class="inner-container">
                <span class="page-game-page__type">Action</span>
                <div class="page-game-page__info">
                    <div class="page-game-page__names">
                        <h1 class="page-game-page__title">Earnland</h1>
                        <h1 class="page-game-page__developer">EarnGames</h1>
                    </div>
                    <div class="rating">3.8 Rating</div>
                </div>
                <h1 class="page-game-page__desc">
                    Earnland is a blockchain-based multiplayer online battle arena (MOBA) game designed to combine players' individual techniques and teamwork to challenge themselves in multiple game modes. Different from the current chain games on the market, Earnland is a product that truly integrates all the advantages of traditional mobile games, with a high degree of completion and entertainment, creating a real 'social gaming experience' and profit model.
                </h1>
                <button class="btn-purple page-game-page__play">Play</button>
                <div class="page-game-page__nav">
                    <router-link to="/gameAbout" @click="tab">
                        <NavigationButton name="About" :active="isAboutActive" />
                    </router-link>
                    <router-link to="/gameReview" @click="tab">
                        <NavigationButton name="Reviews" :active="!isAboutActive" />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="page-game-page__main">
            <div class="page-game-page__pages">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.page-game-page {
    background-color: #110B27;
    @media (min-width: 850px) {
        // padding-top: 10.7rem;
        padding-top: 5rem;
    }
    &__logo-mobile {
        top: 0;
        width: 100%;
        position: absolute; 
    }   
    &__game {
        position: relative;
        z-index: 150;
        margin-top: 17.46rem;
        width: 100%;
        background: linear-gradient(0deg, #0C0918 59.09%, rgba(12, 9, 24, 0.828979) 68.42%, rgba(12, 9, 24, 0) 100%);
        @media (min-width: 850px) {
            margin-top: 0;
            background: none;
            width: 100%;
            background: url('@/assets/img/game/GamePageBanner.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .inner-container {
            @include width-restriction;
            padding: 12.67rem 0 0;

            @media (min-width: 850px) {
                padding: 3.42rem 55% 0 6.42rem;
            }

            @media (min-width: 1000px) {
                padding: 3.42rem 64% 0 6.42rem;
            }
        }
    }
    &__type {
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 85%;

        background-color: rgba(255, 255, 255, 0.037);
        border-radius: 12.25rem;

        padding: 1.41rem 3.52rem;
        border: 1px solid #695F78;

        @media (min-width: 850px) {
            display: block;
            width: fit-content;
            padding: 0.85rem 2.14rem;
            font-size: 1.37rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__info {
        margin-bottom: 2.5rem;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        @media (min-width: 850px) {
            margin-top: 1.71rem;
        }
    }
    &__names {
        display: flex;
        flex-flow: column;
        gap: 0.71rem;
        @media (min-width: 850px) {
            gap: 0.68rem;
        }
    }
    &__title {
        font-weight: 700;
        font-size: 5.35rem;
        line-height: 6.62rem;
        @media (min-width: 850px) {
            font-size: 5.48rem;
            line-height: 6.76rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 37px !important;
        }
    }
    &__developer {
        font-weight: 600;
        font-size: 2.53rem;
        line-height: 140%;
        color: #DCB45B;
        @media (min-width: 850px) {
            font-size: 1.54rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    .rating {
        margin-top: 2.22rem;
    }
    &__desc {
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 140%;

        opacity: .8;

        @media only screen and (max-width: 1920px) {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 10;
                    line-clamp: 2; 
            -webkit-box-orient: vertical;
        }

        @media (min-width: 850px) {
            font-size: 1.54rem;
            // width: 47rem;

            @media only screen and (max-width: 1920px) {
                webkit-line-clamp: 7;
            }
        }

        @media only screen and (min-width: 1920px) {
            width: 47rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__play {
        // padding: 1.2rem 3.94rem;
        // border-radius: 1.41rem;
        margin-top: 2.82rem;
        @media (min-width: 850px) {
            font-size: 1.37rem;
            padding: 1rem 2.4rem;
            margin-top: 2.56rem;
        }
    }
    &__nav {
        display: flex;
        flex-flow: row;
        gap: 7.32rem;
        margin-top: 5.91rem;
        position: relative;
        z-index: 1000;
    }
    &__main {
        // padding: 0 3.38rem 4.65rem;
        background-color: #110B27;
        position: relative;
        z-index: 100;
    }
    &__pages {
        padding: 5.63rem 6.35rem 4.65rem;
        @include width-restriction;

        @media only screen and (max-width: 850px) {
            padding: 5.63rem 0 4.65rem;
        }
    }
}
</style>