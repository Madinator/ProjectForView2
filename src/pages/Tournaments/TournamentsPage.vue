<script setup lang="ts">
import GameCard from '@/components/Reusable/Tournaments/GameCard.vue'
import GameFilters from '@/components/Singular/Tournaments/GameFilters.vue'

// DEFAULT DESKTOP RESOLUTION
const bannerBaseWidth = 1920;
const bannerBaseHeight = 830;

// DEFAULT MOBILE RESOLUTION
const bannerBaseWidthMobile = 375;
const bannerBaseHeightMobile = 570;


</script>

<template>
    <div class="page page-tournaments">
        <section class="page-tournaments__promo desktop">
            <div class="inner-container-banner">
                <div class="page-tournaments__promo__header">
                    <h1 class="page-tournaments__promo__header__title">Tournaments</h1>
                    <p class="page-tournaments__promo__header__descr">Tournaments description Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit,<br />sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
            </div>
        </section>
        <section class="page-tournaments__promo-mobile mobile">
            <div class="inner-container-banner">
                <div class="page-tournaments__promo-mobile__header">
                    <h1 class="page-tournaments__promo-mobile__header__title">Tournaments</h1>
                    <p class="page-tournaments__promo-mobile__header__descr">Tournaments description Lorem ipsum dolor
                        sit
                        amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </section>
        <div class="inner-container">
            <section class="page-tournaments__game-list">
                <div class="page-tournaments__game-list__filter">
                    <GameFilters />
                </div>
                <div class="page-tournaments__game-list__box">
                    <GameCard v-for="i in 4" />
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-tournaments {
    font-size: 500;
    background: linear-gradient(254.49deg, #380166 -31.18%, #0E0113 95.96%), linear-gradient(196.65deg, #0D2E5A 2.27%, #5F92E6 104.63%), #000000;

    @media (max-width: 850px) {
        background-color: #290248;
    }

    &__promo {
        aspect-ratio: v-bind('bannerBaseWidth')/v-bind('bannerBaseHeight');
        background-image: url('@/assets/img/tournaments/promo-bg.png');
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: center;

        &__header {

            &__title {
                font-family: "DELIRIUM";
                font-weight: 400;
                font-size: 22.5rem;
                line-height: 22.3rem;
            }

            &__descr {
                font-size: 1.7rem;
                line-height: 120%;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                    opacity: 0.8;

                    br {
                        display: none;
                    }
                }
            }
        }
    }

    &__game-list {

        &__box {
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            @media only screen and (max-width: 1100px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

    }

    &__promo-mobile {
        background-image: url('@/assets/img/tournaments/promo-bg-mobile.png');
        background-size: cover;

        max-height: 100vh;

        @media only screen and (max-width: 500px) and (min-height: 600px) {
            aspect-ratio: v-bind('bannerBaseWidthMobile')/v-bind('bannerBaseHeightMobile');
            max-height: none;
        }

        display: flex;
        flex-direction: column;
        justify-content: center;

        &__header {
            width: 100%;

            @media only screen and (min-width: 600px) {
                width: 60%;
            }

            &__title {
                font-family: "DELIRIUM";
                font-weight: 400;
                font-size: 15rem;
                line-height: 15rem;
            }

            &__descr {
                font-size: 1.7rem;
                line-height: 120%;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                    opacity: 0.8;

                    br {
                        display: none;
                    }
                }
            }
        }
    }

    &__game-list {

        &__box {
            @media only screen and (max-width: 850px) {
                padding-top: 7rem;
                grid-template-columns: 100%;
            }
        }

        &__filter {
            @media only screen and (max-width: 850px) {
                left: 0;
                position: absolute;
                width: 100%;
                -ms-overflow-style: none;
                overflow: -moz-scrollbars-none;

                ::-webkit-scrollbar {
                    width: 0;
                }
            }
        }
    }

    .inner-container {
        @include width-restriction;
        padding: 5.1rem 6.35rem 6.93rem;

        @media only screen and (max-width: 850px) {
            padding: 5.1rem 0 6.93rem;
        }

    }

    :deep(.inner-container-banner) {
        @include width-restriction;
        padding: 0 6.35rem 0 13em;

        @media only screen and (max-width: 850px) {
            padding: calc(75vh - 3rem) 0 10rem;
        }


        @media only screen and (max-width: 500px) and (min-height: 600px) {
            padding: calc(100% - 3rem) 0 3rem;
        }
    }
}
</style>