<script setup lang="ts">

</script>

<template>
    <div class="verification">
        <div class="verification__box">
            <div class="verification__box__table">
                <div class="verification__box__table__row">
                    <div class="verification__box__table__row__info">
                        <span class="verification__box__table__row__info__title">Personality</span>
                        <span class="verification__box__table__row__info__descr">Identification of the person</span>
                    </div>
                    <div class="verification__box__table__row__data">Verified</div>
                </div>
                <div class="verification__box__table__row">
                    <div class="verification__box__table__row__info">
                        <span class="verification__box__table__row__info__title">Address</span>
                        <span class="verification__box__table__row__info__descr">Confirm your place of residence</span>
                    </div>
                    <button class="verification__box__table__row__button btn">Pass</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.verification {
    display: flex;
    flex-direction: column;
    padding-bottom: 6rem;

    &__box {
        display: flex;
        flex-direction: column;
        width: 80%;

        @media only screen and (max-width: 850px) {
            width: 100%;
        }

        margin-top: 5.2rem;

        &:first-child {
            margin-top: 1rem;
        }

        &__table {

            &__row {
                display: grid;
                grid-template-columns: auto 15rem;
                gap: 5rem;
                padding: 2.2rem 0;

                &:first-child {
                    padding-top: 0;
                }

                border-top: 1px solid rgba(242, 242, 242, 0.2);

                @media only screen and (max-width: 850px) {
                    grid-template-columns: auto 15rem;
                    border-top: none;
                    border-bottom: 1px solid rgba(242, 242, 242, 0.2);
                }

                &:first-child {
                    border: none;

                    @media only screen and (max-width: 850px) {
                        border-bottom: 1px solid rgba(242, 242, 242, 0.2);
                    }
                }

                &__info {
                    display: flex;
                    flex-direction: column;

                    &__title {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 120%;
                        margin-bottom: 1rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }
                    }

                    &__descr {
                        font-weight: 400;
                        font-size: 1.36rem;
                        line-height: 140%;
                        color: #858585;

                        @media only screen and (max-width: 850px) {
                            font-size: 12px !important;
                        }
                    }
                }

                &__data {
                    justify-self: flex-end;
                    background-image: url('@/assets/svg/Settings/settings-check.svg');
                    background-repeat: no-repeat;
                    background-position: left;
                    background-size: 2.1rem;
                    padding-left: 2.6rem;
                    align-self: center;
                    font-size: 1.54rem;
                    line-height: 140%;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }

                &__button {
                    background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
                    backdrop-filter: blur(40px);
                    border: 1px solid #FFFFFF0F;
                    border-radius: 7px;
                    color: var(--color-white);
                    height: 3.85rem;
                    align-self: center;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }
            }

        }
    }
}
</style>