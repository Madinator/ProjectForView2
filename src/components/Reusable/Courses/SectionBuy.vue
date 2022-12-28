<script setup lang="ts">
import { ref, inject, watch, type Ref } from 'vue';
import { gsap, Power0 } from 'gsap';
import { useBaseStore } from '@/stores/index';

interface Props {
    date1: string;
    date2: string;
    slotsAll: number;
    slotsAvailable: number;
    title: string;
    pageName: string;
}

const props = defineProps<Props>()

const isMobile = inject<Ref<boolean>>('isMobile');

const baseStore = useBaseStore();

// DOM
const parallaxImage1 = ref<null | HTMLElement>(null);
const parallaxImage2 = ref<null | HTMLElement>(null);

// PARALLAX ON MOUSE MOVE
const parallax = (mouse: MouseEvent, resistance: number, el: HTMLElement) => {
    gsap.to(el, {duration: .2, ease: Power0.easeIn,
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

// MOVE DIAMONDS AND GAMEPADS ON MOUSE MOVE
const mouseMove = (event: MouseEvent): void => {
    if (baseStore.isTouchDevice() || !parallaxImage1.value || !parallaxImage2.value) return;
    parallax(event, -63, parallaxImage1.value);
    parallax(event, 52, parallaxImage2.value);
};
</script>

<template>
    <section @mousemove="mouseMove" class="section section-buy">
        <img v-if="!isMobile" :src="'/img/Courses/' + pageName + '/sectionBuyImage.png'" alt="" class="section-image">
        <img v-else :src="'/img/Courses/' + pageName + '/sectionBuyImageMobile.png'" alt="" class="section-image">
        <div class="parallax-image-container parallax-image-container-1">
            <img ref="parallaxImage1" :src="'/img/Courses/' + pageName + '/sectionBuyParallaxImage1.png'" alt="" class="parallax-image">
        </div>
        <div class="parallax-image-container parallax-image-container-2">
            <img ref="parallaxImage2" :src="'/img/Courses/' + pageName + '/sectionBuyParallaxImage2.png'" alt="" class="parallax-image">
        </div>
        <div class="inner-container">
            <div class="info">
                <div class="slots-container">
                    <strong class="slots">
                        <span>Slots Available</span> <span class="yellow">{{slotsAvailable}}</span>/{{slotsAll}}
                    </strong>
                </div>
                <h1 class="title-primary">{{title}}</h1>
                <div class="date-container">
                    <div class="date">
                        <strong class="date-month">{{date1}}</strong>
                        <div class="line"></div>
                        <strong class="date-month">{{date2}}</strong>
                    </div>
                </div>
                <router-link to="/joinCourse/stepOne" class="btn-yellow">Register now</router-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-buy {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;

    .section-image {
        width: 100rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        @media only screen and (max-width: 850px) {
            width: 55rem;
        }
    }

    .parallax-image-container {
        position: absolute;

        .parallax-image {
            width: 100%;
        }
    }

    .parallax-image-container-1 {
        bottom: 10%;
        left: 3%;
        width: 6rem;
    }

    .parallax-image-container-2 {
        top: 40%;
        right: 4%;
        width: 10rem;
    }

    .inner-container {


        .info {
            @include abs-center;
            top: 45%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90rem;
            text-align: center;

            @media only screen and (max-width: 850px) {
                width: auto;
            }
            
            .slots {
                margin-bottom: 5rem;
            }

            .title-primary {
                line-height: .85;
                font-size: 19rem !important;
                margin-bottom: 1.75rem;

                @media only screen and (max-width: 850px) {
                    margin-bottom: 5rem;
                }
            }

            .date-container {
                margin-bottom: 4rem;

                @media only screen and (max-width: 850px) {
                    margin-bottom: 6rem;
                }
            }

            .btn-yellow {
                padding-right: 3rem;
                padding-left: 3rem;
            }
        }
    }
}
</style>