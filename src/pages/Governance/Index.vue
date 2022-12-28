<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useBaseStore } from '@/stores/index';
import { gsap, Power0 } from 'gsap';
import Funded from '@/components/Singular/Governance/Funded.vue';
import Vote from '@/components/Singular/Governance/Vote.vue';
import Exchange from '@/components/Singular/Governance/Exchange.vue';
import Earn from '@/components/Singular/Governance/Earn.vue';
import Graph from '@/components/Singular/Governance/Graph.vue';
import Former from '@/components/Singular/Governance/Former.vue';
import Percentage from '@/components/Singular/Governance/Percentage.vue';
import Footer from '@/components/Singular/App/Footer.vue';
import GeneralDashboard from '@/components/Singular/Governance/GeneralDashboard.vue';
import DashboardInfo from '@/components/Singular/Governance/DashboardInfo.vue';


const isBanner = ref();
const baseStore = useBaseStore();
const GeneralDashboardHeight = ref(0);


const widthSBannerBaseDesktop = 1920;
const heigthBannerBaseDesktop = 1047;

const widthBanner = ref(0);
const heightBanner = ref(0);

const bolt1WidthDesktop = 1000;
const bolt1HeightDesktop = 896;

const bolt2WidthDesktop = 600;
const bolt2HeightDesktop = 538;

const bolt2WidthMobile = 372;
const bolt2HeightMobile = 334;

const bolt3WidthDesktop = 209;
const bolt3HeightDesktop = 187;

const bolt3WidthMobile = 87.48;
const bolt3HeightMobile = 78.27;

const bolt4WidthDesktop = 457;
const bolt4HeightDesktop = 409;

const bolt4WidthMobile = 219;
const bolt4HeightMobile = 202;

const bolt5WidthDesktop = 92.94;
const bolt5HeightDesktop = 83.15; 

const bolt6WidthDesktop = 287;
const bolt6HeightDesktop = 258;

const bolt6WidthMobile = 157;
const bolt6HeightMobile = 141;

const bolt7WidthDesktop = 659;
const bolt7HeightDesktop = 590;

const bolt7WidthMobile = 197;
const bolt7HeightMobile = 176;

const bolt1 = ref<null | HTMLElement>(null);
const bolt2 = ref<null | HTMLElement>(null);
const bolt3 = ref<null | HTMLElement>(null);
const bolt4 = ref<null | HTMLElement>(null);

