<script setup lang="ts">
const props = defineProps(['isGameFinished']);

</script>

<template>
    <div v-if="props.isGameFinished" class="price-pool">
        <p class="price-pool__winner">Winners</p>
        <div class="price-pool__box">
            <div class="price-pool__box__el">
                <div class="price-pool__box__el__wrapper">
                    <div class="price-pool__box__el__wrapper__place">
                        <div class="price-pool__box__el__wrapper__place__position">
                            <span class="price-pool__box__el__wrapper__place__position__number">1</span>
                            <span class="price-pool__box__el__wrapper__place__position__text">st</span>
                        </div>
                        <span class="price-pool__box__el__wrapper__place__descr">place</span>
                    </div>
                    <img src="@/assets/img/Tournaments/player-img.png" alt="img"
                        class="price-pool__box__el__wrapper__place__img">
                    <div class="price-pool__box__el__wrapper__place__info">
                        <span class="price-pool__box__el__wrapper__place__info__name">Mr. Niceguy</span>
                        <span class="price-pool__box__el__wrapper__place__info__prize">Prize</span>
                        <span class="price-pool__box__el__wrapper__place__info__money">$ 1000</span>
                    </div>
                </div>
            </div>
            <div class="price-pool__box__el">
                <div class="price-pool__box__el__wrapper">
                    <div class="price-pool__box__el__wrapper__place">
                        <div class="price-pool__box__el__wrapper__place__position">
                            <span class="price-pool__box__el__wrapper__place__position__number">2</span>
                            <span class="price-pool__box__el__wrapper__place__position__text">nd</span>
                        </div>
                        <span class="price-pool__box__el__wrapper__place__descr">place</span>
                    </div>
                    <img src="@/assets/img/Tournaments/player-img.png" alt="img"
                        class="price-pool__box__el__wrapper__place__img">
                    <div class="price-pool__box__el__wrapper__place__info">
                        <span class="price-pool__box__el__wrapper__place__info__name">Mr. Niceguy</span>
                        <span class="price-pool__box__el__wrapper__place__info__prize">Prize</span>
                        <span class="price-pool__box__el__wrapper__place__info__money">$ 5000</span>
                    </div>
                </div>
            </div>
            <div class="price-pool__box__el win">
                <div class="price-pool__box__el__wrapper">
                    <div class="price-pool__box__el__wrapper__place">
                        <div class="price-pool__box__el__wrapper__place__position">
                            <span class="price-pool__box__el__wrapper__place__position__number">3</span>
                            <span class="price-pool__box__el__wrapper__place__position__text">rd</span>
                        </div>
                        <span class="price-pool__box__el__wrapper__place__descr">place</span>
                    </div>
                    <img src="@/assets/img/Tournaments/player-img.png" alt="img"
                        class="price-pool__box__el__wrapper__place__img">
                    <div class="price-pool__box__el__wrapper__place__info">
                        <span class="price-pool__box__el__wrapper__place__info__name">Karnaval</span>
                        <span class="price-pool__box__el__wrapper__place__info__prize">Prize</span>
                        <span class="price-pool__box__el__wrapper__place__info__money">$ 100</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="price-pool">
        <p class="price-pool__winner dummy">Winners</p>
        <div class="price-pool__box">
            <div class="price-pool__box__el">
                <span class="price-pool__box__el__title">Prize for 1st place</span>
                <span class="price-pool__box__el__money">$ 1000</span>
            </div>
            <div class="price-pool__box__el">
                <span class="price-pool__box__el__title">Prize for 2nd place</span>
                <span class="price-pool__box__el__money">$ 500</span>
            </div>
            <div class="price-pool__box__el">
                <span class="price-pool__box__el__title">Prize for 3rd place</span>
                <span class="price-pool__box__el__money">$ 100</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.price-pool {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__winner {
        font-weight: 700;
        font-size: 4.1rem;
        line-height: 5.05rem;
        margin-bottom: 3rem;

        &.dummy {
            text-indent: -9999px;
        }
    }

    &__box {
        display: flex;
        justify-content: space-between;
        width: 100%;

        @media only screen and (max-width: 850px) {
            flex-direction: column;
        }

        &__el {
            border-radius: 15px;
            width: calc((100% - 2.5rem) / 3);
            min-height: 8.56rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media only screen and (max-width: 850px) {
                width: 100%;
                margin-bottom: 3rem;
            }

            &__wrapper {
                padding: 1.2rem 3.1rem;
                display: flex;
                align-self: flex-start;

                &__place {
                    display: flex;
                    flex-direction: column;
                    align-self: center;

                    &__position {
                        display: flex;

                        &__number {
                            font-family: 'DELIRIUM';
                            font-weight: 400;
                            font-size: 8.21rem;
                            line-height: 6.35rem;
                            align-self: flex-end;

                            @media only screen and (max-width: 1000px) and (max-height: 600px) {
                                line-height: 13.5px;
                            }
                        }

                        &__text {
                            font-weight: 600;
                            font-size: 1.71rem;
                            line-height: 2.05rem;
                            align-self: flex-end;
                            margin-left: 0.1rem;

                            @media only screen and (max-width: 850px) {
                                font-size: 15px !important;
                            }
                        }
                    }

                    &__descr {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 2.05rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }
                    }

                    &__img {
                        height: 9.84rem;
                        width: 9.84rem;
                        border-radius: 5px;
                        margin: 0 2.5rem 0 1.7rem;
                    }

                    &__info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        &__name {
                            font-size: 2.74rem;
                            line-height: 85%;

                            @media only screen and (max-width: 850px) {
                                font-size: 17px !important;
                            }
                        }

                        &__prize {
                            font-size: 1.71rem;
                            line-height: 2.05rem;

                            @media only screen and (max-width: 850px) {
                                font-size: 13px !important;
                            }
                        }

                        &__money {
                            font-weight: 600;
                            font-size: 2.73rem;
                            line-height: 3.33rem;

                            @media only screen and (max-width: 850px) {
                                font-size: 19px !important;
                            }
                        }
                    }
                }
            }

            &__title {
                font-size: 1.71rem;
                line-height: 2.05rem;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }

            &__money {
                margin-top: 0.5rem;
                font-weight: 600;
                font-size: 2.73rem;
                line-height: 3.33rem;

                @media only screen and (max-width: 850px) {
                    font-size: 23px !important;
                }
            }

            &:nth-child(1) {
                background: rgba(242, 190, 255, 0.2);

            }

            &:nth-child(2) {
                background: #361B4A;
                margin: 0 2.5rem;

                @media only screen and (max-width: 850px) {
                    margin: 0 0 3rem 0;
                }
            }

            &:nth-child(3) {
                background: #340D4B;
            }


            &.win {
                background: rgba(219, 0, 255, 0.3);
            }
        }
    }
}
</style>