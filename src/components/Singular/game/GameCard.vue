<script setup lang="ts">
import { GameView } from '@/typing/game';
import type { PropType } from 'vue';
import GameBaseButton from '@/components/Reusable/game/BaseButton.vue';


const props = defineProps({
    type: {
        type: Object as PropType<GameView>,
        default: GameView.COLUMN
    }
})
</script>

<template>
    <div class="game-card" :class="props.type === GameView.ROW ? 'game-card--row' : 'game-card--column'">
        <img class="game-card__img" src="@/assets/img/game/gameTest.png" alt=""/>
        <div class="game-card__main">
            <div class="game-card__header">
                <div class="game-card__header-left">
                    <h1 class="game-card__name">Earnland</h1>
                    <strong class="game-card__developer">EarnGames</strong>
                </div>
                <div class="rating">3.8 Rating</div>
            </div>
            <p class="game-card__desc" v-if="props.type === GameView.COLUMN">
                Earnland is a blockchain-based multiplayer online battle arena (MOBA) game designed to combine players' individual techniques and teamwork to challenge themselves in multiple game modes. Different from the current chain games on the market, Earnland is a product that truly integrates all the advantages of traditional mobile games, with a high degree of completion and entertainment, creating a real 'social gaming experience' and profit model.
            </p>
            <!-- <GameBaseButton class="game-card__button">Action</GameBaseButton> -->
            <router-link to="/gamePage" class="game-card__button">Action</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.game-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2.112rem;
    border: 1px solid #353340;

    &__img {
        width: 100%;
        object-fit: cover;
    }
    &__main {
        padding: 2.112rem 2.817rem 2.817rem;
    }
    &__header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    &__header-left {
        display: flex;
        flex-flow: column;
        gap: 0.704rem;
    }
    &__name {
        font-weight: 600;
        font-size: 2.817rem;
        line-height: 3.38rem;

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }
    &__developer {
        font-weight: 500;
        // font-size: 2.25rem;
        line-height: 85%;
        color: #DCB45B;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__desc {
        margin-top: 2.8rem;
        // font-size: 2.25rem;
        line-height: 140%;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 12  ; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__button {
        // margin-top: 4.22rem;
        margin-top: 2rem;
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
    .rating {
        margin-bottom: 1rem;
    }
}

.game-card--column {
    display: flex;
    align-items: center;
    // max-height: 40rem;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
    
    .game-card__img {
        border-radius: 2.1rem 0 0 2.1rem;
        height: 40rem;

        @media only screen and (max-width: 1100px) {
            height: 36rem;
            border-radius: 2.1rem;
        }

        @media only screen and (max-width: 1000px) {
            height: 29rem;
            border-radius: 2.1rem 2.1rem 0 0;
        }
    }

    .game-card__header {
        flex-flow: column-reverse;
        margin-top: 2.8rem;

        @media only screen and (max-width: 1000px) {
            flex-direction: row;
            // align-items: center;
            margin-top: 0rem;
        }
    }
}

.game-card--row {
    // width: 22.53rem;
    width: 100%;
    
    // @media (min-width: 850px) {
    //     width: 35.95rem;
    // }

    @media only screen and (max-width: 850px) {
        .rating {
            margin-bottom: 2.5rem;
        }

        .game-card__button {
            margin-top: 2.5rem;
        }
    }
    
    .game-card__img {
        border-radius: 2.1rem 2.1rem 0 0;
        height: 28.17rem;

        @media only screen and (max-width: 850px) {
            height: 25rem;
        }
    }

    .game-card__header {
        flex-direction: column-reverse;
    }
}
</style>