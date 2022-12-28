<script setup lang="ts">
import gsap from 'gsap';
import Cards from '@/components/Reusable/MysteryBox/Cards.vue';
import CardsRandom from '@/components/Reusable/MysteryBox/CardsRandom.vue';
import Box from '@/components/Singular/MysteryBox/Box.vue';

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let vw = windowWidth / 100;

let ctx: any;

const handleOpenBox = () => {
    scrollTo(0, 0);

    const cardWidth = document.querySelector('.card')?.clientWidth || 0;
    const cardHeight = document.querySelector('.card')?.clientHeight || 0;

    const bgWidth = document.querySelector('.page-mystery-box__roll-result__container')?.clientWidth || 0;
    const resultHeight = document.querySelector('.page-mystery-box__roll-result')?.clientHeight || 0;
    const resultContainerHeight = document.querySelector('.page-mystery-box__roll-result__container')?.clientHeight || 0;

    let cardsOnScreen = 20 - Math.round(windowWidth / cardWidth);
    let scaleCard = 1.15;
    let YPosition = 0;
    let XPositionCard = cardWidth * 5 + 25 * vw;
    let XPositionBg = -(15 * vw);
    let XPositionBox = 0;
    let XPositionBox2 = 100 * vw;
    let XPositionBox3 = 100 * vw;
    let newCardHeight = cardHeight;

    if (windowHeight < 600) {
        if (windowHeight + resultContainerHeight + 100 < resultHeight) {
            newCardHeight = windowHeight;
            scaleCard = newCardHeight / cardHeight;
            YPosition = 0;
        } else {
            newCardHeight = (resultHeight - resultContainerHeight - 180);
            scaleCard = newCardHeight / cardHeight;
            YPosition = ((resultHeight - cardHeight) / 2 - 80);
        }
    } else if (windowWidth < 850) {
        XPositionBox2 = -20 * vw;
        XPositionBox3 = 20 * vw;
        newCardHeight = (resultHeight - resultContainerHeight - 160);
        scaleCard = newCardHeight / cardHeight;
        YPosition = ((resultHeight - cardHeight) / 2 - 40);
    }

    if (windowWidth < 850 && windowHeight < 550) {
        scaleCard = 0.6;
    }

    if (windowWidth < 850 && windowHeight < 350) {
        scaleCard = 0.6;
    }

    if (windowWidth > 2400) {
        XPositionBg = -(10 * vw);
        XPositionBox = -5 * vw;
    } else if (windowWidth < 1300 && windowWidth >= 850) {
        cardsOnScreen = 19 - Math.round(windowWidth / cardWidth);
        XPositionCard = cardWidth * 5 + 20 * vw;
        XPositionBg = -(15 * vw);
        XPositionBox = -5 * vw;
    } else if (windowWidth < 850 && windowWidth > 600) {
        cardsOnScreen = 19 - Math.round(windowWidth / cardWidth);
        XPositionCard = cardWidth * 5 + ((windowWidth - cardWidth * scaleCard) / 2);
        XPositionBg = (windowWidth - bgWidth) / 2;
    } else if (windowWidth < 600 && windowWidth > 450) {
        cardsOnScreen = 18 - Math.round(windowWidth / cardWidth);
        XPositionCard = cardWidth * 5 + ((windowWidth - cardWidth * scaleCard) / 2);
        XPositionBg = (windowWidth - bgWidth) / 2;
    } else if (windowWidth < 450 && windowWidth > 400) {
        cardsOnScreen = 18.5 - Math.round(windowWidth / cardWidth);
        XPositionCard = cardWidth * 5 + ((windowWidth - cardWidth * scaleCard) / 2);
        XPositionBg = (windowWidth - bgWidth) / 2;
    } else if (windowWidth < 400) {
        cardsOnScreen = 17.6 - Math.round(windowWidth / cardWidth);
        XPositionCard = cardWidth * 5 + ((windowWidth - cardWidth * scaleCard) / 2);
        XPositionBg = (windowWidth - bgWidth) / 2;
    } else {
        cardsOnScreen = 20 - Math.round(windowWidth / cardWidth);
        scaleCard = 1.15;
        XPositionBox = -5 * vw;
    }

    if (windowWidth < 850 && windowHeight < 550) {
        YPosition = YPosition + 40;
    }

    if (windowWidth < 850 && windowHeight < 350) {
        YPosition = YPosition + 100;
    }

    ctx = gsap.context(() => {
        const openBox = gsap.timeline({});

        if (windowHeight < 500) {
            YPosition = 10;
            openBox.set('.card', { scale: 0.6 })
        }

        if (windowHeight < 700) {
            openBox.set('.box-1', { display: 'none' })
                .set('.box-2', { display: 'none' })
                .set('.box-3', { display: 'none' })
        }

        openBox.add('preperation')
            .set('html', { overflowY: "hidden" }, 'preperation')
            .set('.page-mystery-box__first-section', { height: '100vh' }, 'preperation')
            .set('.page-mystery-box__roll', { opacity: 1, zIndex: 1000000 }, 'preperation')
            .to('.page-mystery-box__case', { duration: 1.5, x: -100 * vw, ease: "linear" }, 'preperation')
            .to('.box-1', { duration: 1.5, x: XPositionBox, ease: "linear" }, 'preperation')
            .to('.box-2', { duration: 1.5, x: XPositionBox2, ease: "linear" }, 'preperation')
            .to('.box-3', { duration: 1.5, x: XPositionBox3, ease: "linear" }, 'preperation')
            .to('.light-left', { duration: 1.5, x: -5 * vw, ease: "linear" }, 'preperation')
            .to('.light-right', { duration: 1.5, x: -5 * vw, ease: "linear" }, 'preperation')
            .from('.page-mystery-box__roll', { duration: 1, delay: 2, x: 105 * vw }, 'preperation')

            .add('roll')
            .to('.page-mystery-box__roll', { duration: 1, delay: 2, x: -cardWidth * cardsOnScreen, immediateRender: false }, 'roll')

            .add('prize')
            .fromTo('.page-mystery-box__roll', { x: -cardWidth * cardsOnScreen }, { duration: 1.5, delay: .5, x: -cardWidth * 22, immediateRender: false }, 'prize')
            .to('.card17', { duration: 1.5, delay: .5, autoAlpha: 1, y: -YPosition, x: XPositionCard, scale: scaleCard }, 'prize')
            .set('.page-mystery-box__roll-result', { zIndex: 100000 }, 'prize')
            .to('.page-mystery-box__roll-result', { duration: 1.5, delay: .5, opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.87)" }, 'prize')
            .fromTo('.page-mystery-box__roll-result__container', { x: 1000 }, { duration: 1.5, delay: .5, x: -XPositionBg }, 'prize')

        if (windowWidth < 850) {
            openBox
                .to('.page-mystery-box__first-section__bg', { display: 'none' }, 'prize')
                .to('.page-mystery-box__first-section', { overflowY: 'scroll' }, 'prize')
                .to('.page-mystery-box__second-section', { display: 'none' }, 'prize')
        }
    })

}

const handleClose = () => {
    ctx.revert();
}

</script>


<template>
    <div class="page page-mystery-box">
        <section class="page-mystery-box__first-section">
            <CardsRandom class="page-mystery-box__roll" />
            <div class="page-mystery-box__roll-result">
                <div class="page-mystery-box__roll-result__container">
                    <span class="page-mystery-box__roll-result__container__type">SSR</span>
                    <p class="page-mystery-box__roll-result__container__title">Orange Gen 0 Hero Ticket</p>
                    <p class="page-mystery-box__roll-result__container__text desktop">BurgerCities is a one-stop
                        play&earn
                        MetaFi platform. Heroes are unique NFT assets with a variety of uses, which will be the central
                        part of the gameplay in BurgerCities. Among all generations of Heroes, Gen 0 Heroes are limited
                        in number and extremely rare.They could be used to participate in a range of different
                        activities, like quests, combat with monsters, PK, land management, PVP, and more.</p>
                    <div class="page-mystery-box__roll-result__container__info">
                        <div class="page-mystery-box__roll-result__container__info__el">
                            <span class="page-mystery-box__roll-result__container__info__el__title">Chance</span>
                            <span class="page-mystery-box__roll-result__container__info__el__number">70.00%</span>
                        </div>
                        <div class="page-mystery-box__roll-result__container__info__el">
                            <span class="page-mystery-box__roll-result__container__info__el__title">Count</span>
                            <span class="page-mystery-box__roll-result__container__info__el__number">700</span>
                        </div>
                    </div>
                    <div class="page-mystery-box__roll-result__container__buttons">
                        <router-link to="/NFTItem" class="page-mystery-box__roll-result__container__buttons__open">In
                            store</router-link>
                        <button @click="handleClose"
                            class="page-mystery-box__roll-result__container__buttons__store">Back</button>
                    </div>
                    <p class="page-mystery-box__roll-result__container__text mobile">BurgerCities is a one-stop
                        play&earn
                        MetaFi platform. Heroes are unique NFT assets with a variety of uses, which will be the central
                        part of the gameplay in BurgerCities. Among all generations of Heroes, Gen 0 Heroes are limited
                        in number and extremely rare.They could be used to participate in a range of different
                        activities, like quests, combat with monsters, PK, land management, PVP, and more.</p>
                </div>
            </div>
            <div class="inner-container">
                <div class="page-mystery-box__case">
                    <div class="page-mystery-box__case__player-info desktop">
                        <img src="/img/user/avatar.png" alt="profile-pic"
                            class="page-mystery-box__case__player-info__img">
                        <span class="page-mystery-box__case__player-info__text">BurgerCities Gen 0 Hero Ticket</span>
                    </div>
                    <h2 class="page-mystery-box__case__title title-primary">BurgerCities Gen 0 Hero Ticket</h2>
                    <p class="page-mystery-box__case__descr">BurgerCities is a one-stop play&earn MetaFi platform.
                        Heroes
                        are unique NFT assets with a variety of uses, which will be the central part of the gameplay in
                        BurgerCities. Among all generations of Heroes, Gen 0 Heroes are limited in number and extremely
                        rare.They could be used to participate in a range of different activities, like quests, combat
                        with
                        monsters, PK, land management, PVP, and more.</p>
                    <div class="page-mystery-box__case__buttons">
                        <button @click="handleOpenBox" class="page-mystery-box__case__buttons__open">Open</button>
                        <router-link to="/NFTItem" class="page-mystery-box__case__buttons__store desktop">In
                            store</router-link>
                    </div>
                </div>
            </div>
            <img src="@/assets/svg/MysteryBox/ground.svg" alt="" class="page-mystery-box__case__ground">
            <img src="@/assets/svg/MysteryBox/light-left.svg" alt=""
                class="page-mystery-box__first-section__bg light-left desktop">
            <img src="@/assets/svg/MysteryBox/light-right.svg" alt=""
                class="page-mystery-box__first-section__bg light-right desktop">
            <!-- <img src="@/assets/img/MysteryBox/box-1.png" alt="box" class="page-mystery-box__first-section__bg box-1"> -->
            <Box />
            <img src="@/assets/img/MysteryBox/box-2.png" alt="box" class="page-mystery-box__first-section__bg box-2">
            <img src="@/assets/img/MysteryBox/box-3.png" alt="box" class="page-mystery-box__first-section__bg box-3">
            <div class="page-mystery-box__first-section__bg light-left mobile"></div>
            <div class="page-mystery-box__first-section__bg light-right mobile"></div>
        </section>
        <section class="page-mystery-box__second-section">
            <div class="inner-container-second">
                <span class="page-mystery-box__second-section__title title-primary">Contents of the box</span>
            </div>
            <div class="page-mystery-box__second-section__content">
                <Cards />
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.page-mystery-box {
    background: linear-gradient(0deg, #0B0C0D, #0B0C0D), linear-gradient(258.81deg, #0F0041 -29.36%, #0B0813 122.35%);
    position: relative;

    &__roll-result {
        background-color: rgba(0, 0, 0, 0);
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;

        opacity: 0;
        z-index: -1;
        align-items: center;
        justify-content: flex-end;

        @media only screen and (max-width: 850px) {
            min-height: 700px;
            height: 100vh;
            overflow-y: scroll;
            align-items: flex-end;
        }

        @media only screen and (max-height: 600px) {
            height: 800px;
        }

        @media only screen and (max-height: 450px) {
            height: 1000px;
        }

        &__container {
            margin-right: 25vw;
            width: 36.88rem;
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 850px) {
                margin-right: 0;
                margin-bottom: 5rem;
            }

            @media only screen and (max-height: 600px) {
                margin-bottom: 100px;
            }

            @media only screen and (max-height: 450px) {
                margin-bottom: 300px;
            }

            &__type {
                font-weight: 700;
                font-size: 1.55rem;
                line-height: 105.4%;
                color: var(--color-white);
                background: rgba(185, 96, 255, 0.52);
                border-radius: 3px;
                padding: 0.5rem 3rem;
                align-self: flex-start;
                border: 1px solid rgba(255, 255, 255, 0.61);
            }

            &__title {
                margin-top: 1.5rem;
                width: 17.5rem;
                font-weight: 700;
                font-size: 2.75rem;
                line-height: 3rem;
                color: var(--color-white);
            }

            &__text {
                font-size: 1.54rem;
                line-height: 140.9%;

                @media only screen and (max-width: 850px) {
                    margin-top: 2.8rem;
                }
            }

            &__info {
                margin-top: 2.5rem;
                display: flex;
                gap: 3rem;

                &__el {
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;

                    &__title {
                        font-size: 1.55rem;
                        line-height: 105.4%;
                        color: var(--color-white);
                    }

                    &__number {
                        font-weight: 700;
                        font-size: 2.06rem;
                        line-height: 105.4%;
                        color: var(--color-white);
                    }
                }
            }

            &__buttons {
                margin-top: 2.32rem;
                display: flex;
                gap: 1.3rem;

                &__open,
                &__store {
                    width: 13rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 500;
                    font-size: 1.71rem;
                    line-height: 112%;
                    letter-spacing: 0.025em;
                    padding: 1rem 0;

                    &:hover {
                        opacity: 0.8;
                    }
                }

                &__open {
                    background: rgba(144, 55, 214, 0.2);
                    border: 1px solid #9037D6;
                    border-radius: 5px;
                }

                &__store {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 5px;
                }
            }

        }
    }

    &__roll {
        position: absolute;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        display: flex;
        z-index: -1;
        left: 0;
        display: flex;
        opacity: 0;

        @media only screen and (max-height: 500px) {
            bottom: auto;
            top: 0;
        }
    }

    &__second-section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        @media only screen and (max-height: 700px) {
            height: 700px;
        }

        &__title {
            font-weight: 400;
            font-size: 11rem;
            line-height: 11rem;
            color: var(--color-white);

            @media only screen and (max-height: 600px) {
                font-size: 11rem !important;
            }
        }

        &__content {
            @media only screen and (max-width: 850px) {
                position: absolute;
                width: 120%;
                bottom: 0;
                -ms-overflow-style: none;
                overflow: -moz-scrollbars-none;

                ::-webkit-scrollbar {
                    width: 0;
                }
            }
        }
    }

    &__first-section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;

        @media only screen and (max-width: 850px) {
            overflow: hidden;
        }

        @media only screen and (max-height: 700px) {
            height: 150vh;
        }

        @media only screen and (max-height: 500px) {
            height: 200vh;
        }

        @media only screen and (max-height: 350px) {
            height: 300vh;
        }


        &__bg {
            position: absolute;

            &.box-1 {
                margin-left: auto;
                margin-right: auto;
                right: 0;
                left: 0;
                bottom: 0;
                height: 70rem;

                @media only screen and (max-width: 850px) {
                    height: 50rem;
                }

                @media only screen and (max-height: 700px) {
                    height: 30rem;
                }
            }

            &.box-2 {
                margin-left: auto;
                margin-right: auto;
                right: 0;
                bottom: 34rem;
                left: 65rem;
                height: 19.6rem;

                @media only screen and (max-width: 850px) {
                    bottom: 25rem;
                    right: auto;
                    left: -2rem;
                    height: 9rem;
                }
            }

            &.box-3 {
                margin-left: auto;
                margin-right: auto;
                right: 0;
                bottom: 35rem;
                left: 95rem;
                height: 15rem;

                @media only screen and (max-width: 850px) {
                    bottom: 25rem;
                    right: 0;
                    left: auto;
                    height: 9rem;
                }
            }

            &.light-right {
                top: 0;
                right: 0;

                @media only screen and (max-width: 850px) {
                    right: -10%;
                    background: radial-gradient(50% 50% at 50% 50%, #9037D6 0%, rgba(144, 55, 214, 0) 100%);
                    opacity: 0.5;
                    filter: blur(103px);
                    width: 291.75px;
                    height: 1482.52px;
                    transform: rotate(43.68deg);
                }
            }

            &.light-left {
                top: 0;
                left: 15%;

                @media only screen and (max-width: 850px) {
                    left: 0;
                    background: radial-gradient(50% 50% at 50% 50%, #C5A750 0%, rgba(190, 160, 75, 0) 100%);
                    opacity: 0.5;
                    filter: blur(103px);
                    width: 181.48px;
                    height: 1330.33px;
                    transform: rotate(-9.92deg);
                }
            }
        }
    }

    &__case {
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 41rem;

        @media only screen and (max-width: 850px) {
            align-self: flex-start;
            margin-top: 5rem;
        }

        &__player-info {
            display: flex;
            align-items: center;
            gap: 1.3rem;

            &__img {
                height: 3.43rem;
                width: 3.43rem;
                border-radius: 100%;
            }

            &__text {
                font-weight: 600;
                font-size: 1.71rem;
                line-height: 140%;
                letter-spacing: 0.025em;
            }
        }

        &__title {
            margin-top: 2.15rem;
            font-size: 11rem;
            line-height: 9.9rem;
            color: var(--color-white);

            @media only screen and (max-width: 850px) {
                font-size: 63px !important;
            }
        }

        &__descr {
            font-size: 1.37rem;
            line-height: 140%;
            letter-spacing: 0.025em;
            opacity: 0.8;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        &__ground {
            flex: 0 0 auto;
        }

        &__buttons {
            margin-top: 2.32rem;
            display: flex;
            gap: 1.3rem;


            @media only screen and (max-height: 850px) {
                z-index: 100;
            }


            &__open,
            &__store {
                width: 13rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                font-size: 1.71rem;
                line-height: 112%;
                letter-spacing: 0.025em;
                padding: 1rem 0;

                &:hover {
                    opacity: 0.8;
                }

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }

            &__open {
                background: rgba(144, 55, 214, 0.2);
                border: 1px solid #9037D6;
                border-radius: 5px;
            }

            &__store {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 5px;
            }
        }
    }

    .inner-container {
        @include width-restriction;
        padding: 8.6rem 6.35rem 6rem;
        flex: 1 0 auto;
        display: flex;
            position: relative;
            z-index: 2000;

        @media only screen and (max-width: 850px) {
            padding: 8.6rem 0 6rem;
            position: relative;
            z-index: 2000;
        }
    }

    .inner-container-second {
        @include width-restriction;
        padding: 13.75rem 6.35rem 4.5rem;
        display: flex;
        position: relative;
        z-index: 2000;

        @media only screen and (max-width: 850px) {
            padding: 13.75rem 6.35rem 4.5rem;
        }
    }
}
</style>