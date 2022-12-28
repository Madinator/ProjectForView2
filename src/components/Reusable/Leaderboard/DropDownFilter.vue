<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['name']);

// SORT TYPE DATA 
const typeChoosen = ref('Week');

const handleChangeType = (type: string) => {
    typeChoosen.value = type;
}

// SORT TYPE CHOOSE
const sortDropdownOpenIndicator = ref<boolean>(false);

const closeDropdown = (): void => {
    sortDropdownOpenIndicator.value = false;
};

const toggleDropdown = (): void => {
    if (sortDropdownOpenIndicator.value) {
        closeDropdown();
    } else {
        sortDropdownOpenIndicator.value = true;
    }
}

const handleClick = (event: Event) => {
    if (sortDropdownOpenIndicator.value) {
        const target = event?.target as HTMLElement;
        const isClickInsideElement = target.closest('.' + props.name);

        if (!isClickInsideElement) {
            closeDropdown();
        }
    }
}

onMounted(() => {
    window.addEventListener('click', handleClick);
});

onUnmounted(() => {
    window.removeEventListener('click', handleClick);
});

</script>
<template>
    <div class="sort" :class="props.name">
        <button @click="toggleDropdown" class="sort__button">
            <span class="sort__button__text">{{ typeChoosen }}</span>
            <img src="@/assets/svg/Leaderboard/arrow.svg" :class="{ 'arrow-active': sortDropdownOpenIndicator }"
                alt="arrow" class="sort__button__img">
        </button>

        <div :class="{ 'closed': !sortDropdownOpenIndicator }" class="dropdown sort__content__sort-dropdown">
            <ul @click="closeDropdown" class="sort__content__sort-dropdown__list">
                <li class="sort__content__sort-dropdown__item">
                    <button @click="handleChangeType('Week')" class="sort__content__sort-dropdown__parameter">
                        <span>Week</span>
                        <div class="sort__content__sort-dropdown__circle-container"></div>
                    </button>
                </li>
                <li class="sort__content__sort-dropdown__item">
                    <button @click="handleChangeType('Months')" class="sort__content__sort-dropdown__parameter">
                        <span>Months</span>
                        <div class="sort__content__sort-dropdown__circle-container"></div>
                    </button>
                </li>
                <li class="sort__content__sort-dropdown__item">
                    <button @click="handleChangeType('Year')" class="sort__content__sort-dropdown__parameter">
                        <span>Year</span>
                        <div class="sort__content__sort-dropdown__circle-container"></div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sort {
    position: relative;
    width: 14rem;

    @media only screen and (max-width: 850px) {
        width: auto;
    }

    &__button {
        width: 14rem;
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.37);

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.8rem;
        padding: 1.11rem 1.71rem;

        &:hover {
            opacity: 0.8;
        }

        &__text {
            font-weight: 500;
            font-size: 1.71rem;
            line-height: 2.06rem;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        &__img {
            height: 2.06rem;
            width: 2.06rem;
            transition: all .2s;
        }
    }

    &__content {
        &__sort-dropdown {
            position: absolute;
            top: 110%;
            left: 0;
            z-index: 1000;
            border: none;
            background: #1D1925;
            backdrop-filter: blur(40.5px);
            border-radius: 15px;
            padding: 1.71rem;
            transition: all .3s;
            width: 100%;
            backdrop-filter: blur(10px);

            &__list {
                display: flex;
                flex-direction: column;
                gap: 0.7rem;
            }

            &__parameter {
                width: 100%;
                font-weight: 600;
                font-size: 1.71rem;
                line-height: 85%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: .6rem;
                transition: all .3s;

                &:hover>span {
                    opacity: 0.7;
                }

                &>span {
                    font-weight: 500;
                    font-size: 1.71rem;
                    line-height: 2.06rem;
                    transition: all .3s;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }
            }
        }
    }
}
</style>