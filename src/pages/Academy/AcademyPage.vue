<script setup lang="ts">
import AcademyFilters from '@/components/Singular/Academy/AcademyFilters.vue';
import { ref } from 'vue';

// CARDS DATA 
const data = ref(
    [
        {
            position: 0,
            name: 'Creatives Training',
            type: 'Creator',
            class: 'creator',
            date: 'September - October',
            text: 'The training will be provided\n based on the games incubated\n by Earn.',
            bg: '/img/Academy/creator-bg.png',
            img: '/img/Academy/creator-img.png',
            light: '',
            link: '/courses/creativeTraining',
            isHover: false,
        },
        {
            position: 1,
            name: 'GamePlay Training',
            type: 'Gamer',
            class: 'gamer',
            date: 'September - October',
            text: 'The training will be provided\n based on the games incubated\n by Earn.',
            bg: '/svg/Academy/gamer-background.svg',
            img: '/img/Academy/gamer-img.png',
            light: '',
            link: '/courses/gameplayTraining',
            isHover: false,
        },
        {
            position: 2,
            name: 'Web 3.0 Basics',
            type: 'Web 3.0',
            class: 'web3-basic',
            date: 'September - October',
            text: 'The training will be provided\n based on the games incubated\n by Earn.',
            bg: '/img/Academy/web3-basic-bg.png',
            img: '/img/Academy/web3-basic-img.png',
            light: '/svg/Academy/web3-basic-light.svg',
            link: '/courses/web3Basics',
            isHover: false,
        },
        {
            position: 3,
            name: 'Web 3.0\n Developer',
            type: 'Web 3.0',
            class: 'web3-developer',
            date: 'September - October',
            text: 'The training will be provided\n based on the games incubated\n by Earn.',
            bg: '/img/Academy/web3-developer-bg.png',
            img: '/img/Academy/web3-developer-img.png',
            light: '',
            link: '/courses/web3Developer',
            isHover: false,
        },
        {
            position: 4,
            name: 'Trading Bacics',
            type: 'Trader',
            class: 'trader',
            date: 'September - October',
            text: 'The training will be provided\n based on the games incubated\n by Earn.',
            bg: '/img/Academy/trader-bg.png',
            img: '/img/Academy/trader-img.png',
            light: '',
            link: '/courses/tradingBasics',
            isHover: false,
        },
        {
            position: 5,
            name: 'GameDev Training',
            type: 'Trader',
            class: 'trader',
            date: 'September - October',
            text: 'The training will be provided\n based on the games incubated\n by Earn.',
            bg: '/img/Academy/trader-bg.png',
            img: '/img/Academy/gamedev-img.png',
            light: '',
            link: '/courses/tradingBasics',
            isHover: false,
        },
    ]);

const handleChangePosition = (position: number, isHover: boolean): void => {
    if (!isHover) {
        data.value.forEach(el => {
            el.position > position ? el.position-- : (el.position === position ? el.isHover = !el.isHover : null);
        });
    }
}

const handleChangePositionOnBlur = (position: number): void => {
    data.value.forEach(el => {
        el.position >= position ? (el.isHover === false ? el.position++ : el.isHover = false) : el.position = el.position;
    });
}

</script>

