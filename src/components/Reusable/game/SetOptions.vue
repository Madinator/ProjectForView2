<script setup lang="ts">
import { GameCategory, type SetOptionsType } from '@/typing/game';
import { useGameStore } from '@/stores/game';
import type { PropType } from 'vue';


const props = defineProps({
    item: { 
        type: Object as PropType<SetOptionsType>,
        required: true,
    }
});

const gameStore = useGameStore();

const unpickSubCategory = () => {
    if(props.item && props.item.name !== GameCategory.ALL) {
        // console.log(props.item.name)
        gameStore.pickCategories(props.item.category, props.item.name , false)
    }
}

</script>

<template>
    <div class="set-options">
        <span class="set-options__text">{{props.item.name}}</span>
        <button v-if="props.item?.name !== GameCategory.ALL" class="set-options__img" @click="unpickSubCategory"> 
            <img src="@/assets/svg/closeWhite.svg" alt=""/>
        </button>
    </div>
</template>

<style lang="scss" scoped> 
.set-options {
    display: flex;
    gap: 1.12rem;
    justify-content: center;
    align-items: center;
    // padding: 1.41rem 2.25rem;
    padding: .75rem 1.5rem;
    background: rgba(144, 55, 214, 0.5);
    border-radius: 12.25rem;
    border: 1px solid #663C8E;

    &__text {
        font-weight: 500;
        // font-size: 2.25rem;
        // line-height: 85%;
    }
    &__img {
        @include flex-center;
        width: 2rem;
        height: 2rem;
        padding: .3rem;
        border-radius: 100%;

        img {
            width: 130%;
            height: 130%;
        }
    }
}
</style>