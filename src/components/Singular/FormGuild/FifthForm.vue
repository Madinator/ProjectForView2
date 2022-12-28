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
            <h2 class="form__header__title form-title">Specify accurate minimal value</h2>
            <span class="form__header__text form-text"> Specify accurate minimal value to be locked for the guild to form or save for later</span>
        </div>
        <div class="form__search">
            <span class="form__search__title form-sub-title">Minimal value</span>
            <input type="text" class="form__search__input form-input">
        </div>
        <div class="form__buttons">
            <button @click="handleGoBack" class="form__buttons__back back-button">Back</button>
            <button class="form__buttons__next next-button btn-purple">Next</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form {
    &__header {
        display: flex;
        flex-direction: column;
        margin-bottom: 5.1rem;
    }

    &__search {
        display: flex;
        flex-direction: column;
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 3.42rem;
    }

    &__header__text.form-text {
        line-height: normal;
    }
}
</style>
