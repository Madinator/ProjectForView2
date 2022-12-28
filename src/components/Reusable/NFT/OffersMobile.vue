<template>
    <div class="nft-offers">
        <div class="nft-offers__header">
            <div class="nft-offers__block">
                <span class="nft-offers__name">From</span>
                <span class="nft-offers__value">Gohar</span>
            </div>
            <div class="nft-offers__block">
                <span class="nft-offers__name">Validity period</span>
                <span class="nft-offers__value">In 6 Days</span>
            </div>
        </div>
        <div class="nft-offers__block nft-offers__block-bottom">
            <span class="nft-offers__name">Offer price</span>
            <span class="nft-offers__value nft-offers__value-img">
                <img src="@/assets/svg/nft/eth.svg" alt="" />
                1.12 BUSD ≈ ₽ 67.03
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nft-offers {
     background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
     backdrop-filter: blur(8px);
     border-radius: 15px;
     padding: 3.38rem;

     display: flex;
     flex-flow: column;
     gap: 2.11rem;
     border: 1px solid rgba(255, 255, 255, .2);

     &__header {
         display: flex;
         flex-flow: row;
         justify-content: space-between;
     }

     &__block {
         display: flex;
         flex-flow: column;
         gap: 0.28rem;
     }

     &__block-bottom {
         gap: 0.7rem;
     }

     &__name {
         font-weight: 600;
         font-size: 1.97rem;
         line-height: 2.4rem;

         color: var(--color-grey);

         @media only screen and (max-width: 850px) {
             font-size: 13px !important;
         }
     }

     &__value {
         font-weight: 600;
         font-size: 2.81rem;
         line-height: 3.38rem;

         @media only screen and (max-width: 850px) {
             font-size: 19px !important;
         }
     }

     &__value-img {
         display: flex;
         flex-flow: row;
         gap: 2.11rem;
     }
 }
</style>