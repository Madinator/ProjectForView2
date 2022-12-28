<script setup lang="ts">import { ref } from 'vue';


const isActive = ref(false)
const toggle = () => {
    isActive.value = !isActive.value;
};

const focus = () => {
    document.getElementById('your-comment')?.focus();
};
</script>

<template>
    <div class="your-comment" @click="focus">
        <img class="your-comment__img" src="@/assets/svg/comment.svg" alt="" />
        <textarea id="your-comment" class="your-comment__input" placeholder="Your comment"></textarea>
    </div>
</template>

<style lang="scss" scoped>
.your-comment {
    cursor: text;
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.08) 94.13%);
    border-radius: 5px;
    padding: 1.26rem 1.7rem 1.7rem 2.81rem;

    display: flex;
    flex-flow: row;
    align-items: start;

    border: 1px solid rgba(255, 255, 255, 0.2);

    height: 12.67rem;

    @media (min-width: 850px) {
        padding: 1.53rem 1rem 1rem 1.71rem;
    }
    &__img {
        opacity: 0.5;
        width: 18px;
        height: 18px;
    }
    &__input {
        width: 100%;
        height: 100%;
        margin-left: 1.41rem;
        @media (min-width: 850px) {
            font-weight: 700;
        }
    }
    &__input::placeholder {
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 92.7%;

        text-align: start;

        @media (min-width: 850px) {
            font-size: 1.54rem;
            font-weight: 700;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
}
</style>