<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { gsap } from 'gsap';
import { useBaseStore } from '@/stores/index';
import ScrollTrigger from "gsap/ScrollTrigger";
import Table from '@/components/Reusable/Staking/Table.vue';
import Modal from '@/components/Singular/Staking/Modal.vue';
import { useStakingStore } from '@/stores/staking';

const stakingStore = useStakingStore();
const { navigation, isModalOpen } = storeToRefs(stakingStore);
const baseStore = useBaseStore();
const girlWidthDesktop = 1234;
const girlHeightDesktop = 761;

const girlWidthMobile = 610;
const girlHeightMobile = 600;

const innerWidth = ref(0);
const animationStartedTime = 2;

onMounted(() => {
    innerWidth.value = window.innerWidth;
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
    let scrollTimelineEnd = 'top -100%';
    if (navigator.userAgent.match(/firefox|fxios/i)) {
        // scrollTimelineEnd = 'top -8000px';
        scrollTimelineEnd = 'top -300%';
    }
    
    if (windowWidth < 850 || baseStore.isTouchDevice()) {
        scrollTimelineEnd = 'top -1000px';
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GSAP TIMELINE
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.staking-page',
            start: 'top 0%',
            end: scrollTimelineEnd,
            scrub: 1,
            pin: '.staking-page'
        }
    });

    if (window.outerWidth > 850) {
        timeline
        .to('.girl', { duration: 1, y: 100 * vh, ease: 'linear' }, 0)
        .to('.title-1', { duration: 1, y: -80 * vh, scale: 1.8, ease: 'linear' }, 0)
        .to('.title-2', { duration: 1.1, y: -100 * vh, scale: 1.4, ease: 'linear' }, 0)
        .to('.title-3', { duration: 1.2, y: 80 * vh, scale: 1.8, ease: 'linear' }, 0)
        .fromTo('.staking', { x: 100 * vw}, { duration: 1.25, x: 0, ease: 'linear' }, 0)
        .to('.main', { duration: .01, delay: 1.2, autoAlpha: 0, ease: 'linear' }, 0)
    } else {
        timeline
        .to('.girl', { duration: 1, y: 100 * vh, ease: 'linear' }, 0)
        .to('.title-1', { duration: 1, y: -85 * vh, scale: 1.8, ease: 'linear' }, 0)
        .to('.title-4', { duration: 1.1, y: -80 * vh, scale: 1.8, ease: 'linear' }, 0)
        .to('.title-5', { duration: 1.1, y: -80 * vh, scale: 1.8, ease: 'linear' }, 0)
        .to('.title-2', { duration: 1, y: 80 * vh, scale: 1.8, ease: 'linear' }, 0)
        .to('.title-3', { duration: 1, y: 80 * vh, scale: 1.8, ease: 'linear' }, 0)
        .fromTo('.staking', { autoAlpha: 0 }, { duration: .9, autoAlpha: 1, ease: 'linear' }, 0)
        .to('.main', { duration: .05, delay: 1, autoAlpha: 0, ease: 'linear' }, 0)
        .to('.main', { duration: .01, delay: 1.2, ease: 'linear' }, 0)
    }
});
</script>

<template>
    <div class="page ">
        <div class="staking-page">
            <div class="main">
                <div class="titles">
                    <h2 class="title title-secondary title-5 mobile">STAKING</h2>
                    <h2 class="title title-4 mobile">STAKING</h2>
                    <h2 class="title title-1">STAKING</h2>
                    <h2 class="title title-secondary title-2">STAKING</h2>
                    <h2 class="title title-secondary title-3">STAKING</h2>
                </div>
                <div class="girl-container">
                    <img class="girl" src="@/assets/img/Staking/girl.png" alt="" />
                </div>
            </div>
            <div class="staking">
                <div class="inner-container">
                    <div class="navigation">
                        <RouterLink :to="{name : navigation[0].to}" class="nav-button" :class="{'nav-button--unactive': !navigation[0].isActive}" @click="stakingStore.setActiveTab(1)">FIX Staking</RouterLink>
                        <RouterLink :to="{name : navigation[1].to}" class="nav-button" :class="{'nav-button--unactive': !navigation[1].isActive}" @click="stakingStore.setActiveTab(2)">DeFi staking</RouterLink>
                    </div>
                    <div class="page">
                        <Transition>
                            <RouterView></RouterView>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
        <Transition>
            <Modal :class="{'closed': !isModalOpen}" @close="stakingStore.closeModal"/>
        </Transition>
    </div>
