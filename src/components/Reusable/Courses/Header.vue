<script setup lang="ts">
import { inject, watch, type Ref } from 'vue';

interface Props {
    date1: string;
    date2: string;
    slotsAll: number;
    slotsAvailable: number;
    title: string;
    description: string;
    pageName: string;
}

const props = defineProps<Props>()
const isMobile = inject<Ref<boolean>>('isMobile');

</script>

<template>
    <header class="section header">
        <div class="inner-container">
            <div class="desktop date-container">
                <div class="date">
                    <strong class="date-month">{{date1}}</strong>
                    <div class="line"></div>
                    <strong class="date-month">{{date2}}</strong>
                </div>
            </div>
            <div class="info">
                <div class="mobile date-container">
                    <div class="date">
                        <strong class="date-month">{{date1}}</strong>
                        <div class="line"></div>
                        <strong class="date-month">{{date2}}</strong>
                    </div>
                </div>
                <div class="slots-container">
                    <strong class="slots">
                        <span>Slots Available</span> <span class="yellow">{{slotsAvailable}}</span>/{{slotsAll}}
                    </strong>
                </div>
                <h1 class="title-primary">{{title}}</h1>
                <p class="description">{{description}}</p>
                <router-link to="/joinCourse/stepOne" class="btn-yellow">Register now</router-link>
            </div>
            <div class="header-image-container">
                <!-- <img src="@/../public/img/Courses/CreativeTraining/headerImage.png" alt="" class="header-image"> -->
                <img v-if="!isMobile" :src="'/img/Courses/' + pageName + '/headerImage.png'" alt="" class="header-image">
                <img v-else :src="'/img/Courses/' + pageName + '/headerImageMobile.png'" alt="" class="header-image">
            </div>
        </div>
        <slot></slot>
    </header>
</template>

<style lang="scss" scoped>
.header {
    // overflow: hidden;
    z-index: 100;

    .inner-container {
        position: relative;
        height: 100vh;
        z-index: 100;
        @include width-restriction;
        padding: 0 6.35rem;

        @media only screen and (max-width: 1200px) {
            padding: 0 3%;
        }

        @media only screen and (max-width: 1100px) {
            padding: 0 2%;
        }

        @media only screen and (max-width: 850px) {
            padding: 0;

            @media only screen and (max-height: 600px) and (min-width: 600px) {
                width: 100%;
            }
        }
    }

    .date-container {
        position: absolute;
        top: 50%;
        left: -4rem;
        transform: translateY(-50%);

        @media only screen and (max-width: 1100px) {
            left: -8rem;
        }

        @media only screen and (max-width: 850px) {

            @media only screen and (min-height: 600px),
            only screen and (max-width: 600px) {
                position: static;
                transform: none;
                margin-bottom: 3rem;
            }

            @media only screen and (max-height: 700px) {
                margin-bottom: 3rem;
            }

            @media only screen and (max-height: 600px) and (min-width: 600px) {
                left: -19rem;
            }
        }

        .date {
            display: flex;
            align-items: center;
            transform: rotate(-90deg);

            @media only screen and (max-width: 850px) and (min-height: 600px),
            only screen and (max-width: 600px) {
                transform: none;
            }

            .date-month {
                font-weight: 400;
                text-transform: uppercase;

                @media only screen and (max-width: 850px) {
                    font-size: 16px !important;
                }
            }

            .line {
                height: 1px;
                width: 5rem;
                margin: 0 1.2rem;
                background-color: white;
            }
        }
    }

    .info {
        position: absolute;
        top: 52%;
        // left: 13rem;
        left: 10%;
        transform: translateY(-50%);
        z-index: 100;
        width: 38rem;

        @media only screen and (max-width: 1100px) {
            left: 8rem;
        }

        @media only screen and (max-width: 850px) {

            @media only screen and (min-height: 600px),
            only screen and (max-width: 600px) {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                left: 50%;
                top: 45%;
                transform: translateY(-50%) translateX(-50%);
                width: 43rem;
            }

            @media only screen and (max-height: 700px) {
                top: 52%;
            }

            @media only screen and (max-height: 600px) {
                top: 55%;
            }
        }

        .slots-container {
            margin-bottom: 2rem;

            @media only screen and (max-height: 850px) {
                margin-bottom: 4rem;

            }
        }

        .title-primary {
            font-size: 18rem !important;
            line-height: .82;
            margin-bottom: 1.5rem;

            @media only screen and (max-width: 850px) and (max-height: 600px) and (min-width: 600px) {
                white-space: nowrap;
                font-size: 14rem !important;
                margin-bottom: 3rem;
            }
        }

        .description {
            font-weight: 500;
            font-size: 2rem;
            margin-bottom: 2.5rem;

            @media only screen and (max-width: 850px) and (min-height: 600px),
            only screen and (max-width: 600px) {
                font-size: 16px !important;
                text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
                margin-bottom: 3.5rem;
            }
        }

        .btn-yellow {
            padding: .9rem 3.25rem;
        }
    }

    .header-image-container {
        position: absolute;
        top: 45%;
        right: 2%;
        transform: translateY(-50%);
        width: 75rem;
        z-index: 10;

        @media only screen and (max-width: 1000px) {
            right: -2%;
        }

        @media only screen and (max-width: 850px) and (min-height: 600px),
        only screen and (max-width: 600px) {
            transform: translateX(-50%);
            top: auto;
            right: auto;
            bottom: -24rem;
            left: 50%;
            width: 60rem;
        }

        @media only screen and (max-width: 850px) and (max-height: 600px) and (min-width: 600px) {
            width: 60rem;

            @media only screen and (max-width: 700px) {
                right: -5%;
            }
        }

        .header-image {
            width: 100%;

            @media only screen and (max-width: 850px) and (min-height: 600px),
            only screen and (max-width: 600px) {
                filter: brightness(90%);
            }
        }
    }
}
</style>