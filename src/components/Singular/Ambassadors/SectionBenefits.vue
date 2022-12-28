<script setup lang="ts">

</script>

<template>
    <section class="section section-benefits">
        <div class="inner-container">
            <h1 class="title-primary">
                <span class="yellow">Benefits </span>
                <span class="white"> per Ambassadors</span>
            </h1>
            <div class="honeycombs-container">
                <img src="@/assets/img/Ambassadors/honeycombsBase.png" alt="" class="honeycombs honeycombs-transparent">
                <img src="@/assets/img/Ambassadors/honeycombs1.png" alt="" class="honeycombs honeycombs-1">
                <img src="@/assets/img/Ambassadors/honeycombs2.png" alt="" class="honeycombs honeycombs-2">
                <img src="@/assets/img/Ambassadors/honeycombs3.png" alt="" class="honeycombs honeycombs-3">
                <img src="@/assets/img/Ambassadors/honeycombs4.png" alt="" class="honeycombs honeycombs-4">
                <img src="@/assets/img/Ambassadors/honeycombs5.png" alt="" class="honeycombs honeycombs-5">
                <img src="@/assets/img/Ambassadors/honeycombs6.png" alt="" class="honeycombs honeycombs-6">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-benefits {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 800;


    .inner-container {
        height: 100vh;
        width: 100%;
        text-align: center;
        padding-top: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 850px) and (min-height: 600px) and (max-width: 600px) {
            @include width-restriction;  
        }

        .title-primary {
            transform: translateY(100vh) scale(.7);
            white-space: nowrap;
            text-align: center;

            @media only screen and (max-width: 850px) and (min-height: 600px) and (max-width: 600px) {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            span {
                font-size: 19rem !important;
                line-height: .9;
            }
        }

        .honeycombs-container {
            position: relative;
            width: 120rem;
            height: 55rem;
            margin: 0 auto;
            margin-top: -12rem;

            @media only screen and (max-width: 850px) and (min-height: 600px) and (max-width: 600px) {
                width: 135rem;
            }

            @media only screen and (max-width: 1000px) and (max-height: 600px) and (min-width: 600px) {
                width: 95rem;
                transform: none !important;
            }

            @media only screen and (max-width: 1000px) and (max-height: 450px) and (min-width: 600px) {
                width: 90rem;
            }

            @media only screen and (min-width: 1850px) {
                width: 135rem;
                height: 61rem;
            }

            @media only screen and (min-width: 2100px) {
                width: 145rem;
                height: 66rem;
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }

            .honeycombs-transparent {
                z-index: 10;
            }

            .honeycombs-1,
            .honeycombs-2,
            .honeycombs-3,
            .honeycombs-4,
            .honeycombs-5,
            .honeycombs-6 {
                opacity: 0;
                // visibility: hidden;
            }

            .honeycombs-1 {
                z-index: 100;
            }

            .honeycombs-2 {
                z-index: 200;
            }

            .honeycombs-3 {
                z-index: 300;
            }

            .honeycombs-4 {
                z-index: 400;
            }

            .honeycombs-5 {
                z-index: 500;
            }

            .honeycombs-6 {
                z-index: 600;
            }
        }
    }
}
</style>