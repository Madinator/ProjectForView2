<template>
    <div class="nft-price-card">
        <div class="nft-price-card__block">
            <span class="nft-price-card__name">Now price</span>
            <div class="nft-price-card__sub-block">
                <strong class="nft-price-card__value">0,05 ETH</strong>
                <strong class="nft-price-card__value-dollars">($87,55)</strong>
            </div>
        </div>
        <div class="nft-price-card__block">
            <strong class="nft-price-card__name">The auction will end</strong>
            <strong class="nft-price-card__value">
                2 <span class="small">day</span> 21 <span class="small">hours</span> 57 <span class="small">min</span> 
            </strong>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.nft-price-card {
    border: 2px solid;
    border-image-source: linear-gradient(95.58deg, #FFFFFF -5.3%, rgba(255, 255, 255, 0) 117.6%) 30;
    border-radius: 21px;
    padding: 3.42rem;
    width: 100%;

    display: flex;
    flex-flow: row;
    gap: 4.71rem;

    &__block {
        display: flex;
        flex-flow: column;
        gap: 0.42rem;
    }
    &__sub-block {
        display: flex;
        flex-flow: row;
        align-items: baseline;
        gap: 1.71rem;
    }
    &__name {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 85%;
    }
    &__value {
        font-weight: 700;
        font-size: 5rem !important;

        color: var(--color-yellow);

        .small {
            font-size: 3rem !important;
        }
    }
    &__value-dollars {
        font-weight: 700;
        font-size: 2.05rem;
        line-height: 85%;
        color: var(--color-yellow);
    }

}
</style>