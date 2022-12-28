<script setup lang="ts">
import { ref } from 'vue';
import { useSlideFunctionsStore } from '@/stores/slideFunctions';
import MyContentHeader from '@/components/Singular/NFT/MyContentHeader.vue';
import NFTInfoMobile from '@/components/Reusable/NFT/NFTInfoMobile.vue';
import ToggleInfo from '@/components/Reusable/NFT/ToggleInfo.vue';
import CharacteristicCard from '@/components/Reusable/NFT/CharacteristicCard.vue';
import OffersMobile from '@/components/Reusable/NFT/OffersMobile.vue';
import OriginMobile from '@/components/Reusable/NFT/OriginMobile.vue';
import NFTInfoDesktop from '@/components/Reusable/NFT/NFTInfoDesktop.vue';
import Details from '@/components/Reusable/NFT/Details.vue';
import NFTPriceCard from '@/components/Singular/NFT/NFTPriceCard.vue';
import BaseButton from '@/components/Reusable/NFT/ButtonBase.vue';
import Table from '@/components/Reusable/NFT/Table.vue';
import SuggestPrice from '@/components/Singular/NFT/SuggestPrice.vue';
import AppFooter from '@/components/Singular/App/Footer.vue';

const slideFunctionsStore = useSlideFunctionsStore();

const headersOffers = ['From', 'Validity period', 'Offer price'];
const valuesOffers = [
    ['Gohar', 'In 6 Days', '1.12 BUSD ≈ ₽ 67.03'],
    ['Gohar', 'In 6 Days', '1.12 BUSD ≈ ₽ 67.03'],
    ['Gohar', 'In 6 Days', '1.12 BUSD ≈ ₽ 67.03'],
];

const headersOrigin = ['Name', 'Action', 'Offer price', 'Time'];
const valuesOrigin = [
    ['surfside', 'Purchased', '1.12 BUSD ≈ ₽ 67.03', '2022-09-12 14:31:05'],
    ['surfside', 'Purchased', '1.12 BUSD ≈ ₽ 67.03', '2022-09-12 14:31:05'],
    ['surfside', 'Purchased', '1.12 BUSD ≈ ₽ 67.03', '2022-09-12 14:31:05'],
]

const isSuggestPriceOpen = ref(false);

const bet = () => {
    isSuggestPriceOpen.value = true;
};

const closeBet = () => {
    isSuggestPriceOpen.value = false;
};

// TOGGLE EVENT
const toggleEvent = (event: Event): void => {
    const target = event.target as HTMLElement;
    const parent = target?.closest('.toggle-container');
    const titleContainer = target?.closest('.title-container');
    const descriptionContainer = parent?.querySelector('.description-responsive-container') as HTMLElement;

    if (titleContainer && parent && descriptionContainer && !parent.classList.contains('animating')) {
        const arrow = parent?.querySelector('.arrow');

        let timeoutTime = 700;

        slideFunctionsStore.slideToggle(descriptionContainer, 700);
        
        if (arrow){
            arrow.classList.toggle('arrow-responsive-active');
        }

        parent.classList.add('animating');

        setTimeout(() => {
            parent.classList.remove('animating');
        }, timeoutTime);
    }
};
</script>

