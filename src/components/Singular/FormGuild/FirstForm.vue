<script setup lang="ts">

</script>

<template>
    <div class="form">
        <div class="form__header">
            <h2 class="form__header__title form-title">Let's start with description</h2>
            <span class="form__header__text form-text">Please fill in the details of your guild</span>
        </div>
        <div class="form__search">
            <span class="form__search__title form-sub-title">Description</span>
            <input type="text" class="form__search__input form-input">
        </div>
        <div class="form__search">
            <h3 class="form__search__sub-title">Describe the mission, vision and values</h3>
            <span class="form__search__title form-sub-title">Mission</span>
            <input type="text" class="form__search__input form-input"><span
                class="form__search__title form-sub-title">Vision</span>
            <input type="text" class="form__search__input form-input"><span
                class="form__search__title form-sub-title">Values</span>
            <input type="text" class="form__search__input form-input">
        </div>
        <div class="form__buttons">
            <router-link to="stepTwo" class="form__buttons__next next-button btn-purple">Next</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form {
    &__header {
        display: flex;
        flex-direction: column;
        margin-bottom: 4.3rem;
    }

    &__search {
        display: flex;
        flex-direction: column;

        &__sub-title {
            font-weight: 600;
            font-size: 1.9rem;
            line-height: 85%;
            margin: 4.3rem 0 1.7rem;
        }

        &__title {
            margin-top: 1.71rem;
        }
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 2.56rem;

        @media only screen and (max-width: 850px) {
            margin-top: 5rem;
        }
    }
}
</style>
