<script setup lang="ts">

</script>

<template>
    <router-link to="/NFTItem" class="game-nft-card">
        <img class="game-nft-card__img" src="@/assets/img/nft/nftInfoMobile.png" alt="" />
        <div class="game-nft-card__content">
            <h1 class="game-nft-card__title">My collection</h1>
            <h1 class="game-nft-card__message">@We got annonymous badasss here</h1>
            <div class="game-nft-card__bottom-info">
                <span class="game-nft-card__price-title">Price</span>
                <div>
                    <span class="game-nft-card__price">0.01 USDT</span>
                    <span class="game-nft-card__price-round">≈ 0.01 USDT</span>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.game-nft-card {
    // background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
    // backdrop-filter: blur(4.5px);
    // background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.08) 0.3%, rgba(240, 237, 247, 0.06) 94.13%);
    background-image: var(--gradient-purple);
    border-radius: 15px;
    padding-top: 1.41rem;
    // width: 22.5rem;
    border: 1px solid rgba(255, 255, 255, .1);

    @media only screen and (min-width: 850px) {
        &:hover {
            transform: scale(1.02);
        }
    }

    // @media only screen and  (min-width: 850px) {
    //     width: 36rem
    // }
    &__img {
        width: 100%;
    }

    &__content {
        padding: 1.41rem 2.11rem 2.11rem
    }

    &__title {
        font-weight: 600;
        font-size: 2.74rem;
        line-height: 3.1rem;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    &__message {
        font-weight: 600;
        font-size: 1.54rem;
        line-height: 2.11rem;
        margin-top: 0.7rem;
        color: #DCB45B;

        @media only screen and (min-width: 850px) {}

        @media only screen and (max-width: 850px) {
            font-size: 11px !important;
            margin-top: 0;
        }
    }

    &__bottom-info {
        display: flex;
        flex-flow: row wrap;
        align-items: baseline;
        gap: 1.41rem;
        justify-content: space-between;

        @media only screen and (min-width: 850px) {
            flex-flow: row;
            justify-content: space-between;
            margin-top: 3rem;
        }

        @media only screen and (max-width: 850px) {
            flex-direction: column;
            gap: 1px;
        }
    }

    &__price-title {
        display: block;
        font-weight: 600;
        font-size: 1.97rem;
        line-height: 2.39rem;
        color: var(--color-grey);

        margin-top: 2.11rem;

        @media only screen and (max-width: 850px) {
            font-size: 12px !important;
        }
    }

    &__price {
        font-weight: 600;
        font-size: 2.25rem;
        line-height: 2.81rem;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__price-round {
        display: block;
        font-weight: 600;
        font-size: 1.97rem;
        line-height: 2.39rem;
        color: var(--color-grey);

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }
}
</style>