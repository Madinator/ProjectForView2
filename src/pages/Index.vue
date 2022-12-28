<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { gsap } from 'gsap';
import { useBaseStore } from '@/stores/index';
import { useCanvasesStore } from '@/stores/canvases';
import AppFooter from '@/components/Singular/App/Footer.vue';
import LandingHeader from '@/components/Singular/Landing/Header.vue';
// import SectionIntroduction from '@/components/Singular/Landing/SectionIntroduction.vue';
import SectionCoinFigure from '@/components/Singular/Landing/SectionCoinFigure.vue';
import Preloader from '@/components/Singular/App/Preloader.vue';

const baseStore = useBaseStore();
const canvasesStore = useCanvasesStore();
const { canvasBackgroundParticles } = storeToRefs(canvasesStore);

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

    // if (baseStore.isTouchDevice()) {
        // windowWidth = window.outerWidth;
        // windowHeight = window.outerHeight;
    // }

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
    // let scrollTimelineEnd = 'top -6000px';
    let scrollTimelineEnd = 'top -1400%';

    if (navigator.userAgent.match(/firefox|fxios/i)) {
        // scrollTimelineEnd = 'top -9500px';
        scrollTimelineEnd = 'top -1500%';
    }
    
    if (windowWidth < 850 || baseStore.isTouchDevice()) {
        scrollTimelineEnd = 'top -8600px';
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
    
    // BORDER RADIUS
    let BorderRadiusHeaderContent = 0;
    let BorderRadiusHeaderWidthHeightContainer = 0;
    let BorderRadiusHeaderWidthHeightContainer2 = baseFontSize * 6;
    let BorderRadiusHeaderWidthHeightContainer3 = baseFontSize * 6 * 1.5;

    // WIDTH
    let WidthHeaderImageComposition = baseFontSize * 60;
    let WidthHeaderImageComposition2 = baseFontSize * 40;
    let WidthHeaderWidthHeightContainer = 100 * vh;
    let WidthSectionFigurePhoneContainer = 100 * vh;

    // HEIGHT
    let HeightHeaderContent: number | string = 100 * vh;
    let HeightHeaderContent2: number | string = 100 * vh;
    let HeightCurtainsAppearMainPhoneContainer: number | string = 120 * vh;
    let HeightHeaderWidthHeightContainer = 120 * vw;
    let HeightSectionFigurePhoneContainer = 100 * vw;
    let HeightSectionAcademy = 100 * vh;

    // SCALE
    let ScaleDiamond = 5;
    let ScaleGamepads = 1.3;
    let ScaleCoin = 10;
    let ScalePackages = 1.5;
    let ScalePackageLeft = 1;
    let ScalePackageRight = 1;
    let ScalePhonesContainer = 1.2;
    let ScalePhonesContainerOnHeaderDisappear = 1.3;

    // Y
    let YDiamond = 59 * vh;
    let YCoin = -50 * vh + baseFontSize * 34;
    let YPackages: number | string = '-20%';
    let YPackageLeft = 0;
    let YPackageRight = 0;
    let YDiamondSocialsLeft = '30%';
    let YDiamondSocialsRight = '-100%';
    let YCardsInfo: number | string = '0%';
    let YCardStagger = -160 * vh;
    let YCard = '0';

    // X
    let XDiamond = -83 * vw;
    let XCoin = 50 * vwRestricted - baseFontSize * 30;
    let XPackageLeft = 0;
    let XDiamondSocialsLeft = '-100%';
    let XDiamondSocialsRight = '100%';
    let XCardsInfo: number | string = -80 * vw;
    let XCard1: number | string = -51 * vwRestricted;
    let XCard2: number | string = -27 * vwRestricted;
    let XCard3: number | string = -2 * vwRestricted;
    let XPhonesContainer = 50 * baseFontSize;
    let XPhonesContainerLeft = 10 * baseFontSize;
    let XPhonesContainerRight = -10 * baseFontSize;
    let xPhonesContainerOnHeaderDisappear = 6 * vw;

    // ROTATE
    let RotatePackageRight = -30;
    let RotateHandPhoneContainer = 84;
    let RotateHeaderMainPhone = 90;

    // OPACITY
    let OpacityCard2 = 1;
    let OpacityCard3 = 1;
    let OpacitySectionFigure = 1;

    // BLUR
    let BlurSectionAcademyAssets = '4px';
    let BlurSectionCoinFigure = '4px';

    // DELAY
    let DelaySectionFigure = .7;
    let DelaySectionFigureInfo = 1;
    let DelayYCard2 = .2;
    let DelayYCard3 = .4;
    let DelayYBigCoin = 0;
    let DelayHeightHeaderImagesComposition = 1;
    let DelayHeightHeaderMainPhoneContainer = .9;
    let DelayBorderRadiusHeaderBanner = .7;
    let DelayHeaderWidthHeightContainer = 0;
    let DelayOpacityHeaderMainPhoneContainer = .4;

    
    let DelayCardsDisapper = 1.7;

    // DURATION
    let DurationHeaderImagesComposition = .3;
    let DurationHeaderMainPhoneContainer = .2;
    let DurationHeaderBackgroundBanner = .3;


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ANIMATIONS VALUES RESPONSIVENESS

    // if (baseStore.isTouchDevice()) {
    //     HeightSectionAcademy = 110 * vh;
    // }

    if (HeightHeaderContent > baseFontSize * 120) {
        HeightHeaderContent = '120rem';
        HeightCurtainsAppearMainPhoneContainer = '100%';
        BorderRadiusHeaderContent = baseFontSize * 10;
        BorderRadiusHeaderWidthHeightContainer = BorderRadiusHeaderContent;

        if (windowWidth < 1300) {
            DelayHeightHeaderImagesComposition = .8;
            DelayHeightHeaderMainPhoneContainer = .7;
        }
    }


    if (HeightHeaderContent2 > baseFontSize * 80) {
        HeightHeaderContent2 = '80rem';
    }


    if (windowHeight > 850) {
        YDiamond *= 1.1;
    }


    if (windowHeight > 1000) {
        YDiamond *= 1.1;
    }


    if (windowWidth < 850 && windowHeight > 950) {
        ScaleDiamond = 5.8;
    }


    if (windowWidth < 850 && windowHeight > 1100) {
        ScaleDiamond = 6.5;
    }


    if (windowWidth < 1000 && windowHeight < 600) {
        ScaleCoin = 8.5;

        YCoin = -50 * vh + baseFontSize * 28;
        XCoin = 50 * vwRestricted - baseFontSize * 24;

        YDiamond = 100 * vh;
        XDiamond = -100 * vw;

        BlurSectionAcademyAssets = '0px';
        BlurSectionCoinFigure = '0px';
        OpacitySectionFigure = .5;
        YCardsInfo = '0%';
    }


    if (windowWidth < 850 || (windowWidth < 1000 && windowHeight < 600)) {
        ScalePackages = 1;
        YPackages = 0;
        // YPackageLeft = -10 * vh;
        // YPackageRight = 27 * baseFontSize;
        XPackageLeft = -10 * vw;
        YPackageLeft = -15 * vh;
        YPackageRight = 37 * baseFontSize;
        ScalePackageLeft = 1.5;
        ScalePackageRight = 1.5;
        RotatePackageRight = -30;

        ScaleGamepads = 1;

        YDiamondSocialsLeft = '0%';
        XDiamondSocialsLeft = '70%';
        XDiamondSocialsRight = '-50%';
        
        YCoin = -70 * vh + baseFontSize * 34;
        XCoin = 62 * vwRestricted - baseFontSize * 30;
        ScaleCoin = 8.5;

        YDiamond = 100 * vh;
        XDiamond = -100 * vw;

        BlurSectionAcademyAssets = '0px';
        BlurSectionCoinFigure = '0px';
        OpacitySectionFigure = .5;

        WidthHeaderImageComposition = baseFontSize * 30;
        WidthHeaderImageComposition2 = baseFontSize * 30;

        if (100 * vh > baseFontSize * 60) {
            HeightHeaderContent = '60rem';
            HeightCurtainsAppearMainPhoneContainer = '100%';
            BorderRadiusHeaderContent = baseFontSize * 7;
        }

        if (100 * vh > baseFontSize * 60) {
            HeightHeaderContent2 = '60rem';
        }

        XPhonesContainer = baseFontSize * 50;

        XPhonesContainerLeft = (100 * vw - 152 * baseFontSize) / 2;
        XPhonesContainerRight = -(100 * vw - 152 * baseFontSize) / 2;

        ScalePhonesContainer = 1;

        if (windowHeight > 600) {
            RotateHandPhoneContainer = 90;

            XCardsInfo = '0%';
            YCardsInfo = -60 * vh;
            XCard1 = '9%';
            XCard2 = '-6%';
            XCard3 = '-18%';
            YCardStagger = -120 * vh;
            DelaySectionFigure = 2;
            DelaySectionFigureInfo = 2.3;
            DelayYCard2 = .75;
            DelayYCard3 = 1.55;
            YCard = '-40%';
            OpacityCard2 = 0;
            OpacityCard3 = 0;
            DelayCardsDisapper = 3.1;

            DurationHeaderImagesComposition = 1;
            DelayHeightHeaderImagesComposition = .4;

            DurationHeaderMainPhoneContainer = .2;
            DelayHeightHeaderMainPhoneContainer = .3;

            DurationHeaderBackgroundBanner = .1;
            DelayBorderRadiusHeaderBanner = .1;

            DelayYBigCoin = 1;
        }

        HeightSectionAcademy = 110 * vh;
        if (windowWidth < 850 && windowHeight > 600) {
            RotateHeaderMainPhone = 0;
            WidthHeaderWidthHeightContainer = 100 * vw;
            // HeightHeaderWidthHeightContainer = 100 * vh;
            HeightHeaderWidthHeightContainer = 110 * vh;
            WidthSectionFigurePhoneContainer = 100 * vw;
            HeightSectionFigurePhoneContainer = 110 * vh;
            DelayHeaderWidthHeightContainer = .1;
            DelayOpacityHeaderMainPhoneContainer = .55;
            xPhonesContainerOnHeaderDisappear = XPhonesContainerRight;
            ScalePhonesContainerOnHeaderDisappear = 1;
            BorderRadiusHeaderWidthHeightContainer2 = baseFontSize * 4;
        }

        BorderRadiusHeaderWidthHeightContainer = BorderRadiusHeaderContent * .8;
    }


    if (windowWidth < 650) {
        XCoin = 50 * vwRestricted - baseFontSize * 30;

        DelayHeightHeaderImagesComposition = .2;
        DelayHeightHeaderMainPhoneContainer = .1;
        DelayBorderRadiusHeaderBanner = .2;
        
        XPhonesContainer = baseFontSize * 70;
    }


    if (windowWidth > 500 && windowHeight < 800 && windowWidth < 850) {
        DurationHeaderImagesComposition = .4;
        DelayHeightHeaderImagesComposition = .8;
        
        DurationHeaderMainPhoneContainer = .2;
        DelayHeightHeaderMainPhoneContainer = .6;

        DurationHeaderBackgroundBanner = .1;
        DelayBorderRadiusHeaderBanner = .5;
    }


    if (windowWidth > 1950) {
        XDiamond *= 1.05;
    }


    if (windowWidth > 2100) {
        ScaleGamepads = 1.2;
    }


    if (windowWidth > 2500) {
        ScaleDiamond = 5.9;
        BorderRadiusHeaderWidthHeightContainer3 *= 1.35;
    }


    if (windowWidth > 2900) {
        XDiamond *= 1.02;
    }


    if (windowWidth > 3100) {
        ScaleDiamond = 6.3;
        BorderRadiusHeaderWidthHeightContainer3 *= 1.15;
    }


    if (windowWidth > 3300) {
        XDiamond *= 1.02;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ANIMATIONS
    timeline
    .add('phones-block-appear')
    .to('.header .main-phone-container', {duration: .1, delay: .1, opacity: 1, ease: 'linear'}, 'phones-block-appear')
    .to('.header .width-height-container', {duration: 1.1, delay: .1, width: WidthHeaderImageComposition, borderRadius: BorderRadiusHeaderWidthHeightContainer, ease: 'linear'}, 'phones-block-appear')
    .to('.header .width-height-container', {duration: DurationHeaderImagesComposition, delay: DelayHeightHeaderImagesComposition, height: HeightHeaderContent, ease: 'linear'}, 'phones-block-appear')
    .to('.header .main-phone-container', {duration: DurationHeaderMainPhoneContainer, delay: DelayHeightHeaderMainPhoneContainer, height: HeightCurtainsAppearMainPhoneContainer, ease: 'linear'}, 'phones-block-appear')
    .to('.header .width-height-container .background-banner', {duration: DurationHeaderBackgroundBanner, delay: DelayBorderRadiusHeaderBanner, borderRadius: BorderRadiusHeaderContent * 1.2, ease: 'linear'}, 'phones-block-appear')
    .to('.header .header__content', {duration: .7, delay: .3, borderRadius: BorderRadiusHeaderContent, ease: 'linear'}, 'phones-block-appear')
    .to('.header .header__content', {duration: .6, delay: .6, height: HeightHeaderContent2, ease: 'linear'}, 'phones-block-appear')
    .to('.header .header__content .header__info-container .info', {duration: .8, delay: .4, scale: .6, ease: 'linear'}, 'phones-block-appear')
    .to('.header .main-phone-container', {duration: 1.1, delay: .1, width: WidthHeaderImageComposition, borderRadius: BorderRadiusHeaderWidthHeightContainer, ease: 'linear'}, 'phones-block-appear')
    .from('.header .phones-container-left', {duration: 1.2, x: -XPhonesContainer, ease: 'linear'}, 'phones-block-appear')
    .from('.header .phones-container-right', {duration: 1.2, x: XPhonesContainer, ease: 'linear'}, 'phones-block-appear')

    .add('phones-block-disappear')
    .to('.header .width-height-container .background-banner', {duration: .3, delay: .1, autoAlpha: 0, ease: 'linear'}, 'phones-block-disappear')
    .to('.header .header__content .header__info-container', {duration: .3, delay: .1, autoAlpha: 0, ease: 'linear'}, 'phones-block-disappear')
    .to('.section-introduction', {duration: .2, opacity: 1, ease: 'linear'}, 'phones-block-disappear')
    .to('.header .width-height-container', {duration: .3, delay: .1, borderRadius: BorderRadiusHeaderWidthHeightContainer2, ease: 'linear'}, 'phones-block-disappear')
    .to('.section-introduction .hand-container', {duration: .6, delay: .2, y: '0%', ease: 'linear'}, 'phones-block-disappear')
    .to('.section-introduction .content-1', {duration: .6, delay: .2, y: '0%', ease: 'linear'}, 'phones-block-disappear')
    .to('.section-introduction', {duration: .01, delay: .25, overflow: 'visible', ease: 'linear'}, 'phones-block-disappear')

    .to('.header .header__content', {duration: .8, height: HeightHeaderContent2, ease: 'linear'}, 'phones-block-disappear')
    .to('.header .width-height-container .background-banner', {duration: .3, borderRadius: 8 * baseFontSize, ease: 'linear'}, 'phones-block-disappear')
    .to('.header .width-height-container', {duration: .8, delay: .2, height: HeightHeaderContent2, ease: 'linear'}, 'phones-block-disappear')
    .to('.header .width-height-container', {duration: .8, width: WidthHeaderImageComposition2, ease: 'linear'}, 'phones-block-disappear')
    .to('.header .background-gradient', {duration: .8, backgroundImage: 'linear-gradient(255deg, #8A2B9A -32%, #160743 115%)', ease: 'linear'}, 'phones-block-disappear')
    .to('.header .main-phone-container', {duration: .4, height: '100%', ease: 'linear'}, 'phones-block-disappear')
    .to('.header .main-phone-container', {duration: .8, width: WidthHeaderImageComposition2, ease: 'linear'}, 'phones-block-disappear')
    .to('.header .phones-container .phone-container', {duration: .5, y: 0, ease: 'linear'}, 'phones-block-disappear')
    .from('.header .phones-container', {duration: .8, scale: ScalePhonesContainer, ease: 'linear'}, 'phones-block-disappear')
    .from('.header .phones-container .tablet', {duration: .5, opacity: 0, ease: 'linear'}, 'phones-block-disappear')
    .from('.header .phones-container-left .tablet-top', {duration: .5, x: '-10rem', y: '-10rem', ease: 'linear'}, 'phones-block-disappear')
    .from('.header .phones-container-left .tablet-bottom', {duration: .5, x: '-10rem', y: '10rem', ease: 'linear'}, 'phones-block-disappear')
    .from('.header .phones-container-right .tablet-top', {duration: .5, x: '10rem', y: '-10rem', ease: 'linear'}, 'phones-block-disappear')
    .from('.header .phones-container-right .tablet-bottom', {duration: .5, x: '10rem', y: '10rem', ease: 'linear'}, 'phones-block-disappear')
    .to('.header .phones-container-left', {duration: .8, x: XPhonesContainerLeft, ease: 'linear'}, 'phones-block-disappear')
    .to('.header .phones-container-right', {duration: .8, x: XPhonesContainerRight, ease: 'linear'}, 'phones-block-disappear')

    .add('header-disappear')
    .to('.header .header__content .header__inner-container', {duration: .7, rotate: RotateHeaderMainPhone, ease: 'linear'}, 'header-disappear')
    .to('.header .width-height-container', {duration: .7, delay: DelayHeaderWidthHeightContainer, width: WidthHeaderWidthHeightContainer, ease: 'linear'}, 'header-disappear')
    .to('.header .width-height-container', {duration: .7, height: HeightHeaderWidthHeightContainer, ease: 'linear'}, 'header-disappear')
    .to('.header .width-height-container', {duration: .5, borderRadius: BorderRadiusHeaderWidthHeightContainer3, ease: 'linear'}, 'header-disappear')
    .to('.header .width-height-container', {duration: .2, delay: .7, borderRadius: 0, ease: 'linear'}, 'header-disappear')
    .to('.header .main-phone-container', {duration: .7, delay: DelayHeaderWidthHeightContainer, width: WidthHeaderWidthHeightContainer, height: '100%', ease: 'linear'}, 'header-disappear')
    .to('.header .images-composition', {duration: .1, overflow: 'visible', ease: 'linear'}, 'header-disappear')
    .to('.header .width-height-container .background-banner', {duration: .7, scale: 1.2, borderRadius: 30 * baseFontSize, ease: 'linear'}, 'header-disappear')
    .to('.header .phones-container', {duration: .4, scale: ScalePhonesContainerOnHeaderDisappear, ease: 'linear'}, 'header-disappear')
    .to('.header .phones-container-left', {duration: .4, x: -xPhonesContainerOnHeaderDisappear, ease: 'linear'}, 'header-disappear')
    .to('.header .phones-container-right', {duration: .4, x: xPhonesContainerOnHeaderDisappear, ease: 'linear'}, 'header-disappear')
    .to('.header .phones-container', {duration: .3, delay: .1, opacity: 0, ease: 'linear'}, 'header-disappear')
    .to('.header .header__info-container .info', {duration: .3, delay: .4, autoAlpha: 0, ease: 'linear'}, 'header-disappear')
    .to('.header .images-composition', {duration: .3, delay: DelayOpacityHeaderMainPhoneContainer, autoAlpha: 0, ease: 'linear'}, 'header-disappear')
    .to('.header .background-gradient', {duration: .3, delay: DelayOpacityHeaderMainPhoneContainer, autoAlpha: 0, ease: 'linear'}, 'header-disappear')
    .to('.section-introduction .hand-container', {duration: .7, scale: 1, ease: 'linear'}, 'header-disappear')
    .to('.section-introduction .content-1', {duration: .7, scale: 1, ease: 'linear'}, 'header-disappear')
    .to(canvasBackgroundParticles.value, {duration: .01, x: 10 * vw, y: 10 * vh, width: 80 * vw, height: 80 * vh, onUpdate: canvasesStore.drawCanvasBackgroundParticles, ease: 'linear'}, 'header-disappear')
    // .to(canvasBackgroundParticles.value, {duration: .01, x: 14 * vw, y: 20 * vh, x2: 10 * vw, y2: 10 * vh, width2: 80 * vw, height2: 80 * vh, onUpdate: canvasesStore.drawCanvasBackgroundParticles, ease: 'linear'}, 'header-disappear')
    // .to('.section-introduction', {duration: .3}, 'header-disappear')

    .add('hand-disappear')
    .to('.section-introduction .hand-container', {duration: .7, delay: .2, y: 110 * vh, ease: 'linear'}, 'hand-disappear')
    .to('.section-introduction .content-1', {duration: .7, delay: .2, y: 110 * vh, ease: 'linear'}, 'hand-disappear')
    .to('.section-introduction .content-2', {duration: .2, delay: .2, autoAlpha: 1, ease: 'linear'}, 'hand-disappear')
    .to('.section-introduction .background-particles', {duration: .4, delay: .3, autoAlpha: 1, ease: 'linear'}, 'hand-disappear')
    .to(canvasBackgroundParticles.value, {duration: .9, delay: .5, x: -50 * vw, y: -50 * vh, width: 200 * vw, height: 200 * vh, onUpdate: canvasesStore.drawCanvasBackgroundParticles, ease: 'linear'}, 'hand-disappear')
    // .to(canvasBackgroundParticles.value, {duration: .9, delay: .5, x2: -50 * vw, y2: -50 * vh, width2: 200 * vw, height2: 200 * vh, onUpdate: canvasesStore.drawCanvasBackgroundParticles, ease: 'linear'}, 'hand-disappear')
    .to('.section-introduction .background-particles', {duration: .3, delay: .8, autoAlpha: 0, ease: 'linear'}, 'hand-disappear')
    .to('.section-introduction .content-2', {duration: 1, delay: .5, scale: 1, ease: 'linear'}, 'hand-disappear')
    .to('.section-introduction .content-2 .info', {duration: .7, delay: .5, scale: 1, ease: 'linear'}, 'hand-disappear')
    .from('.section-introduction .packages .package-right', {duration: .6, delay: .6, scaleX: -1, ease: 'linear'}, 'hand-disappear')

    .add('scale-coins-section')
    .to('.section-introduction .coins', {duration: .5, scale: 2, opacity: 0, ease: 'linear'}, 'scale-coins-section')
    .to('.section-introduction .packages', {duration: .5, scale: ScalePackages, y: YPackages, ease: 'linear'}, 'scale-coins-section')
    .to('.section-introduction .packages .package-left', {duration: .5, scale: ScalePackageLeft, y: YPackageLeft, x: XPackageLeft, ease: 'linear'}, 'scale-coins-section')
    .to('.section-introduction .packages .package-right', {duration: .5, scale: ScalePackageRight, y: YPackageRight, rotate: RotatePackageRight, ease: 'linear'}, 'scale-coins-section')
    .to('.section-introduction .content-2 .animated-info', {duration: .3, delay: .2, opacity: 1, ease: 'linear'}, 'scale-coins-section')
    .to('.section-introduction .content-2 .animated-info', {duration: .5, y: 0, ease: 'linear'}, 'scale-coins-section')
    .to(canvasBackgroundParticles.value, {duration: .01, x: 10 * vw, y: 10 * vh, width: 80 * vw, height: 80 * vh, onUpdate: canvasesStore.drawCanvasBackgroundParticles, ease: 'linear'}, 'section-coins-section')
    // .to(canvasBackgroundParticles.value, {duration: .01, x2: 10 * vw, y2: 10 * vh, width2: 80 * vw, height2: 80 * vh, onUpdate: canvasesStore.drawCanvasBackgroundParticles, ease: 'linear'}, 'section-coins-section')
    // .to('.section-introduction', {duration: .3, delay: .3}, 'section-coins-section-2')

    .add('section-diamonds-appear')
    .to('.section-introduction .background-particles', {duration: .4, delay: .4, autoAlpha: 1, ease: 'linear'}, 'section-diamonds-appear')
    .to(canvasBackgroundParticles.value, {duration: 1.3, delay: .5, x: -25 * vw, y: -25 * vh, width: 150 * vw, height: 150 * vh, onUpdate: canvasesStore.drawCanvasBackgroundParticles, ease: 'linear'}, 'section-diamonds-appear')
    // .to(canvasBackgroundParticles.value, {duration: 1.3, delay: .5, x2: -25 * vw, y2: -25 * vh, width2: 150 * vw, height2: 150 * vh, onUpdate: canvasesStore.drawCanvasBackgroundParticles, ease: 'linear'}, 'section-diamonds-appear')
    .to('.section-introduction .content-2', {duration: 1, scale: 2, autoAlpha: 0, ease: 'linear'}, 'section-diamonds-appear')
    .to('.section-introduction .content-3', {duration: 1.3, delay: .7, scale: 1, autoAlpha: 1, ease: 'linear'}, 'section-diamonds-appear')
    .from('.section-introduction .content-3 .diamonds-small .diamond', {duration: .7, delay: .8, rotate: 10, ease: 'linear'}, 'section-diamonds-appear')
    .from('.section-introduction .diamond-left-container .diamond-inner-container', {duration: .5, delay: 1, rotate: -40, ease: 'linear'}, 'section-diamonds-appear')
    .from('.section-introduction .diamond-right-container .diamond-inner-container', {duration: .5, delay: 1, rotate: 40, ease: 'linear'}, 'section-diamonds-appear')
    .to('.section-introduction .diamond-right-container .diamond-inner-container', {duration: .5, delay: 1.5, x: 0, ease: 'linear'}, 'section-diamonds-appear')
    .to('.section-introduction .diamond-right-container', {duration: .5, delay: 1.5, rotate: 100, x: -50 * vw, y: '10%', scale: ScaleDiamond, ease: 'linear'}, 'section-diamonds-appear')

    // .add('section-diamonds-disappear')
    // .to('.section-introduction .diamond-right-container .diamond-inner-container', {duration: .5, delay: .3, x: 0, ease: 'linear'}, 'section-diamonds-disappear')
    // .to('.section-introduction .diamond-right-container', {duration: .5, delay: .3, rotate: 100, x: -50 * vw, y: '10%', scale: ScaleDiamond, ease: 'linear'}, 'section-diamonds-disappear')

    .add('section-cards-appear')
    .to('.section-introduction .content-3 .diamonds-info', {duration: .1, autoAlpha: 0, ease: 'linear'}, 'section-cards-appear')
    .to('.section-introduction .diamond-left', {duration: .05, autoAlpha: 0, ease: 'linear'}, 'section-cards-appear')
    .to('.section-introduction .background-particles', {duration: .1, autoAlpha: 0, ease: 'linear'}, 'section-cards-appear')
    .to('.section-cards', {duration: .05, autoAlpha: 1, ease: 'linear'}, 'section-cards-appear')
    .to('.section-introduction .diamond-right-container', {duration: .5, rotate: 164, x: XDiamond, y: YDiamond, scale: .7, ease: 'linear'}, 'section-cards-appear')
    .to('.section-introduction .diamond-right-container', {duration: .01, delay: .5, zIndex: 5000, ease: 'linear'}, 'section-cards-appear')
    // .to('.section-introduction', {duration: 1.1}, 'section-cards-appear')

    .add('cards-animation')
    .to('.section-cards .card', {duration: .6, scale: .9, y: YCard , ease: 'linear'}, 'cards-animation')
    .to('.section-cards .card-1', {duration: .7, x: XCard1, ease: 'linear'}, 'cards-animation')
    .to('.section-cards .card-2', {duration: .7, x: XCard2, opacity: OpacityCard2, filter: 'blur(0px)', ease: 'linear'}, 'cards-animation')
    .to('.section-cards .card-3', {duration: .7, x: XCard3, opacity: OpacityCard3, filter: 'blur(0px)', ease: 'linear'}, 'cards-animation')
    .to('.section-cards .info', {duration: .6, delay: .1, x: XCardsInfo, y: YCardsInfo, opacity: 0, ease: 'linear'}, 'cards-animation')
    .to('.section-introduction .diamond-right-container', {duration: .5, x: -115 * vw, y: 85 * vh, ease: 'linear'}, 'cards-animation')
    // .to('.section-introduction', {duration: .9}, 'cards-animation')

    .add('cards-disappear')
    .to('.section-cards .card-2', {duration: .3, delay: .3, opacity: 1, filter: 'blur(0px)', ease: 'linear'}, 'cards-disappear')
    .to('.section-cards .card-3', {duration: .3, delay: 1, opacity: 1, filter: 'blur(0px)', ease: 'linear'}, 'cards-disappear')
    .to('.section-cards .card-container-1', {duration: .85, delay: 0, y: YCardStagger, ease: 'linear'}, 'cards-disappear')
    .to('.section-cards .card-container-2', {duration: .85, delay: DelayYCard2, y: YCardStagger, ease: 'linear'}, 'cards-disappear')
    .to('.section-cards .card-container-3', {duration: .85, delay: DelayYCard3, y: YCardStagger, ease: 'linear'}, 'cards-disappear')
    .to('.section-introduction .diamond-right', {duration: .3, autoAlpha: 0, ease: 'linear'}, 'cards-disappear')
    .from('.section-coin-figure .coin-inner-container', {duration: 1.3, delay: DelayYBigCoin, y: 20 * vh, ease: 'linear'}, 'cards-disappear')
    .to('.section-coin-figure', {duration: .3, delay: DelaySectionFigure, autoAlpha: 1, ease: 'linear'}, 'cards-disappear')
    .to('.section-coin-figure .info-1', {duration: .4, delay: DelaySectionFigureInfo, autoAlpha: 1, ease: 'linear'}, 'cards-disappear')
    // .to('.section-introduction', {duration: DelayCardsDisapper}, 'cards-disappear')

    .add('figure-appear')
    .to('.section-coin-figure .info-1', {duration: .4, autoAlpha: 0, ease: 'linear'}, 'figure-appear')
    .to('.section-coin-figure .info-2', {duration: .4, autoAlpha: 1, ease: 'linear'}, 'figure-appear')
    .from('.section-coin-figure .coin-container', {duration: .7, x: XCoin, y: YCoin, rotate: 0, scale: ScaleCoin, ease: 'linear'}, 'figure-appear')
    .from('.section-coin-figure .figure', {duration: .5, y: '10%', ease: 'linear'}, 'figure-appear')
    .to('.section-coin-figure .figure', {duration: .5, autoAlpha: 1, ease: 'linear'}, 'figure-appear')
    .to('.section-coin-figure .hand-phone-container', {duration: .3, autoAlpha: 1, ease: 'linear'}, 'figure-appear')
    // .to('.section-introduction', {duration: 1}, 'figure-appear')

    .add('hand-phone-animation')
    .from('.section-coin-figure .hand-phone-container', {duration: .4, x: '14%', y: '85%', ease: 'linear'}, 'hand-phone-animation')
    .to('.section-coin-figure .hand-phone-container', {duration: .4, filter: `blur(0px)`, ease: 'linear'}, 'hand-phone-animation')
    .from('.section-coin-figure .hand-phone-container-inner', {duration: .4, rotate: -90, y: '20rem', ease: 'linear'}, 'hand-phone-animation')
    .to('.section-coin-figure .content-1', {duration: .4, filter: `blur(${BlurSectionCoinFigure})`, opacity: OpacitySectionFigure, ease: 'linear'}, 'hand-phone-animation')

    .add('hand-phone-animation-scale')
    .to('.section-coin-figure .hand-phone-container', {duration: .9, right: '50%', bottom: '50%', x: '50%', y: '50%', rotate: RotateHandPhoneContainer, ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-coin-figure .hand-phone', {duration: .9, x: '50%', y: '80%', ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-coin-figure .phone-container', {duration: .9, x: '-50%', y: '-50%', width: WidthSectionFigurePhoneContainer, height: HeightSectionFigurePhoneContainer, borderRadius: BorderRadiusHeaderWidthHeightContainer3 * 1.1, ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-coin-figure .phone-container', {duration: .1, delay: .8, borderRadius: 0, ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-academy', {duration: .9, width: 100 * vw, height: HeightSectionAcademy, ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-academy .content', {duration: .9, scale: 1, ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-academy .gamepad-left', {duration: .4, delay: .5, width: '38rem', ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-academy .gamepad-right', {duration: .4, delay: .5, width: '14rem', ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-coin-figure .phone-container .phone', {duration: .3, delay: .6, autoAlpha: 0, ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-coin-figure .content-1', {duration: .1, delay: .9, filter: `blur(0px)`, autoAlpha: 0, ease: 'linear'}, 'hand-phone-animation-scale')
    .to('.section-introduction', {duration: 1.1}, 'hand-phone-animation-scale')

    .add('socials-appear')
    .to('.section-academy .info-main', {duration: .8, y: -110 * vh, opacity: 0, ease: 'linear'}, 'socials-appear')
    .to('.section-academy .info-socials', {duration: .6, delay: .2, autoAlpha: 1, ease: 'linear'}, 'socials-appear')
    .to('.section-academy .gamepads', {duration: .6, scale: ScaleGamepads, filter: `blur(${BlurSectionAcademyAssets})`, ease: 'linear'}, 'socials-appear')
    .to('.section-academy .diamond-left-container', {duration: .6, x: XDiamondSocialsLeft, y: YDiamondSocialsLeft, scale: 1.3, filter: `blur(${BlurSectionAcademyAssets})`, ease: 'linear'}, 'socials-appear')
    .to('.section-academy .diamond-right-container', {duration: .6, x: XDiamondSocialsRight, y: YDiamondSocialsRight, scale: 1.3, filter: `blur(${BlurSectionAcademyAssets})`, ease: 'linear'}, 'socials-appear')
    .to('.section-introduction', {duration: 1.1}, 'socials-appear')
})
</script>

<template>
    <div class="page page-landing">
        <!-- <Preloader /> -->
        <div class="animation-block">
            <LandingHeader />
            <!-- <SectionIntroduction /> -->
            <SectionCoinFigure />
        </div>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped> 
.page-landing {

    .animation-block {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    ::v-deep(.description) {
        
        @media only screen and (max-width: 850px) and (min-height: 600px) {
            font-size: 18px !important;
            line-height: 1.1;
        }
    }

    ::v-deep(.preloader) {
        z-index: 90000;
    }
}
</style>