<script setup lang="ts">
import { useRouter } from 'vue-router';


// GO BACK BUTTON HANDLER
const router = useRouter();

const handleGoBack = () => {
    router.go(-1);
}
</script>

<template>
    <div class="form">
        <div class="form__header">
            <h2 class="form__header__title form-title">Define a strategy</h2>
            <span class="form__header__text form-text">Tell us about the assets and other details</span>
        </div>
        <div class="form__search">
            <div class="form__search__box">
                <span class="form__search__title form-sub-title">Assets staked</span>
                <input type="text" class="form__search__input form-input">
            </div>
            <div class="form__search__box">
                <span class="form__search__title form-sub-title">Current support</span>
                <input type="text" class="form__search__input form-input">
            </div>
            <div class="form__search__box">
                <span class="form__search__title form-sub-title">Assets needed</span>
                <input type="text" class="form__search__input form-input">
            </div>
            <div class="form__search__box">
                <span class="form__search__title form-sub-title">Max headcount</span>
                <input type="text" class="form__search__input form-input">
            </div>
        </div>
        <div class="form__buttons">
            <button @click="handleGoBack" class="form__buttons__back back-button">Back</button>
            <router-link to="stepFour" class="form__buttons__next next-button btn-purple">Next</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form {
    &__header {
        display: flex;
        flex-direction: column;
        margin-bottom: 5.1rem;

        @media only screen and (max-width: 850px) {
            margin-bottom: 3rem;
        }
    }

    &__search {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.66rem;

        @media only screen and (max-width: 850px) {
            grid-template-columns: 1fr;
        }

        &__input {
            margin-top: 1.71rem;
        }
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 2.6rem;

        @media only screen and (max-width: 850px) {
            margin-top: 5rem;
        }
    }

    
}
</style>