</template>

<style lang="scss" scoped> 
.staking-page {
    background: linear-gradient(258.81deg, #0F0041 -29.36%, #0B0813 122.35%);
    min-height: 100vh;
    position: relative;

    @media (max-height: 850px) {
        width: 100%;
        max-height: auto;
        overflow: hidden;
    }

    .girl-container {
        position: absolute;
        bottom: 0;
        left: 55%;
        transform: translateX(-50%);
        // left: 18.34%;
        // width: calc(1px * v-bind('girlWidthDesktop') * v-bind(innerWidth) / 1920);
        height: 70vh;
        min-height: 50rem;
        max-height: 85rem;
        aspect-ratio: v-bind('girlWidthDesktop')/v-bind('girlHeightDesktop');

        @media only screen and (max-width: 850px) {
            max-height: 70rem;
        }

        .girl {
            height: 100%;
        }
    }
    // .girl-mobile {
    //     position: absolute;
    //     bottom: 0;
    //     width: 100%;
    //     aspect-ratio: v-bind('girlWidthMobile')/v-bind('girlHeightMobile');
    // }
        .main {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            max-height: 100vh;

            @media (max-width: 850px) {
                padding-top: 10.57rem;
            }
        .titles {
            @include abs-center;
            top: 45%;

            @media only screen and (max-width: 550px) {
                top: 40%;
            }
        }
        .title {
            font-weight: 700;
            font-size: 23rem;
            // line-height: 19rem;
            line-height: .85;
            // line-height: 29.96rem;

            @media (max-width: 850px){
                font-size: 17rem;
                // line-height: 16.33rem;
                // margin-top: -6rem;
            }

            @media only screen and (max-width: 550px) {
                font-size: 15rem;
            }

            @media only screen and (max-width: 500px) {
                font-size: 13rem;
            }

            @media only screen and (max-width: 400px) {
                font-size: 12.5rem;
            }
        }
        .title-secondary {
            color: transparent;
            -webkit-text-stroke: 4px #FFFFFF;
            @media (max-width: 850px) {
                -webkit-text-stroke: 1px #FFFFFF;
            }
        }
    }
    .staking {
        min-height: 100vh;
        // position: absolute;
        // top: 0;
        // left: 0;
        @media (max-width: 850px) {
            width: 100%;
            // padding-top: 5rem;
        }
        .inner-container {
            @include width-restriction;
            padding: 8.83rem 6.42rem 1.63rem;
            min-height: 100vh;
            @media (max-width: 850px) {
                padding: 11.22rem 3.38rem 5.49rem;
            }
        }
        .navigation {
            display: flex;
            flex-flow: row;
            gap: 5.22rem;
            @media (max-width: 850px) {
                gap: 4.22rem;
            }
        }
        .nav-button {
            font-weight: 700;
            font-size: 5.48rem;
            line-height: 6.76rem;
            // background-image: url('@/assets/img/Staking/text.png');
            // background: linear-gradient(90deg, white, white 100%), url('@/assets/img/Staking/text.png') ;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
            transition: all 0.3s;
            @media (max-width: 850px) {
                line-height: 4.22rem;
                white-space: nowrap;
            }

            @media only screen and (max-width: 850px) {
                font-size: 23px !important;
            }
        }
        .nav-button--unactive:hover {
            // color: ;
            // filter: brightness(75%);
            // transform: scale(1.05);
        }
        .nav-button--unactive {
            color: rgba(255, 255, 255, 0.2);
            // background: rgba(255, 255, 255, 0.2);
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
            &:hover {
                color: rgba(255, 255, 255, 0.3);
            }
        }
        .page {
            margin-top: 3.85rem;
            width: 100%;
            @media (max-width: 850px) {
                margin-top: 2.81rem;
            }
        }
    }
}
</style>