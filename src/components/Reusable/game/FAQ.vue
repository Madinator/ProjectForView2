<script setup lang="ts">
import Plus from './Plus.vue';

const props = defineProps({
    index: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="game-faq toggle-container">
        <div class="game-faq__content">
            <div class="game-faq__question title-container">
                <Plus :index="index"/>
                <strong class="game-faq__name">{{props.question}}</strong>
            </div>
            <div class="description-container">
                <p class="game-faq__desc">{{props.answer}}</p>
            </div>
        </div>
        <div class="game-faq__content game-faq__pseudo">
            <p class="game-faq__desc-pseudo">{{props.answer}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.game-faq {
    &__content {
        display: flex;
        flex-flow: column;
        width: 100%;

        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, .1);
    }
    &__question {
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        gap: 2.81rem;
        padding: 1.75rem 2.35rem;
    }
    &__name {
        font-weight: 600;
        font-size: 2.81rem;
        line-height: 85%;
        @media (min-width: 850px) {
            font-size: 2.2rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }
    .description-container {
        padding: 0 2.35rem 2rem;
    }
    &__desc {
        // font-size: 2.25rem;
        // line-height: 138.9%;
        transition: all 0.3s;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__pseudo {
        position: absolute;
        z-index: -100;
        opacity: 0;
        padding-right: 3.38rem;
        @media (min-width: 850px) {
            width: 50%;
        }
    }
    &__desc-pseudo {
        // font-size: 2.25rem;
        // line-height: 138.9%;
    }
}

</style>