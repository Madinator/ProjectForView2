<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import { storeToRefs } from 'pinia';


const gameStore = useGameStore();
const { selectedSortType } = storeToRefs(gameStore);

</script>

<template>
    <div class="game-sort-select">
        <span class="game-sort-select__sort-by">
            Sort by: {{selectedSortType}}
            <img class="game-sort-select__view-sort-by-arrow" src="@/assets/svg/Reusable/arrow3.svg" alt="" />
        </span>
    </div>
</template>

<style lang="scss" scoped> 
.game-sort-select {
    &__sort-by {
        cursor: pointer;
        font-weight: 600;
        font-size: 2.53rem;
        line-height: 85%;
        margin-right: 1rem;
        @media (min-width: 850px) {
            font-size: 1.54rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    &__view-sort-by-arrow {
        margin-left: 1rem;
        width: 1.5rem;
    }
}
</style>