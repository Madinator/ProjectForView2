<script setup lang="ts">

</script>

<template>
    <div class="project-card">
        <img class="project-card__img" src="@/assets/img/profile/bulb.png" alt="" />
        <div class="project-card__content">
            <button class="project-card__button mobile">End time 2022-05-29</button>
            <div class="project-card__base">
                <h2 class="project-card__name">Project Name</h2>
                <p class="project-card__desc">Project Description Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="project-card__line"></div>
            <div class="project-card__info">
                <div class="project-card__item">
                    <h2 class="project-card__key">My Funds</h2>
                    <span class="project-card__value">16 203</span>
                </div>
                <div class="project-card__item">
                    <h2 class="project-card__key">My Rewards</h2>
                    <span class="project-card__value">97 809</span>
                </div>
            </div>
            <div class="project-card__buttons">
                <button class="project-card__button desktop">End time 2022-05-29</button>
                <button class="project-card__commit">Invest now</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-card {
    cursor: pointer;
    padding: 0 3.52rem 3.52rem 3.1rem;

    background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.065) 0.51%, rgba(240, 237, 247, 0.08) 116.99%);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);

    @media only screen and  (min-width: 850px) {
        display: flex;
        flex-flow: row;

        padding: 0 3.6rem 2.31rem 2.31rem;
    }

    &__img {
        margin-left: 1.83rem;
        mix-blend-mode: normal;

        @media only screen and  (min-width: 850px) {
            width: 16rem;
            height: 10rem;
        }
    }

    &__content {
        @media only screen and  (min-width: 850px) {
            display: flex;
            flex-flow: row;
            align-items: center;
        }
    }

    &__button {
        margin-top: 3.24rem;
        padding: 1.12rem 2.53rem;

        font-weight: 400;
        font-size: 2.25rem;
        line-height: 140%;

        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.047) 0.24%, rgba(240, 237, 247, 0.0245) 94.13%);
        backdrop-filter: blur(8px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 8px;

        border: 1px solid rgba(255, 255, 255, 0.2);

        &:hover {
            filter: brightness(75%);
        }

        @media only screen and (min-width: 850px) {
            height: fit-content;
            white-space: nowrap;
            padding: 0.7rem 1.54rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__base {
        @media only screen and (min-width: 850px) {
            margin-left: 4.96rem;
            display: flex;
            flex-flow: column;
            gap: 0.86rem;

            width: 37%;
        }
    }

    &__name {
        margin-top: 2.11rem;
        font-weight: 600;
        font-size: 2rem;
        line-height: 2.5rem;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
            line-height: 5.49rem;

        }
    }

    &__desc {
        margin-top: 1.7rem;
        font-weight: 400;
        font-size: 1.54rem;
        margin-top: 0.86rem;
        line-height: 120%;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
            margin-top: 0;
        }
    }

    &__line {
        margin-top: 2.81rem;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    &__info {
        display: flex;
        flex-flow: row;
        gap: 4.93rem;

        margin-top: 2.81rem;

        @media only screen and (min-width: 850px) {
            gap: 5rem;
            margin-left: 4.45rem;
            margin-top: 0;
        }
    }

    &__item {
        display: flex;
        flex-flow: column;

        @media only screen and (min-width: 850px) {
            gap: 0.43rem;
        }
    }

    &__key {
        font-weight: 600;
        font-size: 1.37rem;
        line-height: 140%;
        color: var(--color-purple-dark);

        @media only screen and (min-width: 850px) {
            white-space: nowrap;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__value {
        font-weight: 500;
        font-size: 2rem;
        line-height: 140%;

        @media only screen and (min-width: 850px) {
            white-space: nowrap;
        }

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }

    &__commit {
        margin-top: 3.66rem;
        padding: 1.12rem 6.48rem;

        font-weight: 600;
        font-size: 1.37rem;
        line-height: 140%;

        background-color: var(--color-purple-dark);

        backdrop-filter: blur(8px);
        /* Note: backdrop-filter has minimal browser support */


        border-radius: 8px;

        &:hover {
            filter: brightness(75%);
        }

        @media only screen and  (min-width: 850px) {
            height: fit-content;
            white-space: nowrap;
            padding: 0.7rem 1.54rem;

            margin-top: 0;
            width: 100%;
        }

        @media only screen and  (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__buttons {

        @media only screen and  (min-width: 850px) {

            display: flex;
            flex-flow: column;
            gap: 0.7rem;
            margin-left: auto;
            align-items: baseline;
        }

        @media only screen and  (min-width: 1200px) {
            flex-flow: row;
            gap: 2rem;
        }
    }
}
</style>