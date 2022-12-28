<script setup lang="ts">
import SectionIntroduction from '@/components/Singular/Landing/SectionIntroduction.vue';

</script>

<template>
    <header class="section header">
        <div class="background-gradient"></div>
        <div class="header__content">
            <div class="header__inner-container">
                <div class="width-height-container">
                    <SectionIntroduction />
                    <div class="images-composition">
                        <img src="@/assets/img/Landing/headerBackground/1.9k.jpg" alt="" class="background-banner">
                        <div class="main-phone-container">
                            <img src="@/assets/img/Landing/iphone.png" alt="" class="main-phone">
                        </div>
                    </div>
                </div>
                <div class="header__info-container">
                    <div class="info">
                        <img src="@/assets/img/Landing/logoBig.png" alt="" class="logo">
                        <strong class="slogan">Play and learn</strong>
                    </div>
                </div>
                <div class="phones-container phones-container-left">
                    <img src="@/assets/img/Landing/tablet1.png" alt="" class="tablet tablet-top">
                    <div class="phone-container phone-top-container">
                        <img src="@/assets/img/Landing/phone1.png" alt="" class="phone phone-top">
                    </div>
                    <div class="phone-container phone-bottom-container">
                        <img src="@/assets/img/Landing/phone2.png" alt="" class="phone phone-bottom">
                    </div>
                    <img src="@/assets/img/Landing/tablet2.png" alt="" class="tablet tablet-bottom">
                </div>
                <div class="phones-container phones-container-right">
                    <img src="@/assets/img/Landing/tablet3.png" alt="" class="tablet tablet-top">
                    <div class="phone-container phone-top-container">
                        <img src="@/assets/img/Landing/phone3.png" alt="" class="phone phone-top">
                    </div>
                    <div class="phone-container phone-bottom-container">
                        <img src="@/assets/img/Landing/phone4.png" alt="" class="phone phone-bottom">
                    </div>
                    <img src="@/assets/img/Landing/tablet4.png" alt="" class="tablet tablet-bottom">
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    overflow: hidden;
    z-index: 8000;

    .background-gradient {
        @include abs-center;

        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(255deg, #0A1015 -32%, #0A1015 115%);
        z-index: 100;
        
        @media only screen and (max-width: 850px) {
            height: 120vh;
        }
    }

    .main-phone-container {
        @include abs-center;
        width: 100vw;
        height: 120vh;
        opacity: 0;
        will-change: width, height;

        .main-phone {
            @include abs-center;
            width: 100%;
            height: 100%;
        }
    }
    
    .images-composition,
    .width-height-container {
        overflow: hidden;
    }

    .images-composition {
        position: relative;
        z-index: 9000;
    }

    .width-height-container {
        will-change: width, height;
    }

    .header__content,
    .width-height-container {
        @include abs-center;
        transform: translate(-50%, -50%) !important;

        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        backface-visibility: hidden;
        z-index: 500;

        .images-composition {
            width: 100%;
            height: 100%;
        }

        .header__inner-container {
            width: 100%;
            height: 100%;
        }

        .background-banner {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .header__info-container {
            position: absolute;
            transform: translate(-50%, -50%) !important;
            left: 50vw;
            top: 82%;
            z-index: 600;
            
            
            @media only screen and (max-height: 500px) {
                top: 79%;
            }
            
            @media only screen and (max-height: 410px) {
                top: 77%;
            }
        }
        .info {
            display: flex;
            align-items: center;
            flex-direction: column;

            .logo {
                width: 28rem;
                min-width: 270px;
                margin-bottom: 5px;
            }

            .slogan {
                font-weight: 700;
                font-size: 2.7rem !important;
            }
        }
    }

    .phones-container {
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 300;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .phone-container {
            width: 40rem;
            margin-bottom: 2.5rem;

            @media only screen and (max-width: 850px),
            only screen and (max-width: 1000px) and (max-height: 600px) {
                width: 59rem;
                margin-bottom: 1.25rem;
            }
            
            .phone {
                width: 100%;
            }
        }

        .phone-top-container {

            @media only screen and (max-width: 850px),
            only screen and (max-width: 1000px) and (max-height: 600px) {
                transform: translateY(-15rem);
            }
        }

        .phone-bottom-container {

            @media only screen and (max-width: 850px),
            only screen and (max-width: 1000px) and (max-height: 600px) {
                transform: translateY(15rem);
            }
        }

        .tablet {
            width: 36rem;

            @media only screen and (max-width: 850px),
            only screen and (max-width: 1000px) and (max-height: 600px) {
                width: 55rem;
            }

            &:not(:last-of-type) {
                margin-bottom: 2.5rem;

                @media only screen and (max-width: 850px),
                only screen and (max-width: 1000px) and (max-height: 600px) {
                    margin-bottom: 1.25rem;
                }
            }
        }
    }

    .phones-container-left {
        left: 0;
        align-items: flex-end;

        @media only screen and (max-width: 850px),
        only screen and (max-width: 1000px) and (max-height: 600px) {
            transform: translateX(calc((100vw - 152rem) / 2));
        }

        @media only screen and (min-width: 1920px) {
            left: calc((100vw - 1920px) / 2);
        }

        .tablet {

            @media only screen and (max-width: 850px),
            only screen and (max-width: 1000px) and (max-height: 600px) {
                transform: translateX(16.5rem);
            }
        }
    }

    .phones-container-right {
        right: 0;
        align-items: flex-start;

        @media only screen and (max-width: 850px),
        only screen and (max-width: 1000px) and (max-height: 600px) {
            transform: translateX(calc((100vw - 152rem) / -2));
        }

        @media only screen and (min-width: 1920px) {
            right: calc((100vw - 1920px) / 2);
        }

        // .phone {
        //     transform: scaleX(-1);
        // }

        .tablet {

            @media only screen and (max-width: 850px),
            only screen and (max-width: 1000px) and (max-height: 600px) {
                transform: translateX(-16.5rem);
            }
        }
    }
}
</style>