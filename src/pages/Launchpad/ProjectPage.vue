<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LaunchpadFilters from '@/components/Singular/Launchpad/LaunchpadFilters.vue';
import Popup from '@/components/Singular/Launchpad/Popup.vue';

// GO BACK BUTTON HANDLER
const router = useRouter();

const handleGoBack = () => {
    router.go(-1);
}

// POPUP STATUS
const isPopupOpen = ref(false);

// OPEN POPUP HANDLER
const handleOpenPopup = () => {
    isPopupOpen.value = !isPopupOpen.value;
}

</script>

<template>
    <div class="page page-project">
        <div class="inner-container">
            <button class="page-project__back-button" @click="handleGoBack()">Back</button>
            <section class="page-project__header">
                <img src="@/assets/img/Launchpad/projectPage-img.png" alt="Card-Img"
                    class="page-project__header__img" />
                <div class="page-project__header__descr">
                    <div class="page-project__header__descr__title">
                        <span class="page-project__header__descr__title__name">Project Name</span>
                        <span class="page-project__header__descr__title__end-time">End time 2022-05-29</span>
                    </div>
                    <p class="page-project__header__descr__text">Project Description Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button class="page-project__header__descr__learn-more-button">Learn more</button>
                    <button @click="handleOpenPopup"
                        class="page-project__header__descr__invest-button btn-purple desktop">Invest now</button>
                </div>
                <div class="page-project__header__info">
                    <div class="page-project__header__info__el">
                        <span class="page-project__header__info__el__title">Participants:</span>
                        <span class="page-project__header__info__el__title">Total staked:</span>
                    </div>
                    <div class="page-project__header__info__el numbers">
                        <span class="page-project__header__info__el__number">124 890</span>
                        <span class="page-project__header__info__el__number">7 985 905</span>
                    </div>
                </div>
                <button @click="handleOpenPopup"
                    class="page-project__header__descr__invest-button btn-purple mobile">Invest now</button>
                <div class="page-project__filters mobile">
                    <LaunchpadFilters />
                </div>
            </section>
            <section class="page-project__filters desktop">
                <LaunchpadFilters />
            </section>
            <section class="page-project__content desktop">
                <div class="page-project__content__column">
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Total Rewards</span>
                        <span class="page-project__content__column__el__text">7 985 905</span>
                    </div>
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Total Staked</span>
                        <span class="page-project__content__column__el__text">9 985 905</span>
                    </div>
                </div>
                <div class="page-project__content__column">
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Staking Token</span>
                        <span class="page-project__content__column__el__text">Token</span>
                    </div>
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Annual Percentage Yield</span>
                        <span class="page-project__content__column__el__text">2,5 %</span>
                    </div>
                </div>
                <div class="page-project__content__column">
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Today’s Pool Rewards</span>
                        <span class="page-project__content__column__el__text">585 905</span>
                    </div>
                </div>
            </section>
            <section class="page-project__content mobile">
                <div class="page-project__content__column">
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Annual Percentage Yield</span>
                        <span class="page-project__content__column__el__text">2,5 %</span>
                    </div>
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Today’s Pool Rewards</span>
                        <span class="page-project__content__column__el__text">585 905</span>
                    </div>
                </div>
                <div class="page-project__content__column">
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Total Staked</span>
                        <span class="page-project__content__column__el__text">9 985 905</span>
                    </div>
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Staking Token</span>
                        <span class="page-project__content__column__el__text">Token</span>
                    </div>
                </div>
                <div class="page-project__content__column bottom">
                    <div class="page-project__content__column__el">
                        <span class="page-project__content__column__el__title">Total Rewards</span>
                        <span class="page-project__content__column__el__text">7 985 905</span>
                    </div>
                </div>
            </section>
            <section class="page-project__footer">
                <div class="page-project__footer__column">
                    <div class="page-project__footer__column__el">
                        <span class="page-project__footer__column__el__title">My Funds</span>
                        <span class="page-project__footer__column__el__text">16 203</span>
                    </div>
                </div>
                <div class="page-project__footer__column">
                    <div class="page-project__footer__column__el">
                        <span class="page-project__footer__column__el__title">My Rewards</span>
                        <div class="page-project__footer__column__el__text-box">
                            <span class="page-project__footer__column__el__text">97 809</span>
                            <span class="page-project__footer__column__el__text-box__small">The rewards have been sent
                                to your wallet</span>
                        </div>
                    </div>
                </div>
                <div class="page-project__footer__column desktop">
                </div>
            </section>
        </div>
        <div class="page-project__popup" :class="{ closed: !isPopupOpen }">
            <Popup :handler="{ handleOpenPopup }" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-project {
    background: linear-gradient(70.87deg, #010001 -10.19%, #27052D 126.44%);
    min-height: 100vh;

    &__back-button {
        background: url('@/assets/svg/Tournaments/back-arrow.svg') no-repeat;
        background-position: left;
        padding-left: 2.7rem;
        font-size: 1.54rem;
        line-height: 85%;
        align-self: flex-start;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }

        &:hover {
            opacity: 0.8;
        }
    }

    &__header {
        margin-top: 2.75rem;
        display: flex;

        @media only screen and (max-width: 850px) {
            flex-direction: column;
            position: relative;
            padding-bottom: 10rem;
        }

        &__img {
            border-radius: 15px;
            width: calc(420px * 100vw / 1920px);
            max-width: 420px;
            mix-blend-mode: lighten;

            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }

        &__descr {
            display: flex;
            flex-direction: column;
            margin-left: 2.57rem;
            max-width: 40rem;

            @media only screen and (max-width: 850px) {
                margin-left: 0;
            }

            &__title {
                display: flex;
                justify-content: space-between;

                @media only screen and (max-width: 850px) {
                    flex-direction: column-reverse;
                }

                &__name {
                    font-weight: 600;
                    font-size: 3.43rem;
                    line-height: 4.21rem;
                    color: var(--color-white);

                    @media only screen and (max-width: 850px) {
                        font-size: 31px !important;
                    }
                }

                &__end-time {
                    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.047) 0.24%, rgba(240, 237, 247, 0.0245) 94.13%);
                    backdrop-filter: blur(8px);
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.37);
                    padding: 0.7rem 1.54rem;
                    font-size: 1.37rem;
                    line-height: 140%;
                    display: flex;
                    align-items: center;
                    color: var(--color-white);

                    @media only screen and (max-width: 850px) {
                        align-self: flex-start;
                        margin-bottom: 2rem;
                        margin-left: 0;
                        font-size: 13px !important;
                    }
                }
            }

            &__text {
                margin-top: 2.6rem;
                font-size: 1.54rem;
                line-height: 120%;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }

            &__learn-more-button {
                margin-top: 1.3rem;
                font-size: 1.54rem;
                line-height: 120%;
                text-decoration-line: underline;
                align-self: flex-start;

                @media only screen and (max-width: 850px) {
                    font-size: 17px !important;
                }

                &:hover {
                    opacity: 0.7;
                }
            }

            &__invest-button {
                margin-top: 3.87rem;
                font-weight: 600;
                font-size: 2.06rem;
                line-height: 85%;
                padding: 1.1rem 5.6rem;
                white-space: nowrap;
                align-self: flex-start;

                @media only screen and (max-width: 850px) {
                    background: #B960FF;
                    border-radius: 10px;
                    width: 100%;
                    font-size: 15px !important;
                }
            }
        }

        &__info {
            margin-left: 12rem;
            display: grid;
            grid-template-columns: 9.5rem 9.5rem;
            align-items: center;
            gap: 3.34rem;

            @media only screen and (max-width: 850px) {
                margin-top: 2rem;
                display: flex;
                justify-content: space-between;
                margin-left: 0;
            }

            &__el {
                display: flex;
                flex-direction: column;
                gap: 2.9rem;

                &.numbers {
                    gap: 2.2rem;
                }

                &__title {
                    font-weight: 500;
                    font-size: 1.71rem;
                    line-height: 2.06rem;
                    color: var(--color-white);

                    @media only screen and (max-width: 850px) {
                        opacity: 0.6;
                        font-size: 15px !important;
                    }
                }

                &__number {
                    font-weight: 500;
                    font-size: 2.06rem;
                    line-height: 140%;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }
            }
        }
    }

    &__filters {
        margin-top: 6rem;

        @media only screen and (max-width: 850px) {
            left: -2rem;
            position: absolute;
            bottom: -5rem;
            width: 100vw;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;

            ::-webkit-scrollbar {
                width: 0;
            }
        }

        @media only screen and (min-width: 400px) and (max-width: 850px) {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    &__content {
        margin: 5rem 0 3rem 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        @media only screen and (max-width: 850px) {
            grid-template-columns: repeat(2, 1fr);
        }

        &__column {
            display: flex;
            flex-direction: column;
            gap: 3.43rem;


            &.bottom {
                margin-top: 3.43rem;
            }

            &__el {
                display: flex;
                flex-direction: column;
                gap: 0.7rem;

                &__title {
                    font-size: 1.71rem;
                    line-height: 140%;

                    @media only screen and (max-width: 850px) {
                        opacity: 0.6;
                        font-size: 13px !important;
                    }
                }

                &__text {
                    font-weight: 500;
                    font-size: 2.06rem;
                    line-height: 140%;

                    @media only screen and (max-width: 850px) {
                        font-size: 17px !important;
                    }
                }
            }
        }
    }

    &__footer {
        padding-top: 3rem;
        border-top: 1px solid rgba(242, 242, 242, 0.2);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: flex-end;

        @media only screen and (max-width: 850px) {
            display: flex;
            flex-direction: row-reverse;
        }

        &__column {
            display: flex;
            flex-direction: column;
            gap: 3.43rem;

            &__el {
                display: flex;
                flex-direction: column;
                gap: 0.7rem;


                &__title {
                    font-weight: 600;
                    font-size: 3.61rem;
                    line-height: 140%;
                    color: var(--color-purple-dark);

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }

                &__text {
                    font-size: 3.43rem;
                    line-height: 140%;

                    @media only screen and (max-width: 850px) {
                        font-size: 23px !important;
                    }
                }

                &__text-box {
                    display: flex;
                    gap: 0.9rem;

                    @media only screen and (max-width: 850px) {
                        display: flex;
                        flex-direction: column;
                    }

                    &__small {
                        font-size: 1.54rem;
                        line-height: 140%;
                        color: #714079;
                        align-self: flex-end;
                        margin-bottom: 0.53rem;

                        @media only screen and (max-width: 850px) {
                            width: 60%;
                            align-self: flex-start;
                            font-size: 13px !important;
                        }
                    }
                }
            }
        }
    }

    &__popup {
        transition: all .3s;
    }

    .inner-container {
        @include width-restriction;
        padding: 8.6rem 6.35rem 6rem;
        display: flex;
        flex-direction: column;

        @media only screen and (max-width: 850px) {
            padding: 8.6rem 0 6rem;
        }
    }

}
</style>