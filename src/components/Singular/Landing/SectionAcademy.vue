<script setup lang="ts">
import { ref } from 'vue';
import { gsap, Power0 } from 'gsap';
import { useBaseStore } from '@/stores/index';

const baseStore = useBaseStore();

// DOM
const diamondRight = ref<null | HTMLElement>(null);
const diamondLeft = ref<null | HTMLElement>(null);
const gamepadRight = ref<null | HTMLElement>(null);
const gamepadLeft = ref<null | HTMLElement>(null);

// PARALLAX ON MOUSE MOVE
const parallax = (mouse: MouseEvent, resistance: number, el: HTMLElement) => {
    gsap.to(el, {duration: .2, ease: Power0.easeIn,
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

// MOVE DIAMONDS AND GAMEPADS ON MOUSE MOVE
const mouseMove = (event: MouseEvent): void => {
    if (baseStore.isTouchDevice() || !diamondRight.value || !diamondLeft.value ||
    !gamepadLeft.value || !gamepadRight.value) return;
    parallax(event, -83, diamondRight.value);
    parallax(event, 72, diamondLeft.value);
    parallax(event, -60, gamepadLeft.value);
    parallax(event, 102, gamepadRight.value);
};
</script>

<template>
    <section @mousemove="mouseMove" class="section section-academy">
        <div class="background-sphere-container">
            <img src="@/assets/img/backgroundSphere.png" alt="" class="background-sphere">
        </div>
        <div class="gamepads">
            <img ref="gamepadLeft" src="@/assets/img/Landing/gamepad.png" alt="" class="gamepad gamepad-left">
            <img ref="gamepadRight" src="@/assets/img/Landing/gamepad.png" alt="" class="gamepad gamepad-right">
        </div>
        <div class="content">
            <div class="center">
                <div class="info info-main">
                    <div class="logo-container">
                        <img src="@/assets/img/Landing/logoBig.png" alt="" class="logo">
                        <strong class="brand">Earn Games</strong>
                    </div>
                    <h1 class="title title-primary">
                        <span class="white">Join The </span>
                        <span class="yellow"> Academy</span>
                    </h1>
                    <!-- <p class="description">
                        The goal of the EG academy is to develop, organize and share world-class <br/>
                        educational content on Web 3.0 and blockchain-related topics by making it easily <br/>
                        accessible to the community. EG Academy is the first of many steps to achieve our <br/>
                        goal of building an equitable value-based society.
                    </p> -->
                    <div class="descriptions">
                        <p class="description description-1">
                            The aim of EG academy is to develop, organize, <br>and provide world class educational content on <br>web3 basics, trading, creative design, and coding.
                        </p>
                        <p class="description description-2">
                            EG Academy helps us in achieving <br>the goal of building an equitable <br>value-based society.
                        </p>
                    </div>
                    <router-link to="/academy" class="btn btn-yellow">Start Now!</router-link>
                </div>
                <div class="info info-socials">
                    <h2 class="title title-primary">Follow Us On Social Media</h2>
                    <div class="socials">
                        <ul class="list">
                            <li class="item">
                                <a href="#" target="_blank" class="link">
                                    <img src="@/assets/svg/socials/big/youtube.svg" alt="" class="icon">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank" class="link">
                                    <img src="@/assets/svg/socials/big/facebook.svg" alt="" class="icon">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank" class="link">
                                    <img src="@/assets/svg/socials/big/telegram.svg" alt="" class="icon">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank" class="link">
                                    <img src="@/assets/svg/socials/big/tiktok.svg" alt="" class="icon">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank" class="link">
                                    <img src="@/assets/svg/socials/big/discord.svg" alt="" class="icon">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank" class="link link-to-right">
                                    <img src="@/assets/svg/socials/big/twitch.svg" alt="" class="icon">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank" class="link link-to-right">
                                    <img src="@/assets/svg/socials/big/m.svg" alt="" class="icon">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank" class="link link-to-right">
                                    <img src="@/assets/svg/socials/big/instagram.svg" alt="" class="icon">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank" class="link link-to-right">
                                    <img src="@/assets/svg/socials/big/linkdn.svg" alt="" class="icon">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="diamond-right-container">
                    <img ref="diamondRight" src="@/assets/img/Landing/diamondSmall.png" alt="" class="diamond-right">
                </div>
                <div class="diamond-left-container">
                    <img ref="diamondLeft" src="@/assets/img/Landing/diamondSmall.png" alt="" class="diamond-left">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-academy {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1000;
    width: 46rem;
    height: 23rem;
    // width: 100%;
    // height: 100%;
    overflow: hidden;
    transform: translate(-50%, -50%) rotate(-90deg);
    will-change: width, height;

    @media only screen and (max-width: 850px) and (min-height: 600px) {
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }

    // @media only screen and (max-width: 850px),
    // only screen and (max-width: 1000px) and (max-height: 600px) {
    //     opacity: .5;
    // }

    .background-sphere-container {
        @include abs-center;
        background-image: var(--gradient-purple);
        z-index: 50;
        // height: 100vh;
        // width: 100vw;
        height: 100%;
        width: 100%;
        object-fit: cover;
        
        @media only screen and (max-width: 850px) {
            height: 120vh;
        }

        .background-sphere {
            @include abs-center;
            height: 100%;
            width: 100%;
            object-fit: cover;
            mix-blend-mode: overlay;
            z-index: 50;
        }
    }

    .content {
        @include abs-center;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%) scale(.3);
        z-index: 1000;

        .center {
            @include abs-center;
            z-index: 300;
            
            .info {
                position: relative;
                z-index: 60;
                text-align: center;
            }

            .info-main {
                text-align: left;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    width: 320px;
                    text-align: center;
                }

                .logo-container {
                    position: relative;
                    z-index: 50;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 4.5rem;

                    @media only screen and (max-width: 1000px) and (max-height: 600px) {
                        margin-bottom: 2rem;
                    }

                    .logo {
                        width: 3.5rem;
                        margin-right: 1.25rem;

                        @media only screen and (max-width: 850px) and (min-height: 600px) {
                            width: 5rem;
                        }
                    }

                    .brand {
                        font-weight: 700;
                        text-transform: uppercase;
                        font-size: 1.8rem;
                    }
                }

                .title, .title span {
                    position: relative;
                    z-index: 50;
                    line-height: 1.1;
                    font-size: 19rem !important;
                    white-space: nowrap;

                    @media only screen and (max-width: 1000px) and (max-height: 600px) {
                        font-size: 16rem !important;
                    }

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        white-space: initial;
                        font-size: 15rem !important;
                        line-height: .85;
                        margin-bottom: 2.5rem;
                    }
                }

                // .description {
                //     position: relative;
                //     z-index: 50;
                //     margin-bottom: 2.5rem;
                //     white-space: nowrap;

                //     @media only screen and (max-width: 850px) and (min-height: 600px) {
                //         white-space: initial;
                //         line-height: 1.2;

                //         br {
                //             display: none
                //         }
                //     }
                // }

                .descriptions {
                    position: relative;
                    z-index: 100;
                    display: flex;
                    text-align: left;
                    white-space: nowrap;
                    line-height: 1.3;
                    font-size: 1.7rem;
                    // margin-bottom: 2.5rem;
                    margin-bottom: 4rem;

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        flex-direction: column;
                        text-align: center;
                        margin-right: 0;
                        white-space: unset;

                        br {
                            display: none;
                        }

                        .description {
                            line-height: 1.2;
                        }
                    }

                    .description-1 {
                        // width: 37rem;
                        margin-right: 3rem;

                        @media only screen and (max-width: 850px) and (min-height: 600px) {
                            margin-right: 0;
                            margin-bottom: 3rem;
                        }
                    }

                    // .description-2 {
                    //     width: 30rem;
                    // }
                }

                .btn-yellow {
                    padding: 1rem 4rem;

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        font-size: 15px !important;
                    }
                }
            }

            .info-socials {
                @include abs-center;
                opacity: 0;
                visibility: hidden;
                white-space: nowrap;

                .title {
                    font-size: 6.5rem !important;
                    margin-bottom: 2.5rem;
                }

                .socials {
                    display: flex;
                    align-items: center;

                    .list {
                        display: flex;
                        align-items: center;

                        .item {
                            &:not(:last-of-type) {
                                margin-right: 1.25rem;
                            }

                            .link {
                                width: 5rem;
                                height: 5rem;

                                @media only screen and (max-width: 500px) {
                                    width: 4rem;
                                    height: 4rem;
                                }

                                &:hover {
                                    opacity: .7;
                                    transform: scale(1.1);
                                }

                                .icon {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }

        .diamond-right-container {
            position: absolute;
            top: 9.5rem;
            right: -6rem;
            z-index: 100;
            width: 8rem;
            transform: rotate(-24deg);

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                top: 20rem;
                right: 1rem;
            }

            .diamond-right {
                width: 100%;
            }
        }

        .diamond-left-container {
            position: absolute;
            top: 85%;
            left: -7rem;
            z-index: 10;
            width: 12.5rem;
            transform: rotate(-135deg);

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                top: 90%;
                left: -10rem;
            }

            .diamond-left {
                width: 100%;
            }
        }
    }

    .gamepads {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        z-index: 200;
        transform: translate(-50%, -50%);

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            width: 80%;
            left: 50%;
            // transform: translateX(-50%);
        }

        @media only screen and (max-width: 650px) and (min-height: 500px) {
            width: 90%;
        }

        @media only screen and (max-width: 500px) and (min-height: 500px) {
            width: 100%;
            // left: 0;
            // transform: none;
        }

        .gamepad-left {
            position: absolute;
            z-index: 200;

            top: 20%;
            left: 2%;
            // width: 38rem;
            width: 10rem;
            transform: rotate(-25deg);

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                top: 10%;
                left: -20rem;
            }
        }

        .gamepad-right {
            position: absolute;
            z-index: 200;

            bottom: 14%;
            right: 10%;
            // width: 14rem;
            width: 7rem;
            transform: rotate(21deg);

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                width: 19rem;
                bottom: 4%;
                right: -7rem;
            }
        }
    }
}
</style>