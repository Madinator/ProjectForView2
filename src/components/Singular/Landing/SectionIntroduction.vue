<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { gsap, Power0 } from 'gsap';
import { useBaseStore } from '@/stores/index';
import { useCanvasesStore } from '@/stores/canvases';
import SectionCards from '@/components/Singular/Landing/SectionCards.vue';
import backgroundParticlesUrl from '@/assets/img/Landing/backgroundParticles/2k.png'

const baseStore = useBaseStore();
const canvasesStore = useCanvasesStore();
const { canvasBackgroundParticles } = storeToRefs(canvasesStore);

// DOM
const diamondTop = ref<null | HTMLElement>(null);
const diamondCenter = ref<null | HTMLElement>(null);
const diamondBottom = ref<null | HTMLElement>(null);
const packageLeft = ref<null | HTMLElement>(null);
const packageRight = ref<null | HTMLElement>(null);
const backgroundParticlesCanvas = ref<null | HTMLCanvasElement>(null);

// watchEffect(() => {
//     if (canvasBackgroundParticles.value.width) {
//         canvasBackgroundParticles.value.ctx!.clearRect(0, 0, backgroundParticlesCanvas.value!.width, backgroundParticlesCanvas.value!.height);
//     canvasBackgroundParticles.value.ctx!.drawImage(particles, 
//     canvasBackgroundParticles.value.x, 
//     canvasBackgroundParticles.value.y, 
//     canvasBackgroundParticles.value.width, 
//     canvasBackgroundParticles.value.height);
//     }
// })

