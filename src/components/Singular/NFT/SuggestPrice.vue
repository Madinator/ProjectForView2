
<script setup lang="ts">
import Modal from '@/components/Reusable/Modal.vue';
import OfferSelect from '@/components/Reusable/NFT/OfferSelect.vue';
import OfferDate from '@/components/Reusable/NFT/OfferDate.vue';
import { ref } from 'vue';

const emit = defineEmits(['close'])

const close = () => {
    emit('close');
};

const closeOnWrapper = (event: Event) => {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('modal-wrapper')) return;
    close();
};

const data = ref([
    {
        name: 'BNB',
        img: '/svg/Currency/BNB.svg',
        text: '125 BUSD',
        count: ' ≈ ₽ 9,031.79'
    },
    {
        name: 'ETH',
        img: '/svg/Currency/ETH.svg',
        text: '213 ETH',
        count: ' ≈ ₽ 1,331.74'
    },
    {
        name: 'TON',
        img: '/svg/Currency/TON.svg',
        text: '54 TON',
        count: ' ≈ ₽ 1,211.79'
    },
]);

const currentData = ref({
    name: 'BNB',
    img: '/svg/Currency/BNB.svg',
    text: '125 BUSD',
    count: ' ≈ ₽ 9,031.79'
})

const handleChangeCurrency = (type: string) => {
    data.value.forEach(item => {
        if (item.name === type) {
            currentData.value = item;
        }
    });
}

</script>

<template>
    <!-- <Modal> -->
    <div @click="closeOnWrapper" class="modal-wrapper">
        <div class="nft-bet-price">
            <div class="inner-container">
                <h2 class="nft-bet-price__name">Suggest a price</h2>
                <div class="nft-bet-price__converter">
                    <img class="nft-bet-price__converter-img" :src="currentData.img" alt="crypto" />
                    <span class="nft-bet-price__converter-crypto">{{ currentData.text }}&nbsp; </span>
                    <span class="nft-bet-price__converter-money">{{ currentData.count }}</span>
                </div>
                <div class="nft-bet-price__offer">
                    <div class="nft-bet-price__offer-header">
                        <span class="nft-bet-price__offer-title">Offer</span>
                        <span class="nft-bet-price__offer-available mobile">Available balance: 0 BNB</span>
                    </div>
                    <OfferSelect class="nft-bet-price__offer-select" :handler="handleChangeCurrency" />
                    <span class="nft-bet-price__currency mobile">≈ ₽ 18,681,287,666,666,663.00</span>
                    <span class="nft-bet-price__offer-available desktop">Available balance: 0 BNB</span>
                </div>
                <div class="nft-bet-price__offer-exp">
                    <span class="nft-bet-price__offer-exp-title">Offers expire</span>
                    <OfferDate class="nft-bet-price__offer-exp-datepicker" />
                    <div class="nft-bet-price__offer-exp-notification">
                        <img src="@/assets/svg/nft/!.svg" alt="" />
                        <span class="nft-bet-price__offer-exp-notification-text">The corresponding amount in
                            cryptocurrency will be frozen and then automatically unlocked when your offer is cancelled
                            or expires.</span>
                    </div>
                </div>
                <div class="nft-bet-price__actions">
                    <button class="nft-bet-price__button nft-bet-price__cancel" @click="close">Cancel</button>
                    <button class="nft-bet-price__button nft-bet-price__confirm" @click="close">Confirm</button>
                </div>
            </div>
        </div>
    </div>
    <!-- </Modal> -->
</template>

