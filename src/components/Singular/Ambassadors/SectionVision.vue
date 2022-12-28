<script setup lang="ts">

</script>

<template>
    <section class="section section-vision">
        <div class="inner-container">
            <div class="info-container">
                <div class="info">
                    <h1 class="title-primary">
                        <span class="yellow">Vision</span>
                    </h1>
                    <p class="description">
                        Our vision at Earn.Games is to provide an opportunity fot people from emerging 
                        countries to have a gamifield aducation system that`ll allow them to pursue a career in web 3.0
                    </p>
                </div>
            </div>
            <div class="image-container">
                <img src="@/assets/img/Ambassadors/manClimbing.png" alt="" class="man-stairs">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-vision {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1000;


    .inner-container {
        height: 100vh;
        width: 100%;

        .info-container {
            @include abs-center;
            left: 30%;
            width: 43rem;
            z-index: 1000;

            @media only screen and (max-width: 850px) {
                @include width-restriction;
                position: relative;
                left: auto;
                top: auto;
                transform: none;
                height: 100vh;
            }
        }

        .info {

            @media only screen and (max-width: 850px) {
                position: absolute;
                top: 18%;
                left: 0%;
                width: 43rem;
            }

            .title-primary {

                @media only screen and (max-width: 850px) {
                    margin-bottom: 2rem;
                }

                span {
                    font-size: 15rem !important;
                    line-height: .9;
                }
            }

            .description {
                font-size: 2rem;

                @media only screen and (max-width: 900px) and (max-height: 500px),
                only screen and (max-width: 850px) and (max-height: 750px) {
                    text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
                    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, .8));
                }
            }
        }

        .image-container {
            position: absolute;
            // bottom: 0;
            // right: 0;
            // width: 93rem;
            bottom: -21.5rem;
            right: -14.5rem;
            width: 108rem;

            @media only screen and (max-width: 900px) and (max-height: 750px),
            only screen and (max-width: 1000px) and (max-height: 500px) {
                bottom: -28rem;
            }

            @media only screen and (min-width: 1920px) {
                width: 118rem;
            }

            @media only screen and (max-width: 1000px) and (max-height: 450px) {
                width: 100rem;
            }

            @media only screen and (max-width: 1000px) and (max-height: 400px) {
                width: 95rem;
            }

            @media only screen and (max-width: 600px) {
                width: 90rem;
                bottom: -12rem;
            }

            @media only screen and (max-width: 600px) and (max-height: 750px) {
                bottom: -16rem;
            }

            @media only screen and (max-width: 550px) and (max-height: 700px) {
                width: 80rem;
                right: -11rem;
            }

            .man-stairs {
                width: 100%;
            }
        }
    }
}
</style>
