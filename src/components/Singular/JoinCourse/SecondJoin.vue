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
            <h2 class="join__header__title join-title">Personal Details</h2>
            <span class="join__header__text join-text">We would like to know our future students better so we can make the course the most effective</span>
        </div>
        <div class="join__search">
            <span class="join__search__title join-sub-title">Name</span>
            <input type="text" class="join__search__input join-input">
        </div>
        <div class="join__search">
            <span class="join__search__title join-sub-title">Age</span>
            <input type="text" class="join__search__input join-input">
        </div>
        <div class="join__search">
            <span class="join__search__title join-sub-title">Occupation</span>
            <input type="text" class="join__search__input join-input">
        </div>
        <div class="join__buttons">
            <button @click="handleGoBack" class="join__buttons__back back-button">Back</button>
            <router-link to="stepThree" class="join__buttons__next next-button btn-purple">Next</router-link>
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
        margin-top: 1.71rem;
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 3.42rem;
    }
}
</style>
