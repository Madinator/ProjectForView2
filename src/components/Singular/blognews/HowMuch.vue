<script setup lang="ts">import { ref } from 'vue';


const isActive = ref(false)
const toggle = () => {
    isActive.value = !isActive.value;
} 
const focus = () => {
    document.getElementById('how-much')?.focus();
}; 
</script>

<template>
    <div class="how-much" @click="focus">
        <img class="how-much__img" src="@/assets/svg/dollar.svg" alt="" />
        <input id="how-much" type="number" class="how-much__input" placeholder="How much to deposit"/>
    </div>
</template>

<style lang="scss" scoped>
.how-much {
    cursor: text;
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.08) 94.13%);
    border-radius: 5px;
    padding: 1.26rem 1.7rem 1.7rem 2.81rem;

    display: flex;
    flex-flow: row;
    align-items: center;

    border: 1px solid rgba(255, 255, 255, 0.2);

    @media (min-width: 850px) {
        padding: 0.78rem 1rem 1rem 1.71rem;
    }
    &__img {
        opacity: 0.5;

        @media (min-width: 850px) {
            width: 2rem;
            height: 2rem;
        }
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