<script setup lang="ts">
import { useRouter } from 'vue-router';

// GO BACK BUTTON HANDLER
const router = useRouter();

const handleGoBack = () => {
    router.go(-1);
}
</script>

<template>
    <div class="join">
        <div class="join__header">
            <h2 class="join__header__title join-title">Assets</h2>
            <span class="join__header__text join-text">-</span>
        </div>
        <div class="join__search">
            <span class="join__search__title join-sub-title">Total assets value</span>
            <input type="text" class="join__search__input join-input">
            <span class="join__search__title join-sub-title">Assets stake</span>
            <input type="text" class="join__search__input join-input">
        </div>
        <div class="join__buttons">
            <button @click="handleGoBack" class="join__buttons__back back-button">Back</button>
            <router-link to="stepFour" class="join__buttons__next next-button btn-purple">Next</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.join {
    &__header {
        display: flex;
        flex-direction: column;
        margin-bottom: 5.1rem;
    }

    &__search {
        display: flex;
        flex-direction: column;

        &__input {
            margin-bottom: 1.71rem; 
        }
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 0.85rem;
    }
}
</style>