// PARALLAX ON MOUSE MOVE
const parallax = (mouse: MouseEvent, resistance: number, el: HTMLElement) => {
    gsap.to(el, {duration: .2, ease: Power0.easeIn,
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

// MOVE PACKAGES ON MOUSE MOVE
const mouseMovePackages = (event: MouseEvent): void => {
    if (baseStore.isTouchDevice() || !packageLeft.value || !packageRight.value) return;
    parallax(event, -85, packageLeft.value);
    parallax(event, 100, packageRight.value);
};

// MOVE DIAMOND ON MOUSE MOVE
const mouseMoveDiamonds = (event: MouseEvent): void => {
    if (baseStore.isTouchDevice() || !diamondTop.value || !diamondCenter.value ||
    !diamondBottom.value) return;
    parallax(event, -100, diamondTop.value);
    parallax(event, 90, diamondCenter.value);
    parallax(event, -130, diamondBottom.value);
};

// DEVICE TYPE INDICATORS TO LOAD IMAGES ACCORDINGLY TO A DEVICE TYPE
const isMobileHand = ref<boolean>(false);
const isMobileDiamond = ref<boolean>(false);

// CHECK DEVICE TYPE
const checkDeviceType = (): void => {
    if (!window) return;
    if (window.outerWidth <= 650 && window.outerHeight > 500) {
        isMobileHand.value = true;
    } else {
        isMobileHand.value = false;
    }
    
    if (window.outerWidth <= 650 || (window.outerWidth <= 1000 && window.outerHeight > 500)) {
        isMobileDiamond.value = true;
    } else {
        isMobileDiamond.value = false;
    }
};

checkDeviceType();

onMounted(() => {
    let vw = window.innerWidth / 100;
    let vh = window.innerHeight / 100;

    checkDeviceType();
    canvasBackgroundParticles.value.image = new Image();
    canvasBackgroundParticles.value.image.src = backgroundParticlesUrl;
    // particles.width = 100 * vw;
    // particles.height = 100 * vh;
    if (!backgroundParticlesCanvas.value) return;
    canvasBackgroundParticles.value.canvas = backgroundParticlesCanvas.value;
    canvasBackgroundParticles.value.ctx = backgroundParticlesCanvas.value.getContext('2d');

    canvasBackgroundParticles.value.width = 100 * vw;
    canvasBackgroundParticles.value.height = 100 * vh;

    canvasBackgroundParticles.value.width2 = 100 * vw;
    canvasBackgroundParticles.value.height2 = 100 * vh;

    backgroundParticlesCanvas.value.width = canvasBackgroundParticles.value.width;
    backgroundParticlesCanvas.value.height = canvasBackgroundParticles.value.height;

    canvasBackgroundParticles.value.image.addEventListener('load', () => {
        if (!canvasBackgroundParticles.value.ctx || !canvasBackgroundParticles.value.image) return;
        // canvasesStore.drawCanvasBackgroundParticles();
        // canvasBackgroundParticles.value.ctx.clearRect(0, 0, backgroundParticlesCanvas.value!.width, backgroundParticlesCanvas.value!.height);
        // canvasBackgroundParticles.value.ctx.drawImage(canvasBackgroundParticles.value.image, 0, 0, canvasBackgroundParticles.value.width, canvasBackgroundParticles.value.height);

        // setTimeout(() => {
        //     setInterval(() => {
        //         canvasBackgroundParticles.value.width += 10;
        //         canvasBackgroundParticles.value.height += 5;
        //         canvasBackgroundParticles.value.x -= 5;
        //         canvasBackgroundParticles.value.y -= 2.5;

        //         canvasBackgroundParticles.value.ctx!.clearRect(0, 0, backgroundParticlesCanvas.value!.width, backgroundParticlesCanvas.value!.height);
        //         canvasBackgroundParticles.value.ctx!.drawImage(particles, 
        //         canvasBackgroundParticles.value.x, 
        //         canvasBackgroundParticles.value.y, 
        //         canvasBackgroundParticles.value.width, 
        //         canvasBackgroundParticles.value.height);
        //     }, 8)
        // }, 6000)
    }, false);

    // CHECK DEVICE TYPE ON RESIZE
    window.addEventListener('resize', checkDeviceType)
})

onUnmounted(() => {
  // REMOVE WINDOW EVENT LISTENER
  window.removeEventListener('resize', checkDeviceType);
})
</script>

<template>
    <section class="section section-introduction">
        <div class="background-sphere-container">
            <img src="@/assets/img/backgroundSphere.png" alt="" class="background-sphere">
            <!-- <div class="desktop background-particles"></div> -->
            <canvas ref="backgroundParticlesCanvas" class="background-particles desktop"></canvas>
        </div>
        <div class="hand-container">
            <img v-if="!isMobileHand" src="@/assets/img/Landing/hand/1.9k.png" alt="" class="hand">
            <img v-else src="@/assets/img/Landing/hand/mobile.png" alt="" class="hand">
        </div>
        <div class="content content-1">
            <div class="info">
                <img src="@/assets/svg/Landing/earnGamesText.svg" alt="" class="title">
                <router-link to="/academy" class="btn btn-yellow">Explore Academy</router-link>
            </div>
        </div>
        <div @mousemove="mouseMovePackages" class="content content-2">
            <div class="info">
                <h1 class="title title-primary">
                    <span class="white">We </span>
                    <span class="yellow"> Are</span>
                </h1>
                <div class="animated-info">
                    <ul class="border-items-list">
                        <li class="border-item">Level up and slingshot to the front</li>
                        <div class="flex-container">
                            <li class="border-item">Stream it</li>
                            <li class="border-item">Team up</li>
                            <li class="border-item">Compete</li>
                        </div>
                    </ul>
                    <div class="descriptions">
                        <p class="description description-1">
                            Building an equitable value based society <br>by providing opportunities for learning, <br>earning & gaming. Access to a launchpad <br>and marketplace for in-game assets
                        </p>
                        <p class="description description-2">
                            An Academy focused on <br>educating the youth to become <br>efficient digital contributors in <br>their economies
                        </p>
                    </div>
                </div>
                <div class="packages">
                    <div class="package-container package-left-container">
                        <img ref="packageLeft" src="@/assets/img/Landing/package/650.png" alt="" class="package package-left">
                    </div>
                    <div class="package-container package-right-container">
                        <img ref="packageRight" src="@/assets/img/Landing/package/650.png" alt="" class="package package-right">
                    </div>
                </div>
            </div>
            <div class="coins">
                <img src="@/assets/img/Landing/coinLeft.png" alt="" class="coin coin-left">
                <img src="@/assets/img/Landing/coinTop.png" alt="" class="coin coin-top">
                <img src="@/assets/img/Landing/coinRight.png" alt="" class="coin coin-right">
            </div>
        </div>
        <div @mousemove="mouseMoveDiamonds" class="content content-3">
            <div class="info diamonds-info">
                <img src="@/assets/svg/Landing/playAndEarnText.svg" alt="" class="title">
                <div class="diamonds-small">
                    <img ref="diamondTop" src="@/assets/img/Landing/diamondSmall.png" alt="" class="diamond diamond-top">
                    <div class="diamond-center-container">
                        <img ref="diamondCenter" src="@/assets/img/Landing/diamondSmall.png" alt="" class="diamond diamond-center">
                    </div>
                    <img ref="diamondBottom" src="@/assets/img/Landing/diamondSmall.png" alt="" class="diamond diamond-bottom">
                </div>
            </div>
            <div class="diamond-big-container diamond-right-container">
                <div class="diamond-inner-container">
                    <img v-if="!isMobileDiamond" src="@/assets/img/Landing/diamondBig/1200.png" alt="" class="diamond-big diamond-right">
                    <img v-else src="@/assets/img/Landing/diamondBig/900.png" alt="" class="diamond-big diamond-right">
                </div>
            </div>
            <div class="diamond-big-container diamond-left-container">
                <div class="diamond-inner-container">
                    <img src="@/assets/img/Landing/diamondSmall.png" alt="" class="diamond-big diamond-left">
                </div>
            </div>
            <SectionCards />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-introduction {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 7000;
    background-image: var(--gradient-purple);
    // transform: translate(-50%, -50%) scale(1.5) rotate(-90deg);
    transform: translate(-50%, -50%) rotate(-90deg);
    border-radius: 4rem;
    overflow: hidden;
    width: 100vw;
    opacity: 0;

    @media only screen and (max-width: 850px) and (min-height: 600px) {
        transform: translate(-50%, -50%);
        height: 100%;
    }

    .border-item {
        display: inline-block;
        // padding: .4rem 1rem;
        padding: 5px 13px;
        border: 1px solid white;
        font-size: 1.4rem;
        border-radius: 2rem;
        margin-right: .85rem;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            font-size: 14px !important;
        }
    }

    .border-items-list {
        margin-bottom: 1.7rem;
        // gap: .85rem;
        // display: grid;
        // grid-template-columns: repeat(4, max-content);
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            flex-direction: column;
        }

        .flex-container {
            display: flex;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                margin-top: .85rem;
            }
        }
    }

    .background-sphere,
    .background-sphere-container,
    // .background-particles,
    .coins,
    .diamonds-small,
    .diamonds-big {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .background-sphere-container {
        @include abs-center;
        background-image: var(--gradient-purple);
        z-index: 50;
        // transform: scale(2);
        height: 100vh;
        width: 100vw;
        
        @media only screen and (max-width: 850px) {
            height: 120vh;
        }

        .background-sphere {
            mix-blend-mode: overlay;
            z-index: 50;
        }
    }
    
    .background-particles {
        @include abs-center;
        // background-image: url(@/assets/img/Landing/backgroundParticles/2k.png);
        // background-size: cover;
        // background-position: center;
        // background-repeat: no-repeat;
        z-index: 10;
        mix-blend-mode: lighten;
        opacity: 0;
        visibility: hidden;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            background-image: url(@/assets/img/Landing/backgroundParticles/mobile.png);
        }
    }

    .hand-container {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(10%) scale(.6);
        z-index: 1900;
        width: 140rem;
        min-width: 1400px;

        @media only screen and (max-width: 1650px) and (min-height: 950px) {
            min-width: 1600px;
        }

        @media only screen and (max-height: 630px) {
            min-width: unset;
            width: 150rem;
            max-width: 220vh;
        }

        @media only screen and (max-width: 650px) and (min-height: 500px) {
            bottom: 50%;
            left: 52%;
            transform: translate(-50%, 0);
            min-width: 450px;
            max-width: 130%;
            width: 100vh;
        }

        .hand {
            width: 100%;

            @media only screen and (max-width: 650px) and (min-height: 500px) {
                transform: translate(0, 50%);
            }
        }
    }

    .diamond-big-container {
        position: absolute;
        width: 65rem;

        @media only screen and (max-width: 1000px) and (max-height: 600px) {
            width: 58rem;
        }

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            width: 57rem;
        }

        .diamond-big,
        .diamond-inner-container {
            width: 100%;
        }
    }

    .diamond-left-container {
        top: -30rem;
        left: -25rem;
        transform: rotate(-160deg);
        filter: blur(4px);

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            width: 45rem;
            top: auto;
            bottom: -20rem;
            left: -22rem;
        }
    }

    .diamond-right-container {
        top: -15rem;
        right: -20rem;
        z-index: 9000;

        .diamond-inner-container {
            transform: rotate(-24deg) translateX(13rem);
        }
    }


    .content {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;

        .btn {

            @media only screen and (max-width: 1650px) {
                font-size: 16px !important;
                padding: 10px 20px !important;
            }
        }
    }

    .content-1 {
        z-index: 2000;
        transform: translateY(10%) scale(.6);

        @media only screen and (max-width: 650px) and (min-height: 500px) {
            transform: scale(.6);
        }

        .info {
            @include flex-center;
            @include abs-center;
            top: 50%;
            flex-direction: column;
            z-index: 1000;

            @media only screen and (max-width: 850px) and (min-width: 650px) {
                top: 60%;
            }

            .title {
                width: 65rem;
                margin-bottom: 8rem;
                min-width: 650px;

                @media only screen and (max-height: 630px) {
                    min-width: unset;
                    width: 65rem;
                }

                @media only screen and (max-width: 1000px) and (max-height: 600px) {
                    width: 55rem;
                    min-width: auto;
                }

                @media only screen and (max-width: 650px) {
                    min-width: unset;
                    margin-bottom: 20rem;
                }

                @media only screen and (max-width: 650px) and (max-height: 650px) {
                    margin-bottom: 10rem;
                }

                @media only screen and (max-width: 650px) {
                    width: 55rem;
                }

                @media only screen and (max-width: 500px) {
                    width: 170%;
                }
            }
        }
    }

    .content-2 {
        transform: scale(0);
        white-space: nowrap;
        z-index: 1500;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            white-space: unset;
        }

        .info {
            @include abs-center;
            text-align: center;
            transform: translate(-50%, -50%) scale(.5);
            width: 47rem;
            z-index: 100;

            @media only screen and (max-width: 450px) and (min-height: 600px) {
                // text-align: left;
                width: 40rem;
            }

            .title, .title span {
                position: relative;
                z-index: 110;
                font-size: 30rem !important;
                line-height: .7;
                // margin-bottom: 4rem;
                margin-bottom: 1.8rem;

                @media only screen and (max-width: 1000px) and (max-height: 600px) {
                    font-size: 25rem !important;
                }

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    font-size: 27rem !important;
                }
            }

            .animated-info {
                transform: translateY(-5rem);
                opacity: 0;
            }

            .descriptions {
                position: relative;
                z-index: 100;
                font-weight: 500;
                display: flex;
                justify-content: center;
                text-align: left;
                margin-right: -4rem;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    flex-direction: column;
                    // text-align: center;
                    margin-right: 0;
                }

                .description {
                    line-height: 1.2;
                }

                .description-1 {
                    // width: 37rem;
                    margin-right: 3rem;

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        margin-right: 0;
                        margin-bottom: 3rem;

                        br {
                            display: none;
                        }
                    }
                }

                // .description-2 {
                //     width: 30rem;
                // }
            }

            .packages {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 200;
                
                .package-container {
                    position: absolute;

                    .package {
                        width: 100%;
                    }
                }

                .package-left-container {
                    top: 32%;
                    left: -63%;
                    z-index: 1000;
                    width: 36rem;
                    transform: translateY(-50%);

                    @media only screen and (max-width: 1000px) and (max-height: 600px) {
                        width: 25rem;
                        top: 17%;
                        left: -50%;
                    }

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        top: auto;
                        transform: none;
                        bottom: 65%;
                        left: -44%;
                    }

                    .package {
                        transform: rotate(22deg);

                        @media only screen and (max-width: 850px) and (min-height: 600px) {
                            transform: rotate(32deg);
                        }
                    }
                }

                .package-right-container {
                    top: 45%;
                    right: -39%;
                    z-index: 10;
                    width: 17rem;
                    transform: translateY(-50%);

                    @media only screen and (max-width: 1000px) and (max-height: 600px) {
                        top: 55%;
                    }

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        transform: none;
                        top: 38%;
                        right: -22%;
                    }

                    .package {
                        transform: rotate(-26deg);

                        @media only screen and (max-width: 850px) and (min-height: 600px) {
                            transform: rotate(-15deg);
                        }
                    }
                }
            }
        }

        .coins {
            filter: blur(10px);
            z-index: 5;

            .coin {
                position: absolute;
                z-index: 5;
            }

            .coin-left {
                width: 25rem;
                bottom: 2.5rem;
                left: -10rem;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    bottom: 10vh;
                    width: 22rem;
                }
            }

            .coin-top {
                width: 13rem;
                top: -10rem;
                left: 50%;
                transform: translateX(-50%);

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    transform: none;
                    left: auto;
                    top: 9rem;
                    right: 6%;
                    width: 11rem;
                }
            }

            .coin-right {
                width: 40rem;
                bottom: -13rem;
                right: -5rem;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    width: 36rem;
                    right: -11rem;
                }
            }
        }
    }

    .content-3 {
        z-index: 1000;
        transform: scale(0);

        .diamond {
            position: absolute;
        }

        .info {
            @include abs-center;
            z-index: 100;

            .title {
                width: 95rem;

                @media only screen and (max-width: 1000px) and (max-height: 600px) {
                    width: 80rem;
                }

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    width: 80vw;
                    transform: rotate(-10deg);
                }

                @media only screen and (max-width: 500px) {
                    width: 90vw;
                }
            }

            .diamonds-small {

                .diamond-top {
                    top: -6rem;
                    left: 17rem;
                    width: 6.5rem;
                    transform: rotate(-9deg);

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        transform: rotate(-40deg);
                        top: -25vh;
                        left: 5rem;
                    }
                }

                .diamond-center-container {
                    @include abs-center;
                    height: 20rem;
                    width: 13.5rem;

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        width: 10rem;
                        height: 13rem;
                    }

                    .diamond-center {
                        transform: rotate(32deg);
                        width: 100%;

                        @media only screen and (max-width: 850px) and (min-height: 600px) {
                            transform: rotate(20deg);
                        }
                    }
                }

                .diamond-bottom {
                    bottom: -3rem;
                    right: 27rem;
                    width: 5.5rem;
                    transform: rotate(-139deg);

                    @media only screen and (max-width: 850px) and (min-height: 600px) {
                        width: 7rem;
                        bottom: -20vh;
                        right: 5rem;
                    }
                }
            }
        }
    }
}
</style>