<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap, Power1 } from 'gsap';

onMounted(() => {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SMALL IMAGES ANIMATION
    gsap.to('.header .images-composition .image-1', {duration: 1.75, y: '-10rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
    gsap.to('.header .images-composition .image-2', {duration: 1.75, y: '-6rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
    gsap.to('.header .images-composition .image-3', {duration: 1.75, y: '-3rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
    gsap.to('.header .images-composition .image-4', {duration: 1.75, y: '8rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
    gsap.to('.header .images-composition .image-5', {duration: 1.75, y: '8rem', ease: Power1.easeInOut, yoyo: true, repeat: -1});
})
</script>

<template>
    <header class="section header">
        <!-- <div class="inner-container"> -->
            <div class="header-content">
                <div class="info-1">
                    <strong class="logo">Earn.games</strong>
                    <h1 class="title-primary">
                        <span class="yellow">Ambassadors </span>
                        <span class="white"> Program</span>
                    </h1>
                </div>
                <div class="images-composition">
                    <div class="images-composition-inner-container">
                        <img src="@/assets/img/Ambassadors/boyLaptop.png" alt="" class="boy-laptop">
                        <!-- <img src="@/assets/svg/Ambassadors/purpleCircle.svg" alt="" class="purple-circle desktop"> -->
                        <img src="@/assets/img/Ambassadors/imageCompostionImg1.png" alt="" class="comp-image image-1">
                        <img src="@/assets/img/Ambassadors/imageCompostionImg2.png" alt="" class="comp-image image-2">
                        <img src="@/assets/img/Ambassadors/imageCompostionImg3.png" alt="" class="comp-image image-3">
                        <img src="@/assets/img/Ambassadors/imageCompostionImg4.png" alt="" class="comp-image image-4">
                        <img src="@/assets/img/Ambassadors/imageCompostionImg5.png" alt="" class="comp-image image-5">
                    </div>
                </div>
            </div>
            <div class="sub-header-content">
                <div class="info-2">
                    <h1 class="title-primary">
                        <span>
                            <span class="yellow">Goal </span>
                            <span class="white"> of the <br> Ambassador's Program</span>
                        </span>
                    </h1>
                    <p class="description">
                        To build a cohesive community by spreadingn awareness about our mission to "empower 
                        people from emerging countries" using a network of Ambassadors who share the same purpose.
                    </p>
                </div>
            </div>
        <!-- </div> -->
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2000;

    .sub-header-content {
        @include width-restriction;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .header-content {
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
        
        @media only screen and (max-width: 850px) and (min-height: 600px) {
            top: auto;
            left: auto;
            position: relative;
            transform: none;
            // margin: 0 auto;
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
        }

        .boy-laptop {
            width: 100%;
            position: relative;
            z-index: 100;
        }

        .purple-circle {
            position: absolute;
            bottom: -35%;
            // top: -10%;
            left: -15%;
            z-index: 10;
            width: 110rem;
            // filter: hue-rotate(10deg) blur(15px) brightness(1.2);
        }

        .comp-image {
            position: absolute;
            z-index: 20;
        }

        .image-1 {
            width: 15rem;
            top: 21%;
            left: 5%;
        
            @media only screen and (max-width: 850px) {
                width: 13rem;
            }
        }

        .image-2 {
            width: 21rem;
            bottom: 10%;
            left: 4%;
        
            @media only screen and (max-width: 850px) {
                width: 19rem;
                bottom: 2%;
            }
        }

        .image-3 {
            width: 8rem;
            bottom: 26%;
            left: 44%;
        }

        .image-4 {
            width: 12rem;
            bottom: 28%;
            right: 23%;
        }

        .image-5 {
            width: 14.5rem;
            top: 9%;
            right: 29%;
        }
    }

    .info-1 {
        position: absolute;
        top: 45%;
        right: 10%;
        transform: translateY(-50%);
        text-align: right;
        z-index: 1000;
        
        @media only screen and (max-width: 1000px) {
        
            @media only screen and (max-height: 600px) {
                top: 50%;
            }
        }
        
        @media only screen and (max-width: 850px) and (min-height: 600px) {
            position: static;
            transform: none;
            text-align: center;
        }

        .logo {
            font-family: Delirium;
            font-weight: 400;
            font-size: 8rem !important;
            display: inline-block;
            margin-bottom: 3rem;
        
            @media only screen and (max-width: 850px) {
                font-size: 6rem !important;
                margin-bottom: 2rem;
            }
        }

        .title-primary {
            font-weight: 400;
            line-height: .8;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        
            @media only screen and (max-width: 850px) and (min-height: 600px) {
                justify-content: center;
                align-items: center;
                line-height: .9;
            }

            span {
                font-size: 19rem !important;
        
                @media only screen and (max-width: 850px) {
                    font-size: 15rem !important;
                }
            }

            .yellow {
                color: #FFCF64;
            }
        }
    }
    
    .info-2 {
        @include abs-center;
        z-index: 500;
        width: 80rem;

        @media only screen and (max-width: 850px) {
            // @include width-restriction;
            width: 100%;
        }

        .title-primary {

            @media only screen and (max-width: 850px) {
                margin-bottom: 2rem;
            }

            span {
                font-size: 15rem !important;
                line-height: .85;

                @media only screen and (max-width: 850px) {
                    font-size: 12rem !important;
                }

                @media only screen and (max-width: 550px) {
                    font-size: 14rem !important;
                }
            }
        }

        .description {
            font-size: 2rem;
            width: 45rem;
            margin-left: auto;

            @media only screen and (max-width: 450px) {
                width: 39rem;
            }
        }
    }
}
</style>