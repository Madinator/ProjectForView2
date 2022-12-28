<script setup lang="ts">
import { computed, ref, toRefs } from '@vue/reactivity';
import { onMounted, watchEffect } from 'vue';
import EmojisPicker from './EmojisPicker.vue';

const props = defineProps({
    isEdit: Boolean,
    text: String
});

const { isEdit, text } = toRefs(props);
const localText = ref();
const focus = () => {
    document.getElementById('comment-input')?.focus();
}; 

watchEffect(() => {
    if(isEdit.value) {
        localText.value = text?.value;
        return;
    }
    localText.value = '';
})
</script>

<template>
    <div 
        class="comment-input" 
        @click="focus" 
        :class="isEdit ? 'comment-input--edit' : ''"
        >
        <div class="comment-input__left">
            <div v-if="!isEdit" class="comment-input__image-container desktop">
                <img class="comment-input__image" src="@/assets/img/game/GameCommentUser.png" alt=""/>
            </div>
            <textarea 
                v-if="isEdit"
                id="comment-input" 
                class="comment-input__input" 
                :class="isEdit ? 'comment-input__input--edit' : ''"
                type="text" 
                placeholder="What are you worried about?"
                v-model="localText"
            ></textarea>
            <input 
                v-if="!isEdit"
                id="comment-input" 
                class="comment-input__input" 
                :class="isEdit ? 'comment-input__input--edit' : ''"
                type="text" 
                placeholder="What are you worried about?"
                v-model="localText"
            />
                
        </div>
        <div class="comment-input__icons">
            <div class="comment-input__icon">
                <EmojisPicker />
            </div>
            <img class="comment-input__icon" src="@/assets/svg/insSquare.svg" alt="" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.comment-input {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.11rem;
    padding: 2rem 3.38rem;
    width: 100%;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.2);

    @media only screen and  (min-width: 850px) {
        padding: 1.28rem 3rem;
        background: linear-gradient(90.33deg, rgba(0, 0, 0, 0.094) 0.24%, rgba(0, 0, 0, 0.049) 94.13%);
    }
    &--edit {
        align-items:flex-start;
    }
    &__left {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.28rem;
        width: 100%;

        @media only screen and  (min-width: 850px) {
            min-height: 100%;
        }
    }
    &__input {
        width: 100%;
        height: 100%;
        align-items: center;

        font-size: 1.54rem;
        line-height: 140%;

        @media only screen and  (min-width: 850px) {
            font-size: 15px !important;
        }

    }
    &__input--edit {
        @media only screen and  (min-width: 850px) {
            height: 10rem;
            font-size: 15px !important;
        }
    }
    &__image {
        width: 2.57rem;
        height: 2.57rem;
        border-radius: 100%;
    }
    &__image-container {
        cursor: pointer;
        width: 2.57rem;
        height: 2.57rem;
        border-radius: 100%;
    }
    &__input::placeholder {
        font-weight: 700;
        font-size: 1.54rem;
        line-height: 140%;


        @media only screen and  (min-width: 850px) {
            vertical-align: top;
        }

        @media only screen and  (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__icons {
        display: flex;
        flex-flow: row;
        gap: 1.41rem;
    }
    &__icon {
        width: 3.38rem;
        height: 3.38rem;

        @media only screen and  (min-width: 850px) {
            width: 2rem;
            height: 2rem;
        }
    }
}
</style>