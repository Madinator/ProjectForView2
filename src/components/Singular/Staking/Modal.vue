<script setup lang="ts">import { ref } from 'vue';

const emit = defineEmits(['close'])

const close = () => {
    emit('close');
};

const termId = ref(1);

const chooseTerm = (id: number): void => {
    termId.value = id;
};

const isAgree = ref(false);
const toggleAgree = () => {
    isAgree.value = !isAgree.value;
}

const closeOnWrapper = (event: Event) => {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('modal-wrapper')) return;
    close()
};
</script>

<template>
    <div class="modal-wrapper" @click="closeOnWrapper">
        <div class="staking-modal">
            <div class="left">
                <h2 class="title">FIX Staking</h2>
                <div class="company">
                    <img class="logo" src="@/assets/svg/Staking/axs.svg" alt="" />
                    <span class="name">AXS</span>
                </div>
                <div class="block type">
                    <span class="block__name">Type</span>
                    <input type="number" class="block__input" placeholder="Fix staking">
                </div>
                <div class="block term">
                    <span class="block__name">Term</span>
                    <div class="term__buttons">
                        <button class="term__button" :class="{ 'term__button--active': termId === 1 }"
                            @click="chooseTerm(1)">30</button>
                        <button class="term__button" :class="{ 'term__button--active': termId === 2 }"
                            @click="chooseTerm(2)">90</button>
                        <button class="term__button" :class="{ 'term__button--active': termId === 3 }"
                            @click="chooseTerm(3)">120</button>
                    </div>
                </div>
                <div class="block amount">
                    <span class="block__name">Blocking amount</span>
                    <div class="block__input amount__block">
                        <input type="number" class="amount__input" placeholder="Enter amount" />
                        <span class="amount__max">MAX</span>
                    </div>
                </div>
                <div class="block limit">
                    <span class="block__name">The limit of the blocked amount</span>
                    <div class="limit__blocks">
                        <div class="limit__block">
                            <span class="limit__text limit__key">Min: </span>
                            <span class="limit__text"> 0.001 AXS</span>
                        </div>
                        <div class="limit__block">
                            <span class="limit__text limit__key">Available quota:</span>
                            <span class="limit__text"> 2 AXS</span>
                        </div>
                        <div class="limit__block">
                            <span class="limit__text limit__key">Total personal quota:</span>
                            <span class="limit__text"> 2 AXS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <h2 class="title">Total</h2>
                <div class="block block-1">
                    <div class="block__left">
                        <div class="square"></div>
                        <div class="block-1__line"></div>
                    </div>
                    <div class="block__right">
                        <span class="block__key">The limit of the blocked amount</span>
                        <span class="block__value">2022-09-14 15:43</span>
                    </div>
                </div>
                <div class="block block-2">
                    <div class="block__left">
                        <div class="square"></div>
                        <div class="block-2__line"></div>
                    </div>
                    <div class="block_2__block">
                        <div class="block__right">
                            <span class="block__key">The limit of the blocked amount</span>
                            <span class="block__value">2022-09-14 15:43</span>
                        </div>
                        <div class="block__right">
                            <span class="block__key">Interest period</span>
                            <span class="block__value">1 day</span>
                        </div>
                    </div>
                </div>
                <div class="block block-3">
                    <div class="block__left">
                        <div class="square"></div>
                        <div class="block-2__line"></div>
                    </div>
                    <div class="block_3__block">
                        <div class="block__right">
                            <span class="block__key">Date of completion of <br class="desktop"> interest accrual</span>
                            <span class="block__value">2022-12-14 <br class="desktop"> 03:00</span>
                        </div>
                        <div class="block__right block__right--bottom">
                            <span class="block__key">The next stacking will start <br> automatically on 2022-12-14
                                03:00</span>
                        </div>
                    </div>
                </div>
                <div class="calculation">
                    <h2 class="calculation__key">Calculation. APR</h2>
                    <span class="calculation__value">76.00%</span>
                </div>
                <div class="agreement">
                    <button class="picker" @click="toggleAgree">
                        <img class="check-mark" :class="{ 'check-mark--active': isAgree }"
                            src="@/assets/svg/Staking/checkmark.svg" alt="" />
                    </button>
                    <span class="agreement__text">I read it(a) and agree to the Finance <br class="desktop"> Betting
                        <RouterLink to="''" class="agreement__link">Service Agreement </RouterLink></span>
                </div>
                <button class="confirm" @click="$emit('close')">Сonfirm</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.staking-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #08021E;
    backdrop-filter: blur(28px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;
    flex-flow: row;

    @media only screen and (max-width: 850px) {
        width: 70%;
        flex-flow: column;
        // top: 9.5rem;
        // transform: translate(-50%, 0);
        overflow-y: scroll;
        height: 90vh;
    }

    @media only screen and (max-width: 750px) {
        width: 75%;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
    }

    @media only screen and (max-width: 450px) {
        width: 92%;
    }

    .left {
        padding: 4.23rem 2.56rem 9.59rem 4.28rem;
        display: flex;
        flex-flow: column;
        flex-grow: 1;

        @media (max-width: 850px) {
            padding: 3.38rem 3.38rem 4.22rem;
        }

        .title {
            font-weight: 700;
            font-size: 4.11rem;
            line-height: 5.05rem;

            @media (max-width: 850px) {
                line-height: 4.22rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 23px !important;
            }
        }

        .company {
            margin-top: 1.97rem;
            display: flex;
            flex-flow: row;
            align-items: center;
            gap: 1.28rem;

            @media (max-width: 850px) {
                margin-top: 1.41rem;
                gap: 1.41rem;
            }
        }

        .img {
            width: 4.28rem;
            height: 4.28rem;

            @media (max-width: 850px) {
                width: 4.22rem;
                height: 4.22rem;
            }
        }

        .name {
            font-weight: 700;
            font-size: 1.71rem;
            line-height: 2.14rem;

            @media (max-width: 850px) {
                line-height: 3.52rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 19px !important;
            }
        }

        .type {
            margin-top: 3.42rem;

            @media (max-width: 850px) {
                margin-top: 3.52rem;
            }
        }

        .block {
            display: flex;
            flex-flow: column;
            gap: 1.28rem;

            @media (max-width: 850px) {
                gap: 1.41rem;
            }
        }

        .block__name {
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;

            @media (max-width: 850px) {
                font-size: 2.25rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .block__input {
            text-align: left;
            padding: 1.54rem 1.71rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;

            font-weight: 600;
            font-size: 1.54rem;
            line-height: 85%;

            @media (max-width: 850px) {
                padding: 1.83rem 2.81rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .block__input::placeholder {
            font-weight: 600;
            font-size: 1.54rem;
            line-height: 85%;
            color: white;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .type__button:hover {
            filter: brightness(75%);
        }

        .term {
            margin-top: 2.74rem;

            @media (max-width: 850px) {
                margin-top: 2.81rem;
            }
        }

        .term__buttons {
            display: flex;
            flex-flow: row;
            align-items: center;
            gap: 0.94rem;

            @media (max-width: 850px) {
                gap: 2.11rem;
            }
        }

        .term__button {
            width: 9.93rem;
            height: 3.42rem;

            font-weight: 400;
            font-size: 1.71rem;
            line-height: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
            backdrop-filter: blur(8px);

            @media (max-width: 850px) {
                width: 7.74rem;
                height: 4.93rem;
                line-height: 2.67rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .term__button--active {
            background: linear-gradient(90.33deg, rgba(253, 253, 253, 0.1) 0.24%, rgba(143, 0, 255, 0.1) 0.25%, rgba(143, 0, 255, 0.049) 94.13%);
            border-color: rgba(144, 55, 214, 1);
        }

        .term__button:hover {
            filter: brightness(75%);
        }

        .amount {
            margin-top: 2.34rem;

            @media (max-width: 850px) {
                margin-top: 2.81rem;
            }
        }

        .amount__block {
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: space-between;
            gap: 1.71rem;
        }

        .amount__input {
            width: 100%;
            font-weight: 600;
            font-size: 1.54rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .amount__input::placeholder {
            color: white;
            font-weight: 600;
            font-size: 1.54rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .amount__max {
            font-weight: 600;
            font-size: 1.54rem;
            line-height: 85%;
            color: #B960FF;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .limit {
            margin-top: 2.86rem;
            display: flex;
            flex-flow: column;
            gap: 1.28rem;

            @media (max-width: 850px) {
                margin-top: 2.81rem;
                gap: 1.41rem;
            }
        }

        .limit__blocks {
            display: flex;
            flex-flow: column;
            gap: 1.34rem;

            @media (max-width: 850px) {
                gap: 1.41rem;
            }
        }

        .limit__text {
            font-weight: 400;
            font-size: 1.54rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                font-size: 13px !important;
            }
        }

        .limit__key {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    .right {
        backdrop-filter: blur(28px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 5rem 2.56rem 3rem;
        display: flex;
        flex-flow: column;
        flex-grow: 1;

        @media (max-width: 850px) {
            padding: 3.52rem 2.81rem 5.49rem;
        }

        .title {
            font-weight: 700;
            font-size: 2.74rem;
            line-height: 3.42rem;

            @media (max-width: 850px) {
                line-height: 4.22rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .block-1 {
            margin-top: 1.36rem;

            @media (max-width: 850px) {
                margin-top: 2.11rem;
            }
        }

        .block {
            display: flex;
            flex-flow: row;
            gap: 1.32rem;

            @media (max-width: 850px) {
                gap: 1.41rem
            }
        }

        .block__left {
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 0.38rem;

            @media (max-width: 850px) {
                gap: 0.62rem;
            }
        }

        .square {
            width: 0.94rem;
            height: 0.94rem;
            background: #DCB45B;
            transform: rotate(-45deg);

            @media (max-width: 850px) {
                width: 1.54rem;
                height: 1.54rem;
            }
        }

        .block-1__line {
            width: 2px;
            height: 4.28rem;
            background: rgba(255, 255, 255, 0.07);

            @media (max-width: 850px) {
                height: 11.26rem;
            }
        }

        .block__right {
            display: flex;
            flex-flow: row;
            gap: 1.71rem;
            justify-content: space-between;

            @media (max-width: 850px) {
                flex-flow: column;
                gap: 1.12rem;
                justify-content: flex-start;
                align-items: baseline;
            }
        }

        .block__right--bottom {
            @media (max-width: 850px) {
                margin-top: auto;
            }
        }

        .block__key {
            white-space: nowrap;
            font-weight: 600;
            font-size: 1.2rem;
            line-height: 85%;
            color: rgba(255, 255, 255, 0.6);

            @media only screen and (max-width: 850px) {
                font-size: 13px !important;
            }
        }

        .block__value {
            white-space: nowrap;
            font-weight: 600;
            font-size: 1.2rem;
            line-height: 85%;
            text-align: right;

            @media only screen and (max-width: 850px) {
                font-size: 13px !important;
            }
        }

        .block-2__line {
            width: 2px;
            height: 7.44rem;
            background: rgba(132, 255, 10, 0.5);

            @media (max-width: 850px) {
                height: 16.61rem;
            }

        }

        .block_2__block {
            display: flex;
            flex-flow: column;
            gap: 2.56rem;

            @media (max-width: 850px) {
                gap: 2.81rem;
            }
        }

        .block_3__block {
            display: flex;
            flex-flow: column;
            gap: 3.76rem;
            width: 100%;

            @media (max-width: 850px) {
                gap: 4.92rem;
            }
        }

        .calculation {
            margin-top: 2.56rem;
            display: flex;
            flex-flow: row;
            align-items: center;
            gap: 1.71rem;
            justify-content: space-between;
            width: 100%;

            @media (max-width: 850px) {
                margin-top: 3.8rem;
            }
        }

        .calculation__key {
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                font-size: 17px !important;
            }
        }

        .calculation__value {
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 85%;
            color: #84FF0A;

            @media only screen and (max-width: 850px) {
                font-size: 19px !important;
            }
        }

        .agreement {
            margin-top: auto;
            display: flex;
            flex-flow: row;
            gap: 1.54rem;
            align-items: center;

            @media (max-width: 850px) {
                margin-top: 4.22rem;
                gap: 2.11rem;
            }
        }

        .picker {
            position: relative;
            min-width: 24px;
            min-height: 24px;
            max-width: 24px;
            max-height: 24px;
            border: 2px solid white;
            border-radius: 5px;
        }

        .check-mark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 12px;
            height: 9px;
            opacity: 0;
            transition: all 0.3s;
        }

        .check-mark--active {
            opacity: 1;
        }

        .agreement__text {
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 112%;
            /* or 16px */

            letter-spacing: 0.025em;

            @media only screen and (max-width: 850px) {
                font-size: 13px !important;
            }
        }

        .agreement__link {
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 112%;
            /* or 16px */

            letter-spacing: 0.025em;
            color: rgba(220, 180, 91, 1);

            @media only screen and (max-width: 850px) {
                font-size: 13px !important;
            }
        }

        .agreement__link:hover {
            filter: brightness(75%);
        }

        .confirm {
            margin-top: 2.56rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            border: 1px solid rgba(255, 255, 255, 1);

            padding: 1rem 2.56rem;
            width: 100%;

            font-weight: 500;
            font-size: 1.71rem;
            line-height: 112%;

            letter-spacing: 0.025em;

            @media (max-width: 850px) {
                margin-top: 4.64rem;
                padding: 1.62rem 2.81rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 19px !important;
            }
        }

        .confirm:hover {
            filter: brightness(75%);
        }
    }
}
</style>