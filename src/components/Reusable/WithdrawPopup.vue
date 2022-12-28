<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// GET HANDLER FROM PARENT
const props = defineProps(["handler"]);

// STREAM TYPE DATA 
const typeChoosen = ref('USDT');

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
                <span class="popup__content__title">Withdraw</span>
                <div class="popup__content__user">
                    <img src="/img/user/avatar.png" alt="profile-pic" class="popup__content__user__img">
                    <span class="popup__content__user__text">$ 1000.09</span>
                </div>
                <span class="popup__content__info first">Currency</span>
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
                                <button @click="handleChangeType('USDT')" class="popup__sort-dropdown__parameter">
                                    <span>USDT</span>
                                    <div class="popup__sort-dropdown__circle-container"></div>
                                </button>
                            </li>
                            <li class="popup__sort-dropdown__item">
                                <button @click="handleChangeType('BTC')" class="popup__sort-dropdown__parameter">
                                    <span>BTC</span>
                                    <div class="popup__sort-dropdown__circle-container"></div>
                                </button>
                            </li>
                            <li class="popup__sort-dropdown__item">
                                <button @click="handleChangeType('ETH')" class="popup__sort-dropdown__parameter">
                                    <span>ETH</span>
                                    <div class="popup__sort-dropdown__circle-container"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <span class="popup__content__info">Receiving Wallet</span>
                <input placeholder="Ucvbbd567Fvhn0vhjks" type="text" class="popup__content__input">
                <span class="popup__content__info">Amount</span>
                <div class="popup__content__last-input ">
                    <input placeholder="100" type="text" class="popup__content__input">
                    <button class="popup__content__input__max">MAX</button>
                </div>
                <div class="popup__content__text">
                    <span class="popup__content__text__grey">Network fee:</span>
                    <span class="popup__content__text__white">&nbsp;0,07 USDT</span>
                </div>
                <div class="popup__content__text second">
                    <span class="popup__content__text__grey">Total:</span>
                    <span class="popup__content__text__yellow">&nbsp;100,07 USDT</span>
                </div>
                <button class="popup__content__button">Confirm</button>
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
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        cursor: pointer;
        transition: all .3s;
    }

    &__sort-dropdown {
        position: absolute;
        top: 110%;
        left: 0;
        z-index: 1000;
        border: none;
        background: #2E2E2E;
        border-radius: 15px;
        width: 100%;
        padding: 1.5rem 0;
        transition: all .3s;

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

            &:hover>span {
                opacity: 0.8;
            }
        }
    }

    &__content {
        z-index: 10000;
        @include abs-center;
        width: 43rem;
        height: 66.6rem;
        background: #292524;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.37);
        border-radius: 15px;
        transition: all .3s;


        @media only screen and (min-width: 850px) and (max-height: 1100px) {
            transform: translate(-50%, -50%) scale(1);
        }

        @media only screen and (min-width: 850px) and (max-height: 1000px) {
            transform: translate(-50%, -50%) scale(0.9);
        }

        @media only screen and (min-width: 850px) and (max-height: 900px) {
            transform: translate(-50%, -50%) scale(0.85);
        }

        @media only screen and (max-width: 850px) {
            @include width-restriction;
            height: 70vh;
            max-height: 800px;
            min-height: 450px;
        }

        &__text {
            display: flex;
            margin-top: 2.6rem;

            &.second {
                margin-top: 2rem;
            }

            &__grey,
            &__yellow,
            &__white {
                font-size: 1.54rem;
                line-height: 85%;
                color: rgba(255, 255, 255, 0.7);
            }

            &__yellow {
                color: rgba(220, 180, 91, 1);
            }

            &__white {
                color: rgba(255, 255, 255, 1);
            }

        }

        &__user {
            display: flex;
            align-items: center;
            align-self: flex-start;
            gap: 1.3rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            height: 3.43rem;
            margin: 1.3rem 0 1.5rem;

            &__img {
                border-radius: 100%;
                width: 3.43rem;
                height: 3.43rem;
            }

            &__text {
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 1.65rem;
                margin-right: 1rem;
            }
        }

        &__wrapper {
            padding: 4.3rem 4.3rem 3rem;
            display: flex;
            flex-direction: column;
            height: 100%;

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
        }

        &__title {
            font-weight: 700;
            font-size: 4.15rem;
            line-height: 5.1rem;
        }

        &__info {
            margin-top: 2.6rem;
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;
            width: 49rem;

            &.first {
                margin-top: 1.1rem;
            }
        }

        &__last-input {
            width: 100%;
            position: relative;
        }

        &__input,
        &__stream-button {
            margin-top: 1.3rem;
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;
            padding: 1.65rem 2.6rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            color: #FFF;
            width: 100%;

            &::placeholder {
                opacity: 0.6;
            }

            &__max {
                position: absolute;
                font-weight: 600;
                font-size: 1.55rem;
                line-height: 85%;
                color: #B960FF;
                right: 1.71rem;
                top: 3.5rem;
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
            width: 100%;
            font-weight: 500;
            margin-top: auto;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            padding: 1rem 4.9rem;
            font-size: 1.71rem;
            line-height: 112%;
            letter-spacing: 0.025em;
            border: 1px solid rgba(255, 255, 255, 1);

            &:hover {
                opacity: 0.8;
            }

            @media only screen and (max-width: 850px) {
                margin-top: auto;
                width: 100%;
            }
        }
    }
}
</style>