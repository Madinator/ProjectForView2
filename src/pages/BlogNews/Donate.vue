<script setup lang="ts">
import YourName from "@/components/Singular/blognews/YourName.vue";
import HowMuch from "@/components/Singular/blognews/HowMuch.vue";
import YourComment from "@/components/Singular/blognews/YourComment.vue";

</script>

<template>
    <div class="page page-donate">
        <div class="inner-container">
            <div class="page-donate__content">
                <div class="page-donate__header">
                    <img class="page-donate__img" src="@/assets/img/game/GameCommentUser.png" alt=""/>
                    <h1 class="page-donate__name">mwoodo</h1>
                </div>
                <h2 class="page-donate__to-user">Thank you for <br> supporting my blog</h2>
                <div class="page-donate__base">
                    <YourName class="page-donate__ur-name"/>    
                    <HowMuch class="page-donate__how-much"/>
                </div>
                <YourComment class="page-donate__comment" />
                <button class="page-donate__button btn-purple">Donate</button>
            </div>
        </div>
        <img class="page-donate__logo mobile" src="@/assets/img/blognews/donateMobile.png" alt=""/>
        <img class="page-donate__bg desktop" src="@/assets/img/blognews/donateDesktopBG.png" alt="" />
        <img class="page-donate__boy desktop" src="@/assets/img/blognews/donateDesktopBoy.png" alt="" />
    </div>
</template>

<style lang="scss" scoped>
.page-donate {
    position: relative;
    padding: 16.6rem 0 0;
    background: #000000;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    @media (min-width: 850px) {
        flex-flow: row;
        height: 100vh;
        padding: 0;
    }
    &__content {
        position: relative;
        z-index: 10;
        @media (min-width: 850px) {
            width: 50%;
        }
    }
    .inner-container {
        @include width-restriction;

        @media (min-width: 850px) {
            padding-left: 6.42rem;
            display: flex;
            align-items: center;
        }        
    }
    &__header {
        display: flex;
        flex-flow: row;
        gap: 1.7rem;
        align-items: center;
    }
    &__img {
        width: 7.88rem;
        height: 7.88rem;
        border-radius: 100%;

        border: 1px solid var(--color-purple-dark);

        @media (min-width: 850px) {
            height: 5.48rem;
            width: 5.48rem;
        }

    }
    &__name {
        font-family: 'DELIRIUM';
        font-style: normal;
        font-weight: 400;
        font-size: 4.51rem;
        line-height: 85%;

        @media (min-width: 850px) {
            font-size: 3.42rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    &__to-user {
        display: block;
        font-weight: 700;
        font-size: 4.51rem;
        line-height: 96.7%;

        margin-top: 2.53rem;
        
        @media (min-width: 850px) {
            font-size: 5.48rem;
            margin-top: 3.77rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    &__base {
        margin-top: 3.52rem;
        display: flex;
        flex-flow: column;
        gap: 2.11rem;

        @media (min-width: 1200px) {
            flex-flow: row;
            margin-top: 4.28rem;
        }
    }
    &__comment {
        margin-top: 2.11rem;
    }
    &__button {
        margin-top: 2.81rem;
        width: 100%;
        height: 5.63rem;

        font-weight: 400;
        font-size: 2.53rem;
        line-height: 85%;
        transition: all 0.3s;


        @media (min-width: 850px) {
            width: 17.8rem;
            height: 3.85rem;
            font-size: 2rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    &__logo {
        position: relative;
        z-index: 5;
        margin-top: -40px;
        

        @media (min-width: 850px) {
            width: 59%;
            height: fit-content;
            bottom: 0;
            mix-blend-mode: hard-light;
        }
    }
    &__bg {
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        mix-blend-mode: hard-light;
        width: 80%;
    }
    &__boy {
        position: absolute;
        z-index: 20;
        right: 0;
        bottom: 0;
        width: 60%;
    }
    &__ur-name {
        @media (min-width: 1200px) {
            width: 60.8%;
        }
    }
    &__how-much {
        @media (min-width: 1200px) {
            width: 39.2%;
        }
    }
}
</style>