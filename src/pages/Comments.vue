<script setup lang="ts">
import Comment from '@/components/Reusable/Comment.vue';
import { useCommentsStore } from '@/stores/comments';
import { storeToRefs } from 'pinia';
import CommentInput from '@/components/Reusable/CommentInput.vue';

const commentsStore = useCommentsStore();
const { comments } = storeToRefs(commentsStore);

const goBack = () => {

}
</script>

<template>
    <div class="open-comment-page">
        <section class="open-comment-page__header inner-container">
            <button @click="$router.go(-1)">
                <img src="@/assets/svg/arrowWhite.svg" alt="" class="open-comment-page__arrow">
            </button>
            <h2 class="open-comment-page__title">Write</h2>
            <span></span>
        </section>
        <div class="open-comment-page__line">
        </div>
        <div class="open-comment-page__comments inner-container">
            <span class="open-comment-page__comment-amount">577 Comments</span>
            <div class="open-comment-page__comment-section" v-for="comment in comments">
                <Comment 
                    class="open-comment-page__comment" 
                    :class=" item.replied ? 'open-comment-page__comment-reply' : ''"
                    v-for="item in comment" 
                    :comment="item" />
            </div>
        </div>
        <div class="open-comment-page__write">
            <CommentInput />
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.open-comment-page {
    background: #000000;
    padding: 8.92rem 0 2.81rem;
    min-height: 100vh;

    display: flex;
    flex-flow: column;

    .inner-container {
        @include width-restriction;
    }
    &__header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    &__arrow {
        transform: rotate(-90deg);
    }
    &__title {
        font-family: 'DELIRIUM';
        font-style: normal;
        font-weight: 400;
        font-size: 6.76rem;
        line-height: 6.76rem;
    }
    &__line {
        margin-top: 1.41rem;
        opacity: 0.3;
        border-top: 1px solid #B7B7B7;
    }
    &__comments {
        padding: 2.11rem 0 ;
        display: flex;
        flex-flow: column;
    }
    &__comment-amount {
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 140%;
        opacity: 0.7;
    }
    &__comment-section {
        margin-top: 3.38rem;
        display: flex;
        flex-flow: column;
        gap: 3.1rem;
    }
    &__comment-reply {
        margin-left: 6.34rem;
    }
    &__write {
        margin-top: auto;
    }
}
</style>