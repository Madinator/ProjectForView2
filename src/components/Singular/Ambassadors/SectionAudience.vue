<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap, Power1 } from 'gsap';

onMounted(() => {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SMALL IMAGES ANIMATION
    gsap.to('.section-audience .images-composition .image-1', {duration: 1.75, y: '8rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
    gsap.to('.section-audience .images-composition .image-2', {duration: 1.75, y: '5rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
    gsap.to('.section-audience .images-composition .image-3', {duration: 1.75, y: '-8rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
    gsap.to('.section-audience .images-composition .image-4', {duration: 1.75, y: '-5rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
})
</script>

<template>
    <section class="section section-audience">
        <div class="inner-container">
            <div class="info">
                <h1 class="title-primary">
                    <span class="white">Target </span>
                    <span class="yellow"> Audience</span>
                </h1>
                <ul class="list">
                    <li class="item">
                        <img src="@/assets/img/Ambassadors/polygon3d.png" alt="" class="point-image">
                        <span>P2E Guilds</span>
                    </li>
                    <li class="item">
                        <img src="@/assets/img/Ambassadors/polygon3d.png" alt="" class="point-image">
                        <span>NFT Game Players</span>
                    </li>
                    <li class="item">
                        <img src="@/assets/img/Ambassadors/polygon3d.png" alt="" class="point-image">
                        <span>Game Developers</span>
                    </li>
                    <li class="item">
                        <img src="@/assets/img/Ambassadors/polygon3d.png" alt="" class="point-image">
                        <span>Owners Of Game Development Projects</span>
                    </li>
                    <li class="item">
                        <img src="@/assets/img/Ambassadors/polygon3d.png" alt="" class="point-image">
                        <span>Investors In The Cryptocurrency Community</span>
                    </li>
                </ul>
            </div>
            <div class="images-composition">
                <div class="images-composition-inner-container">
                    <img src="@/assets/img/Ambassadors/manInChair.png" alt="" class="man-chair">
                    <img src="@/assets/img/Ambassadors/imageCompostionImg5.png" alt="" class="comp-image image-1">
                    <img src="@/assets/img/Ambassadors/imageCompostionImg4.png" alt="" class="comp-image image-2">
                    <img src="@/assets/img/Ambassadors/imageCompostionImg3.png" alt="" class="comp-image image-3">
                    <img src="@/assets/img/Ambassadors/imageCompostionImg2.png" alt="" class="comp-image image-4">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-audience {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 500;

    .inner-container {
        position: relative;
        height: 100vh;
        z-index: 100;

        @media only screen and (min-width: 1920px) {
            @include width-restriction;
        }

        @media only screen and (max-width: 850px) {
            width: 100vw;

            @media only screen and (min-height: 600px) {
                padding-top: 10rem;
                @include width-restriction;
            }
        
            @media only screen and (max-height: 700px) {
                padding-top: 8.5rem;
            }

            @media only screen and (min-height: 800px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }

    .images-composition {
        position: absolute;
        top: 52%;
        left: 0%;
        transform: translateY(-50%);
        width: 80rem;
        z-index: 100;
        
        @media only screen and (max-width: 1000px) {
        
            @media only screen and (max-height: 600px) {
                transform: translateY(-50%) scale(.8);
            }
        
            @media only screen and (max-height: 450px) {
                transform: translateY(-50%) scale(.8);
                top: 55%;
                left: -5%;
            }
        }
        
        @media only screen and (max-width: 850px) and (min-height: 600px),
         only screen and (max-width: 600px) {
            top: auto;
            left: auto;
            position: relative;
            transform: none;
            margin-left: auto;
            width: 70rem;
            max-width: 520px;
            margin-top: -4rem;
        
            @media only screen and (max-height: 800px) and (min-width: 450px) {
                margin-top: -7rem;
            }
        
            @media only screen and (max-height: 700px) {
                margin-top: -9rem;
            }
        }

        @media only screen and (max-width: 500px) {
            margin-left: -3.5rem;
        }

        @media only screen and (max-width: 450px) {
            margin-left: -4rem;
        }

        @media only screen and (max-width: 410px) {
            margin-left: -6rem;
        }

        @media only screen and (max-width: 380px) {
            margin-left: -7.5rem;
        }

        .images-composition-inner-container {
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            width: 100%;
        
            @media only screen and (max-width: 850px) {
                transform: scaleX(-1);
                margin-left: -5rem;
            }
        }

        .man-chair {
            width: 100%;
            position: relative;
            z-index: 100;
        }

        .comp-image {
            position: absolute;
            z-index: 20;
        }

        .image-1 {
            width: 16rem;
            top: 14%;
            left: 10%;
        
            @media only screen and (max-width: 850px) {
                width: 13rem;
            }
        }

        .image-2 {
            width: 12rem;
            bottom: 24%;
            left: 7%;
            transform: rotate(-30deg);
        }

        .image-3 {
            width: 8rem;
            top: 33%;
            right: 24.5%;
            z-index: 150;
        }

        .image-4 {
            width: 18rem;
            bottom: 16%;
            right: 13%;
            transform: scaleX(-1);
        }
    }

    .info {
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
        z-index: 1000;
        
        @media only screen and (max-width: 1000px) {
        
            @media only screen and (max-height: 600px) {
                top: 53%;
            }
        }
        
        @media only screen and (max-width: 850px) and (min-height: 600px),
         only screen and (max-width: 600px) {
            position: relative;
            top: auto;
            right: auto;
            transform: none;
        }

        .title-primary {
            font-weight: 400;
            line-height: .8;
            margin-bottom: 3.2rem;
        
            @media only screen and (max-width: 850px) and (min-height: 600px),
             only screen and (max-width: 600px) {
                line-height: .9;
            }

            span {
                font-size: 16rem !important;
        
                @media only screen and (max-width: 850px) {
                    font-size: 15rem !important;
                }
        
                @media only screen and (max-width: 450px) {
                    font-size: 13rem !important;
                }
            }
        }

        .list {

            .item {
                display: flex;
                align-items: center;

                &:not(:last-of-type) {
                    margin-bottom: 1rem;

                    @media only screen and (max-height: 450px) {
                        margin-bottom: 0;
                    }
                }

                .point-image {
                    width: 3.2rem;
                    min-width: 32px;
                    margin-right: .3rem;
                }

                span {
                    font-size: 2.2rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 20px !important;
                    }

                    @media only screen and (max-width: 850px) and (max-height: 500px) {
                        font-size: 16px !important;
                    }
                }
            }
        }
    }
}
</style>