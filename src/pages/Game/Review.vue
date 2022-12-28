<script setup lang="ts">
import SortSelection from '@/components/Reusable/game/SortSelect.vue';
import GameComment from '@/components/Reusable/CommentCard.vue';
import GameMakeCommentVue from '@/components/Singular/game/GameMakeComment.vue';
</script>

<template>
    <div class="page page-game-review">
        <h2 class="page-game-review__about">Recent reviews</h2>
        <SortSelection class="page-game-review__select" />
        <div class="page-game-review__comments">
            <GameComment v-for="i in 6" />
        </div>
        <button class="page-game-review__load-more btn-white">See more</button>
        <div class="write-review-block">
            <h2 class="page-game-review__write-review-title">Write a review</h2>
            <GameMakeCommentVue class="page-game-review__make-comment" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-game-review {
    @include width-restriction;
    padding: 5.64rem 0;

    @media (min-width: 850px) {
        padding: 0 20%;
    }

    &__about {
        font-weight: 600;
        font-size: 4.51rem;
        line-height: 5.49rem;

        @media (min-width: 850px) {
            font-size: 3.42rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__select {
        margin-top: 4.22rem;

        @media (min-width: 850px) {
            margin-top: 3.55rem;
        }
    }

    &__comments {
        margin-top: 3.52rem;
        display: flex;
        flex-flow: column;
        gap: 2.81rem;

        @media (min-width: 850px) {
            margin-top: 1.7rem;
        }
    }

    &__load-more {
        margin: 4.22rem auto 0;
        display: flex;
    }

    .write-review-block {
        margin-top: 8rem;
    }

    &__write-review-title {
        font-weight: 600;
        font-size: 4.51rem;
        line-height: 5.5rem;
        color: var(--color-white);
        margin-bottom: 3rem;

        // margin-top: 5.63rem;
        display: block;

        @media (min-width: 850px) {
            font-size: 3.42rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__make-comment {
        margin-top: 2rem;
    }
}
</style>