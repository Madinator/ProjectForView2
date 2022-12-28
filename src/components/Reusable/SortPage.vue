<script setup lang="ts">
import { GameSortBY } from '@/typing/game';
import ButtonSecondary from './NFT/ButtonSecondary.vue';

const props = defineProps({
    page: String,
});


</script>

<template>
    <div class="game-sort mobile">
        <div class="inner-container">
            <div class="game-sort__header">
                <span></span>
                <span class="game-sort__title">Sort by</span>
                <button class="game-sort__close" @click="$emit('close')">
                    <img src="@/assets/svg/closeWhite.svg" alt="" />
                </button>
            </div>
            <div class="game-sort__types">
                <div class="game-sort__type" v-for="item in GameSortBY">
                    <span class="game-sort__name">{{ item }}</span>
                    <img src="@/assets/svg/game/circle.svg" alt="" />
                </div>
            </div>
            <div class="game-sort__buttons">
                <ButtonSecondary @click="$emit('close')" class="game-sort__button">Done</ButtonSecondary>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.game-sort {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    z-index: 400;
    // padding: 0 3.38rem 5.63rem;

    display: flex;
    flex-flow: column;

    .inner-container {
        @include width-restriction;
        padding: 0 0 15.63rem;
        min-height: 100%;
        position: relative;

        @media only screen and (max-height: 500px) {
            padding: 0 0 25rem;
        }
    }

    &__header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 11.7rem;
        width: 100%;
    }

    &__title {
        font-weight: 600;
        font-size: 3.75rem !important;
        line-height: 5.63rem;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__close {
        @include flex-center;
        width: 3.94rem;
        height: 3.94rem;
        margin-right: -.4rem;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &__types {
        display: flex;
        flex-flow: column;
        gap: 3.52rem;
        margin-top: 4.22rem;
        width: 100%;
        overflow-y: scroll;
        max-height: 70%;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    &__type {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
    }

    &__name {
        font-weight: 700;
        font-size: 2.87rem;
        line-height: 3.52rem;

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }

    &__buttons {
        position: absolute;
        bottom: 5rem;
        left: 0;
        width: 100%;

        @media only screen and (max-height: 600px) {
            bottom: 3rem;
        }
    }
}
</style>