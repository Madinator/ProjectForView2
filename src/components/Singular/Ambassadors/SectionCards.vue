<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';


// DEVICE TYPE INDICATOR TO LOAD IMAGES ACCORDINGLY TO A DEVICE TYPE
const isMobile = ref<boolean>(false);

// CHECK DEVICE TYPE
const checkDeviceType = (): void => {
    if (!window) return;
    if (window.outerWidth <= 850) {
        isMobile.value = true;
    } else {
        isMobile.value = false;
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
    <section class="section section-cards">
        <div class="inner-container">
            <div class="info-container">
                <div class="info">
                    <h1 class="title-primary">
                        <span class="white">Ambassadors </span>
                        <span class="yellow"> Tier</span>
                    </h1>
                </div>
            </div>
            <div class="cards-container">
                <div class="card card-1">
                    <div class="card-number">
                        <img src="@/assets/svg/Ambassadors/cardPolygon.svg" alt="" class="polygon">
                        <span>1</span>
                    </div>
                    <strong class="title">Community</strong>
                    <div class="blue-container">
                        <img src="@/assets/img/Ambassadors/cardImage1.png" alt="" class="card-image">
                        <p class="description">
                            Join the Earn.Games community, apply for the Ambassadors program and go through the verification procedure.
                        </p>
                    </div>
                </div>
                <div class="card card-2">
                    <div class="card-number">
                        <img src="@/assets/svg/Ambassadors/cardPolygon.svg" alt="" class="polygon">
                        <span>2</span>
                    </div>
                    <strong class="title">Exlporers</strong>
                    <div class="blue-container">
                        <img src="@/assets/img/Ambassadors/cardImage2.png" alt="" class="card-image">
                        <p class="description">
                            Chosen Individuals will be assigned to the Explorer tier to complete the responsibilities.
                        </p>
                    </div>
                </div>
                <div class="card card-3">
                    <div class="card-number">
                        <img src="@/assets/svg/Ambassadors/cardPolygon.svg" alt="" class="polygon">
                        <span>3</span>
                    </div>
                    <strong class="title">Ambassador</strong>
                    <div class="blue-container">
                        <img src="@/assets/img/Ambassadors/cardImage34.png" alt="" class="card-image">
                        <p class="description">
                            Those selected from Explorer tier will proceeded to the Ambassador tier, after being evaluated based on their contribution.
                        </p>
                    </div>
                </div>
                <div class="card card-4">
                    <div class="card-number">
                        <img src="@/assets/svg/Ambassadors/cardPolygon.svg" alt="" class="polygon">
                        <span>4</span>
                    </div>
                    <strong class="title">Primes</strong>
                    <div class="blue-container">
                        <img src="@/assets/img/Ambassadors/cardImage34.png" alt="" class="card-image">
                        <p class="description">
                            Those selected from Explorer tier will proceeded to the Ambassador tier, after being evaluated based on their contribution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="images-corner">
            <img v-if="!isMobile" src="@/assets/img/Ambassadors/sectionCardsCorner2.png" alt="" class="corner-circle">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-cards {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 400;

    .images-corner {
        position: absolute;
        bottom: 0;
        left: 0;

        .corner-image {
            width: 50rem;
            position: relative;
            z-index: 100;
        }

        .corner-circle {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50rem;
            // opacity: .7;
        }
    }


    .inner-container {
        height: 100vh;
        width: 100%;

        @media only screen and (max-width: 850px) {
            padding-top: 11rem;

            @media only screen and (max-height: 800px) {
                @include width-restriction;
            }

            @media only screen and (min-height: 800px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            @media only screen and (max-height: 500px) {
                padding-top: 9rem;
            }
        }

        .info-container {
            @include abs-center;
            left: 23%;
            width: 43rem;
            z-index: 1000;

            @media only screen and (max-width: 850px) {
                position: relative;
                left: auto;
                top: auto;
                transform: none;
                // margin-bottom: 3rem;
                margin: 0 auto;
            }

            @media only screen and (max-width: 850px) and (max-height: 600px) {
                width: 100%;
                text-align: center;
                margin-bottom: 3rem;
            }

            @media only screen and (max-width: 850px) and (max-height: 500px) {
                margin-bottom: 2rem;
            }

            @media only screen and (min-width: 1920px) {
                left: calc((100vw - 1920px) / 2 + 7%);
                transform: translateY(-50%);
            }

            .info {

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    // position: absolute;
                    // top: 18%;
                    // left: 0%;
                    width: 43rem;
                }

                // @media only screen and (max-width: 850px) and (max-height: 600px) {
                //     margin: 0 auto;
                //     text-align: center;
                //     width: 100%;
                // }

                .title-primary {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    @media only screen and (max-width: 850px) {
                        align-items: center;
                        margin-bottom: 2rem;
                    }

                    @media only screen and (max-width: 850px) and (max-height: 600px) {
                        display: inline-block;
                        white-space: nowrap;
                    }

                    span {
                        line-height: .9;
                        font-size: 16rem !important;
                
                        @media only screen and (max-width: 850px) {
                            font-size: 15rem !important;

                            @media only screen and (max-height: 650px) {
                                font-size: 13rem !important;
                            }
                        }
                
                        @media only screen and (max-width: 450px) {
                            font-size: 13rem !important;
                        }
                    }
                }
            }
        }

        .cards-container {
            position: absolute;
            top: 54%;
            right: 0;
            // right: -86rem;
            transform: translateY(-50%) translateX(86rem);
            display: flex;
            align-items: center;

            @media only screen and (max-height: 450px) {
                transform: translateY(-50%) translateX(86rem) scale(.8);
            }

            @media only screen and (max-width: 1100px) {
                // right: -98rem;
                transform: translateY(-50%) translateX(98rem);

                @media only screen and (max-height: 450px) {
                    transform: translateY(-50%) translateX(98rem) scale(.8);
                }
            }

            @media only screen and (min-width: 1920px) {
                // right: -76rem;
                transform: translateY(-50%) translateX(76rem);
            }

            @media only screen and (max-width: 850px) {
                position: relative;
                top: auto;
                right: auto;
                transform: none;
                width: 43rem;
                height: 60rem;
                margin-left: -4rem;

                @media only screen and (max-height: 800px) {
                    margin: 0 auto;
                }

                @media only screen and (max-height: 750px) {
                    transform: scale(.9);
                    margin-top: -5rem;
                }

                @media only screen and (max-height: 700px) {
                    transform: scale(.8);
                    margin-top: -7rem;
                }

                @media only screen and (max-height: 650px) {
                    // transform: scale(.7);
                    margin-top: -9rem;
                }

                @media only screen and (max-height: 500px) {
                    transform: scale(.7);
                }

                @media only screen and (max-height: 450px) {
                    // transform: scale(.7);
                    margin-top: -15rem;
                }
            }

            @media only screen and (max-width: 450px) {
                transform: scale(.9);

                @media only screen and (max-height: 750px) {
                    margin-top: 0rem;
                }

                @media only screen and (max-height: 700px) {
                    transform: scale(.8);
                    margin-top: -2rem;
                }

                @media only screen and (max-height: 650px) {
                    margin-top: -5rem;
                }
            }

            .card {
                width: 40rem;
                height: 60rem;
                background-image: linear-gradient(156.96deg, #B85EFF -3.8%, rgba(100, 51, 139, 0.452655) 62.39%, #B85EFF 117.13%);;
                border-radius: 2rem;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                transform: scale(.95);
                position: relative;
                z-index: 100;

                @media only screen and (min-width: 1800px) {
                    transform: scale(1.05);
                }

                @media only screen and (max-width: 850px) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 43rem;
                }

                .card-number {
                    position: absolute;
                    top: -2.5rem;
                    right: -4.4rem;
                    width: 9.2rem;
                    height: 9.2rem;
                    @include flex-center;
                    border-radius: 100%;

                    .polygon {
                        width: 25rem;
                        height: 25rem;
                        @include abs-center;
                    }

                    span {
                        font-weight: 500;
                        font-size: 4.9rem !important;
                        line-height: .9;
                        position: relative;
                        z-index: 10;
                        display: inline-block;
                        margin-top: -5px;
                    }
                }

                .title {
                    font-weight: 500;
                    font-size: 3.35rem !important;
                    padding-top: 1rem;
                }

                .blue-container {
                    // background-image: linear-gradient(to right bottom, #41117E, #2E1149);
                    background-image: linear-gradient(to right bottom, #391372, #3D1C59);
                    border-radius: 1.6rem;
                    width: 100%;
                    height: 85%;
                    margin-top: auto;
                    position: relative;

                    .card-image {
                        position: absolute;
                        top: -12%;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 130%;
                    }

                    .description {
                        font-size: 2rem ;
                        text-align: center;
                        padding: 0 2rem 3.1rem;
                        position: absolute;
                        bottom: 0%;
                        text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
                        filter: drop-shadow(0 0 1rem rgba(0, 0, 0, .5));
                    }
                }
            }

            .card-1 {
                z-index: 200;
            }

            .card-2 {
                z-index: 180;
            }

            .card-3 {
                z-index: 160;
            }

            .card-4 {
                z-index: 140;
            }

            .card-2,
            .card-3,
            .card-4 {
                transform: scale(.7);

                @media only screen and (min-width: 1800px) {
                    transform: scale(.8);
                }

                @media only screen and (max-width: 850px) {
                    transform: scale(.8) translateX(10rem) translateY(4rem);
                }
            }
        }
    }
}
</style>