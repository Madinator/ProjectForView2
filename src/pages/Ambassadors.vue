<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap, Power1 } from 'gsap';
import { useBaseStore } from '@/stores/index';
import AppFooter from '@/components/Singular/App/Footer.vue';
import CustomHeader from '@/components/Singular/Ambassadors/Header.vue';
import SectionVision from '@/components/Singular/Ambassadors/SectionVision.vue';
import SectionBenefits from '@/components/Singular/Ambassadors/SectionBenefits.vue';
import SectionIncentives from '@/components/Singular/Ambassadors/SectionIncentives.vue';
import SectionAudience from '@/components/Singular/Ambassadors/SectionAudience.vue';
import SectionCards from '@/components/Singular/Ambassadors/SectionCards.vue';
import SectionHierarchy from '@/components/Singular/Ambassadors/SectionHierarchy.vue';
import Preloader from '@/components/Singular/App/Preloader.vue';

const baseStore = useBaseStore();

onMounted(() => {
    const initialWindowWidth = window.innerWidth;

    // RELOAD PAGE ON RESIZE
    window.addEventListener('resize', () => {
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
    // let scrollTimelineEnd = 'top -5500px';
    let scrollTimelineEnd = 'top -1000%';

    if (navigator.userAgent.match(/firefox|fxios/i)) {
        // scrollTimelineEnd = 'top -8000px';
        scrollTimelineEnd = 'top -2000%';
    }
    
    if (windowWidth < 850 || baseStore.isTouchDevice()) {
        scrollTimelineEnd = 'top -8000px';
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

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ANIMATIONS VALUES

    let YHeader = -110 * vh;

    if (window.outerWidth <= 1000) {
        YHeader = -120 * vh;

        if (window.outerHeight <= 500) {
            YHeader = -130 * vh;
        }
    }

    if (window.outerWidth <= 850) {

        if (window.outerHeight <= 650) {
            YHeader = -125 * vh;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ANIMATIONS
    if (window.outerWidth > 850) {
        let XSectionAudienceContent = 100 * baseFontSize;

        if (window.outerWidth > 2500) {
            XSectionAudienceContent = 60 * vw;
        }

        timeline
        .add('header-animation')
        .to('.header .info-1', {duration: .42, delay: 0, y: YHeader, x: 10 * vw, ease: 'linear'}, 'header-animation')
        .to('.header .images-composition-inner-container', {duration: .42, delay: 0, y: YHeader, x: 10 * vw, ease: 'linear'}, 'header-animation')
        // .to('.header .images-composition .purple-circle', {duration: .05, opacity: 0, ease: 'linear'}, 'header-animation')
        .from('.header .info-2 .title-primary', {duration: .4, delay: .19, x: -100 * vw, ease: 'linear'}, 'header-animation')
        .from('.header .info-2 .description', {duration: .4, delay: .19, x: 85 * vw, ease: 'linear'}, 'header-animation')
        .to('.animation-block .background-sphere', {duration: .4, delay: .19, x: '10%', ease: 'linear'}, 'header-animation')

        .add('yellow-circle-animation')
        .to('.animation-block .yellow-circle', {duration: .4, scale: 100, ease: 'linear'}, 'yellow-circle-animation+=.05')
        .to('.header', {duration: .01, delay: .3, autoAlpha: 0, ease: 'linear'}, 'yellow-circle-animation+=.05')
        .to('.animation-block .yellow-circle', {duration: .15, delay: .31, autoAlpha: 0, ease: 'linear'}, 'yellow-circle-animation+=.05')
        .from('.section-vision .info-container', {duration: .4, delay: .15, x: -100 * vw, ease: 'linear'}, 'yellow-circle-animation+=.05')
        .from('.section-vision .image-container', {duration: .4, delay: .15, x: '100rem', ease: 'linear'}, 'yellow-circle-animation+=.05')
        // .to('.animation-block .blick-1', {duration: .15, delay: .3, x: 10 * vw, y: 10 * vh, ease: 'linear'}, 'yellow-circle-animation+=.05')
        // .to('.animation-block .blick-2', {duration: .15, delay: .3, x: 10 * vw, y: 10 * vh, ease: 'linear'}, 'yellow-circle-animation+=.05')
        // .to('.animation-block .blick-3', {duration: .15, delay: .3, x: -10 * vw, y: -10 * vh, ease: 'linear'}, 'yellow-circle-animation+=.05')
        // .to('.animation-block .blick-4', {duration: .15, delay: .3, x: -10 * vw, y: -10 * vh, ease: 'linear'}, 'yellow-circle-animation+=.05')

        .add('section-vision-animation')
        .to('.section-benefits .title-primary', {duration: .4, delay: .15, y: 18 * vh, scale: 1, ease: 'linear'}, 'section-vision-animation')
        .to('.section-vision .info', {duration: .4, delay: .05, y: 100 * vh, ease: 'linear'}, 'section-vision-animation')
        .to('.section-vision .image-container', {duration: .4, delay: .05, y: 100 * vh, ease: 'linear'}, 'section-vision-animation')
        .to('.section-vision', {duration: .01, delay: .3, autoAlpha: 0, ease: 'linear'}, 'section-vision-animation')

        .add('section-benefits-animation')
        .to('.section-benefits .title-primary', {duration: .2, y: '-3rem', scale: .5, ease: 'linear'}, 'section-benefits-animation')
        .from('.section-benefits .honeycombs-container', {duration: .2, opacity: 0, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-1', {duration: .2, delay: .2, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-transparent', {duration: .4, delay: .2, opacity: 0, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-2', {duration: .2, delay: .4, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-1', {duration: .4, delay: .4, opacity: 0, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-3', {duration: .2, delay: .6, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-2', {duration: .4, delay: .6, opacity: 0, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-4', {duration: .2, delay: .8, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-3', {duration: .4, delay: .8, opacity: 0, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-5', {duration: .2, delay: 1, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-4', {duration: .4, delay: 1, opacity: 0, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-6', {duration: .2, delay: 1.2, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-5', {duration: .4, delay: 1.2, opacity: 0, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits', {duration: .4, delay: 1.5, y: -120 * vh, ease: 'linear'}, 'section-benefits-animation')

        .add('section-incentives-animation')
        .to('.animation-block .background-sphere', {duration: .4, x: 0, ease: 'linear'}, 'section-incentives-animation-=.3')
        .from('.section-incentives .content', {duration: .4, y: 100 * vh, ease: 'linear'}, 'section-incentives-animation-=.3')
        .from('.section-incentives .content', {duration: .65, ease: 'linear'}, 'section-incentives-animation-=.3')

        .add('section-incentives-animation-2')
        .to('.section-incentives', {duration: .4, y: -100 * vh, ease: 'linear'}, 'section-incentives-animation-2-=.15')
        .to('.animation-block .background-sphere', {duration: .4, x: -10 * vw, ease: 'linear'}, 'section-incentives-animation-2-=.15')
        .to('.section-incentives', {duration: .01, delay: .4, autoAlpha: 0, ease: 'linear'}, 'section-incentives-animation-2-=.15')
        .from('.section-audience .images-composition-inner-container', {duration: .4, delay: .1, x: -XSectionAudienceContent, ease: 'linear'}, 'section-incentives-animation-2-=.15')
        .from('.section-audience .info', {duration: .4, delay: .1, x: XSectionAudienceContent, ease: 'linear'}, 'section-incentives-animation-2-=.15')
        
        .add('section-cards-animation')
        .to('.section-audience .info', {duration: .42, delay: 0, y: YHeader, x: 5 * vw, ease: 'linear'}, 'section-cards-animation+=.1')
        .to('.section-audience .images-composition-inner-container', {duration: .42, delay: 0, y: YHeader, x: -5 * vw, ease: 'linear'}, 'section-cards-animation+=.1')
        .from('.section-cards', {duration: .42, y: 105 * vh, ease: 'linear'}, 'section-cards-animation+=.1')
        .from('.section-cards .info', {duration: .42, x: -5 * vw, ease: 'linear'}, 'section-cards-animation+=.1')
        // .from('.section-cards .corner-circle', {duration: .1, delay: .3, opacity: 0, ease: 'linear'}, 'section-cards-animation+=.1')
        .to('.section-audience', {duration: .01, delay: .4, autoAlpha: 0, ease: 'linear'}, 'section-cards-animation+=.1')
        // .from('.section-cards .cards-container', {duration: .42, x: 5 * vw, ease: 'linear'}, 'section-cards-animation+=.1')
        
        .add('cards-shuffle-animation')
        .to('.section-cards .cards-container', {duration: 1.58, x: '-15%', ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-1', {duration: .5, scale: .7, autoAlpha: 0, x: '-10%', ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-2', {duration: .5, scale: .95, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-2', {duration: .5, delay: .54, scale: .7, autoAlpha: 0, x: '-10%', ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-3', {duration: .5, delay: .54, scale: .95, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-3', {duration: .5, delay: 1.08, scale: .7, autoAlpha: 0, x: '-10%', ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-4', {duration: .5, delay: 1.08, scale: .95, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container', {duration: .5, delay: 1.68, y: -130 * vh, x: '5%', ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .info', {duration: .4, delay: 1.68, y: -100 * vh, x: 10 * vw, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .images-corner', {duration: .4, delay: 1.68, x: '-80rem', ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards', {duration: .01, delay: 2.18, autoAlpha: 0, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        
        .add('section-hierarchy-animation')
        .from('.section-hierarchy', {duration: .4, y: 100 * vh, ease: 'linear'}, 'section-hierarchy-animation-=.3')
        .to('.section-hierarchy .line-container', {duration: 2.2, delay: .4, x: -100 * vw, ease: 'linear'}, 'section-hierarchy-animation-=.3')
        .to('.section-hierarchy .inner-container', {duration: .4, delay: 2.2, y: -50 * vh, ease: 'linear'}, 'section-hierarchy-animation-=.3')
        .from('.section-hierarchy .info-socials', {duration: .4, delay: 2.2, y: 50 * vh, ease: 'linear'}, 'section-hierarchy-animation-=.3')
        .from('.section-hierarchy .socials', {duration: .2, delay: 2.2, x: '-7rem', ease: Power1.easeIn}, 'section-hierarchy-animation-=.3')
        // .from('.section-hierarchy .purple-circle', {duration: .2, delay: 2.4, opacity: 0, ease: 'linear'}, 'section-hierarchy-animation-=.3')
        


    } else {
        let XLineContainer = -200 * vw;
        let XSectionAudienceInfo = '-100rem';
        let XSectionAudienceImages = '100rem';
        let XHoneycombs = (135 * baseFontSize - window.outerWidth) / -2;
        
        let YSectionCards = -100 * vh;
        let YSectionIncentivesCategory = -90 * vh;
        let YSectionIncentivesCategory2 = 60 * vh;
        let YSectionHierarchy = 40 * vh;

        if (window.outerHeight > 800) {
            YSectionCards = -800;
        }

        if (window.outerHeight < 600) {
            XSectionAudienceInfo = '100rem';
            XSectionAudienceImages = '-100rem';
        }

        if (window.outerHeight < 500) {
            YSectionHierarchy = 40 * 5;
        }

        if (window.outerHeight < 450) {
            YSectionIncentivesCategory = -90 * 4.5;
            YSectionIncentivesCategory2 = 60 * 4.5;
        }

        if (window.outerWidth < 450) {
            XLineContainer = -500 * vw;
        }


    timeline
        .add('header-animation')
        .to('.header .info-1', {duration: .7, delay: 0, y: YHeader, x: 10 * vw, ease: 'linear'}, 'header-animation')
        .to('.header .images-composition-inner-container', {duration: .7, delay: 0, y: YHeader, x: 10 * vw, ease: 'linear'}, 'header-animation')
        // .to('.header .images-composition .purple-circle', {duration: .05, opacity: 0, ease: 'linear'}, 'header-animation')
        .from('.header .info-2 .title-primary', {duration: .4, delay: .46, x: -100 * vw, ease: 'linear'}, 'header-animation')
        .from('.header .info-2 .description', {duration: .4, delay: .46, x: 85 * vw, ease: 'linear'}, 'header-animation')

        .add('yellow-circle-animation')
        .to('.animation-block .yellow-circle', {duration: .4, scale: 100, ease: 'linear'}, 'yellow-circle-animation')
        .to('.header', {duration: .01, delay: .3, autoAlpha: 0, ease: 'linear'}, 'yellow-circle-animation')
        .to('.animation-block .yellow-circle', {duration: .15, delay: .31, autoAlpha: 0, ease: 'linear'}, 'yellow-circle-animation')
        .from('.section-vision .info-container', {duration: .4, delay: .15, x: -100 * vw, ease: 'linear'}, 'yellow-circle-animation')
        .from('.section-vision .image-container', {duration: .4, delay: .15, x: '100rem', ease: 'linear'}, 'yellow-circle-animation')

        .add('section-vision-animation')
        .to('.section-benefits .title-primary', {duration: .7, delay: .15, y: 18 * vh, scale: 1, ease: 'linear'}, 'section-vision-animation')
        .to('.section-vision .info', {duration: .7, delay: .05, y: 100 * vh, ease: 'linear'}, 'section-vision-animation')
        .to('.section-vision .image-container', {duration: .7, delay: .05, y: 100 * vh, ease: 'linear'}, 'section-vision-animation')
        .to('.section-vision', {duration: .01, delay: .75, autoAlpha: 0, ease: 'linear'}, 'section-vision-animation')

        .add('section-benefits-animation')
        .to('.section-benefits .title-primary', {duration: .2, y: '-3rem', scale: .6, ease: 'linear'}, 'section-benefits-animation')
        .from('.section-benefits .honeycombs-container', {duration: .2, opacity: 0, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-1', {duration: .2, delay: .2, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-transparent', {duration: .4, delay: .2, opacity: 0, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-2', {duration: .2, delay: .4, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-1', {duration: .4, delay: .4, opacity: 0, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-container', {duration: .4, delay: .3, x: XHoneycombs, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-3', {duration: .2, delay: .6, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-2', {duration: .4, delay: .6, opacity: 0, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-4', {duration: .2, delay: .8, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-3', {duration: .4, delay: .8, opacity: 0, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-container', {duration: .4, delay: .8, x: 2 * XHoneycombs, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-5', {duration: .2, delay: 1, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-4', {duration: .4, delay: 1, opacity: 0, ease: 'linear'}, 'section-benefits-animation')

        .to('.section-benefits .honeycombs-6', {duration: .2, delay: 1.2, opacity: 1, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits .honeycombs-5', {duration: .4, delay: 1.2, opacity: 0, ease: 'linear'}, 'section-benefits-animation')
        .to('.section-benefits', {duration: .8, delay: 1.5, y: -120 * vh, ease: 'linear'}, 'section-benefits-animation')
        
        .add('section-incentives-animation')
        .from('.section-incentives .content', {duration: .7, y: 100 * vh, ease: 'linear'}, 'section-incentives-animation-=.6')
        .from('.section-incentives .content', {duration: .75, ease: 'linear'}, 'section-incentives-animation-=.6')
        
        .add('section-incentives-animation-2')
        .to('.section-incentives .title-primary', {duration: .4, y: YSectionIncentivesCategory, ease: 'linear'}, 'section-incentives-animation-2')
        .to('.section-incentives .category-1', {duration: .4, y: YSectionIncentivesCategory, ease: 'linear'}, 'section-incentives-animation-2')
        .to('.section-incentives .category-2', {duration: .4, y: 0 * vh, ease: 'linear'}, 'section-incentives-animation-2')
        .to('.section-incentives .category-3', {duration: .4, y: YSectionIncentivesCategory2, ease: 'linear'}, 'section-incentives-animation-2')

        .to('.section-incentives .category-2', {duration: .4, delay: .4, y: YSectionIncentivesCategory, ease: 'linear'}, 'section-incentives-animation-2')
        .to('.section-incentives .category-3', {duration: .4, delay: .4, y: 0 * vh, ease: 'linear'}, 'section-incentives-animation-2')

        // .to('.section-incentives .title-primary', {duration: .4, y: -90 * vh, delay: .7, ease: 'linear'}, 'section-incentives-animation-2')
        .to('.section-incentives .category-3', {duration: .4, delay: .8, y: YSectionIncentivesCategory, ease: 'linear'}, 'section-incentives-animation-2')

        .add('section-audience-animation')
        .to('.section-incentives', {duration: .8, y: -100 * vh, ease: 'linear'}, 'section-audience-animation')
        .to('.section-incentives', {duration: .01, delay: .8, autoAlpha: 0, ease: 'linear'}, 'section-audience-animation')
        .from('.section-audience .images-composition-inner-container', {duration: .4, x: XSectionAudienceImages, ease: 'linear'}, 'section-audience-animation-=.25')
        .from('.section-audience .info', {duration: .4, x: XSectionAudienceInfo, ease: 'linear'}, 'section-audience-animation-=.25')
        
        .add('section-cards-animation')
        .to('.section-audience .info', {duration: .8, delay: 0, y: YHeader, x: 5 * vw, ease: 'linear'}, 'section-cards-animation-=.23')
        .to('.section-audience .images-composition-inner-container', {duration: .8, delay: 0, y: YHeader, x: 5 * vw, ease: 'linear'}, 'section-cards-animation-=.23')
        .from('.section-cards', {duration: .8, y: 105 * vh, ease: 'linear'}, 'section-cards-animation-=.23')
        .to('.section-audience', {duration: .01, delay: .8, autoAlpha: 0, ease: 'linear'}, 'section-cards-animation-=.23')
        // .from('.section-cards .cards-container', {duration: .42, x: 5 * vw, ease: 'linear'}, 'section-cards-animation+=.1')
        
        .add('cards-shuffle-animation')
        .to('.section-cards .cards-container .card-1', {duration: .4, x: -100 * vw, scale: .8, autoAlpha: 0, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-2', {duration: .4, x: 0, y: 0, scale: .95, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-2', {duration: .4, delay: .4, x: -100 * vw, scale: .8, autoAlpha: 0, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-3', {duration: .4, delay: .4, x: 0, y: 0, scale: .95, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-3', {duration: .4, delay: .8, x: -100 * vw, scale: .8, autoAlpha: 0, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards .cards-container .card-4', {duration: .4, delay: .8, x: 0, y: 0, scale: .95, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards', {duration: .8, delay: 1.2, y: YSectionCards, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        .to('.section-cards', {duration: .01, delay: 2, autoAlpha: 0, ease: 'linear'}, 'cards-shuffle-animation+=.1')
        
        .add('section-hierarchy-animation')
        .from('.section-hierarchy', {duration: .7, y: 100 * vh, ease: 'linear'}, 'section-hierarchy-animation-=.55')
        .to('.section-hierarchy .line-container', {duration: 2.1, delay: .5, x: XLineContainer, ease: 'linear'}, 'section-hierarchy-animation-=.3')
        .to('.section-hierarchy .inner-container', {duration: .5, delay: 2.3, y: -45 * vh, ease: 'linear'}, 'section-hierarchy-animation-=.3')
        .from('.section-hierarchy .info-socials', {duration: .5, delay: 2.3, y: YSectionHierarchy, ease: 'linear'}, 'section-hierarchy-animation-=.3')
        .from('.section-hierarchy .socials ', {duration: .5, delay: 2.3, x: '-7rem', ease: Power1.easeIn}, 'section-hierarchy-animation-=.3')


    }
})
</script>

<template>
    <div class="page page-ambassadors">
        <!-- <Preloader /> -->
        <main class="section animation-block">
            <div class="yellow-circle"></div>
            <img src="@/assets/img/backgroundSphere.png" alt="" class="background-sphere">
            <div class="blicks">
                <img src="@/assets/svg/Ambassadors/blick1.svg" alt="" class="blick blick-1">
                <img src="@/assets/svg/Ambassadors/blick2.svg" alt="" class="blick blick-2">
                <img src="@/assets/svg/Ambassadors/blick3.svg" alt="" class="blick blick-3 desktop">
                <img src="@/assets/svg/Ambassadors/blick4.svg" alt="" class="blick blick-4">
            </div>
            <CustomHeader />
            <SectionVision />
            <SectionBenefits />
            <SectionIncentives />
            <SectionAudience />
            <SectionCards />
            <SectionHierarchy />
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
.page-ambassadors {
    // overflow: hidden;

    ::v-deep(.description) {
        
        @media only screen and (max-width: 850px) and (min-height: 600px) {
            font-size: 16px !important;
            line-height: 1.1;
        }
    }

    ::v-deep(.preloader) {
        z-index: 90000;
    }

    .animation-block {
        background-image: var(--gradient-purple);
        z-index: 500;
        overflow: hidden;
    }
    
    .background-sphere {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        object-fit: cover;
        mix-blend-mode: overlay;
        z-index: 1;
        transform: translate(-15%, 10%) scale(1.4);

        @media only screen and (max-width: 850px) {
            transform: none;
        }
    }
    
    .blicks {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 2;

        .blick {
            position: absolute;
            z-index: 5000;
        }

        .blick-1 {
            width: 10px;
            top: 55%;
            left: 7%;

            @media only screen and (max-width: 850px) {
                width: 20px;
                top: auto;
                bottom: 15%;
                left: 59%;
                filter: blur(4px);
            }
        }

        .blick-2 {
            width: 30px;
            top: 37%;
            left: 12.5%;

            @media only screen and (max-width: 850px) {
                top: auto;
                bottom: -1%;
            }
        }

        .blick-3 {
            width: 30px;
            bottom: 5%;
            right: 18%;
        }

        .blick-4 {
            width: 25px;
            top: 48%;
            right: 5%;

            @media only screen and (max-width: 850px) {
                width: 30px;
                top: 50%;
                right: 7%;
            }
        }
    }

    .yellow-circle {
        background-color: var(--color-yellow);
        position: absolute;
        top: 20%;
        left: 22%;
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        z-index: 100000;
        transform: scale(0);
        // width: 100%;
        // height: 130vh;
    }
}
</style>