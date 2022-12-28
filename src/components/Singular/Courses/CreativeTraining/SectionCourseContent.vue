<script setup lang="ts">
import { inject, type Ref } from 'vue';


const isMobile = inject<Ref<boolean>>('isMobile');
</script>

<template>
    <section class="section section-course-content">
        <div class="inner-container">
            <h1 class="title-primary title">Course Content</h1>
            <div class="content">
                <!-- <div class="line-dashed"></div> -->
                <div class="line-container">
                    <div class="circle"></div>
                    <img src="@/assets/svg/LineDashed.svg" alt="" class="line-dashed">
                    <div class="circle"></div>
                    <img src="@/assets/svg/LineDashed.svg" alt="" class="line-dashed">
                    <div class="circle"></div>
                </div>
                <div class="info-item info-item-1">
                    <h2 class="title-primary">
                        <span class="yellow">01</span>
                        <span class="white">/03</span>
                    </h2>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div class="info-item info-item-2">
                    <h2 class="title-primary">
                        <span class="yellow">02</span>
                        <span class="white">/03</span>
                    </h2>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div class="info-item info-item-3">
                    <h2 class="title-primary">
                        <span class="yellow">03</span>
                        <span class="white">/03</span>
                    </h2>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
        <img v-if="!isMobile" src="/img/Courses/CreativeTraining/sectionCourseContentLeftPiece.png" alt="" class="left-piece">
        <img v-if="!isMobile" src="/img/Courses/CreativeTraining/sectionCourseContentRightPiece.png" alt="" class="right-piece">
    </section>
</template>

<style lang="scss" scoped>
.section-course-content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 80;

    .left-piece {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40rem;
    }

    .right-piece {
        position: absolute;
        top: 0;
        right: 0;
        width: 37rem;
    }
    
    .inner-container {
        height: 100%;
        padding-top: 12vh;

        @media only screen and (max-width: 850px) {
            @include width-restriction;
        }

        .title {
            font-size: 9rem;
            text-align: center;
            margin-bottom: 4rem;
        }

        .content {
            width: 4px;
            // background-color: white;
            position: absolute;
            top: 31%;
            left: 50%;
            transform: translateX(-50%);
            // border-right: 3px dashed white;

            @media only screen and (max-width: 850px) {
                left: auto;
                top: auto;
                transform: none;
                position: relative;
                width: 100%;
                margin-left: 3rem;
            }

            .line-container {
                width: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .circle {
                min-width: 2.5rem;
                min-height: 2.5rem;
                border-radius: 100%;
                border: .4rem solid white;
                margin: .4rem 0 1rem;

                @media only screen and (max-width: 850px) {
                    margin: 0rem 0 .5rem;
                }
            }

            .line-dashed {
                width: 4px;
                height: 45vh;
            }
        }

        .info-item {
            width: 50rem;
            position: absolute;

            @media only screen and (max-width: 850px) {
                width: 80%;
            }

            .title-primary {
                font-size: 6rem;
                line-height: 1;

                .yellow {
                    font-size: 14rem;
                }
            }

            .description {
                font-weight: 500;
                font-size: 2rem;

                @media only screen and (max-width: 850px) {
                    font-size: 19px;
                }
            }
        }

        .info-item-1 {
            right: 4.5rem;
            top: -1.5rem;
            text-align: right;

            @media only screen and (max-width: 850px) {
                right: auto;
                left: 5.5rem;
                top: -3rem;
                text-align: left;
            }
        }

        .info-item-2 {
            left: 4.5rem;
            top: 33vh;
            text-align: left;

            @media only screen and (max-width: 850px) {
                top: 40vh;
                left: 5.5rem;
            }
        }

        .info-item-3 {
            right: 4.5rem;
            top: 80vh;
            text-align: right;

            @media only screen and (max-width: 850px) {
                right: auto;
                left: 5.5rem;
                top: 88vh;
                text-align: left;
            }
        }
    }
}
</style>