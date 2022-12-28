<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';


// GO BACK BUTTON HANDLER
const router = useRouter();

const handleGoBack = () => {
    router.go(-1);
}

// CATEGORY BUTTONS DATA
const data = ref([
    {
        id: 0,
        name: 'Gamers',
        isSelected: false
    },
    {
        id: 1,
        name: 'Devs',
        isSelected: false
    },
    {
        id: 2,
        name: 'Traders',
        isSelected: false
    },
    {
        id: 3,
        name: 'Investors',
        isSelected: false
    },
])

// CHOOSE CATEGORIES HANDLER
const handleChooseButton = (id: number) => {
    data.value.forEach(el => {
        el.id === id ? el.isSelected = !el.isSelected : null;
    })
}

</script>

<template>
    <div class="form">
        <div class="form__header">
            <h2 class="form__header__title form-title">Will you need support?</h2>
            <span class="form__header__text form-text">Choose the directions in which you will need help</span>
        </div>
        <div class="form__category-select">
            <button v-for="item in data" class="form__category-select__button item.name"
                :class="[item.name, { selected: item.isSelected }]" @click="handleChooseButton(item.id)">
                <p class="form__category-select__button__text">{{ item.name }}</p>
                <div class="form__category-select__button__check"></div>
            </button>
        </div>
        <div class="form__buttons">
            <button @click="handleGoBack" class="form__buttons__back back-button">Back</button>
            <router-link to="stepFive" class="form__buttons__next next-button btn-purple">Next</router-link>
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

    &__category-select {
        margin-top: 5.2rem;
        display: flex;
        flex-direction: column;
        gap: 1.71rem;

        &__button {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 2.84rem 2.2rem 2.84rem 9rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-position: left;
            background-repeat: no-repeat;
            background-size: 8.17rem;
            border: 1px solid rgba(255, 255, 255, 0.5);

            &:hover {
                border-color: rgba(184, 94, 255, 0.4);
            }

            &.selected {
                border-color: rgba(184, 94, 255, 1);
            }

            &.selected>&__check {
                background-image: url('@/assets/svg/FormGuild/formGuildCheck.svg');
            }

            &__text {
                font-weight: 600;
                font-size: 1.71rem;
                line-height: 85%;

                @media only screen and (max-width: 850px) {
                    font-size: 17px !important;
                }
            }

            &__check {
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 100%;
                width: 3.45rem;
                height: 3.45rem;
                background-size: 2.06rem;
                background-position: center;
                background-repeat: no-repeat;
            }

            &.Gamers {
                background-image: url('@/assets/img/FormGuild/gamers.png');
            }

            &.Devs {
                background-image: url('@/assets/img/FormGuild/devs.png');
            }

            &.Traders {
                background-image: url('@/assets/img/FormGuild/traders.png');
            }

            &.Investors {
                background-image: url('@/assets/img/FormGuild/investors.png');
            }
        }
    }
}
</style>
