<script setup lang="ts">

</script>

<template>
    <div class="my-balance">
        <div class="my-balance__info">
            <img class="my-balance__img" src="@/assets/svg/eye.svg" alt="" />
            <span class="my-balance__total">Estimated total</span>
        </div>
        <div class="my-balance__main">
            <div class="my-balance__money">
                <span class="my-balance__crypto">0.0313123123 BTC </span>
                <span class="my-balance__currency">≈ $655.79</span>
            </div>
            <RouterLink :to="{ name: 'donate' }">
                <button class="my-balance__button">Donate</button>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-balance {
    background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 15px;

    width: 100%;
    padding: 5.2rem 2.81rem 3.66rem;

    border: 1px solid rgba(255, 255, 255, 0.2);

    @media only screen and (min-width: 850px) {
        padding: 3.51rem 6.85rem 4.7rem 4.28rem;
    }

    &__info {
        display: flex;
        flex-flow: row;
        gap: 1.41rem;
        align-items: center;

        @media only screen and (min-width: 850px) {
            gap: 1.11rem;
        }
    }

    &__img {
        width: 2.81rem;
        height: 2.81rem;

        @media only screen and (min-width: 850px) {
            width: 1.85rem;
            height: 1.54rem;
        }
    }

    &__total {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    &__main {
        margin-top: 1rem;
        display: flex;
        flex-flow: column;
        gap: 4.93rem;

        @media only screen and (min-width: 850px) {
            flex-flow: row;
            gap: 0;
            justify-content: space-between;
            align-items: center;
        }
    }

    &__money {
        display: flex;
        flex-flow: column;
        gap: 0.28rem;

        @media only screen and (min-width: 850px) {
            flex-flow: row;
            align-items: center;
            gap: 0.7rem;
        }
    }

    &__crypto {
        font-weight: 400;
        font-size: 2.74rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }

    &__currency {
        font-weight: 400;
        font-size: 2.74rem;
        line-height: 140%;

        color: rgba(242, 242, 242, 0.5);

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    &__button {
        min-width: 100px;
        background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
        backdrop-filter: blur(40px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 7px;

        font-weight: 400;
        font-size: 1.71rem;
        line-height: 140%;
        width: 100%;
        padding: 0.94rem 4.62rem;

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
            padding: 1.41rem;
        }

    }

    &__button:hover {
        filter: brightness(75%);
    }
}
</style>