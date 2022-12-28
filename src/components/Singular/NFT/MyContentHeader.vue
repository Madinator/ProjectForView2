<template>
    <div class="my-content-header">
        <div class="my-content-header__bg"></div>
        <div class="my-content-header__header">
            <img class="my-content-header__user-img" src="@/assets/img/nft/myMarketUser.png" alt="" />
            <span class="my-content-header__username">Mwoodo</span>
        </div>
        <div class="my-content-header__bottom">
            <h1 class="my-content-header__name">Mokey</h1>
            <div class="my-content-header__actions">
                <button class="my-content-header__send mobile">
                    <img src="@/assets/svg/nft/send.svg" alt="" />
                </button>
                <div class="my-content-header__watched">
                    <img src="@/assets/svg/nft/eye.svg" alt="" />
                    <span class="my-content-header__actions-text">7 views</span>
                </div>
                <div class="my-content-header__likes">
                    <img src="@/assets/svg/nft/heart.svg" alt="" />
                    <span class="my-content-header__actions-text">7 favorites</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-content-header {
     &__header {
         display: flex;
         flex-flow: row;
         align-items: center;
         gap: 1.2rem;
     }

     &__user-img {
         width: 2.75rem;
         height: 2.75rem;
         border-radius: 40rem;
     }

     &__username {
         font-weight: 400;
         font-size: 1.8rem;
         line-height: 85%;
         color: var(--color-white);

         @media only screen and (max-width: 850px) {
             font-size: 17px !important;
         }
     }

     &__name {
         font-weight: 700;
         font-size: 4.5rem;
         line-height: 5.63rem;

         margin-top: 1.41rem;

         @media only screen and (max-width: 850px) {
             font-size: 31px !important;
         }
     }

     &__bottom {
         display: flex;
         flex-flow: column;

         @media (min-width: 850px) {
             flex-flow: row;
             gap: 2.14rem;
         }
     }

     &__actions {
         display: flex;
         flex-flow: row;
         gap: 2.11rem;
         margin-top: 2.11rem;
     }

     &__send {
         background: rgba(255, 255, 255, 0.05);
         border-radius: 10px;
         padding: 0.7rem 2.4rem;
     }

     &__watched {
         display: flex;
         flex-flow: row;
         gap: 1.41rem;
         align-items: center;
     }

     &__actions-text {
         font-weight: 400;
         font-size: 1.8rem;
         line-height: 85%;

         @media only screen and (max-width: 850px) {
             font-size: 15px !important;
         }
     }

     &__likes {
         display: flex;
         flex-flow: row;
         gap: 1.41rem;
         align-items: center;
     }
 }
</style>