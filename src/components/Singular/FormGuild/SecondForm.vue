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
        isSelected: true
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
        name: 'Creatives',
        isSelected: false
    },
    {
        id: 4,
        name: 'Investors',
        isSelected: false
    },
])

// CHOOSE CATEGORIES HANDLER
const handleChooseButton = (id: number) => {
    data.value.forEach(el => {
        el.id === id ? el.isSelected = true : el.isSelected = false;
    })
}

</script>

<template>
    <div class="form">
        <div class="form__header">
            <h2 class="form__header__title form-title">Select a category</h2>
            <span class="form__header__text form-text">Please select the guild category</span>
        </div>
        <div class="form__category-select">
            <button v-for="item in data" class="form__category-select__button item.name"
                :class="[item.name, { selected: item.isSelected }]" @click="handleChooseButton(item.id)">{{ item.name
                }}</button>
        </div>
        <div class="form__buttons">
            <button @click="handleGoBack" class="form__buttons__back back-button">Back</button>
            <router-link to="stepThree" class="form__buttons__next next-button btn-purple">Next</router-link>
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

        @media only screen and (max-width: 850px) {
            margin-top: 0;
            gap: 1rem;
        }

        &__button {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 2.84rem 0 2.84rem 9rem;
            text-align: start;
            background-position: left;
            background-repeat: no-repeat;
            background-size: 8.17rem;
            border: 1px solid rgba(255, 255, 255, 0.5);
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                font-size: 17px !important;
            }

            &:hover {
                border-color: rgba(184, 94, 255, 0.4);
            }

            &.selected {
                border-color: rgba(184, 94, 255, 1);
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

            &.Creatives {
                background-image: url('@/assets/img/FormGuild/creatives.png');
            }

            &.Investors {
                background-image: url('@/assets/img/FormGuild/investors.png');
            }
        }
    }
}
</style>
