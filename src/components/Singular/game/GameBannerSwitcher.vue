<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore();
const { activeBannerId } = storeToRefs(gameStore);

const data = [
    {
        id: 0,
        name: '01',
    },
    {
        id: 1,
        name: '02',
    },
    {
        id: 2,
        name: '03',
    },
]

const setActiveButton = (id: number): void => {
    gameStore.setActiveBanner(id);
}

</script>

<template>
    <div class="switcher-mobile">
        <button v-for="item in data" class="switcher-mobile__button"
            :class="activeBannerId === item.id ? 'switcher-mobile__button-active' : ''"
            @click="setActiveButton(item.id)">
            <span class="skew-0">{{ item.name }}</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.switcher-mobile {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);

    font-weight: 400;
    font-size: 3.38rem;
    line-height: 85%;

    display: flex;
    flex-flow: row;

    transform: skewX(-20deg);

    &__button {
        width: 10.98rem;
        height: 6.68rem;

        &>span {
            @media only screen and (max-width: 850px) {
                font-size: 23px !important;
            }
        }
    }

    &__button-active {
        background-color: var(--color-purple-medium);
        transition: all .3s;

        &>span {
            @media only screen and (max-width: 850px) {
                font-size: 23px !important;
            }
        }
    }
}

.skew-0 {
    display: block;
    transform: skewX(20deg);
}
</style>