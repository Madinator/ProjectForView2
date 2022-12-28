<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['handler']);

// SORT TYPE DATA 
const typeChoosen = ref('BNB');
const imgChoosen = ref("/svg/Currency/BNB.svg");

const handleChangeType = (type: string) => {
    typeChoosen.value = type;
    imgChoosen.value = "/svg/Currency/" + type + ".svg";
    props.handler(type);
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
        const isClickInsideElement = target.closest('.nft-offer-select__sort');

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
    <div class="nft-offer-select">
        <div class="nft-offer-select__sort">
            <button @click="toggleDropdown" class="nft-offer-select__dropdown">
                <img class="nft-offer-select__img" :src="imgChoosen" alt="" />
                <span class="nft-offer-select__crypto">{{ typeChoosen }}</span>
                <img class="arrow nft-offer-select__arrow" :class="{ 'arrow-active-2': sortDropdownOpenIndicator }"
                    src="@/assets/svg/arrowWhite.svg" alt="" />
            </button>
            <div :class="{ 'closed': !sortDropdownOpenIndicator }"
                class="dropdown nft-offer-select__sort__content__sort-dropdown">
                <ul @click="closeDropdown" class="nft-offer-select__sort__content__sort-dropdown__list">
                    <li class="nft-offer-select__sort__content__sort-dropdown__item">
                        <button @click="handleChangeType('BNB')"
                            class="nft-offer-select__sort__content__sort-dropdown__parameter">
                            <img src="/svg/Currency/BNB.svg" alt="">
                            <span>BNB</span>
                        </button>
                    </li>
                    <li class="nft-offer-select__sort__content__sort-dropdown__item">
                        <button @click="handleChangeType('ETH')"
                            class="nft-offer-select__sort__content__sort-dropdown__parameter">
                            <img src="/svg/Currency/ETH.svg" alt="">
                            <span>ETH</span>
                        </button>
                    </li>
                    <li class="nft-offer-select__sort__content__sort-dropdown__item">
                        <button @click="handleChangeType('TON')"
                            class="nft-offer-select__sort__content__sort-dropdown__parameter">
                            <img src="/svg/Currency/TON.svg" alt="">
                            <span>TON</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nft-offer-select__line"></div>
        <input class="nft-offer-select__value" placeholder="crypto" type="number" />
        <span class="nft-offer-select__currency desktop">≈ ₽ 18,681,287,666,666,663.00</span>
    </div>
</template>

<style lang="scss" scoped>
.nft-offer-select {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1rem 2.1rem;
    display: flex;
    flex-flow: row;
    align-items: center;

    &__sort {
        position: relative;

        @media only screen and (max-width: 850px) {
            width: auto;
        }

        &__button {
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
            }

            &__img {
                height: 2.06rem;
                width: 2.06rem;
            }
        }

        &__content {
            &__sort-dropdown {
                position: absolute;
                top: 250%;
                left: -20%;
                width: 137%;
                z-index: 1000;
                border: none;
                background: #3A2D5E;
                border: 1px solid rgba(255, 255, 255, 0.13);
                border-radius: 5px;
                padding: 1.71rem;
                transition: all .3s;

                &__list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }

                &__parameter {
                    width: 100%;
                    font-weight: 600;
                    font-size: 1.71rem;
                    line-height: 85%;
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                    gap: 0.9rem;
                    align-items: center;
                    border-radius: .6rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }

                    &:hover>span {
                        opacity: 0.7;
                    }

                    &>span {
                        font-weight: 500;
                        font-size: 1.71rem;
                        line-height: 2.06rem;
                        text-align: start;
                        transition: all .3s;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }
                    }

                    &>img {
                        height: 1.71rem;
                        width: 1.71rem;
                    }
                }
            }
        }
    }

    &__dropdown {
        display: flex;
        align-items: center;
    }

    &__img {
        width: 1.71rem;
        height: 1.71rem;
    }

    &__crypto {
        display: block;
        margin-left: 0.85rem;

        font-weight: 600;
        font-size: 1.37rem;
        line-height: 85%;

        margin-top: 2px;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__arrow {
        width: 1.72rem;
        height: 1.48rem;
        margin-left: 1.28rem;
        transform: rotate(180deg);
    }

    &__line {
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        height: 2.82rem;
        margin-left: 1.54rem;
    }

    &__value {
        margin-left: 1.33rem;

        font-weight: 600;
        font-size: 1.37rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__currency {
        font-weight: 600;
        font-size: 1.37rem;
        line-height: 85%;
        white-space: nowrap;

        opacity: 0.6;
    }
}
</style>