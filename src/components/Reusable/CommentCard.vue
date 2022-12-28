<script setup lang="ts">
import Comment from './Comment.vue';
import router from '@/router';
import { useCommentsStore } from '@/stores/comments';
import { storeToRefs } from 'pinia';
import CommentInput from './CommentInput.vue';
import TripleDots from './TripleDots.vue';
import { ref } from 'vue';

const props = defineProps({
    isPost: {
        type: Boolean,
        default: false
    }
})

const commentsStore = useCommentsStore();
const { comments } = storeToRefs(commentsStore);

const isEditMode = ref(false);
const text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu fermentum augue, sit amet convallis augue. Integer eu iaculis sem, sed euismod eros. Nulla facilisi. Proin luctus odio nunc, sed laoreet est bibendum vitae. Sed a eleifend ex. Integer varius rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend ligula. Aliquam faucibus erat ut tincidunt cursus. Cras et ullamcorper velit. In hac habitasse platea dictumst. Nunc vitae dui quis risus elementum auctor.')

const goToComments = () => {
    if (window.innerWidth < 850) {
        router.push({ name: 'comments' });
    }
};

const edit = () => {
    isEditMode.value = !isEditMode.value;
};

const offEditMode = () => {
    isEditMode.value = false;
}
</script>

<template>
    <div class="game-comment">
        <div class="game-comment__header">
            <div class="game-comment__user">
                <img class="game-comment__img" src="@/assets/img/game/GameCommentUser.png" alt="" />
                <div class="game-comment__user-info">
                    <h1 class="game-comment__name">RESHALA HELEX</h1>
                    <span class="game-comment__last-usage">Last seen recently</span>
                </div>
            </div>
            <TripleDots v-if="isPost" @edit="edit" />
        </div>
        <h1 v-if="!isEditMode" class="game-comment__text">
            {{ text }}
        </h1>
        <div :class="isEditMode ? 'column-reverse' : ''">
            <div class="game-comment__bottom">
                <div class="game-comment__acted">
                    <div class="game-comment__buttons">
                        <button class="game-comment__button">
                            <img class="game-comment__response-img" src="@/assets/svg/heartEmpty.svg" alt="" />
                        </button>
                        <button class="game-comment__button game-comment__button--comment" @click="goToComments()">
                            <img class="game-comment__response-img game-comment__response-img--comment"
                                src="@/assets/svg/comment.svg" alt="" />
                            <span class="game-comment__responses-amount">1223</span>
                        </button>
                        <button class="game-comment__button">
                            <img class="game-comment__response-img" src="@/assets/svg/reply.svg" alt="" />
                        </button>
                    </div>
                    <div class="game-comment__views mobile">
                        <img class="game-comment__views-img" src="@/assets/svg/eye.svg" alt="" />
                        <span class="game-comment__views-count">26.5K</span>
                    </div>
                </div>
                <div v-if="isEditMode" class="game-comment__actions">
                    <button class="game-comment__cancel" @click="offEditMode">Cancel</button>
                    <button class="game-comment__save btn-purple" @click="offEditMode">Save</button>
                </div>
            </div>
            <div v-if="!isEditMode" class="game-comment__line desktop"></div>
            <div v-if="!isEditMode" class="game-comment__comments desktop" v-for="comment in comments">
                <Comment class="game-comment__comment" v-for="item in comment" :comment="item" />
            </div>
            <button v-if="!isEditMode" class="game-comment__following desktop">Show the following comments</button>
            <CommentInput :isEdit="isEditMode" class="game-comment__input"
                :class="isEditMode ? 'game-comment__input-edit' : ''" :text="text" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.game-comment {
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.08) 0.3%, rgba(240, 237, 247, 0.06) 94.13%);
    border: 1px solid rgba(241, 241, 241, 0.25);
    padding: 3.52rem;

    border-radius: 24px;
    backdrop-filter: blur(75px);

    @media only screen and (min-width: 850px) {
        padding: 3.76rem 3.42rem 4.71rem;
        background: linear-gradient(90.33deg, rgba(0, 0, 0, 0.094) 0.24%, rgba(0, 0, 0, 0.049) 94.13%);
        cursor: auto;
    }

    &__header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }

    &__user {
        display: flex;
        flex-flow: row;
        gap: 1.41rem;
        cursor: pointer;
    }

    &__img {
        width: 4.93rem;
        height: 4.93rem;
        border-radius: 100%;

        @media only screen and (min-width: 850px) {
            width: 4.28rem;
            height: 4.28rem;
        }
    }

    &__user-info {
        display: flex;
        flex-flow: column;
        gap: 0.28rem;
    }

    &__name {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 112%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__last-usage {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 112%;

        @media only screen and (max-width: 850px) {
            font-size: 11px !important;
        }
    }

    &__text {
        margin-top: 2.81rem;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: var(--color-white);
        opacity: 0.8;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__bottom {
        margin-top: 2.81rem;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        gap: 2.57rem;

        @media only screen and (max-width: 850px) {
            flex-flow: row wrap;
        }
    }

    &__acted {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        width: 100%;

        @media only screen and (max-width: 850px) {
            gap: 2.81rem;
        }
    }

    &__actions {
        display: flex;
        flex-flow: row;
        gap: 2.57rem;
    }

    &__cancel {
        font-weight: 400;
        font-size: 1.37rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 10px !important;
        }
    }

    &__cancel:hover {
        color: darken(white, 25%)
    }

    &__save {
        padding: 0.7rem 5.65rem;
    }

    &__buttons {
        display: flex;
        flex-flow: row;
        gap: 1.41rem;
    }

    &__button {
        padding: 0.7rem 2.81rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;

        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 0.7rem;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }

    &__button--comment {
        padding: 0.7rem 1.7rem;
    }

    &__response-img--comment {
        width: 16.67px;
        height: 16.25px;
    }

    &__views {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 0.7rem;
    }

    &__views-img {
        width: 20px;
        height: 20px;
        opacity: 0.7;
    }

    &__views-count {
        font-weight: 400;
        font-size: 2rem;
        line-height: 112%;
        letter-spacing: 0.025em;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__line {
        margin-top: 2.6rem;
        width: 100%;
        border-top: 1px solid rgba(242, 242, 242, 0.25);
    }

    &__comments {
        margin-top: 2.14rem;

    }

    &__comment {
        margin-top: 1.54rem;
    }

    &__following {
        display: block;
        margin-top: 1.71rem;
        color: var(--color-purple-dark);

        font-weight: 600;
        font-size: 1.54rem;
        line-height: 112%;
        letter-spacing: 0.025em;
        cursor: pointer;

        &:hover {
            color: lighten(#9037D6, 6%);
        }
    }

    &__input {
        margin-top: 2.61rem;
    }

    &__input-edit {
        height: 13rem;
    }
}

.column-reverse {
    display: flex;
    flex-flow: column-reverse;
}
</style>