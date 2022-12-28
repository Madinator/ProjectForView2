<script setup lang="ts">
import WithdrawPopup from '@/components/Reusable/WithdrawPopup.vue';
import { ref } from 'vue';


// POPUP STATUS
const isPopupOpen = ref(false);

// OPEN POPUP HANDLER
const handleOpenPopup = () => {
    isPopupOpen.value = !isPopupOpen.value;
}
</script>

<template>
    <div>
        <div class="funded">
            <h2 class="title">Funded</h2>
            <span class="money">$14 589,33</span>
            <div class="buttons">
                <router-link to="/deposit" class="button btn-purple">Deposit</router-link>
                <button @click="handleOpenPopup" class="button button--secondary">Withdraw</button>
            </div>
            <div class="list">
                <div class="block">
                    <span class="key">Daily profit</span>
                    <span class="value">$14 589,33</span>
                </div>
                <div class="block">
                    <span class="key">Days spent</span>
                    <span class="value">14</span>
                </div>
                <div class="block">
                    <span class="key">Your votes</span>
                    <span class="value">2</span>
                </div>
            </div>
        </div>
        <div class="popup" :class="{ closed: !isPopupOpen }">
            <WithdrawPopup :handler="{ handleOpenPopup }" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popup {
    transition: all .3s;
}

.funded {
    background: rgba(217, 217, 217, 0.1);
    padding: 4.32rem 12.37rem 5.16rem 3.89rem;
    width: fit-content;
    height: fit-content;

    border-radius: 0 0 10px 10px;
    height: 100%;

    @media (max-width: 850px) {
        width: 100%;
        padding: 3.24rem 3.24rem 4.22rem;
        display: flex;
        flex-flow: column;
    }

    .title {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 21px;

        @media (max-width: 850px) {
            line-height: 2.53rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    .money {
        display: block;
        margin-top: 0.43rem;
        font-weight: 700;
        font-size: 5.48rem;
        line-height: 6.76rem;

        @media (max-width: 850px) {
            margin-top: 0;
            font-size: 4.51rem;
            line-height: 5.63rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    .buttons {
        margin-top: 1.8rem;

        display: flex;
        flex-flow: row;
        gap: 1.75rem;

        @media (max-width: 850px) {
            margin-top: 2.11rem;
            flex-flow: column;
            gap: 1.41rem;
        }
    }

    .button {
        padding: 1.1rem 4.02rem;

        font-weight: 600;
        font-size: 2.05rem;
        line-height: 85%;

        border-radius: 5px;

        @media (max-width: 850px) {
            font-size: 2.25rem;
        }

        @media only screen and (max-width: 850px) {
            text-align: center;
            width: 100%;
            font-size: 15px !important;
        }

    }

    .button--secondary {
        border: 2px solid var(--color-purple-dark);
        color: var(--color-purple-dark);
        border-radius: 5px;
    }

    .button--secondary:hover {
        color: white;
        background-color: var(--color-purple-dark);
    }

    .list {
        margin-top: 3.08rem;
        display: flex;
        flex-flow: row;
        gap: 3.08rem;
        align-items: center;

        @media (max-width: 850px) {
            margin-top: 3.52rem;
            gap: 0;
            justify-content: space-between;
        }
    }

    .block {
        display: flex;
        flex-flow: column;
        gap: 0.51rem;

        @media (max-width: 850px) {
            gap: 0.28rem;
        }
    }

    .key {
        font-weight: 400;
        font-size: 1.37rem;
        line-height: 1.63rem;
        opacity: 0.7;

        @media (max-width: 850px) {
            line-height: 140%;
            opacity: 0.5;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    .value {
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.48rem;

        @media (max-width: 850px) {
            line-height: 140%;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
}
</style>