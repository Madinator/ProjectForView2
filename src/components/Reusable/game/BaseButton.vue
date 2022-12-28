<script setup lang="ts">
import type { NFTType } from '@/typing/game';
import type { PropType } from 'vue';
import { useGameStore } from '@/stores/game';
import { storeToRefs } from 'pinia';

const props = defineProps({
    name: {
        type: Object as PropType<NFTType>,
        required: true
    }
});

const gameStore = useGameStore();
const { selectedNFTType } = storeToRefs(gameStore);

const setNFTType = (type: NFTType): void => {
    gameStore.setActiveNFTType(type);
}
</script>

<template>
    <!-- :class="props.name === selectedNFTType ? 'game-base-button--active' : ''"  -->
    <button class="game-base-button" 
        @click="setNFTType(props.name)">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped> 
.game-base-button {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(4.5px);
    border-radius: 87px;
    // padding: 1.408rem 3.52rem;
    padding: 1rem 2.5rem;
    width: fit-content;
    
    font-weight: 500;
    // font-size: 2.25rem;
    line-height: 85%;
    border: 1px solid #353340;

    @media only screen and (max-width: 850px) {
        padding: 1rem 3rem;
    }

    &:hover {
        background-color: rgba(144, 55, 214, 0.5);
    }

    &--active {
        background: rgba(144, 55, 214, 0.5);
    }

    @media (min-width: 850px) {
        font-size: 1.6rem;
    }

    @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
}
</style>