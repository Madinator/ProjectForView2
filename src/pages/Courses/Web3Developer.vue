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
        .to('.header', {duration: .5, y: -140 * vh, ease: 'linear'}, 'header-animation')
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
                <img v-if="!isMobile" src="/img/Courses/CreativeTraining/headerBackground.jpg" alt="" class="background background-1 desktop">
            </div>
            <CustomHeader
                date1='September'
                date2='October'
                :slotsAll='990'
                :slotsAvailable='990'
                title='Web 3.0 Developer'
                description='By being eligible for the course, the candidates will experience Web 1.0 and 2.0 development and get trained to become Web 3.0 Developers.'
                pageName='Web3Developer'
            ></CustomHeader>
            <SectionCards
                titleLine1='Web 3.0'
                titleLine2='Developer'
                titleLine3='This'
                pageName='Web3Developer'
            ></SectionCards>
            <SectionBuy
                date1='September'
                date2='October'
                :slotsAll='990'
                :slotsAvailable='990'
                title='Web 3.0 Developer'
                pageName='Web3Developer'
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
        top: 50%;
        right: 4%;
        transform: translateY(-50%);
        width: 70rem;

        @media only screen and (max-width: 1000px) {
            right: -2%;
        }

        @media only screen and (max-width: 850px) and (min-height: 600px),
        only screen and (max-width: 600px) {
            transform: translateX(-50%);
            top: auto;
            right: auto;
            bottom: -38rem;
            left: 50%;
            width: 65rem;
        }
        
        @media only screen and (max-width: 500px) {
            bottom: -32rem;
            width: 55rem;
        }

        @media only screen and (max-width: 850px) and (max-height: 600px) and (min-width: 600px) {
            width: 60rem;

            @media only screen and (max-width: 700px) {
                right: -5%;
            }
        }
    }

    ::v-deep(.parallax-image-container-1) {
        bottom: auto;
        top: 25%;
        width: 8rem;
    }

    ::v-deep(.parallax-image-container-2) {
        top: auto;
        bottom: 25%;
        width: 12rem;
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
        width: 37rem !important;
        left: 72% !important;

        @media only screen and (max-width: 850px) {
            left: 61% !important;
        }
    }
    
    .background-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 1;

        @media only screen and (max-width: 850px) {
            background-image: url(/img/Courses/CreativeTraining/headerBackgroundMobile.jpg);
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