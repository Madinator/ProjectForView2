<script setup lang="ts">

</script>

<template>
    <router-link to="/Launchpad/ProjectPage/1" class="card">
        <img src="@/assets/img/Launchpad/card-img.png" alt="Project-Img" class="card__img">
        <div class="card__wrapper">
            <div class="card__header">
                <span class="card__header__title">Project Name</span>
                <button class="card__header__button btn-purple desktop">Invest now</button>
            </div>
            <div class="card__descr">Project Description</div>
            <div class="card__info-box">
                <div class="card__info-box__el">
                    <span class="card__info-box__el__text">APY:</span>
                    <span class="card__info-box__el__number">2,5 %</span>
                </div>
                <div class="card__info-box__el">
                    <span class="card__info-box__el__text">Participants:</span>
                    <span class="card__info-box__el__number">124 890</span>
                </div>
                <div class="card__info-box__el">
                    <span class="card__info-box__el__text">Total staked:</span>
                    <span class="card__info-box__el__number">7 985 905</span>
                </div>
            </div>
            <button class="card__header__button btn-purple mobile">Invest now</button>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    width: calc(570px * 100vw / 1920px);
    max-width: 570px;
    display: flex;
    flex-direction: column;
    justify-self: center;
    overflow: hidden;

    @media only screen and (max-width: 1024px) {
        width: 100%;
    }

    &__img {
        mix-blend-mode: lighten;
    }

    &__wrapper {
        padding: 2.6rem 2.2rem;
    }

    &__header {
        display: flex;
        justify-content: space-between;

        &__title {
            font-weight: 600;
            font-size: 3.1rem;
            line-height: 3.8rem;

            @media only screen and (max-width: 1400px) and (min-width: 1024px) {
                font-size: 2.5rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 23px !important;
            }
        }

        &__button {
            font-weight: 600;
            font-size: 2.06rem;
            line-height: 85%;
            padding: 1.1rem 4rem;
            white-space: nowrap;
            align-self: center;

            @media only screen and (max-width: 850px) {
                margin-top: 2.8rem;
                background: #B960FF;
                border-radius: 10px;
                width: 100%;
                font-size: 15px !important;
            }
        }
    }

    &__descr {
        margin-top: 1.3rem;
        font-size: 18px;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__info-box {
        margin-top: 4.3rem;
        display: flex;
        flex-direction: column;
        gap: 2.6rem;

        &__el {
            display: flex;
            justify-content: space-between;

            &__text {
                font-weight: 600;
                font-size: 2.06rem;
                line-height: 2.5rem;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                    color: var(--color-white);
                    opacity: 0.6;
                }
            }

            &__number {
                font-weight: 500;
                font-size: 2.06rem;
                line-height: 140%;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }
        }
    }
}
</style>