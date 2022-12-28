<script setup lang="ts">
import { ref } from 'vue';
import { useGameStanding } from '@/stores/gameStanding';
import GameStanding from '../../components/Singular/Tournaments/GameStanding.vue';
import PricePool from '../../components/Singular/Tournaments/PricePool.vue';

// DEFAULT DESKTOP RESOLUTION
const bannerBaseWidth = 1920;
const bannerBaseHeight = 830;

// DEFAULT MOBILE RESOLUTION
const bannerBaseWidthMobile = 375;
const bannerBaseHeightMobile = 716;

// AM I IN CURRENT GAME
const amIInCurrentGame = ref(false);

// ADD MY PLAYER TO CURRENT GAME
const gameStanding = useGameStanding();
const handleJoinGame = () => {
    amIInCurrentGame.value = true;
    gameStanding.addAPlayer({
        playerID: 1234,
        participant: "Karnaval",
        matches: 5,
        time: "12:49",
        deaths: 0,
        isPastWinner: false,
    });
    isGameFinished.value = true;
}

// GAME STATUS
const isGameFinished = ref(false);


</script>

<template>
    <div class="page page-game">
        <section class="page-game__info desktop">
            <div class="page-game__info__bg">
                <div class="inner-container-banner">
                    <div class="page-game__info__header">
                        <router-link class="page-game__info__header__back-button" to="/tournaments">Back</router-link>
                        <span class="page-game__info__header__time">15 September - start at 16:00</span>
                        <h1 class="page-game__info__header__name title-primary">name game</h1>
                        <div class="page-game__info__header__info">
                            <div class="page-game__info__header__info__el">
                                <span class="page-game__info__header__info__el__title">Rules:</span>
                                <span class="page-game__info__header__info__el__descr">Description of the rules</span>
                            </div>
                            <div class="page-game__info__header__info__el">
                                <span class="page-game__info__header__info__el__title">Time:</span>
                                <span class="page-game__info__header__info__el__descr">70 min</span>
                            </div>
                            <div class="page-game__info__header__info__el">
                                <span class="page-game__info__header__info__el__title">Matches:</span>
                                <span class="page-game__info__header__info__el__descr">1</span>
                            </div>
                            <div class="page-game__info__header__info__el">
                                <span class="page-game__info__header__info__el__title">Participants:</span>
                                <span class="page-game__info__header__info__el__descr">126</span>
                            </div>
                        </div>
                        <button id="join-game-button" @click="handleJoinGame()" :class="{active: amIInCurrentGame}"
                            to="/tournaments/game/1" class="page-game__info__header__join-button btn-purple">
                            {{ amIInCurrentGame ? 'You have joined' : 'Join' }}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-game__info-mobile mobile">
            <div class="page-game__info-mobile__bg">
                <div class="inner-container-banner">
                    <div class="page-game__info-mobile__header">
                        <span class="page-game__info-mobile__header__time">15 September - start at 16:00</span>
                        <h1 class="page-game__info-mobile__header__name title-primary">name game</h1>
                        <div class="page-game__info-mobile__header__info">
                            <div class="page-game__info-mobile__header__info__el">
                                <span class="page-game__info-mobile__header__info__el__title">Rules:</span>
                                <span class="page-game__info-mobile__header__info__el__descr">Description of the
                                    rules</span>
                            </div>
                            <div class="page-game__info-mobile__header__info__el">
                                <span class="page-game__info-mobile__header__info__el__title">Time:</span>
                                <span class="page-game__info-mobile__header__info__el__descr">70 min</span>
                            </div>
                            <div class="page-game__info-mobile__header__info__el">
                                <span class="page-game__info-mobile__header__info__el__title">Matches:</span>
                                <span class="page-game__info-mobile__header__info__el__descr">1</span>
                            </div>
                            <div class="page-game__info-mobile__header__info__el">
                                <span class="page-game__info-mobile__header__info__el__title">Participants:</span>
                                <span class="page-game__info-mobile__header__info__el__descr">126</span>
                            </div>
                        </div>
                        <button id="join-game-button" @click="handleJoinGame()" :class="{ active: amIInCurrentGame }"
                            to="/tournaments/game/1" class="page-game__info-mobile__header__join-button btn-purple">
                            {{ amIInCurrentGame ? 'You have joined' : 'Join' }}
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div class="inner-container">
            <section class="page-game__price-pool">
                <PricePool :isGameFinished="isGameFinished" />
            </section>
            <section class="page-game__standing">
                <GameStanding />
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-game {
    font-weight: 500;
    background: linear-gradient(254.49deg, #380166 -31.18%, #0E0113 95.96%), linear-gradient(196.65deg, #0D2E5A 2.27%, #5F92E6 104.63%), #000000;

    &__info {
        aspect-ratio: v-bind('bannerBaseWidth')/v-bind('bannerBaseHeight');
        background-image: url('@/assets/img/tournaments/gamePage-info-bg.png');
        background-size: cover;

        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;

        &__bg {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, #190F2F 16.83%, rgba(25, 15, 47, 0) 101.74%);
        }

        &__header {
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 78rem;

            &__back-button {
                background: url('@/assets/svg/Tournaments/back-arrow.svg') no-repeat;
                background-position: left;
                padding-left: 2.7rem;
                font-size: 1.54rem;
                line-height: 85%;
                align-self: flex-start;

                &:hover {
                    transform: scale(1.1);
                }
            }

            &__time {
                margin-top: 4.7rem;
                font-size: 2.05rem;
                line-height: 120%;
                color: var(--color-white);
                opacity: 0.8;
                text-transform: uppercase;

                @media only screen and (max-width: 1000px) {
                    margin-top: 2.5rem;
                }

                @media only screen and (max-width: 850px) {
                    font-size: 16px !important;
                }
            }

            &__name {
                margin-top: 2rem;
                font-size: 17.12rem;
                line-height: 17.12rem;
            }

            &__join-button {
                align-self: flex-start;
                height: 3.25rem;
                font-size: 1.71rem;
                line-height: 85%;
                margin-top: 1.28rem;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                }

                &.active {
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--color-white);
                }
            }

            &__info {
                display: flex;
                flex-wrap: wrap;

                &__el {
                    width: 50%;
                    align-items: center;
                    display: flex;
                    margin-bottom: 2.15rem;

                    &__title {
                        font-weight: 600;
                        font-size: 2.05rem;
                        line-height: 120%;

                        @media only screen and (max-width: 850px) {
                            font-size: 17px !important;
                        }
                    }

                    &__descr {
                        font-weight: 400;
                        font-size: 2.05rem;
                        line-height: 120%;
                        margin-left: 1rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 17px !important;
                        }
                    }
                }

            }
        }
    }

    &__info-mobile {
        background-image: url('@/assets/img/tournaments/gamePage-info-bg-mobile.png');
        background-size: cover;

        height: 100vh;

        @media only screen and (max-width: 500px) and (min-height: 600px) {
            aspect-ratio: v-bind('bannerBaseWidthMobile')/v-bind('bannerBaseHeightMobile');
            height: auto;
        }

        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;

        &__bg {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(0deg, rgba(25, 15, 47, 0.9) 24.1%, rgba(25, 15, 47, 0.711) 45.33%, rgba(25, 15, 47, 0) 94.74%);
        }

        &__header {
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 78rem;

            &__time {
                margin-top: 4.7rem;
                font-size: 2.05rem;
                line-height: 120%;
                color: var(--color-white);
                opacity: 0.8;
                text-transform: uppercase;

                @media only screen and (max-width: 1000px) {
                    margin-top: 2.5rem;
                }

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }

            &__name {
                margin-top: 2rem;
                font-size: 17.12rem;
                line-height: 17.12rem;

            }

            &__join-button {
                align-self: flex-start;
                height: 3.25rem;
                font-size: 1.71rem;
                line-height: 85%;
                margin-top: 1.28rem;

                &.active {
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--color-white);
                }

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                    height: auto;
                }
            }

            &__info {
                display: flex;
                flex-direction: column;

                &__el {
                    width: 50%;
                    align-items: center;
                    display: flex;
                    margin-bottom: 2.15rem;

                    &__title {
                        font-weight: 600;
                        font-size: 2.05rem;
                        line-height: 120%;

                        @media only screen and (max-width: 850px) {
                            font-size: 17px !important;
                        }
                    }

                    &__descr {
                        font-weight: 400;
                        font-size: 2.05rem;
                        line-height: 120%;
                        margin-left: 1rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 17px !important;
                        }
                    }
                }

            }
        }

    }

    &__price-pool {
        margin: 3.85rem 0 5.13rem;

        @media only screen and (max-width: 850px) {
            margin: 0;
        }
    }

    &__standing {
        margin-top: 5.13rem;
    }

    .inner-container {
        @include width-restriction;
        padding: 5.1rem 6.35rem 8rem;

        @media only screen and (max-width: 850px) {
            padding: 5.1rem 0 8rem;
        }
    }

    .inner-container-banner {
        @include width-restriction;
        padding: 13rem 6.35rem 0;

        @media only screen and (max-width: 1200px) {
            padding: 10rem 6.35rem 0;
        }

        @media only screen and (max-width: 1000px) {
            padding: 8rem 6.35rem 0;
        }

        @media only screen and (max-width: 850px) {
            padding: calc(40vh - 3rem) 0 10rem;
        }

        @media only screen and (max-width: 500px) and (min-height: 600px) {
            padding: calc(100% - 6rem) 0 0;
        }


        @media only screen and (max-width: 850px) and (max-height: 450px) and (min-width: 600px) {
            padding: calc(20vh - 3rem) 0 10rem;
        }
    }
}
</style>