<template>
    <div class="page nft-my-market">
        <div @click="toggleEvent" class="inner-container">
            <section class="mobile">
                <MyContentHeader class="nft-my-market__header"/>
                <NFTInfoMobile class="nft-my-market__card"/>
                <button class="nft-my-market__bet" @click="bet">Place a bet</button>
                <!-- <ToggleInfo class="nft-my-market__characteristic" title="Characteristic" :height="350" >
                    <div class="nft-my-market__characteristic-content">
                        <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                        <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                        <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                        <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                    </div>
                </ToggleInfo> -->
                <div class="toggle-container nft-my-market__characteristic">
                    <div class="title-container">
                        <h3 class="title">Characteristic</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-responsive-container">
                        <div class="nft-my-market__characteristic-content">
                            <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                            <CharacteristicCard name="powerSpeed" :value="8" :percent="88.65"/>
                            <CharacteristicCard name="powerMax" :value="8" :percent="27.22"/>
                            <CharacteristicCard name="Atk" :value="8" :percent="15.84"/>
                        </div>
                    </div>
                </div>
                <!-- <ToggleInfo class="nft-my-market__description" title="Description" :height="88">
                    <h1 class="nft-my-market__description-content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h1>
                </ToggleInfo> -->
                <div class="toggle-container nft-my-market__description">
                    <div class="title-container">
                        <h3 class="title">Description</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-responsive-container">
                        <p class="nft-my-market__description-content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <!-- <ToggleInfo class="nft-my-market__details" title="Details" :height="300">
                    <Details />
                </ToggleInfo> -->
                <div class="toggle-container nft-my-market__details">
                    <div class="title-container">
                        <h3 class="title">Details</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-responsive-container">
                        <Details />
                    </div>
                </div>
                <!-- <ToggleInfo class="nft-my-market__offers" title="Offers" :height="350">
                    <div class="nft-my-market__offers-content">
                        <OffersMobile />
                        <OffersMobile />
                    </div>
                </ToggleInfo> -->
                <div class="toggle-container nft-my-market__offers">
                    <div class="title-container">
                        <h3 class="title">Offers</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-responsive-container">
                        <div class="nft-my-market__offers-content">
                            <OffersMobile />
                            <OffersMobile />
                        </div>
                    </div>
                </div>
                <!-- <ToggleInfo class="nft-my-market__origin" title="Origin" :height="500">
                    <div class="nft-my-market__origin-content">
                        <OriginMobile />
                        <OriginMobile />
                    </div>
                </ToggleInfo> -->
                <div class="toggle-container nft-my-market__origin">
                    <div class="title-container">
                        <h3 class="title">Origin</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-responsive-container">
                        <div class="nft-my-market__origin-content">
                            <OriginMobile />
                            <OriginMobile />
                        </div>
                    </div>
                </div>
            </section>
            <section class="nft-my-market__desktop desktop">
                <NFTInfoDesktop />
                <section class="nft-my-market__desktop-right">
                    <MyContentHeader class="nft-my-market__desktop-header"/>
                    <NFTPriceCard class="nft-my-market__price-card" />
                    <BaseButton class="nft-my-market__bet-button" @click="bet">Place a bet</BaseButton>
                    <div class="toggle-container nft-my-market__offers-table">
                        <div class="title-container">
                            <h3 class="title">Offers</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-responsive-container">
                            <Table :headers="headersOffers" :values="valuesOffers" />
                        </div>
                    </div>
                    <div class="toggle-container nft-my-market__origin-table">
                        <div class="title-container">
                            <h3 class="title">Origin</h3>
                            <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                        </div>
                        <div class="description-responsive-container">
                            <Table :headers="headersOrigin" :values="valuesOrigin" />
                        </div>
                    </div>
                    <!-- <ToggleInfo class="nft-my-market__offers-table" title="Offers" :height="180">
                        <Table :headers="headersOffers" :values="valuesOffers" />
                    </ToggleInfo> -->
                    <!-- <ToggleInfo class="nft-my-market__origin-table" title="Origin" :height="220">
                        <Table :headers="headersOrigin" :values="valuesOrigin" />
                    </ToggleInfo> -->
                </section>
            </section>
        </div>

        <Transition>
            <SuggestPrice :class="{'closed': !isSuggestPriceOpen}" @close="closeBet"/>
            <!-- <SuggestPrice v-if="isSuggestPriceOpen" @close="closeBet-->
        </Transition>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped> 
.nft-my-market {
    // background: linear-gradient(196.65deg, #350078 2.27%, #30315A 104.63%), #000000;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (max-width: 850px) {
        background-image: url('@/assets/img/nft/bgMobile.png');
    }

    @media only screen and (min-width: 850px) {
        background-image: url('@/assets/img/nft/bgNftItemDesktop.jpg');
    }

    .inner-container {
        @include width-restriction;
        position: relative;
        padding: 8rem 6.35rem 9rem;

        @media only screen and (max-width: 850px) {
            padding: 12rem 0 9rem;
        }
    }

    .toggle-container {

        .description-responsive-container {

            @media only screen and (max-width: 850px) {
                padding-top: 1rem;
            }
        }
        
        .title {
            font-weight: 500;
            font-size: 2.5rem;

            @media only screen and (max-width: 850px) {
                font-size: 31px !important;
            }
        }

        .arrow {
            width: 1.25rem;
            transform: rotate(-180deg);

            @media only screen and (max-width: 850px) {
                transform: rotate(0);
                width: 2rem;
            }
        }
    }

    &__header {
        margin-top: 12.39rem;

        @media only screen and (max-width: 850px) {
            margin-top: 0;
        }
    }
    &__card {
        margin-top: 3.38rem;
    }
    &__bet {
        margin-top: 2.81rem;
        background: #DCB45B;
        backdrop-filter: blur(4.5px);
        border-radius: 5px;
        width: 100%;
        height: 5.63rem;

        font-weight: 400;
        font-size: 2.53rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    &__characteristic {
        margin-top: 5.63rem;
    }
    &__characteristic-content {
        display: grid;
        grid-template-columns: repeat(2, 22rem);
        justify-content: center;
        justify-items: center;
        gap: 1.12rem;
    }
    &__description {
        margin-top: 3.5rem;
    }
    &__description-content {
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 140.5%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__details {
        margin-top: 3.5rem;
    }
    &__offers {
        margin-top: 3.5rem;
    }
    &__offers-content {
        display: flex;
        flex-flow: column;
        gap: 2.11rem;
    }
    &__origin {
        margin-top: 3.5rem;
    }
    &__origin-content {
        display: flex;
        flex-flow: column;
        gap: 2.11rem;
    }
    &__desktop {
        // display: flex;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2.56rem;
    }
    &__desktop-header {
        margin-top: 5.8rem;
    }
    &__price-card {
        margin-top: 2.14rem;
    }
    &__bet-button {
        margin-top: 2.14rem;
        margin-bottom: 4rem;
    }
    &__origin-table {
        margin-top: 2.7rem;
    }
}
</style>