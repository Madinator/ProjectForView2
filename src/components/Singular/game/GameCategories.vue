<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import { storeToRefs } from 'pinia';
import type { AllSubCategories, GameCategories } from '@/typing/game'

const searchSuggestions: any[] = [];

const gameStore = useGameStore();
const { gameCategories } = storeToRefs(gameStore);

const pickSubtitle = (cat: GameCategories,subCat: AllSubCategories ): void => {
    gameStore.pickCategories(cat, subCat);
}

</script>

<template>
    <div class="game-categories">
        <div class="game-categories__search">
            <img src="@/assets/svg/game/search.svg" alt=""/>
            <input class="game-categories__input" type="search" placeholder="Search"/>
        </div>
        <div v-if="searchSuggestions.length > 0" class="game-categories__suggestions">
            <span class="game-categories__suggestion">Woodo PLAY</span>
            <span class="game-categories__suggestion game-categories__suggestion-last">Woodo PLAY</span>
        </div>
        <div class="game-categories__main">
            <div class="game-categories__container" v-for="category in gameCategories">
                <h1 class="game-categories__title">{{category.title}}</h1>
                <button 
                    class="game-categories__subtitle" 
                    v-for="subCategory in category.subtitles"
                    :class="subCategory.picked ? 'game-categories__subtitle--picked' : ''"
                    @click="pickSubtitle(category.title, subCategory.name)"
                    > 
                    {{ subCategory.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.game-categories {
    &__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    &__search {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.28rem;
        background: rgba(229, 229, 229, 0.2);
        border-radius: 0.6rem;
        padding: 1.11rem 2.14rem;
        border: 1px solid #494658;
    }
    &__input {
        width: 100%;
        height: 100%;
    }
    &__suggestions {
        display: flex;
        flex-flow: column;
        gap: 1.28rem;
        margin-top: 0.17rem;
        background: rgba(61, 55, 82, 0.9);
        backdrop-filter: blur(5px);
        border-radius: 0px 0px 7px 7px;
        padding: 1.71rem 5.48rem 0;
    }
    &__suggestion {
        padding-bottom: 1.71rem;
        border-bottom: 1px solid #85888A;
    }
    &__suggestion-last {
        border-bottom: none;
    }
    &__title {
        font-weight: 600;
        font-size: 2.1rem;
        line-height: 85%;

        margin-top: 3.42rem;

        @media only screen and (max-width: 1300px) {
            font-size: 21px;
        }

    }
    &__subtitle {
        cursor: pointer;
        font-weight: 600;
        line-height: 85%;
        color: #85888A;

        margin-top: 1.71rem;

        @media only screen and (max-width: 1300px) {
            font-size: 16px;
        }
    }
    &__subtitle:not(.game-categories__subtitle--picked) {
        &:hover {
            color: darken(#85888A, 10%);
        }
    }
    &__subtitle--picked {
        color: #B960FF;
        transition: all 0.3s;
    }
}
</style>