<script setup lang="ts">
import { ref } from 'vue';
import { gsap, Power0 } from 'gsap';
import ProjectCard from '@/components/Reusable/Launchpad/ProjectCard.vue';
import { useBaseStore } from '@/stores';


const baseStore = useBaseStore();

// DOM
const img1 = ref<null | HTMLElement>(null);
const img2 = ref<null | HTMLElement>(null);
const img3 = ref<null | HTMLElement>(null);
const img4 = ref<null | HTMLElement>(null);
const img5 = ref<null | HTMLElement>(null);
const img6 = ref<null | HTMLElement>(null);


// PARALLAX ON MOUSE MOVE
const parallax = (mouse: MouseEvent, resistance: number, el: HTMLElement) => {
    gsap.to(el, {
        duration: .2, ease: Power0.easeIn,
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

// MOVE DIAMONDS AND GAMEPADS ON MOUSE MOVE
const mouseMove = (event: MouseEvent): void => {
    if (baseStore.isTouchDevice() || !img1.value || !img2.value ||
        !img3.value || !img4.value || !img5.value || !img6.value) return;
    parallax(event, -80, img1.value);
    parallax(event, 60, img2.value);
    parallax(event, -120, img3.value);
    parallax(event, -70, img4.value);
    parallax(event, 100, img5.value);
    parallax(event, -50, img6.value);
};


</script>

<template>
    <div class="page page-launchpad">
        <img src="@/assets/svg/Launchpad/bg-light-1.svg" alt="" class="page-launchpad__light-bg img1">
        <img src="@/assets/svg/Launchpad/bg-light-2.svg" alt="" class="page-launchpad__light-bg img2">
        <section @mousemove="mouseMove" class="page-launchpad__banner">
            <div class="inner-container-banner">
                <div class="page-launchpad__banner__title-box">
                    <h1 class="page-launchpad__banner__title-box__first title-primary">Earn</h1>
                    <h2 class="page-launchpad__banner__title-box__second title-primary">on Earn.Game</h2>
                </div>
                <div class="page-launchpad__banner__info-box desktop">
                    <div class="page-launchpad__banner__info-box__el">
                        <span class="page-launchpad__banner__info-box__el__number title-primary">98</span>
                        <span class="page-launchpad__banner__info-box__el__text">Projects Launched</span>
                    </div>
                    <div class="page-launchpad__banner__info-box__el">
                        <span class="page-launchpad__banner__info-box__el__number title-primary">$ 0</span>
                        <span class="page-launchpad__banner__info-box__el__text">Current Funds Locked</span>
                    </div>
                </div>
                <div class="page-launchpad__banner__info-box desktop">
                    <div class="page-launchpad__banner__info-box__el">
                        <span class="page-launchpad__banner__info-box__el__number title-primary">$ 1 980 000 </span>
                        <span class="page-launchpad__banner__info-box__el__text">Total Funds Raised</span>
                    </div>
                    <div class="page-launchpad__banner__info-box__el">
                        <span class="page-launchpad__banner__info-box__el__number title-primary">560 000 </span>
                        <span class="page-launchpad__banner__info-box__el__text">All-time Unique Participants</span>
                    </div>
                </div>
                <div class="page-launchpad__banner__info-box mobile">
                    <div class="page-launchpad__banner__info-box__el">
                        <span class="page-launchpad__banner__info-box__el__number title-primary">$ 0</span>
                        <span class="page-launchpad__banner__info-box__el__text">Current Funds Locked</span>
                    </div>
                    <div class="page-launchpad__banner__info-box__el">
                        <span class="page-launchpad__banner__info-box__el__number title-primary">560 000</span>
                        <span class="page-launchpad__banner__info-box__el__text">All-time Unique Participants</span>
                    </div>
                </div>
                <div class="page-launchpad__banner__info-box mobile">
                    <div class="page-launchpad__banner__info-box__el">
                        <span class="page-launchpad__banner__info-box__el__number title-primary">98</span>
                        <span class="page-launchpad__banner__info-box__el__text">Projects Launched</span>
                    </div>
                    <div class="page-launchpad__banner__info-box__el">
                        <span class="page-launchpad__banner__info-box__el__number title-primary">$ 1 980 000 </span>
                        <span class="page-launchpad__banner__info-box__el__text">Total Funds Raised</span>
                    </div>
                </div>
            </div>
            <img ref="img1" src="@/assets/svg/Launchpad/banner-bg-1.svg" alt=""
                class="page-launchpad__banner__img img1">
            <img ref="img2" src="@/assets/svg/Launchpad/banner-bg-2.svg" alt=""
                class="page-launchpad__banner__img img2">
            <img ref="img3" src="@/assets/img/Launchpad/banner-bg-3.png" alt=""
                class="page-launchpad__banner__img img3">
            <img ref="img4" src="@/assets/img/Launchpad/banner-bg-4.png" alt=""
                class="page-launchpad__banner__img img4">
            <img ref="img5" src="@/assets/img/Launchpad/banner-bg-5.png" alt=""
                class="page-launchpad__banner__img img5">
            <img ref="img6" src="@/assets/img/Launchpad/banner-bg-6.png" alt=""
                class="page-launchpad__banner__img img6">
        </section>
        <div class="inner-container">
            <section class="page-launchpad__content">
                <h3 class="page-launchpad__content__title">Earn Project</h3>
                <div class="page-launchpad__content__box">
                    <router-link to="/Launchpad/AllProjects" class="page-launchpad__content__view-more">View
                        more</router-link>
                    <ProjectCard v-for="i in 3" />
                </div>
            </section>
            <section class="page-launchpad__description desktop">
                <h4 class="page-launchpad__description__title">Launch a project<br /> on Earn.Games now!</h4>
                <p class="page-launchpad__description__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button class="page-launchpad__description__button btn-purple">Apply to Launch</button>
                <img src="@/assets/img/Launchpad/descr-bg-png.png" alt=""
                    class="page-launchpad__description__bg-img img1">
                <img src="@/assets/svg/Launchpad/descr-bg-svg.svg" alt=""
                    class="page-launchpad__description__bg-img img2 desktop">
            </section>
        </div>
        <section class="page-launchpad__description mobile">
            <div class="inner-container">
                <h4 class="page-launchpad__description__title">Launch a project<br /> on Earn.Games now!</h4>
                <p class="page-launchpad__description__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button class="page-launchpad__description__button btn-purple">Apply to Launch</button>
            </div>
            <img src="@/assets/img/Launchpad/footer-bg-mobile.png" alt=""
                class="page-launchpad__description__bg-img img1">
            <img src="@/assets/svg/Launchpad/footer-bg-left.svg" alt=""
                class="page-launchpad__description__bg-img img3">
            <img src="@/assets/svg/Launchpad/footer-bg-right.svg" alt=""
                class="page-launchpad__description__bg-img img4">
            <img src="@/assets/svg/Launchpad/footer-bg-top.svg" alt="" class="page-launchpad__description__bg-img img5">
            <img src="@/assets/img/Launchpad/footer-bg-bottom.png" alt=""
                class="page-launchpad__description__bg-img img6">
        </section>
    </div>
</template>

<style lang="scss" scoped>
.page-launchpad {
    background: linear-gradient(70.87deg, #010001 -10.19%, #27052D 126.44%);
    position: relative;
    overflow: hidden;

    &__light-bg {
        position: absolute;

        &.img1 {
            left: -953px;
            top: 118px;
            background: rgba(144, 55, 214, 0.5);
            filter: blur(280.5px);
            transform: rotate(-175.06deg);
        }

        &.img2 {
            right: -407px;
            bottom: -755px;
            background: rgba(144, 55, 214, 0.5);
            filter: blur(280.5px);
            transform: rotate(-175.06deg);
        }
    }

    &__banner {
        position: relative;
        display: flex;
        justify-content: center;
        height: 100vh;
        overflow: hidden;

        @media only screen and (max-width: 850px) {
            height: auto;
        }

        &__img {
            position: absolute;

            &.img1 {
                top: 10.5rem;
                left: 5.24rem;
                height: 21rem;

                @media only screen and (max-width: 850px) {
                    top: auto;
                    bottom: 12rem;
                    left: -15rem;
                }
            }

            &.img2 {
                top: 8.34rem;
                right: 10.92rem;

                @media only screen and (max-width: 850px) {
                    top: auto;
                    bottom: 25rem;
                    right: auto;
                    right: -5rem;
                }
            }

            &.img3 {
                bottom: -20px;
                left: -50px;
                height: 34.3rem;

                @media only screen and (max-width: 850px) {
                    display: none;
                }
            }

            &.img4 {
                top: 37.66rem;
                right: -50px;
                height: 39.5rem;

                @media only screen and (max-width: 850px) {
                    display: none;
                }
            }

            &.img5 {
                right: 0;
                bottom: 0;

                @media only screen and (max-width: 850px) {
                    display: none;
                }
            }

            &.img6 {
                left: 35.4rem;
                bottom: 0;

                @media only screen and (max-width: 850px) {
                    top: auto;
                    bottom: 0;
                    left: auto;
                    right: -20rem;
                    z-index: 10000;
                }
            }
        }

        &__title-box {
            display: flex;
            flex-direction: column;
            margin-right: 14rem;

            @media only screen and (max-width: 1100px) {
                margin-right: 0;
            }

            @media only screen and (max-width: 850px) {
                margin: 0 0 12.5rem;
            }

            &__first {
                font-size: 22.35rem;
                line-height: 22.35rem;
            }

            &__second {
                font-size: 17.2rem;
                line-height: 17.2rem;
                color: var(--color-white);
                white-space: nowrap;
            }
        }

        &__info-box {
            display: flex;
            flex-direction: column;
            margin-right: 5.5rem;
            gap: 12rem;

            @media only screen and (max-width: 1100px) {
                margin-right: 0;
            }

            @media only screen and (max-width: 850px) {
                margin: 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0;
            }

            &__el {
                display: flex;
                flex-direction: column;

                @media only screen and (max-width: 850px) {
                    margin-bottom: 4rem;
                }

                &__number {
                    font-size: 10.3rem;
                    line-height: 10.3rem;
                }

                &__text {
                    font-weight: 600;
                    font-size: 2.1rem;
                    line-height: 2.5rem;
                    white-space: nowrap;

                    @media only screen and (max-width: 850px) {
                        font-weight: 400;
                        white-space: normal;
                        width: 70%;
                    }
                }
            }
        }
    }

    &__content {
        display: flex;
        flex-direction: column;

        &__title {
            font-weight: 700;
            font-size: 4.15rem;
            line-height: 5.33rem;
            color: var(--color-white);
            margin-bottom: 4.3rem;

            @media only screen and (max-width: 850px) {
                font-size: 31px !important;
            }
        }

        &__view-more {
            position: absolute;
            right: 0;
            top: -4rem;
            font-weight: 500;
            font-size: 1.71rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }

            &:hover {
                opacity: 0.5;
            }
        }

        &__box {
            position: relative;
            display: flex;
            justify-content: space-between;


            @media only screen and (max-width: 1024px) and (min-width: 500px) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2.5rem;
            }

            @media only screen and (max-width: 500px) {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2.5rem;
            }
        }
    }

    &__description {
        position: relative;
        padding: 16.25rem 0 20rem 0;
        width: 51.6rem;
        height: 65rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media only screen and (max-width: 850px) {
            padding: 40rem 0 15rem 0;
            width: 100%;
            height: auto;
        }

        &__bg-img {
            position: absolute;

            &.img1 {
                bottom: 0;
                left: 47rem;
                height: 65rem;

                @media only screen and (max-width: 850px) {
                    bottom: auto;
                    top: 0;
                    margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                    height: 50rem;
                }
            }

            &.img2 {
                bottom: 0;
                left: 47rem;
                height: 65rem;

                @media only screen and (max-width: 850px) {
                    bottom: auto;
                    top: 0;
                    left: -10rem;
                    display: block;
                    height: 50rem;
                }
            }

            &.img3 {
                top: 25rem;
                left: 0;
            }

            &.img4 {
                right: 0;
                top: 30rem;
            }

            &.img5 {
                left: 30%;
                top: 10rem;
            }

            &.img6 {
                top: 28rem;
                margin-left: auto;
                margin-right: auto;
                left: -25rem;
                right: 0;
            }

        }


        &__title {
            font-weight: 700;
            font-size: 5.5rem;
            line-height: 5.5rem;
            color: var(--color-white);

            @media only screen and (max-width: 850px) {
                font-size: 31px !important;
            }
        }

        &__text {
            font-weight: 500;
            font-size: 1.71rem;
            line-height: 120%;
            margin: 1.3rem 0 3.45rem 0;

            @media only screen and (max-width: 850px) {
                font-weight: 400;
                font-size: 15px !important;
            }
        }

        &__button {
            padding: 1.1rem 5.6rem;
            font-weight: 600;
            font-size: 2.06rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                width: 100%;
                background: #B960FF;
                border-radius: 10px;
                font-size: 15px !important; 
            }
        }
    }

    .inner-container {
        @include width-restriction;
        padding: 8.6rem 6.35rem 0;

        @media only screen and (max-width: 850px) {
            padding: 8.6rem 0 0;
        }
    }

    .inner-container-banner {
        @include width-restriction;
        padding: 0 6.35rem 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 1100px) {
            gap: 5%;
        }

        @media only screen and (max-width: 850px) {
            padding: 14rem 0 0;
            flex-direction: column-reverse;
        }
    }

    @media only screen and (max-width: 1000px) and (max-height: 600px) {
        .page-launchpad__banner__info-box__el__number {
            font-size: 10.3rem !important;
        }
    }

}
</style>