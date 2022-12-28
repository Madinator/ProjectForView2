<script setup lang="ts">
import { onMounted, provide, ref, type Ref } from 'vue';
import { gsap, Power1 } from 'gsap';
import { useBaseStore } from '@/stores/index';
import AppFooter from '@/components/Singular/App/Footer.vue';
import CustomHeader from '@/components/Reusable/Courses/Header.vue';
import SectionCards from '@/components/Reusable/Courses/SectionCards.vue';
import SectionBuy from '@/components/Reusable/Courses/SectionBuy.vue';

const baseStore = useBaseStore();

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
// onUnmounted(() => {
//   // REMOVE WINDOW EVENT LISTENER
//   window.removeEventListener('resize', checkDeviceType);
// })

provide<Ref<boolean>>('isMobile', isMobile);

onMounted(() => {
    const initialWindowWidth = window.innerWidth;

    // RELOAD PAGE ON RESIZE
    window.addEventListener('resize', () => {
        checkDeviceType();
        const newWindowWidth = Math.abs(initialWindowWidth - window.innerWidth);
        if (newWindowWidth < 100) return;
        location.reload();
    })

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CSS UNITS IN PIXELS
    const baseFontSizeString = getComputedStyle(document.querySelector('html')!).fontSize;
    const baseFontSize = +baseFontSizeString.substring(0, baseFontSizeString.length - 2);
    let vw = windowWidth / 100;
    let vwRestricted = windowWidth / 100;
    let vh = windowHeight / 100;

    if (windowWidth > 1950) {
        vwRestricted = 1920 / 100;
    }
    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TIMELINE END
    let scrollTimelineEnd = 'top -2000px';

    if (navigator.userAgent.match(/firefox|fxios/i)) {
        scrollTimelineEnd = 'top -8000px';
    }
    
    if (windowWidth < 850 || baseStore.isTouchDevice()) {
        scrollTimelineEnd = 'top -4000px';
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GSAP TIMELINE
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.animation-block',
            start: 'top 0%',
            end: scrollTimelineEnd,
            scrub: 1,
            pin: '.animation-block'
        }
    });

    if (window.outerWidth > 850) {
        timeline
        .add('header-animation')
        .to('.header', {duration: .4, y: -120 * vh, ease: 'linear'}, 'header-animation')
        .from('.section-cards', {duration: .4, y: 120 * vh, ease: 'linear'}, 'header-animation')
        .from('.section-cards .info', {duration: .4, x: -10 * vw, y: 15 * vh, ease: 'linear'}, 'header-animation')
        .from('.section-cards .cards-container', {duration: .4, x: 10 * vw, y: 20 * vh, ease: 'linear'}, 'header-animation')
        .to('.animation-block .background', {duration: .4, scale: 1.2, x: 10 * vw, y: 10 * vh, ease: 'linear'}, 'header-animation')
        
        .add('cards-animation')
        .from('.section-cards .cards-right-piece', {duration: .3, opacity: 0, ease: 'linear'}, 'cards-animation')
        .from('.section-cards .cards-left-piece', {duration: .3, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.animation-block .background', {duration: .4, x: -10 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .info', {duration: .4, x: -80 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card', {duration: .4, scale: 1, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-1 .card', {duration: .4, x: -35 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-2 .card', {duration: .4, x: -22 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-3 .card', {duration: .4, x: -8 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container .card', {duration: .4, delay: .42, y: -100 * vh, stagger: .15, ease: 'linear'}, 'cards-animation')
        .to('.section-cards', {duration: .01, delay: 1.2, autoAlpha: 0, ease: 'linear'}, 'cards-animation')
        .from('.section-buy .info', {duration: .4, delay: .8, y: 100 * vh, ease: 'linear'}, 'cards-animation')
        .from('.section-buy .parallax-image-container-1', {duration: .4, delay: .8, y: 100 * vh, ease: 'linear'}, 'cards-animation')
        .from('.section-buy .parallax-image-container-2', {duration: .4, delay: .8, y: 100 * vh, ease: 'linear'}, 'cards-animation')
        .from('.section-buy .section-image', {duration: .2, delay: 1, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .cards-right-piece', {duration: .3, delay: .8, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .cards-left-piece', {duration: .3, delay: .8, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.animation-block .background', {duration: .4, delay: .8, scale: 1.4, ease: 'linear'}, 'cards-animation')
    } else {
        timeline
        .add('header-animation')
        .to('.header', {duration: .5, y: -130 * vh, ease: 'linear'}, 'header-animation')
        .from('.section-cards', {duration: .5, y: 120 * vh, ease: 'linear'}, 'header-animation')
        .from('.section-cards .info', {duration: .5, y: 100 * vh, ease: 'linear'}, 'header-animation')
        .from('.section-cards .cards-container', {duration: .5, delay: .5, y: 100 * vh, ease: 'linear'}, 'header-animation')
        .to('.section-cards .info', {duration: .5, delay: .53, y: -100 * vh, ease: 'linear'}, 'header-animation')
        
        .add('cards-animation')
        .from('.section-cards .cards-right-piece', {duration: .3, opacity: 0, ease: 'linear'}, 'cards-animation')
        .from('.section-cards .cards-left-piece', {duration: .3, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-1 .card', {duration: .4, x: -100 * vw, scale: .8, autoAlpha: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-2 .card', {duration: .4, x: 0, y: 0, scale: .95, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-2 .card', {duration: .4, delay: .4, x: -100 * vw, scale: .8, autoAlpha: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-3 .card', {duration: .4, delay: .4, x: 0, y: 0, scale: .95, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-3 .card', {duration: .4, delay: .8, x: -100 * vw, scale: .8, autoAlpha: 0, ease: 'linear'}, 'cards-animation')
        // .to('.section-cards .card-container-1 .card', {duration: .4, x: -35 * vw, ease: 'linear'}, 'cards-animation')
        // .to('.section-cards .card-container-2 .card', {duration: .4, x: -22 * vw, ease: 'linear'}, 'cards-animation')
        // .to('.section-cards .card-container-3 .card', {duration: .4, x: -8 * vw, ease: 'linear'}, 'cards-animation')
        
        .to('.section-cards', {duration: .01, delay: 1.2, autoAlpha: 0, ease: 'linear'}, 'cards-animation')
        .from('.section-buy .info', {duration: .4, delay: .8, y: 100 * vh, ease: 'linear'}, 'cards-animation')
        .from('.section-buy .parallax-image-container-1', {duration: .4, delay: .8, y: 100 * vh, ease: 'linear'}, 'cards-animation')
        .from('.section-buy .parallax-image-container-2', {duration: .4, delay: .8, y: 100 * vh, ease: 'linear'}, 'cards-animation')
        .from('.section-buy .section-image', {duration: .2, delay: 1, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .cards-right-piece', {duration: .3, delay: .8, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .cards-left-piece', {duration: .3, delay: .8, opacity: 0, ease: 'linear'}, 'cards-animation')
    }
})
</script>

<template>
    <div class="page page-course page-creative-training">
        <div class="animation-block">
            <div class="background-container">
                <img v-if="!isMobile" src="/img/Courses/Web3Basics/headerBackground.jpg" alt="" class="background background-1 desktop">
            </div>
            <CustomHeader
                date1='September'
                date2='October'
                :slotsAll='990'
                :slotsAvailable='990'
                title='Trading Basics'
                description='A highly exclusive course that will help students learn to trade, acquire knowledge of fixed income products and understand the interconnectedness of the global capital markets while also using a simulated trading account.'
                pageName='TradingBasics'
            >
                <img v-if="isMobile" src="/img/Courses/TradingBasics/sectionBuyParallaxImage1.png" alt="" class="coin-left">
                <img v-if="isMobile" src="/img/Courses/TradingBasics/sectionBuyParallaxImage2.png" alt="" class="coin-right">
            </CustomHeader>
            <SectionCards
                titleLine1='Trading'
                titleLine2='Basics'
                titleLine3='This'
                pageName='TradingBasics'
            ></SectionCards>
            <SectionBuy
                date1='September'
                date2='October'
                :slotsAll='990'
                :slotsAvailable='990'
                title='Trading Basics'
                pageName='TradingBasics'
            ></SectionBuy>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-creative-training {

    .animation-block {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    ::v-deep(.header-image-container) {
        position: absolute;
        top: 52%;
        right: 0%;
        transform: translateY(-50%);
        width: 100rem;

        @media only screen and (max-width: 1000px) {
            right: -2%;
        }

        @media only screen and (max-width: 850px) and (min-height: 600px),
        only screen and (max-width: 600px) {
            transform: translateX(-50%);
            top: auto;
            right: auto;
            bottom: -16rem;
            left: 45%;
            width: 63rem;
        }

        @media only screen and (max-width: 850px) and (max-height: 600px) and (min-width: 600px) {
            width: 60rem;

            @media only screen and (max-width: 700px) {
                right: -5%;
            }
        }
    }

    ::v-deep(.section-image) {
        width: 80rem;

        @media only screen and (max-width: 850px) {
            width: 52rem;
        }
    }

    ::v-deep(.parallax-image-container-1) {
        bottom: 10%;
        left: 3%;
        width: 7rem;

        @media only screen and (max-width: 850px) {
            bottom: 37%;
            left: -7rem;
            width: 14rem;
        }
    }

    ::v-deep(.parallax-image-container-2) {
        top: 12%;
        bottom: auto;
        right: 2%;
        width: 20rem;
        filter: blur(4px);

        @media only screen and (max-width: 850px) {
            width: 20rem;
            top: 5%;
            right: -9rem;
        }
    }

    ::v-deep(.card-container-1) {
        width: 37rem !important;

        @media only screen and (max-width: 850px) {
            left: 44% !important;
        }
    }

    ::v-deep(.card-container-2) {
        width: 35rem !important;
    }

    ::v-deep(.card-container-3) {
        width: 33rem !important;
        left: 72% !important;

        @media only screen and (max-width: 850px) {
            left: 59% !important;
        }
    }
    
    .coin-left {
        position: absolute;
        bottom: 47%;
        left: -10rem;
        width: 20rem;
    }

    ::v-deep(.parallax-image-container-2),
    .coin-right {
        position: absolute;
        width: 15rem;
        top: 15%;
        right: -5rem;
    }
    
    
    .background-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 1;

        @media only screen and (max-width: 850px) {
            background-image: url(/img/Courses/Web3Basics/headerBackgroundMobile.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        .background {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    ::v-deep(.btn-yellow) {

        @media only screen and (max-width: 850px) {
            font-size: 18px !important;
            padding: 10px 35px !important;
        }
    }
}
</style>