// PARALLAX ON MOUSE MOVE
const parallax = (mouse: MouseEvent, resistance: number, el: HTMLElement) => {
    gsap.to(el, {duration: .2, ease: Power0.easeIn,
        xPercent: -((mouse.clientX - window.innerWidth / 2) / resistance),
        yPercent: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

// MOVE BOLTS ON MOUSE MOVE
const mouseMove = (event: MouseEvent): void => {

    if (baseStore.isTouchDevice() || !bolt1.value || !bolt2.value || !bolt3.value || !bolt4.value) return; 
    parallax(event, -500, bolt1.value);
    parallax(event, 300, bolt2.value);
    parallax(event, -100, bolt3.value);
    parallax(event, 200, bolt4.value);
};

onMounted(() => {
    widthBanner.value = innerWidth;
    heightBanner.value = innerWidth * heigthBannerBaseDesktop / widthSBannerBaseDesktop;
    // isBanner.value = Math.random() < 0.5;
    isBanner.value = true;

    const dashboardinfo = document.getElementById('dashboardinfo');
    if(dashboardinfo && innerWidth > 850) {
        GeneralDashboardHeight.value = dashboardinfo?.getBoundingClientRect().height
    }
    else {
        GeneralDashboardHeight.value = 252;
    }
});
</script>

<template>
    <div class="page page-governance" @mousemove="mouseMove">
        <img class="bottom-img desktop" src="@/assets/img/Governance/bottom.png" alt="" />
        <section class="banner" v-if="isBanner">
            <img ref="bolt1" class="bolt-1 desktop" src="@/assets/img/Governance/bolt.png" alt="">
            <img ref="bolt2" class="bolt-2" src="@/assets/img/Governance/bolt.png" alt=""/>
            <img ref="bolt3" class="bolt-3" src="@/assets/img/Governance/bolt.png" alt=""/>
            <img ref="bolt4" class="bolt-4" src="@/assets/img/Governance/bolt.png" alt=""/>
            <div class="banner-text">
                <div class="text-top">
                    <span></span>
                    <div class="text-base">
                        <div class="text-text">
                            <div class="text-desc">
                                <span class="desc-desc">Become a <br class="desktop"> part <br class="mobile"> of the <br class="desktop"> games</span>
                                <span>Become a part </span>
                            </div>
                            <div class="text-logo-holder">
                                <img class="text-logo" src="@/assets/img/Governance/logo.png" alt=""/>
                                <h2 class="text-logo-text">EG games</h2>
                            </div>
                        </div>
                        <h2 class="text-title">Governance</h2>
                    </div>
                </div>
                <div class="text-bottom">
                    <div class="timer">
                        <img class="plus" src="@/assets/svg/Governance/plus.svg" alt=""/>
                        <div class="timer-main">
                            <span class="timer-desc">Time for your decision</span>
                            <span class="timer-time">12:14:35</span>
                        </div>
                    </div>
                    <div class="text-base text-base-bottom">
                        <div class="text-text text-text-mobile">
                            <div class="text-desc">
                                <span class="desc-desc">Become a <br class="desktop"> part <br class="mobile"> of the <br class="desktop"> games</span>
                                <span>Become a part </span>
                            </div>
                            <div class="text-logo-holder text-logo-holder-bottom">
                                <img class="text-logo" src="@/assets/img/Governance/logo.png" alt=""/>
                                <h2 class="text-logo-text">EG games</h2>
                            </div>
                        </div>
                        <h2 class="text-title text-title-mobile">Governance</h2>
                    </div>
                </div>
            </div>
            <div class="banner-line"></div>
        </section>
        <section class="banner-registered" v-if="!isBanner">
            <div class="inner-container">
                <GeneralDashboard class="general-dashboard"/>
                <DashboardInfo id="dashboardinfo"/>
            </div>
        </section>
        <section class="container" :class="{'container-registered': !isBanner}">
            <div class="inner-container">
                <div class="base">
                    <div class="block">
                        <Funded/>
                        <Vote id="vote" class="box-big"/>
                        <Exchange/>
                        <Earn/>
                        <Graph class="box-big--second"/>
                        <Percentage/>
                    </div>
                </div>
                <div class="past">
                    <div class="top">
                        <div class="titles">
                            <h1 class="title-big">Past</h1>
                            <h2 class="title-small">Governance</h2>
                        </div>
                        <img class="bolt-1--bottom desktop" src="@/assets/img/Governance/bolt.png" alt="" />
                        <img class="bolt-2--bottom" src="@/assets/img/Governance/bolt.png" alt="" />
                        <img class="bolt-3--bottom" src="@/assets/img/Governance/bolt.png" alt="" />
                    </div>
                    <div class="bottom">
                        <Former />
                        <Former />
                    </div>
                </div>
            </div>
        </section>
        <Footer class="footer" />
    </div>  
</template>

<style lang="scss" scoped>
.page-governance {
    background: linear-gradient(254.49deg, #231161 -31.18%, #0E091D 41%, #0B0813 95.96%), #000000;
    min-height: 100vh;
    min-width: 100vw;
    
    .banner {
        position: relative;
        width: 100%;
        aspect-ratio: v-bind('widthSBannerBaseDesktop')/v-bind('heigthBannerBaseDesktop');

        @media (max-width: 850px) {
            aspect-ratio: auto;
        }
    }
    .banner-registered {
        position: relative;
        width: 100%;
        .inner-container {
            @include width-restriction;
            padding: 10.72rem 6.42rem 0;
            display: flex;
            flex-flow: row;
            gap: 3.42rem;

            @media (max-width: 850px) {
                flex-flow: column;
                gap: 2.81rem;
                padding: 9.72rem 0 0;
            }
        }
    }
    .bolt-1 {
        filter: blur(5.5px);
        width: calc(1px * v-bind('widthBanner') * v-bind('bolt1WidthDesktop') / v-bind('widthSBannerBaseDesktop'));
        aspect-ratio: v-bind('bolt1WidthDesktop')/v-bind('bolt1HeightDesktop');
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-44%,-30%);
    }
    .bolt-2 {
        width: calc(1px * v-bind('widthBanner') * v-bind('bolt2WidthDesktop') / v-bind('widthSBannerBaseDesktop'));
        aspect-ratio: v-bind('bolt2WidthDesktop')/v-bind('bolt2HeightDesktop');

        position: absolute;
        top: 19%;
        left: 50%;
        transform: translate(-49%, 0);

        @media (max-width: 850px) {
            width: calc(1px * v-bind('bolt2WidthMobile'));
            top: 27rem;
            aspect-ratio: v-bind('bolt2WidthMobile')/v-bind('bolt2HeightMobile');
        }
    }
    .bolt-3 {
        position: absolute;
        top: 33%;
        right: 8.3%;
        transform: rotate(-30.61deg);

        filter: blur(2px);
        width: calc(1px * v-bind('widthBanner') * v-bind('bolt3WidthDesktop') / v-bind('widthSBannerBaseDesktop'));
        aspect-ratio: v-bind('bolt3WidthDesktop')/v-bind('bolt3HeightDesktop');

        @media (max-width: 850px) {
            top: 27rem;
            left: 0;
            right: auto;
            width: calc(1px * v-bind('bolt3WidthMobile'));
            aspect-ratio: v-bind('bolt3WidthMobile')/v-bind('bolt3HeightMobile');
            transform: translate(-50%, 0);
        }
    }
    .bolt-4 {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(32%, 0);

        filter: blur(3.5px);
        width: calc(1px * v-bind('widthBanner') * v-bind('bolt4WidthDesktop') / v-bind('widthSBannerBaseDesktop'));
        aspect-ratio: v-bind('bolt4WidthDesktop')/v-bind('bolt4HeightDesktop');

        @media (max-width: 850px) {
            top: 85rem;
            width: calc(1px * v-bind('bolt4WidthMobile'));
            aspect-ratio: v-bind('bolt4WidthMobile')/v-bind('bolt4HeightMobile');
            transform: translate(60%,0);
        }
    }
    .banner-text {
        position: absolute;
        top: 7.2rem;
        left: 50%;
        transform: translate(-75%,0);

        height: calc(100% - 5.5rem);

        @media (max-width: 850px) {
            position: relative;
            left: 0;
            transform: translate(0);
            top: 11.5rem;
            display: flex;
            flex-flow: column;
            gap: 27.8rem;
        }
    }
    .text-top {
        display: flex;
        flex-flow: row;
        margin-left: 43%;
        @media (max-width: 850px) {
            margin: 0 auto;
        }
    }
    .text-base {
        display: flex;
        flex-flow: row;
        gap: 4.36rem;

        @media (max-width: 850px) {
            gap: 3.94rem;
        }
    }
    .text-base-bottom {
        gap: 9.84rem;
        transform: rotate(180deg);
        align-items: self-start;

        @media (max-width: 850px) {
            gap: 7.46rem;
        }        
    }
    .text-title {
        font-family: 'DELIRIUM';
        font-weight: 400;
        font-size: 9.81rem;
        line-height: 140%;
        color: var(--color-yellow);

        transform: rotate(-180deg);
        writing-mode: vertical-rl;

        @media (max-width: 850px) {
            font-size: 9rem;
        }
    }
    .text-title-mobile {
        margin-bottom: 8.87rem;
    }
    .text-text {
        display: flex;
        flex-flow: column;
        gap: 1.11rem;
    }
    .text-text-mobile {
        margin-top: 9rem;
    }
    .text-desc {
        display: flex;
        flex-flow: column;
        gap: 1.45rem;

        font-weight: 700;
        font-size: 1.2rem;
        line-height: 104.9%;
        opacity: 0.5;

        writing-mode: vertical-rl;    
        transform: rotate(180deg);

        @media (max-width: 850px) {
            font-size: 1.7rem;
            line-height: 1.83rem;
            gap: 1.13rem;
        }
    }
    .text-logo-holder {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .text-logo-holder-bottom{
        transform: rotate(180deg);
    }
    .text-logo {
        width: 7rem;

        @media (max-width: 850px) {
            width: 6.48rem;
        }
    }
    .text-logo-text {
        font-family: 'DELIRIUM';
        font-weight: 400;
        font-size: 3.1rem;
        line-height: 140%;
        color: var(--color-yellow);

        @media (max-width: 850px) {
            font-size: 3.38rem;
        }
    }
    .text-bottom {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);

        display: flex;
        flex-flow: row;
        gap: 10rem;

        @media (max-width: 850px) {
            position: relative;
            left: 0;
            transform: translate(0);
            margin: 0 auto;
            gap: 7.46rem;
        }
    }

    .timer {
        display: flex;
        flex-flow: column;
        gap: 2rem;
        align-items: center;
    }
    .plus {
        width: 7.11rem;
        height: 7.11rem;

        @media (max-width: 850px) {
            width: 6.34rem;
            height: 6.34rem;
        }
    }
    .timer-main {
        display: flex;
        flex-flow: column-reverse;
        gap: 0.68rem;
        writing-mode: vertical-rl;
    }
    .banner-line {
        position: absolute;
        top: 0;
        left: 54%;
        width: 3px;
        height: calc(1px * v-bind('heightBanner'));

        background-image: linear-gradient(45deg, gray , gray);;
        background-position: right;
        background-size: 3px 3px;
        background-repeat: no-repeat;
    }

    .container {
        margin-top: 15rem;

        @media (max-width: 850px) {
            margin-top: 35rem;
        }
        .inner-container {
            @include width-restriction;
            padding: 0 6.42rem 0;

            @media (max-width: 850px) {
                padding: 0;
            }
        }
    }
    .container-registered {
        margin-top: 12.84rem;

        @media (max-width: 850px) {
            margin-top: 11.26rem;
        }
    }
    .base {
        display: flex;
        flex-flow: column;
        gap: 2.5rem;
    }
    .block {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 2.56rem;

        @media (max-width: 850px) {
            grid-template-columns: 1fr;
        }
    }
    .box-big {
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 2;
        width: 100%;

        @media (max-width: 850px) {
            grid-row-start: auto;
            grid-row-end: auto;
            grid-column-start: auto;
        }
    }
    .box-big--second {
        grid-row-start: 3;
        grid-row-end: 5;
        grid-column-start: 2;
        width: 100%;
        @media (max-width: 850px) {
            grid-row-start: auto;
            grid-row-end: auto;
            grid-column-start: auto;
        }
    }
    .past {
        margin-top: 11.31rem;

        @media (max-width: 850px) {
            margin-top: 12.67rem;
        }
        .titles {
            display: flex;
            flex-flow: column;
        }
        .title-big {
            font-weight: 600;
            font-size: 31.62rem;
            line-height: 140%;

            @media (max-width: 850px) {
                font-size: 15rem;
            }
        }
        .title-small {
            margin-top: -6.8rem;
            font-weight: 600;
            font-size: 10.13rem;
            line-height: 140%;
            @media (max-width: 850px) {
                font-size: 5rem;
                margin-top: -4rem;
            }
        }
        .top {
            position: relative;
        }
        .bolt-1--bottom {
            width: calc(1px * v-bind('widthBanner') * v-bind('bolt5WidthDesktop') / v-bind('widthSBannerBaseDesktop'));
            aspect-ratio: v-bind('bolt5WidthDesktop')/v-bind('bolt5HeightDesktop');
            position: absolute;
            top: 41%;
            left: 57%;
            filter: blur(2px);
            transform: rotate(-30.61deg);
        }
        .bolt-2--bottom {
            width: calc(1px * v-bind('widthBanner') * v-bind('bolt6WidthDesktop') / v-bind('widthSBannerBaseDesktop'));
            aspect-ratio: v-bind('bolt6WidthDesktop')/v-bind('bolt6HeightDesktop');
            position: absolute;
            top: 42%;
            left: 62%;

            @media (max-width: 850px) {
                width: calc(1px * v-bind('bolt6WidthMobile'));
                aspect-ratio: v-bind('bolt6WidthMobile')/v-bind('bolt6HeightMobile');
                left: 0;
                top: 0;
                transform: translate(-97%);
            }
        }
        .bolt-3--bottom {
            width: calc(1px * v-bind('widthBanner') * v-bind('bolt7WidthDesktop') / v-bind('widthSBannerBaseDesktop'));
            aspect-ratio: v-bind('bolt7WidthDesktop')/v-bind('bolt7HeightDesktop');
            position: absolute;
            top: 0%;
            left: 100%;
            transform: translate(-50%, 0);
            filter: blur(3.5px);

            @media (max-width: 850px) {
                width: calc(1px * v-bind('bolt7WidthMobile'));
                aspect-ratio: v-bind('bolt7WidthMobile')/v-bind('bolt7HeightMobile');
            }
        }
        .bottom {
            margin-top: 11.56rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2.56rem;

            @media (max-width: 850px) {
                margin-top: 2.81rem;
                grid-template-columns: 1fr;
                grid-gap: 2.81rem
            }
        }
    }
    
    .footer {
        margin-top: 12.92rem;
    }

    .bottom-img {
        position: absolute;
        right: 0;
        bottom: 0;
        width: calc(1px * v-bind('widthBanner'));
        transform: translate(19%, 0);
        filter: blur(30px);
    }
    .general-dashboard {
        height: calc(1px* v-bind('GeneralDashboardHeight'));
    }
}
</style>