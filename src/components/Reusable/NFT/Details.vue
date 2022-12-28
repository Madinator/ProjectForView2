<template>
    <div class="nft-details">
        <ul class="nft-details__details-list">
            <li class="nft-details__details-item">
                <span class="nft-details__details-name">Creator</span>
                <span class="nft-details__details-value">Win_NFT_Hero</span>
            </li>
            <li class="nft-details__details-item">
                <span class="nft-details__details-name">Owner</span>
                <span class="nft-details__details-value">Win_NFT_Hero</span>
            </li>
            <li class="nft-details__details-item">
                <span class="nft-details__details-name">Network</span>
                <span class="nft-my-market__details-value">BSK</span>
            </li>
            <li class="nft-details__details-item">
                <span class="nft-details__details-name">Contract address</span>
                <span class="nft-details__details-value">0x6c58...a948</span>
            </li>
            <li class="nft-details__details-item">
                <span class="nft-details__details-name">Royalties</span>
                <span class="nft-details__details-value">1%</span>
            </li>
            <li class="nft-details__details-item">
                <span class="nft-details__details-name">Id token</span>
                <span class="nft-details__details-value">5059</span>
            </li>
            <li class="nft-details__details-item">
                <span class="nft-details__details-name">Platform commission</span>
                <span class="nft-details__details-value">1%</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped> 

.nft-details {
    
    &__details-list {
        display: flex;
        flex-flow: column;
        gap: 2.5rem;
    }
    &__details-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__details-name {
        // line-height: 140.5%;
        opacity: 0.7;

        @media only screen and (max-width: 850px) {
            font-size: 16px !important;
            line-height: 1.5;
        }
    }
    &__details-value {
        font-size: 1.8rem;

        @media only screen and (max-width: 850px) {
            font-size: 16px !important;
        }
    }
}
</style>