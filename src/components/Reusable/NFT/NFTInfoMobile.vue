<template>
    <div class="nft-info-mobile mobile">
        <img class="nft-info-mobile__img" src="@/assets/img/nft/nftInfoMobile.png" alt="" />
        <div class="nft-info-mobile__info">
            <span class="nft-info-mobile__price-title">Now price</span>
            <div class="nft-info-mobile__prices">
                <span class="nft-info-mobile__price-eth">0,05 ETH</span>
                <span class="nft-info-mobile__price-dollars">($87,55)</span>
            </div>
            <span class="nft-info-mobile__auction-title">The auction will end</span>
            <span class="nft-info-mobile__auction-exp">
                2 <span class="small">day</span> 21 <span class="small">hours</span> 57 <span class="small">min</span>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nft-info-mobile {
    // padding: 0 3.1rem 4.1rem;
    width: 100%;
    border: 2px solid var(--color-white);
    border-radius: 21px;

    &__img {
        width: 100%;
        border-radius: 21px 21px 0 0;
    }

    &__info {
        padding: 3.38rem 3.1rem 4.1rem;
    }

    &__price-title {
        font-weight: 400;
        font-size: 2rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__prices {
        margin-top: 0.7rem;
        color: var(--color-yellow);
        font-weight: 700;

        display: flex;
        flex-flow: row;
        gap: 1.41rem;
        align-items: center;

    }

    &__price-eth {
        font-size: 4.2rem !important;
        line-height: 5.63rem;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__price-dollars {
        font-size: 2.25rem !important;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__auction-title {
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 85%;
        margin-top: 2.81rem;
        display: block;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__auction-exp {
        font-weight: 700;
        font-size: 4.2rem !important;
        line-height: 5.63rem;
        color: var(--color-yellow);
        margin-top: 0.7rem;
        display: block;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }

        .small {
            font-size: 2.2rem !important;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }
    }
}
</style>