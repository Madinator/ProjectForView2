<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
const handleFocusOut = () => {
    isOpen.value = false;
}
</script>

<template>
    <button class="analytics-select" @click="toggle" @focusout="handleFocusOut">
        <span class="text">For this week</span>
        <img class="img" :class="{ 'img-open': isOpen }" src="@/assets/svg/arrowWhite.svg" alt="" />
        <Transition>
            <div v-if="isOpen" class="options">
                <button class="option">last 7 days</button>
                <button class="option">Last 30 days</button>
                <button class="option">Last 90 days</button>
                <button class="option">in all time</button>
            </div>
        </Transition>
    </button>
</template>

<style lang="scss" scoped>
.analytics-select {
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
    border-radius: 15px;
    padding: 1.11rem 1.71rem;

    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 1.34rem;
    position: relative;
    z-index: 50;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;

    // &:hover {
    //     transform: scale(1.03);
    // }
    @media (max-width: 850px) {
        min-width: 100%;
        justify-content: space-between;
        padding: 1.83rem 2.81rem;
    }

    .text {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 2rem;

        @media (max-width: 850px) {
            line-height: 3.38rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    .img {
        transform: rotate(180deg);
        transition: all 0.3s;
    }

    .img-open {

        transform: rotate(0deg);
    }

    .options {
        position: absolute;
        top: 55px;
        left: 0;
        z-index: 50;
        background: #000000;
        /* Grey */
        padding: 2.14rem 0 1.9rem;
        border: 1px solid #85888A;
        border-radius: 9px;

        display: flex;
        flex-flow: column;
        width: 100%;
        backdrop-filter: blur(75px);

        @media (max-width: 850px) {
            top: 60px;
        }
    }

    .option {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 120%;
        padding: 0.8rem 3.7rem 0.8rem 2.56rem;
        transition: all 0.3s;
        border-radius: .5rem;

        @media (max-width: 850px) {
            font-size: 17px !important;
            padding: 1.2rem 3.7rem 1.2rem 2.56rem;
        }
    }

    .option:hover {
        // background-color: #85888A;
        background-color: lighten(#000, 20%);

    }
}
</style>