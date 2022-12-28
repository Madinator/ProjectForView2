<script setup lang="ts">
// GET HANDLER FROM PARENT
const props = defineProps(["handler"]);

</script>

<template>
    <div class="popup__overlay" @click="props.handler.handleOpenPopup()"></div>
    <div class="popup__content">
        <div class="popup__content__wrapper">
            <h2 class="popup__content__title">Invest in the project</h2>
            <div class="popup__content__project-name">
                <div class="popup__content__project-name__img">
                    <img src="@/assets/img/Launchpad/popup-project-img.png" alt="project-img"
                        class="popup__content__project-name__img__inside">
                </div>
                <span class="popup__content__project-name__text">Project Name</span>
            </div>
            <div class="popup__content__info">
                <div class="popup__content__info__el">
                    <span class="popup__content__info__el__text">Max commntment limit</span>
                    <span class="popup__content__info__el__number">1000</span>
                </div>
                <div class="popup__content__info__el">
                    <span class="popup__content__info__el__text">Spot wallet balance</span>
                    <span class="popup__content__info__el__number">1907</span>
                </div>
            </div>
            <div class="popup__content__amount">
                <span class="popup__content__amount__title">Amount</span>
                <div class="popup__content__amount__input-box">
                    <input placeholder="Enter amount" type="number" class="popup__content__amount__input-box__input" />
                    <button class="popup__content__amount__input-box__max-button">MAX</button>
                </div>
            </div>
            <div class="popup__content__agree desktop">
                <input id="checkbox" type="checkbox" class="popup__content__agree__input" />
                <label for="checkbox" class="popup__content__agree__input__label">
                </label>
                <div class="popup__content__agree__el">
                    <span class="popup__content__agree__el__text">I read it(a) and agree to the
                        Finance Betting&nbsp;</span>
                    <router-link to="#" class="popup__content__agree__el__link">Service
                        Agreement</router-link>
                </div>
            </div>
            <div class="popup__content__buttons desktop">
                <button @click="props.handler.handleOpenPopup()" class="popup__content__buttons__cancel">Cancel</button>
                <button class="popup__content__buttons__confirm btn-purple">Сonfirm</button>
            </div>
            <div class="popup__content__buttons mobile">
                <div class="popup__content__agree mobile">
                    <input id="checkbox-mobile" type="checkbox" class="popup__content__agree__input" />
                    <label for="checkbox-mobile" class="popup__content__agree__input__label">
                    </label>
                    <div class="popup__content__agree__el">
                        <span class="popup__content__agree__el__text">I read it(a) and agree to the
                            Finance Betting&nbsp;</span>
                        <router-link to="#" class="popup__content__agree__el__link">Service
                            Agreement</router-link>
                    </div>
                </div>
                <button @click="props.handler.handleOpenPopup()" class="popup__content__buttons__cancel">Cancel</button>
                <button class="popup__content__buttons__confirm btn-purple">Сonfirm</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.popup {
    &__overlay {
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
        backdrop-filter: blur(6.5px);
        cursor: pointer;
    }

    &__content {
        z-index: 10000;
        position: fixed;
        top: 20%;
        left: calc((100% - 49rem) / 2);
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        backdrop-filter: blur(28px);
        border-radius: 10px;

        @media only screen and (max-width: 850px) {
            top: 10rem;
            height: calc(100vh - 12rem);
            width: calc(100vw - 6rem);
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
        }

        &__wrapper {
            padding: 4.3rem 2.6rem 3rem;

            @media only screen and (max-width: 850px) {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
        }

        &__title {
            font-weight: 700;
            font-size: 4.12rem;
            line-height: 5.07rem;
            display: inline;

            @media only screen and (max-width: 850px) {
                font-size: 31px !important;
            }
        }

        &__project-name {
            margin-top: 2.14rem;
            display: flex;
            align-items: center;
            gap: 1.71rem;

            &__text {
                font-weight: 700;
                font-size: 1.71rem;
                line-height: 2.14rem;

                @media only screen and (max-width: 850px) {
                    font-size: 17px !important;
                }
            }

            &__img {
                background: #49344D;
                mix-blend-mode: normal;
                border-radius: 25px;
                width: 4.3rem;
                height: 4.3rem;
                display: flex;
                align-items: center;
                justify-content: center;

                &__inside {
                    width: 3.5rem;
                    height: 3.5rem;
                    mix-blend-mode: lighten;
                }
            }
        }

        &__info {
            margin-top: 5.46rem;
            display: flex;
            flex-direction: column;
            gap: 2.57rem;
            width: 100%;

            &__el {
                width: 100%;
                display: flex;
                justify-content: space-between;

                &__text {
                    font-weight: 600;
                    font-size: 1.71rem;
                    line-height: 85%;
                    color: rgba(255, 255, 255, 0.6);

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }

                &__number {
                    font-weight: 600;
                    font-size: 2.06rem;
                    line-height: 85%;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }
            }
        }

        &__amount {
            margin-top: 3.43rem;
            display: flex;
            flex-direction: column;
            gap: 1.3rem;

            &__title {
                font-weight: 600;
                font-size: 1.71rem;
                line-height: 85%;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }

            &__input-box {
                width: 100%;
                display: flex;
                position: relative;

                &__input {
                    width: 100%;
                    padding: 1.54rem 1.71rem;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 15px;
                    width: 44rem;

                    &,
                    &::placeholder {
                        width: 100%;
                        font-weight: 600;
                        font-size: 1.54rem;
                        line-height: 85%;
                        color: #FFF;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }
                    }
                }

                &__max-button {
                    position: absolute;
                    right: 1.71rem;
                    top: 1.8rem;
                    font-weight: 600;
                    font-size: 1.54rem;
                    line-height: 85%;
                    color: var(--color-purple-light);

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }
            }
        }

        &__agree {
            margin-top: 1.71rem;
            display: flex;
            align-items: center;
            gap: 0.9rem;

            &__input {
                position: absolute;
                z-index: -1;
                opacity: 0;

                &:checked+&__label::before {
                    background-image: url('@/assets/svg/Launchpad/check.svg');
                    background-size: 2.06rem;
                }

                &__label {
                    display: inline-flex;
                    align-items: center;
                    user-select: none;
                }

                &__label::before {
                    content: '';
                    display: inline-block;
                    width: 2.06rem;
                    height: 2.06rem;
                    flex-shrink: 0;
                    flex-grow: 0;
                    border: 1px solid var(--color-white);
                    border-radius: 0%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: 50% 50%;
                    cursor: pointer;
                }
            }

            &__el {
                display: flex;

                @media only screen and (max-width: 850px) {
                    flex-wrap: wrap;
                }

                &__text {
                    font-weight: 500;
                    font-size: 1.2rem;
                    line-height: 112%;
                    letter-spacing: 0.025em;

                    @media only screen and (max-width: 850px) {
                        white-space: nowrap;
                        font-size: 13px !important;
                    }
                }

                &__link {
                    font-weight: 500;
                    font-size: 1.2rem;
                    line-height: 112%;
                    letter-spacing: 0.025em;
                    color: rgba(220, 180, 91, 1);

                    @media only screen and (max-width: 850px) {
                        white-space: nowrap;
                        font-size: 13px !important;
                    }
                }
            }
        }

        &__buttons {
            margin-top: 4.3rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.4rem;

            @media only screen and (max-width: 850px) {
                display: flex;
                flex-direction: column;
                gap: 1.4rem;
                margin-top: auto;
            }

            &__cancel {
                width: 100%;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 5px;
                border: 1px solid rgba(255, 255, 255, 1);
            }

            &__cancel,
            &__confirm {
                padding: 1rem 7.44rem;
                font-weight: 500;
                font-size: 1.71rem;
                line-height: 112%;
                letter-spacing: 0.025em;

                &:hover {
                    opacity: 0.8;
                }

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }
        }
    }
}
</style>