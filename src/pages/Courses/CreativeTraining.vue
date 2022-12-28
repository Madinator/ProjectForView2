<script setup lang="ts">
import { onMounted, provide, ref, type Ref } from 'vue';
import { gsap, Power1 } from 'gsap';
import { useBaseStore } from '@/stores/index';
import AppFooter from '@/components/Singular/App/Footer.vue';
import CustomHeader from '@/components/Reusable/Courses/Header.vue';
import SectionCards from '@/components/Reusable/Courses/SectionCards.vue';
import SectionBuy from '@/components/Reusable/Courses/SectionBuy.vue';
import SectionCourseContent from '@/components/Singular/Courses/CreativeTraining/SectionCourseContent.vue';
import SectionProfessor from '@/components/Singular/Courses/CreativeTraining/SectionProfessor.vue';
import SectionReviews from '@/components/Singular/Courses/CreativeTraining/SectionReviews.vue';

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
    let scrollTimelineEnd = 'top -620%';

    if (navigator.userAgent.match(/firefox|fxios/i)) {
        scrollTimelineEnd = 'top -800%';
    }
    
    if (windowWidth < 850 || baseStore.isTouchDevice()) {
        scrollTimelineEnd = 'top -4200px';
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
        .to('.section-cards .info', {duration: .5, x: -80 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card', {duration: .4, scale: 1, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-1 .card', {duration: .4, x: -35 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-2 .card', {duration: .4, x: -22 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container-3 .card', {duration: .4, x: -8 * vw, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .card-container .card', {duration: .4, delay: .42, y: -100 * vh, stagger: .15, ease: 'linear'}, 'cards-animation')
        .to('.section-cards', {duration: .01, delay: 1.2, autoAlpha: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .cards-right-piece', {duration: .3, delay: .8, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .cards-left-piece', {duration: .3, delay: .8, opacity: 0, ease: 'linear'}, 'cards-animation')
        
        .add('course-content-animation')
        .from('.section-course-content .right-piece', {duration: .3, opacity: 0, ease: 'linear'}, 'course-content-animation-=.4')
        .from('.section-course-content .left-piece', {duration: .3, opacity: 0, ease: 'linear'}, 'course-content-animation-=.4')
        .from('.section-course-content .inner-container', {duration: .4, y: 100 * vh, ease: 'linear'}, 'course-content-animation-=.4')
        .to('.section-course-content .inner-container', {duration: .4, delay: .5, y: -60 * vh, ease: 'linear'}, 'course-content-animation-=.4')
        .to('.section-course-content .inner-container', {duration: .4, delay: 1, y: -180 * vh, ease: 'linear'}, 'course-content-animation-=.4')
        .to('.section-course-content .right-piece', {duration: .3, delay: 1, opacity: 0, ease: 'linear'}, 'course-content-animation-=.4')
        .to('.section-course-content .left-piece', {duration: .3, delay: 1, opacity: 0, ease: 'linear'}, 'course-content-animation-=.4')
        .from('.section-professor .image-container', {duration: .5, delay: 1, x: -80 * vw, ease: 'linear'}, 'course-content-animation-=.4')
        .from('.section-professor .info', {duration: .5, delay: 1, x: 80 * vw, ease: 'linear'}, 'course-content-animation-=.4')
        .to('.section-course-content', {duration: .01, delay: 1.3, autoAlpha: 0, ease: 'linear'}, 'course-content-animation-=.4')
        
        .add('scrolling-animations')
        .to('.section-professor', {duration: .5, y: 120 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-reviews', {duration: .5, autoAlpha: 0, ease: 'linear'}, 'scrolling-animation')
        .to('.section-reviews', {duration: .5, delay: .5, y: -100 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-buy .info', {duration: .4, delay: .6, y: 100 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-buy .parallax-image-container-1', {duration: .4, delay: .6, y: 100 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-buy .parallax-image-container-2', {duration: .4, delay: .6, y: 100 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-buy .section-image', {duration: .2, delay: .7, opacity: 0, ease: 'linear'}, 'scrolling-animation')
        .to('.animation-block .background', {duration: .4, delay: .6, scale: 1.4, x: -20 * vw, ease: 'linear'}, 'scrolling-animation')
    } else {
        let XProfessor = 80 * vw;

        if (windowWidth < 550) {
            XProfessor = 110 * vw;
        }

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
        .to('.section-cards', {duration: .01, delay: 1.2, autoAlpha: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .cards-right-piece', {duration: .3, delay: .8, opacity: 0, ease: 'linear'}, 'cards-animation')
        .to('.section-cards .cards-left-piece', {duration: .3, delay: .8, opacity: 0, ease: 'linear'}, 'cards-animation')
        
        .add('course-content-animation')
        .from('.section-course-content .inner-container', {duration: .4, y: 100 * vh, ease: 'linear'}, 'course-content-animation-=.2')
        .to('.section-course-content .inner-container', {duration: .4, delay: .5, y: -60 * vh, ease: 'linear'}, 'course-content-animation-=.2')
        .to('.section-course-content .inner-container', {duration: .4, delay: 1, y: -180 * vh, ease: 'linear'}, 'course-content-animation-=.2')
        .from('.section-professor .image-container', {duration: .4, delay: 1, x: -XProfessor, ease: 'linear'}, 'course-content-animation-=.2')
        .from('.section-professor .info', {duration: .4, delay: 1, x: XProfessor, ease: 'linear'}, 'course-content-animation-=.2')
        .to('.section-course-content', {duration: .01, delay: 1.3, autoAlpha: 0, ease: 'linear'}, 'course-content-animation-=.2')
        
        .add('scrolling-animations')
        .to('.section-professor', {duration: .5, y: 120 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-reviews', {duration: .5, autoAlpha: 0, ease: 'linear'}, 'scrolling-animation')
        .to('.section-reviews', {duration: .5, delay: .5, y: -100 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-buy .info', {duration: .4, delay: .6, y: 100 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-buy .parallax-image-container-1', {duration: .4, delay: .6, y: 100 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-buy .parallax-image-container-2', {duration: .4, delay: .6, y: 100 * vh, ease: 'linear'}, 'scrolling-animation')
        .from('.section-buy .section-image', {duration: .2, delay: .7, opacity: 0, ease: 'linear'}, 'scrolling-animation')
        .to('.animation-block .background', {duration: .4, delay: .6, scale: 1.4, x: -20 * vw, ease: 'linear'}, 'scrolling-animation')
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
                title='Creatives Training'
                description='Teaches skills needed to be a graphic designer and to communicate through image-making and typography. Students will also complete a capstone project to add to their professional portfolios.'
                pageName='CreativeTraining'
            >
                <img v-if="!isMobile" src="/img/Courses/CreativeTraining/headerCircleBig.png" alt="" class="circle-big">
                <img v-if="!isMobile" src="/img/Courses/CreativeTraining/headerCircleSmall.png" alt="" class="circle-small">
                <img v-if="isMobile" src="/img/Courses/CreativeTraining/headerCirclesMobile.png" alt="" class="circles">
            </CustomHeader>
            <SectionCards
                titleLine1='Creatives'
                titleLine2='Training'
                titleLine3='This'
                pageName='CreativeTraining'
            ></SectionCards>
            <SectionCourseContent />
            <SectionProfessor />
            <SectionReviews />
            <SectionBuy
                date1='September'
                date2='October'
                :slotsAll='990'
                :slotsAvailable='990'
                title='Creatives Training'
                pageName='CreativeTraining'
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

    ::v-deep(.section-image) {
        width: 100rem;
        top: 0;
        bottom: auto;

        @media only screen and (max-width: 850px) {
            width: 57rem;
        }
    }

    .circle-small {
        position: absolute;
        bottom: 9rem;
        left: 0rem;
        width: 16rem;

        @media only screen and (max-width: 1100px) {
            left: -4rem;
        }
    }

    .circle-big {
        position: absolute;
        bottom: -17rem;
        left: -4rem;
        width: 45rem;
    }

    .circles {
        position: absolute;
        top: 7%;
        left: 0;
        width: 20rem;
    }
}
</style>