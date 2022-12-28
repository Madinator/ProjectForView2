<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// GET HANDLER FROM PARENT
const props = defineProps(["handler"]);

// STREAM TYPE DATA 
const typeChoosen = ref('Design');

const handleChangeType = (type: string) => {
    typeChoosen.value = type;
}

// STREAM TYPE CHOOSE
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
        const isClickInsideElement = target.closest('.popup__content__stream-button__box');

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
    <div class="popup">
        <div class="popup__overlay" @click="props.handler.handleOpenPopup()"></div>
        <div class="popup__content">
            <div class="popup__content__wrapper">
                <span class="popup__content__descr">Become an Ambasador</span>
                <span class="popup__content__title title-primary">fill out an application</span>
                <span class="popup__content__info first">What do you want to stream?</span>
                <div class="popup__content__stream-button__box">
                    <button @click="toggleDropdown" class="popup__content__stream-button">
                        <span class="popup__content__stream-button__text">{{ typeChoosen }}</span>
                        <img src="@/assets/svg/BecomeAmbassador/arrow.svg" alt="arrow"
                            class="popup__content__stream-button__img"
                            :class="{ 'arrow-active': sortDropdownOpenIndicator }" />
                    </button>
                    <div :class="{ 'closed': !sortDropdownOpenIndicator }" class="dropdown popup__sort-dropdown">
                        <ul @click="closeDropdown" class="popup__sort-dropdown__list">
                            <li class="popup__sort-dropdown__item">
                                <button @click="handleChangeType('Design')" class="popup__sort-dropdown__parameter">
                                    <span>Design</span>
                                    <div class="popup__sort-dropdown__circle-container"></div>
                                </button>
                            </li>
                            <li class="popup__sort-dropdown__item">
                                <button @click="handleChangeType('Develop')" class="popup__sort-dropdown__parameter">
                                    <span>Develop</span>
                                    <div class="popup__sort-dropdown__circle-container"></div>
                                </button>
                            </li>
                            <li class="popup__sort-dropdown__item">
                                <button @click="handleChangeType('Marketing')" class="popup__sort-dropdown__parameter">
                                    <span>Marketing</span>
                                    <div class="popup__sort-dropdown__circle-container"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <span class="popup__content__info">Your portfolio</span>
                <input placeholder="Low" type="text" class="popup__content__input">
                <span class="popup__content__info">What is your experience in this area?</span>
                <input placeholder="12 Years" type="text" class="popup__content__input">
                <span class="popup__content__info">Your social media</span>
                <input placeholder="@mikhailjr" type="text" class="popup__content__input">
                <button class="popup__content__button">Send</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.popup {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all .3s;

    &__overlay {
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        // background: rgba(0, 0, 0, 0.39);
        backdrop-filter: blur(6.5px);
        cursor: pointer;
    }

    &__sort-dropdown {
        position: absolute;
        top: 110%;
        left: 0;
        z-index: 1000;
        border: none;
        background: #2E2E2E;
        border-radius: 15px;
        width: 49.1rem;
        padding: 1.5rem 0;
        transition: all .3s;

        @media only screen and (max-width: 850px) {
            width: calc(100vw - 11rem);
        }

        &__parameter {
            width: 100%;
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;
            padding: 1rem 2.25rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: .6rem;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }

            &:hover>span {
                opacity: 0.8;
            }
        }
    }

    &__content {
        z-index: 10000;
        @include abs-center;
        width: 75rem;
        height: 80rem;
        background-color: #151414;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.37);
        border-radius: 15px;
        transition: all .2s;


        @media only screen and (min-width: 850px) and (max-height: 1100px) {
            transform: translate(-50%, -50%) scale(0.9);
        }

        @media only screen and (min-width: 850px) and (max-height: 1000px) {
            transform: translate(-50%, -50%) scale(0.8);
        }

        @media only screen and (min-width: 850px) and (max-height: 900px) {
            transform: translate(-50%, -50%) scale(0.7);
        }

        @media only screen and (max-width: 850px) {
            // width: calc(100vw - 6rem);
            // height: calc(100vh - 15rem);
            // width: 70rem;
            @include width-restriction;
            height: 80vh;
            max-height: 800px;
            min-height: 450px;
        }

        &__wrapper {
            padding: 5.15rem 19.35rem 6.9rem 6.45rem;
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 850px) {
                width: 100%;
                height: 100%;
                padding: 4rem 2.5rem;

            }
        }

        &__descr {
            font-size: 1.55rem;
            line-height: 140%;
            color: var(--color-white);
            opacity: 0.8;

            @media only screen and (max-width: 850px) {
                font-size: 13px !important;
            }
        }

        &__title {
            font-size: 8.25rem;
            line-height: 140%;
            color: var(--color-white);
        }

        &__info {
            margin-top: 2.6rem;
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;
            width: 49rem;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }

            &.first {
                margin-top: 1.1rem;
            }
        }

        &__input,
        &__stream-button {
            margin-top: 1.3rem;
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;
            padding: 1.65rem 2.6rem;
            background-color: #2E2E2E;
            border-radius: 15px;
            color: #FFF;

            &::placeholder {
                opacity: 0.6;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        &__stream-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            &__box {
                width: 100%;
                position: relative;
            }
        }

        &__button {
            align-self: flex-start;
            font-weight: 500;
            margin-top: 3.45rem;
            background-color: rgba(144, 55, 214, 0.2);
            border-radius: 5px;
            padding: 1rem 4.9rem;
            font-size: 1.71rem;
            line-height: 112%;
            letter-spacing: 0.025em;
            border: 1px solid rgba(144, 55, 214, 1);

            &:hover {
                opacity: 0.8;
            }

            @media only screen and (max-width: 850px) {
                margin-top: auto;
                width: 100%;
                font-size: 15px !important;
            }
        }
    }
}
</style>