<script setup lang="ts">
import router from '@/router';

const goBack = (): void => {
    router.push({name: 'upload'})
}
</script>

<template>
   <div class="page page-verification">
        <div class="inner-container">
            <span class="name">Step 2</span>
            <h2 class="title">Verification</h2>
            <p class="desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div class="line"></div>
            <p class="desc--gray">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button @click="goBack" class="button">Back</button>
        </div>
   </div>
</template>

<style lang="scss" scoped> 
.page-verification {
    background: #000000;
    min-height: 100vh;

    .inner-container {
        @include width-restriction;
        padding: 13.95rem 0 15.75rem;
        width: 45.97rem;

        @media (max-width: 850px) {
            padding: 22rem 0 5.63rem;
            min-height: 100vh;
            display: flex;
            flex-flow: column;
        }
    }
    .name {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;
        opacity: 0.8;
        
        @media only screen and (max-width: 850px) {
            font-size: 14px !important;
        }
    }
    .title {
        font-family: 'DELIRIUM';
        font-style: normal;
        font-weight: 400;
        font-size: 17.12rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 13.52rem;
        }
    }
    .desc {
        margin-top: -3rem;
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            margin-top: 0;
            font-size: 15px !important;
        }
    }
    .line {
        margin-top: 2.56rem;
        @media (max-width: 850px) {
            margin-top: 3.52rem;
        }
    }
    .desc--gray {
        margin-top: 2.56rem;
        opacity: 0.5;
        @media (max-width: 850px) {
            margin-top: 3.52rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .button {
        margin-top: 3.68rem;
        padding: 0.98rem 3.125rem;
        width: fit-content;
        background-color: rgba(144, 55, 214, 0.2);
        border-radius: 5px;
        border: 1px solid rgba(144, 55, 214, 0.47);
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;
        @media (max-width: 850px) {
            margin-top: auto;
            width: 100%;
            padding: 1.41rem 2.81rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .button:hover {
        background-color: lighten(rgba(144, 55, 214, 0.2), 20%);
    }
}
</style>