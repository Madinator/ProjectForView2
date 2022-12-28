<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import { useSlideFunctionsStore } from '@/stores/slideFunctions';
import NFTCard from '@/components/Reusable/NFTCard.vue';
import ButtonWithImg from '@/components/Reusable/ButtonWithImg.vue';
import FilterPage from '@/components/Reusable/FilterPage.vue';
import SortPage from '@/components/Reusable/SortPage.vue';
import ToggleInfo from '@/components/Reusable/NFT/ToggleInfo.vue';
import SortDropdown from '@/components/Singular/NFT/SortDropdown.vue';

const slideFunctionsStore = useSlideFunctionsStore();

const isFilterOpen = ref(false);
const isSortOpen = ref(false);
const priceCurrencyDropdownOpenIndicator = ref(false);

const priceCurrency = ref<string>('ETH');

const openFilter = () => {
    isFilterOpen.value = true;
};
const closeFilter = () => {
    isFilterOpen.value = false;
};

const openSort = () => {
    isSortOpen.value = true;
};
const closeSort = () => {
    isSortOpen.value = false;
};

provide('priceCurrency', priceCurrency);
provide('priceCurrencyDropdownOpenIndicator', priceCurrencyDropdownOpenIndicator);

// TOGGLE EVENT
const toggleEvent = (event: Event): void => {
    const target = event.target as HTMLElement;
    const parent = target?.closest('.toggle-container');
    const titleContainer = target?.closest('.title-container');
    const descriptionContainer = parent?.querySelector('.description-container') as HTMLElement;

    if (titleContainer && parent && descriptionContainer && !parent.classList.contains('animating')) {
        const arrow = parent.querySelector('.arrow');
        const isPriceContainer = parent.classList.contains('price-toggle-container');

        let timeoutTime = 500;

        slideFunctionsStore.slideToggle(descriptionContainer, 500);

        if (arrow) {
            arrow.classList.toggle('arrow-active');
        }

        if (isPriceContainer) {
            closeDropdown();
        }

        parent.classList.add('animating');

        setTimeout(() => {
            parent.classList.remove('animating');
        }, timeoutTime);
    }
};

const closeDropdown = (): void => {
    priceCurrencyDropdownOpenIndicator.value = false;
}

// TOGGLE PRICE CURRENCY DROPDOWN
const togglePriceCurrencyDropdown = (): void => {
    if (!priceCurrencyDropdownOpenIndicator.value) {
        priceCurrencyDropdownOpenIndicator.value = true;
    } else {
        closeDropdown();
    }
};

// SELECR DROPDOWN OPTION
const selectOption = (event: Event): void => {
    const target = event.target as HTMLElement;
    if (!target?.classList.contains('item') || !target.textContent) return;
    priceCurrency.value = target.textContent;
    closeDropdown();
}

onMounted(() => {

    window.addEventListener('click', (event: Event) => {
        if (priceCurrencyDropdownOpenIndicator.value) {
            const target = event?.target as HTMLElement;
            const isClickInsideElement = target.closest('.price-dropdown-container');

            if (!isClickInsideElement) {
                closeDropdown();
            }
        }
    })
})
</script>

