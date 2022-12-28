<script setup lang="ts">

</script>

<template>
    <div class="page page-connect-wallet">
        <div class="page-connect-wallet__search mobile">
            <input type="text" placeholder="Find your wallet" class="page-connect-wallet__box__el__search" />
            <h2 class="page-connect-wallet__box__el__title title-primary">Connect wallet</h2>
        </div>
        <div class="page-connect-wallet__box">
            <div class="page-connect-wallet__box__el desktop">
                <div class="page-connect-wallet__box__el__wrapper first">
                    <h2 class="page-connect-wallet__box__el__title title-primary">Connect wallet</h2>
                    <input type="text" placeholder="Find your wallet" class="page-connect-wallet__box__el__search" />
                    <p class="page-connect-wallet__box__el__text">Connect a wallet to have access to all the<br />
                        features of the site</p>
                </div>
            </div>
            <div class="page-connect-wallet__box__el metamask">
                <div class="page-connect-wallet__box__el__wrapper metamask">
                    <div class="page-connect-wallet__box__el__icon">
                        <img src="@/assets/img/ConnectWallet/metamask.png" alt="icon"
                            class="page-connect-wallet__box__el__icon__img">
                    </div>
                    <span class="page-connect-wallet__box__el__name">Metamask</span>
                </div>
            </div>
            <div class="page-connect-wallet__box__el">
                <div class="page-connect-wallet__box__el__wrapper soon">
                    <div class="page-connect-wallet__box__el__icon">
                        <img src="@/assets/img/ConnectWallet/soon.png" alt="icon"
                            class="page-connect-wallet__box__el__icon__img">
                    </div>
                    <span class="page-connect-wallet__box__el__name">Soon</span>
                </div>
            </div>
            <div class="page-connect-wallet__box__el">
                <div class="page-connect-wallet__box__el__wrapper soon">
                    <div class="page-connect-wallet__box__el__icon">
                        <img src="@/assets/img/ConnectWallet/soon.png" alt="icon"
                            class="page-connect-wallet__box__el__icon__img">
                    </div>
                    <span class="page-connect-wallet__box__el__name">Soon</span>
                </div>
            </div>
            <div class="page-connect-wallet__box__el">
                <div class="page-connect-wallet__box__el__wrapper soon">
                    <div class="page-connect-wallet__box__el__icon">
                        <img src="@/assets/img/ConnectWallet/soon.png" alt="icon"
                            class="page-connect-wallet__box__el__icon__img">
                    </div>
                    <span class="page-connect-wallet__box__el__name">Soon</span>
                </div>
            </div>
            <div class="page-connect-wallet__box__el">
                <div class="page-connect-wallet__box__el__wrapper soon">
                    <div class="page-connect-wallet__box__el__icon">
                        <img src="@/assets/img/ConnectWallet/soon.png" alt="icon"
                            class="page-connect-wallet__box__el__icon__img">
                    </div>
                    <span class="page-connect-wallet__box__el__name">Soon</span>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.page-connect-wallet {
    min-height: 100vh;
    background: #000000;

    @media only screen and (max-width: 850px) {
        padding-top: 10rem;
    }

    &__search {
        padding: 0 3rem;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    &__box {
        position: absolute;
        padding: 9.5rem 0 6rem 6.5rem;
        min-height: 100vh;
        display: flex;
        gap: 2.6rem;

        @media only screen and (max-width: 850px) {
            position: relative;
            flex-direction: column;
            width: 100%;
            padding: 0 3rem 6rem 3rem;
            align-items: center;
        }

        &__el {
            width: 36.11rem;
            max-width: 420px;
            background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.074) 0.51%, rgba(240, 237, 247, 0.087) 116.99%);
            border-radius: 15px;
            border: none;
            overflow: hidden;

            @media only screen and (max-width: 850px) {
                width: 100%;
                height: 75rem;
            }

            &__wrapper {
                padding: 2.6rem 3rem 2rem 3rem;
                height: 100%;
                display: flex;
                flex-direction: column;

                &.first {
                    padding: 2.6rem 5.1rem 2rem 3rem;
                }

                &.metamask {
                    background-image: url("@/assets/img/ConnectWallet/metamask-bg.png");
                    background-repeat: no-repeat;
                    background-position: top;
                }

                &.soon {
                    background-image: url("@/assets/img/ConnectWallet/soon-bg.png");
                    background-repeat: no-repeat;
                    background-position: top;
                }
            }

            &__title {
                font-size: 8rem;
                white-space: nowrap;
                line-height: 100%;
                color: var(--color-white);

                @media only screen and (max-width: 850px) {
                    margin: 1.5rem 0;
                    font-size: 47px !important;
                }
            }

            &__search {
                margin-top: 2.6rem;
                border: none;
                background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.074) 116.99%);
                backdrop-filter: blur(123px);
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.37);

                font-size: 1.4rem;
                line-height: 140%;
                padding: 1.3rem 1.3rem 1rem 4.3rem;

                background-image: url('@/assets/svg/ConnectWallet/search.svg');
                background-repeat: no-repeat;
                background-position: 1.3rem;
                background-size: 2.06rem;

                &::placeholder {
                    color: #85888A;
                }

                @media only screen and (max-width: 850px) {
                    margin-top: 0;
                    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
                    border-radius: 8px;
                    background-image: url('@/assets/svg/ConnectWallet/search-mobile.svg');
                    background-repeat: no-repeat;
                    background-position: 1.3rem;
                    background-size: 2.06rem;
                    font-size: 15px !important;
                }
            }

            &__text {
                margin-top: auto;
                font-size: 1.4rem;
                line-height: 140%;
            }

            &__icon {
                background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.074) 116.99%);
                backdrop-filter: blur(123px);
                border-radius: 39px;

                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;

                margin-top: auto;
                width: 11.7rem;
                height: 11.7rem;

                @media only screen and (max-width: 850px) {
                    width: 14rem;
                    height: 14rem;
                }
            }

            &__name {
                margin: 3rem 0 1.71rem;
                font-weight: 600;
                font-size: 2.06rem;
                line-height: 140%;
                align-self: center;

                @media only screen and (max-width: 850px) {
                    font-size: 18px !important;
                }
            }
        }
    }
}
</style>