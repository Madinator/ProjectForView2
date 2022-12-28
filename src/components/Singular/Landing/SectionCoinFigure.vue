<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import SectionAcademy from '@/components/Singular/Landing/SectionAcademy.vue';

// DEVICE TYPE INDICATOR TO LOAD IMAGES ACCORDINGLY TO A DEVICE TYPE
const isMobileCoin = ref<boolean>(false);

// CHECK DEVICE TYPE
const checkDeviceType = (): void => {
    if (!window) return;
    if (window.outerWidth <= 650 || (window.outerWidth <= 1000 && window.outerHeight > 500)) {
        isMobileCoin.value = true;
    } else {
        isMobileCoin.value = false;
    }
};

checkDeviceType();

onMounted(() => {
    checkDeviceType();

    // CHECK DEVICE TYPE ON RESIZE
    window.addEventListener('resize', checkDeviceType)
})

onUnmounted(() => {
  // REMOVE WINDOW EVENT LISTENER
  window.removeEventListener('resize', checkDeviceType);
})
</script>

<template>
    <section class="section section-coin-figure">
        <div class="hand-phone-container">
            <div class="hand-phone-container-inner">
                <img src="@/assets/img/Landing/armWithPhone.png" alt="" class="hand-phone">
                <div class="phone-container">
                    <img src="@/assets/img/Landing/iphone.png" alt="" class="phone">
                    <SectionAcademy />
                </div>
            </div>
        </div>
        <div class="content-1">
            <div class="inner-container">
                <div class="figure-container">
                    <div class="coin-container">
                        <div class="coin-inner-container">
                            <img v-if="!isMobileCoin" src="@/assets/img/Landing/coinBig/950.png" alt="" class="coin">
                            <img v-else src="@/assets/img/Landing/coinBig/700.png" alt="" class="coin">
                        </div>
                    </div>
                    <img src="@/assets/img/Landing/figure/750.png" alt="" class="figure">
                </div>
                <div class="info info-1">
                    <h1 class="title title-primary">
                        <span class="white">EG </span>
                        <span class="yellow"> Tokens</span>
                    </h1>
                    <p class="description">
                        Our tokens ensure lightning fast transactions while <br>significantly reducing transaction fees, with utilities for:
                    </p>
                    <ul class="benefits-list">
                        <li class="item">
                            <div class="border-item">Investors</div>
                            <p>Access to new launches, investment in games & staking</p>
                        </li>
                        <li class="item">
                            <div class="border-item">Investors</div>
                            <p>Access to new launches, investment in games & staking</p>
                        </li>
                        <li class="item">
                            <div class="border-item">Games</div>
                            <p>Access to games, educational content & staking</p>
                        </li>
                        <li class="item">
                            <div class="border-item">Educators</div>
                            <p>Access to funding, grants, talent & staking</p>
                        </li>
                        <li class="item">
                            <div class="border-item">Guilds</div>
                            <p>Access to premium armory wallet features & staking</p>
                        </li>
                        <li class="item">
                            <div class="border-item">Developers</div>
                            <p>Access to capital, services & staking</p>
                        </li>
                    </ul>
                </div>
                <div class="info info-2">
                    <h1 class="title title-primary">
                        <span class="white">Earn.Games </span>
                        <span class="yellow"> Incubator</span>
                    </h1>
                    <p class="description">
                        We incubate quality games with end-to-end support at all levels by <br>providing access to an expert team in game development, theory, <br>and operations.
                    </p>
                    <router-link to="/academy" class="btn btn-yellow">Join Us</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-coin-figure {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9500;
    width: 100%;
    height: 100vh;
    opacity: 0;
    visibility: hidden;

    .hand-phone-container {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 65rem;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        // filter: blur(4px);

        .hand-phone-container-inner {
            width: 100%;
        }

        .hand-phone {
            width: 110%;
            margin-left: 0rem;
            margin-bottom: -5rem;
        }

        .phone-container {
            width: 23rem;
            height: 46rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(5%, -70%) rotate(6deg);
            overflow: hidden;
            border-radius: 3rem;
            will-change: width, height;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                transform: translate(-10%, -40%) rotate(-90deg);
            }

            .phone,
            .phone-content,
            .phone-content-background {
                width: 100%;
                height: 100%;
            }

            .phone {
                position: relative;
                z-index: 5000;
            }

            .phone-content,
            .phone-content-background {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    height: 97% !important;
                }
            }

            .phone-content-background {
                height: 100%;
                z-index: 5;
                background-color: rgba(255, 255, 255, .3);
            }
        }
    }

    .content-1 {
        position: relative;
        width: 100%;
        height: 100vh;
        max-width: 1920px;
        margin: 0 auto;

        .inner-container {
            width: 100%;
            height: 100vh;
        }

        .figure-container {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 55rem;
            z-index: 10;

            @media only screen and (max-width: 1000px) and (max-height: 600px) {
                width: 45rem;
            }

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                bottom: -5rem;
                left: -11rem;
            }

            @media only screen and (max-width: 850px) and (min-height: 900px) {
                width: 60rem;
                bottom: -1rem;
            }

            @media only screen and (max-width: 850px) and (min-height: 1050px) {
                width: 65rem;
            }

            .figure {
                width: 100%;
                z-index: 10;
                opacity: 0;
                visibility: hidden;
            }

            .coin-container {
                position: absolute;
                top: 43%;
                // right: 43%;
                right: 43%;
                z-index: 100;
                width: 60rem;
                width: 6rem;
                transform: rotate(165deg);

                .coin,
                .coin-inner-container {
                    width: 100%;
                }
            }
        }

        .info {
            position: absolute;
            transform: translateY(-50%);
            z-index: 100;
            opacity: 0;
            visibility: hidden;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                @include width-restriction;
                transform: translateX(-50%);
                left: 50% !important;
                right: auto !important;
            }
        }

        .info-1 {
            top: 50%;
            // right: 14%;
            right: 5%;
            text-align: right;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                // top: auto;
                // bottom: 13%;
                // right: 5%;
                // right: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                transform: translateX(-50%) translateY(-50%);
            }

            @media only screen and (max-width: 850px) and (min-height: 1050px) {
                // bottom: 16%;
            }

            .benefits-list {
                display: grid;
                grid-template-columns: repeat(3, 15rem);
                grid-auto-columns: 15rem;
                grid-row-gap: 2.5rem;
                grid-column-gap: 1.7rem;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    grid-template-columns: repeat(2, 15rem);
                    grid-row-gap: 3rem;
                }

                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;

                    .border-item {
                        display: inline-block;
                        // padding: .4rem 1rem;
                        padding: 5px 13px;
                        border: 1px solid white;
                        font-size: 1.4rem;
                        border-radius: 2rem;
                        margin-bottom: 1rem;
                    text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
                    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, .8));

                        @media only screen and (max-width: 850px) and (min-height: 600px) {
                            font-size: 14px !important;
                        }
                    }

                    p {
                        text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
                        filter: drop-shadow(0 0 1rem rgba(0, 0, 0, .8));
                    }
                }
            }

            .title, .title span {
                font-size: 20rem !important;
                line-height: .9;

                @media only screen and (max-width: 1000px) and (max-height: 600px) {
                    font-size: 17rem !important;
                }

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    line-height: 1.05;
                }

                @media only screen and (max-width: 850px) and (max-height: 800px) {
                    text-shadow: 0 0 1rem rgba(0, 0, 0, .2);
                }
            }

            .description {
                line-height: 1.3;
                font-size: 1.7rem;
                margin-bottom: 2.5rem;

                // @media only screen and (max-width: 1000px) and (max-height: 600px) {
                    text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
                    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, .8));
                // }

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    width: 45rem;
                    margin-left: auto;

                    br {
                        display: none;
                    }
                }
            }
        }

        .info-2 {
            top: 50%;
            right: 5%;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                top: 12%;
                text-align: right;
                transform: translateX(-50%);
                left: 50% !important;
                right: auto !important;
            }

            @media only screen and (max-width: 850px) and (min-height: 1050px) {
                top: 17%;
            }

            .title, .title span {
                font-size: 18rem !important;

                @media only screen and (max-width: 1000px) and (max-height: 600px) {
                    font-size: 14rem !important;
                }

                @media only screen and (max-width: 750px) and (max-height: 500px) {
                    font-size: 12.5rem !important;
                }

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    font-size: 15rem !important;
                    line-height: 1;
                    margin-bottom: 1rem;
                }
            }

            .title {

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    width: 40rem;
                    margin-left: auto;
                }
            }

            .description {
                line-height: 1.3;
                font-size: 1.7rem;
                margin-bottom: 2.8rem;

                @media only screen and (max-width: 550px),
                only screen and (max-width: 1000px) and (max-height: 600px) {
                    text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
                    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, .8));
                }

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    width: 40rem;
                    text-align: right;
                    margin-left: auto;

                    br {
                        display: none;
                    }
                }
            }

            .btn {
                padding: 1rem 4.5rem;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    font-size: 15px !important;
                }
            }
        }
    }
}
</style>