<template>
    <div class="page page-academy">
        <div class="page-academy__banner">
            <div class="inner-container-banner">
                <h2 class="page-academy__banner__title title-primary">earn.games</h2>
                <img src="@/assets/img/Academy/academy.png" alt="Academy" class="page-academy__banner__img">
                <p class="page-academy__banner__descr desktop">The goal of the EG academy is to develop, organize and
                    share
                    world-class<br />
                    educational content on Web 3.0 and blockchain-related topics by making it easily<br />
                    accessible to the community. EG Academy is the first of many steps to achieve our<br />
                    goal of building an equitable value-based society.</p>
                <p class="page-academy__banner__descr mobile">The goal of the EG academy is to<br />
                    develop, organize and share world-class<br />
                    educational content on Web 3.0 and<br />
                    blockchain-related topics by making it<br />
                    easily accessible to the community. EG<br />
                    Academy is the first of many steps to<br />
                    achieve our goal of building an equitable<br />
                    value-based society.</p>
            </div>
        </div>
        <div class="inner-container">
            <div class="page-academy__content">
                <div class="page-academy__content__info">
                    <h3 class="page-academy__content__info__title title-primary desktop">Avaible<br />coursers</h3>
                    <h3 class="page-academy__content__info__title title-primary mobile">Avaible coursers</h3>
                    <div class="page-academy__content__info__filters">
                        <AcademyFilters />
                    </div>
                </div>
                <div class="page-academy__content__box desktop">
                    <div class="page-academy__content__box__scroll">
                        <router-link v-for="item in data" :to=item.link class="page-academy__content__box__card"
                            @mouseover="handleChangePosition(item.position, item.isHover)"
                            @mouseleave="handleChangePositionOnBlur(item.position)"
                            :style="{ transform: `translateX(${-25.8 * item.position}rem)` }">
                            <img :src=item.bg alt="" class="page-academy__content__box__card__bg" :class=item.class>
                            <img v-if="item.light.length > 0" :src=item.light alt=""
                                class="page-academy__content__box__card__bg light">
                            <img :src=item.img alt="img" class="page-academy__content__box__card__img">
                            <div class="page-academy__content__box__card__wrapper">
                                <span class="page-academy__content__box__card__type">{{ item.type }}</span>
                                <span class="page-academy__content__box__card__date">{{ item.date }}</span>
                                <span class="page-academy__content__box__card__name">{{ item.name }}</span>
                                <p class="page-academy__content__box__card__info">{{ item.text }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="page-academy__content__mobile-box mobile">
                    <div class="page-academy__content__box">
                        <router-link v-for="item in data" :to=item.link class="page-academy__content__box__card">
                            <img :src=item.bg alt="" class="page-academy__content__box__card__bg" :class=item.class>
                            <img v-if="item.light.length > 0" :src=item.light alt=""
                                class="page-academy__content__box__card__bg light">
                            <img :src=item.img alt="img" class="page-academy__content__box__card__img">
                            <div class="page-academy__content__box__card__wrapper">
                                <span class="page-academy__content__box__card__type">{{ item.type }}</span>
                                <span class="page-academy__content__box__card__date">{{ item.date }}</span>
                                <span class="page-academy__content__box__card__name">{{ item.name }}</span>
                                <p class="page-academy__content__box__card__info">{{ item.text }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-academy {
    background: linear-gradient(201.57deg, #250E49 54.42%, #4C1C81 120.19%);
    min-height: 100vh;

    @media only screen and (max-width: 850px) {
        background: linear-gradient(190.48deg, #200A41 13.63%, #200943 102.75%);
    }

    &__banner {
        background-image: url('@/assets/img/Academy/background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: auto;
        position: relative;

        @media only screen and (max-width: 850px) {
            background-position: 5%;
        }

        &__title {
            font-size: 5.5rem;
            line-height: 5.5rem;

            @media only screen and (max-width: 850px) {
                margin-top: 3rem;
            }
        }

        &__img {
            position: absolute;
            height: 67rem;
            top: -4.5rem;
            mix-blend-mode: hard-light;

            @media only screen and (max-width: 850px) {
                height: 31rem;
                margin-top: 18rem;
            }
        }

        &__descr {
            margin-top: 26rem;
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 138%;
            text-align: center;
            width: auto;

            @media only screen and (max-width: 850px) {
                font-size: 17px !important;
            }
        }
    }

    &__content {
        display: flex;
        margin-left: 4.3rem;
        height: 69rem;
        overflow: hidden;

        @media only screen and (max-width: 850px) {
            flex-direction: column;
            height: auto;
            margin-left: 0;
        }

        &__info {
            display: flex;
            flex-direction: column;

            &__filters {
                @media only screen and (max-width: 850px) {
                    position: absolute;
                    top: 10rem;
                    left: -2rem;
                    width: 100vw;
                    -ms-overflow-style: none;
                    overflow: -moz-scrollbars-none;

                    ::-webkit-scrollbar {
                        width: 0;
                    }
                }
            }

            &__title {
                margin: 3.9rem 0;
                font-size: 8.6rem;
                line-height: 7.4rem;

                @media only screen and (max-width: 850px) {
                    padding-bottom: 70rem;
                }
            }
        }

        &__mobile-box {
            position: absolute;
            top: 20rem;
            left: -2rem;
            width: 100vw;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;

            ::-webkit-scrollbar {
                width: 0;
            }


            @media only screen and (min-width: 600px) {
                left: -17%;
            }

            @media only screen and (min-width: 800px) {
                left: -21%;
            }
        }

        &__box {
            margin-left: 3rem;
            display: flex;
            overflow-x: scroll;
            overflow-y: hidden;
            margin-bottom: 1rem;

            @media only screen and (min-width: 850px) {
                &::-webkit-scrollbar {
                    height: 12px;
                    width: 12px;
                    /* display: none; */
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 17px;
                    background-color: #b064ea;
                    /* display: none; */
                }

                &::-webkit-scrollbar-track {
                    background-image: linear-gradient(to bottom, #8A2B9A, #660e75);
                    /* background-color: #6d6b8d; */
                    /* display: none; */
                }
            }

            &__scroll {
                width: 154.8rem;
                display: flex;
            }

            @media only screen and (max-width: 850px) {
                position: relative;
                left: 0;
                flex-direction: row;
                overflow-x: scroll;
                white-space: nowrap;
                align-items: center;
                padding: 2rem 0;
                margin-left: 0;
            }

            &__card {
                position: relative;
                background: linear-gradient(193.93deg, #260851 -11.07%, #262348 106.58%);
                height: 69rem;
                width: 51.6rem;
                transition: all .8s;

                &:hover>&__wrapper>&__info {
                    white-space: normal;
                }

                @media only screen and (max-width: 850px) {
                    height: 57.5rem;
                    width: 40rem;

                    &:first-child {
                        margin-left: 2.6rem;
                    }

                    &:last-child {
                        margin-right: 2.6rem;
                    }
                }

                &.all-left {
                    left: -51.6rem;
                }

                &.left {
                    left: -26rem;
                }

                &__bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;

                    &.gamer {
                        mix-blend-mode: hard-light;
                    }

                    &.web3-basic {
                        mix-blend-mode: color-dodge;
                    }

                    &.light {
                        background: radial-gradient(50% 50% at 50% 50%, #C8C3FF 0%, rgba(47, 37, 156, 0) 100%);
                    }
                }

                &__wrapper {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    padding: 3.9rem 2.6rem 5.5rem;
                    height: 100%;
                    width: 51.6rem;
                }

                &__type {
                    font-weight: 600;
                    font-size: 2.06rem;
                    line-height: 112%;
                    letter-spacing: 0.025em;
                    padding: 0.9rem 1.3rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(7.5px);
                    border-radius: 30px;
                    align-self: flex-start;

                    @media only screen and (max-width: 850px) {
                        font-size: 19px !important;
                    }
                }

                &__img {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin-top: auto;
                    margin-bottom: auto;

                    @media only screen and (max-width: 850px) {
                        top: -15%;
                        width: 100%;
                    }
                }

                &__date {
                    margin-top: auto;
                    font-size: 1.71rem;
                    line-height: 112%;
                    letter-spacing: 0.025em;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }

                &__name {
                    margin-top: 1.3rem;
                    font-weight: 600;
                    font-size: 3.1rem;
                    line-height: 112%;
                    letter-spacing: 0.025em;

                    @media only screen and (max-width: 850px) {
                        font-size: 27px !important;
                    }
                }

                &__info {
                    margin-top: 1.71rem;
                    font-size: 1.71rem;
                    line-height: 112%;
                    letter-spacing: 0.025em;
                    white-space: pre-line;

                    @media only screen and (max-width: 850px) {
                        font-size: 17px !important;
                    }
                }
            }
        }

    }

    .inner-container {
        @include width-restriction;
        padding: 0 0 0 6.35rem;
        position: relative;

        @media only screen and (max-width: 850px) {
            padding: 0 0 0 0;
            position: relative;
        }
    }

    .inner-container-banner {
        @include width-restriction;
        padding: 8.6rem 6.35rem 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;


        @media only screen and (max-width: 850px) {
            padding: 8.6rem 0 5rem;
        }
    }
}
</style>