<style lang="scss" scoped>
.nft-bet-price {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100000;

    // background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
    // backdrop-filter: blur(28px);
    background-color: #25164D;

    // background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.15) 0.24%, rgba(240, 237, 247, 0.1) 94.13%);
    // backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, .2);

    padding: 3.52rem 2.81rem 4.22rem;

    min-height: 620px;
    max-height: 850px;

    @media only screen and (max-width: 850px) {
        width: 60rem;
        padding: 3.5rem 2.8rem 3.5rem;
    }

    @media only screen and (max-width: 850px) and (max-height: 700px) {
        min-height: 540px;
    }

    @media only screen and (max-width: 850px) and (max-height: 600px) {
        min-height: 470px;
    }

    @media only screen and (max-height: 520px) {
        min-height: 440px;
    }

    @media only screen and (max-width: 500px) {
        width: 90%;
    }

    @media only screen and (min-width: 850px) and (max-height: 500px) {
        min-height: 400px;
    }

    @media only screen and (min-width: 1650px) {
        height: 80vh;
        min-height: 62rem;
    }

    @media (min-width: 850px) {
        padding: 4rem 3.5rem;
    }

    .inner-container {
        width: 100%;
        height: 100%;
        min-height: 550px;
        position: relative;

        @media only screen and (max-width: 850px) {
            min-height: 570px;
        }

        @media only screen and (max-width: 850px) and (max-height: 700px) {
            min-height: 520px;
        }

        @media only screen and (max-width: 850px) and (max-height: 600px) {
            min-height: 450px;
        }

        @media only screen and (max-height: 520px) {
            min-height: 420px;
        }

        @media only screen and (min-width: 850px) and (max-height: 500px) {
            min-height: 370px;
        }
    }

    &__name {
        font-weight: 600;
        font-size: 4.11rem;
        line-height: 5.05rem;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__converter {
        display: flex;
        flex-flow: row;
        align-items: center;
        margin-top: 2.14rem;
    }

    &__converter-img {
        width: 3.25rem;
    }

    &__converter-crypto {
        font-weight: 700;
        font-size: 1.71rem;
        line-height: 2.14rem;

        display: block;
        margin-left: 1.28rem;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__converter-money {
        font-weight: 700;
        font-size: 1.71rem;
        line-height: 2.14rem;
        opacity: 0.6;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__offer {
        margin-top: 4rem;

        @media only screen and (max-width: 850px) and (max-height: 520px) {
            margin-top: 2rem;
        }
    }

    &__offer-header {
        display: flex;
        flex-flow: row;
        align-items: baseline;
        gap: 1.41rem;
    }

    &__offer-title {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__offer-select {
        margin-top: 1.2rem;
    }

    &__offer-available {
        margin-top: 1.88rem;
        display: block;
        text-align: end;

        font-weight: 600;
        font-size: 1.37rem;
        line-height: 85%;

        opacity: 0.6;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__offer-exp {
        margin-top: 2.4rem;
    }

    &__offer-exp-title {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__currency {
        margin-top: 2.11rem;
        display: inline-block;
        width: 100%;
        margin-left: auto;
        text-align: right;
        font-weight: 600;
        font-size: 1.37rem;
        line-height: 85%;
        white-space: nowrap;

        opacity: 0.6;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__offer-exp-datepicker {
        margin-top: 1rem;
    }

    &__offer-exp-notification {
        display: flex;
        flex-flow: row;
        gap: 1.28rem;
        margin-top: 2.82rem;

        width: 100%;

        align-items: flex-start;
    }

    &__offer-exp-notification-text {
        font-weight: 500;
        line-height: 140%;
        opacity: 0.6;

        display: block;

        @media (min-width: 850px) {
            width: 42rem;
        }
    }

    &__actions {
        // margin-top: 20rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-flow: column;
        gap: 1.28rem;

        @media (min-width: 850px) {
            flex-flow: row;
            gap: 1.28rem;
        }
    }

    &__button {
        width: 100%;
        font-weight: 600;
        font-size: 2.05rem;
        line-height: 85%;
        height: 4.28rem;
        border-radius: 10px;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }

        // border: 1px solid #9037D6;
        @media (min-width: 850px) {
            width: 50%;
        }
    }

    &__cancel {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);

        &:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    }

    &__confirm {
        background: #6A369D;
        border: 1px solid rgba(255, 255, 255, 0.2);

        &:hover {
            background: darken(#6A369D, 5%);
        }
    }
}
</style>