<template>
    <div class="page nft-market">
        <div @click="toggleEvent" class="inner-container">
            <div class="nft-market__header">
                <h1 class="nft-market__title">NFT Market</h1>
                <SortDropdown />
            </div>
            <div class="nft-market__actions mobile">
                <ButtonWithImg name="Filters" image="/svg/filter.svg" @click="openFilter"/>
                <ButtonWithImg name="Sort" image="/svg/filter.svg" @click="openSort"/>
            </div>
            <div class="nft-market__main">
                <section class="nft-market__filters desktop">
                    <div class="toggle-container">
                        <div class="title-container">
                            <h3 class="title">Status</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-container">
                            <ul class="list">
                                <li class="item">
                                    <button class="parameter">
                                        <span>Buy Now</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                                <li class="item">
                                    <button class="parameter">
                                        <span>On Auction</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="toggle-container price-toggle-container">
                        <div class="title-container">
                            <h3 class="title">Price</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-container">
                            <form action="#" class="price-form">
                                <div class="top">
                                    <div class="price-dropdown-container">
                                        <div @click="togglePriceCurrencyDropdown" class="input-group">
                                            <input type="text" placeholder="ETH" v-model="priceCurrency" readonly>
                                            <img :class="{ 'arrow-active': priceCurrencyDropdownOpenIndicator }"
                                                src="@/assets/svg/Reusable/arrow4.svg" alt="" class="arrow">
                                        </div>
                                        <div :class="{ 'closed': !priceCurrencyDropdownOpenIndicator }"
                                            class="dropdown price-currency-dropdown">
                                            <ul @click="selectOption" class="list">
                                                <li class="item">ETH</li>
                                                <li class="item">BTC</li>
                                                <li class="item">BNB</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="input-group">
                                        <input type="number" placeholder="MIN">
                                    </div>
                                    <span class="to">to</span>
                                    <div class="input-group">
                                        <input type="number" placeholder="MAX">
                                    </div>
                                </div>
                                <button @click.prevent class="btn-purple">Apply</button>
                            </form>
                        </div>
                    </div>
                    <div class="toggle-container">
                        <div class="title-container">
                            <h3 class="title">Quantuty</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-container">
                            <ul class="list">
                                <li class="item">
                                    <button class="parameter">
                                        <span>Buy Now</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                                <li class="item">
                                    <button class="parameter">
                                        <span>On Auction</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                                <li class="item">
                                    <button class="parameter">
                                        <span>Bundles</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="toggle-container">
                        <div class="title-container">
                            <h3 class="title">Collections</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-container">
                            <div class="input-group">
                                <input type="text" class="search-input" placeholder="Filter">
                                <img src="@/assets/svg/Reusable/search.svg" alt="" class="search-icon">
                            </div>
                            <ul class="filter-options">
                                <li class="item">
                                    <div class="left">
                                        <img src="@/assets/img/nft/nftInfoMobile.png" alt="" class="image">
                                        <span class="name">CryptoPins</span>
                                    </div>
                                    <div class="right">
                                        <span class="amount">10 000</span>
                                        <div class="circle-container"></div>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="left">
                                        <img src="@/assets/img/nft/nftInfoMobile.png" alt="" class="image">
                                        <span class="name">CryptoPins</span>
                                    </div>
                                    <div class="right">
                                        <span class="amount">10 000</span>
                                        <div class="circle-container"></div>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="left">
                                        <img src="@/assets/img/nft/nftInfoMobile.png" alt="" class="image">
                                        <span class="name">CryptoPins</span>
                                    </div>
                                    <div class="right">
                                        <span class="amount">10 000</span>
                                        <div class="circle-container"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="toggle-container">
                        <div class="title-container">
                            <h3 class="title">Chains</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-container">
                            <ul class="list">
                                <li class="item">
                                    <button class="parameter">
                                        <span>ETH</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                                <li class="item">
                                    <button class="parameter">
                                        <span>WETH</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="toggle-container">
                        <div class="title-container">
                            <h3 class="title">Category</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-container">
                            <ul class="list">
                                <li class="item">
                                    <button class="parameter">
                                        <span>ETH</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                                <li class="item">
                                    <button class="parameter">
                                        <span>WETH</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="toggle-container">
                        <div class="title-container">
                            <h3 class="title">Currency</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-container">
                            <ul class="list">
                                <li class="item">
                                    <button class="parameter">
                                        <span>ETH</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                                <li class="item">
                                    <button class="parameter">
                                        <span>WETH</span>
                                        <div class="circle-container"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="nft-market__list">
                    <NFTCard v-for="i in 6" />
                </section>
            </div>
            <Transition>
                <FilterPage v-if="isFilterOpen" @togglePriceCurrencyDropdown="togglePriceCurrencyDropdown"
                    @selectOption="selectOption" @close="closeFilter" />
            </Transition>
            <Transition>
                <SortPage v-if="isSortOpen" class="nft-market__sort" @close="closeSort" />
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nft-market {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 850px) {
        background-image: url('@/assets/img/nft/bgMobile.png');
    }

    @media only screen and (min-width: 850px) {
        background-image: url('@/assets/img/nft/bgDesktop.jpg');
    }

    .price-toggle-container {
        position: relative;
        z-index: 100;
    }

    .toggle-container {
        padding: .5rem 0 1.15rem;

        .title-container {
            padding: .5rem 0;


            .title {
                font-weight: 500;
                font-size: 2.2rem !important;
                transition: all .3s;
            }

            &:hover .title {
                opacity: .75;
            }

            .arrow {
                width: 1rem;

                @media only screen and (max-width: 850px) {
                    width: 1.5rem;
                }
            }
        }

        .description-container {
            font-weight: 500;
            background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.12) 0.24%, rgba(240, 237, 247, 0.07) 94.13%);
            backdrop-filter: blur(20px);
            border-radius: 1rem;
            padding: 2.25rem 2.35rem;

            .list {

                .item {

                    &:not(:last-of-type) {
                        margin-bottom: 1.2rem;
                    }

                    .parameter {
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;

                        &:hover span {
                            opacity: .7;
                        }

                        span {
                            transition: all .3s;
                        }

                        .circle-container {
                            border-radius: 40rem;
                            width: 1.75rem;
                            height: 1.75rem;
                            border: 2px solid var(--color-white);
                            transition: all .2s;
                        }

                        &:hover .circle-container {
                            background-color: var(--color-white);
                        }
                    }
                }
            }

            .input-group {
                position: relative;
                width: 100%;
                margin-bottom: 1.5rem;

                input {
                    width: 100%;
                    padding: 1rem 1rem 1rem 5rem;
                    background-image: linear-gradient(90.33deg, rgba(255, 255, 255, 0.12) 0.24%, rgba(240, 237, 247, 0.07) 94.13%);
                    backdrop-filter: blur(30px);
                    border: 1px solid rgba(255, 255, 255, .2);
                    border-radius: 1.1rem;

                    &::placeholder {
                        font-weight: 600;
                        color: var(--color-white);
                    }
                }

                .search-icon {
                    position: absolute;
                    top: 50%;
                    left: 1.8rem;
                    transform: translateY(-50%);
                    width: 1.8rem;
                }
            }

            .price-form {

                .top {
                    // display: flex;
                    display: grid;
                    grid-template-columns: 1.3fr 1fr min-content 1fr;
                    align-items: center;
                    gap: 1.25rem;
                    margin-bottom: 1.25rem;
                }

                .input-group {
                    // width: 8rem;
                    margin-bottom: 0;

                    input {
                        padding: 1rem 1.25rem;
                        // background-color: var(--color-purple-light);
                        // background-image: none;
                        // backdrop-filter: none;

                        &::placeholder {
                            opacity: .7;
                            text-align: center;
                        }
                    }
                }

                .price-dropdown-container {
                    // width: 9rem;
                    position: relative;

                    .input-group {
                        cursor: pointer;
                        width: 100%;

                        input {
                            font-weight: 600;
                            // padding: 1rem 4rem 1rem 1.5rem;
                            cursor: pointer;
                        }

                        .arrow {
                            position: absolute;
                            top: 50%;
                            right: 1.2rem;
                            transform: translateY(-50%);
                            width: 1.15rem;
                        }

                        .arrow-active {
                            transform: translateY(-50%) rotate(-180deg) !important;
                        }
                    }

                    .price-currency-dropdown {
                        position: absolute;
                        top: 110%;
                        left: 0;
                        z-index: 1000;
                        width: 100%;
                        background-color: black;
                        border-radius: 1.1rem;
                        border: 1px solid rgba(255, 255, 255, .2);
                        background-color: var(--color-purple-light);
                        padding: 1rem 0;

                        .list {

                            .item {
                                cursor: pointer;
                                padding: .75rem 1rem;
                                margin: 0;
                                transition: all .3s;
                                border-radius: .7rem;

                                &:hover {
                                    background-color: lighten(#B960FF, 7%);
                                }
                            }
                        }
                    }
                }

                .btn-purple {
                    width: 100%;
                    border: 1px solid rgba(255, 255, 255, .2);
                }
            }

            .filter-options {

                .item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 1.1rem;
                    padding: .75rem;
                    cursor: pointer;
                    transition: all .2s;

                    &:hover {
                        background-color: rgba(255, 255, 255, .18);
                    }

                    &:hover .circle-container {
                        background-color: var(--color-white);
                    }

                    .left {
                        display: flex;
                        align-items: center;

                        .image {
                            width: 2.9rem;
                            height: 2.9rem;
                            margin-right: 1.25rem;
                            border-radius: .2rem;
                        }
                    }

                    .right {
                        display: flex;
                        align-items: center;

                        .amount {
                            color: #85888A;
                            display: inline-block;
                            margin-right: .9rem;
                        }

                        .circle-container {
                            border-radius: 40rem;
                            width: 1.75rem;
                            height: 1.75rem;
                            border: 2px solid var(--color-white);
                            transition: all .2s;
                        }
                    }
                }
            }
        }
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .inner-container {
        @include width-restriction;
        padding: 12rem 6.35rem 5rem;

        @media only screen and (max-width: 850px) {
            padding: 11rem 0 5rem;
        }
    }

    &__title {
        font-weight: 700;
        font-size: 4.5rem;
        line-height: 5.63rem;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__actions {
        margin-top: 2.11rem;

        display: flex;
        flex-flow: row;
        gap: 1.12rem;
    }

    &__list {
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2.5rem;
        gap: 1.12rem;

        @media (min-width: 850px) {
            gap: 2.56rem;
        }

        @media only screen and (max-width: 1050px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__main {
        margin-top: 2.81rem;
        display: flex;
        // flex-flow: row;
        align-items: flex-start;
        gap: 4.28rem;

        @media (min-width: 850px) {
            margin-top: 6rem;
        }
    }

    &__filters {
        width: 23%;
        min-width: 30rem;

        @media only screen and (max-width: 1050px) {
            min-width: 35rem;
        }
    }

    &__sort {
        background: url('@/assets/img/nft/bgMobile.png');
        background-size: cover;
        background-position: center;
    }
}
</style>