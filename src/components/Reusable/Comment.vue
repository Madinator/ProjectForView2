<script setup lang="ts">
import { onMounted, type PropType } from 'vue';
import type { Comment } from '@/stores/comments';

const props = defineProps({
    comment: {
        type: Object as PropType<Comment>
    },
});

onMounted(() => {
    // console.log(props.comment)
})
</script>

<template>
    <div class="comment">
        <img 
            class="comment__img" 
            :class="comment?.replied ? 'comment__img--reply' : ''"
            :src="comment?.img" 
            alt=""
        />
        <div class="comment__right">
            <div class="comment__names">
                <h1 class="comment__name">{{comment?.name}}</h1>
                <h1 class="comment__name-replied">{{comment?.replied}}</h1>
            </div>
            <div class="comment__comment">
                <h1 class="comment__text"><span class="comment__replied" v-if="comment?.replied">{{comment?.replied}}</span>{{comment?.comment}}</h1>
            </div>
            <div class="comment__bottom">
                <span class="comment__time">{{comment?.time}}</span>
                <button class="comment__reply">Reply</button>
            </div>
            <div v-if="comment?.replied" class="comment__all-answer">
                <span class="comment__all-answer-line"></span>
                <button class="comment__all-answer-text"> (303) Show all answers</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.comment {
    display: flex;
    flex-flow: row;
    gap: 1.41rem;
    &__img {
        width: 4.93rem;
        height: 4.93rem;
        border-radius: 100%;
        @media only screen and  (min-width: 850px) {
            width: 3.42rem;
            height: 3.42rem;
        }
    }
    &__img--reply {
        width: 3.52rem;
        height: 3.52rem;
    }
    &__right {
        display: flex;
        flex-flow: column;
        gap: 0.7rem;
    }
    &__names {
        display: flex;
        flex-flow: row;
        gap: 1.41rem;
        align-items: baseline;
    }
    &__name {
        font-weight: 600;
        font-size: 1.54rem;
        line-height: 112%;

        @media only screen and  (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__name-replied {
        font-weight: 600;
        font-size: 1.54rem;
        line-height: 112%;
        cursor: pointer;
        opacity: 0.5;

        @media only screen and  (max-width: 850px) {
            font-size: 13px !important;
        }
        
    }
    // &__name-replied:hover {
    //     filter: brightness(75%);
    // }
    &__comment {

    }
    &__replied {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 111%;
        color: var(--color-purple-dark);
        margin-right: 0.7rem;
        cursor: pointer;
        // &:hover {
        //     color: var(--color-purple-light);
        // }
        @media only screen and  (max-width: 850px) {
            font-size: 13px !important;
        }
    }
    &__text {
        font-weight: 400;
        font-size: 1.37rem;
        line-height: 140%;
        align-items: center;

        @media only screen and  (max-width: 850px) {
            font-size: 15px !important;
            align-items: flex-start;
        }
    }
    &__bottom {
        display: flex;
        flex-flow: row;
        gap: 2.11rem;
    }
    &__time {
        font-weight: 400;
        font-size: 1.83rem;
        line-height: 140%;
        opacity: 0.5;

        @media only screen and  (max-width: 850px) {
            font-size: 12px !important;
        }
    }
    &__reply {
        font-weight: 600;
        font-size: 1.54rem;
        line-height: 140%;
        color: var(--color-purple-dark);
        cursor: pointer;
        &:hover {
            color: var(--color-purple-light);
        }

        @media only screen and  (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__all-answer {
        cursor: pointer;
        margin-top: 2.11rem;
        display: flex;
        flex-flow: row;
        gap: 0.7rem;
        align-items: center;
        @media only screen and  (min-width: 850px) {
            margin-top: 1.28rem;
        }
    }
    &__all-answer-line {
        width: 3.52rem;
        opacity: 0.6;
        border-top: 1px solid var(--color-purple-dark);
    }
    &__all-answer-text {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;
        color: var(--color-purple-dark);

        &:hover {
            color: var(--color-purple-light);
        }

        @media only screen and  (max-width: 850px) {
            font-size: 15px !important;
        }
    }
}
</style>