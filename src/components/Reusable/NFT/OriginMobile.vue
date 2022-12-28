<template>
    <div class="nft-origin">
        <div class="nft-origin__header">
            <div class="nft-origin__block">
                <span class="nft-origin__name">Name</span>
                <span class="nft-origin__value">surfside</span>
            </div>
            <div class="nft-origin__block">
                <span class="nft-origin__name">Action</span>
                <span class="nft-origin__value">Purchased</span>
            </div>
        </div>
        <div class="nft-origin__block">
            <span class="nft-origin__name">Time</span>
            <span class="nft-origin__value">2022-09-12 14:31:05</span>
        </div>
        <div class="nft-origin__block nft-origin__block-bottom">
            <span class="nft-origin__name">Offer price</span>
            <span class="nft-origin__value nft-origin__value-img">
                <img src="@/assets/svg/nft/eth.svg" alt="" />
                1.12 BUSD ≈ ₽ 67.03
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nft-origin {
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