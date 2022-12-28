<script setup lang="ts">
import Balance from '@/components/Singular/Upload/Balance.vue';
import Exchange from '@/components/Singular/Governance/Exchange.vue';
import Funded from '@/components/Singular/Governance/Funded.vue';
import Chart from '@/components/Singular/Upload/Chart.vue';
import SelectDeposit from '@/components/Reusable/Upload/SelectDeposit.vue';

const innerWidth = window.innerWidth;
</script>

<template>
   <div class="page page-deposit">
        <div class="sphere-1 desktop"></div>
        <div class="sphere-2 desktop"></div>
        <img class="sphere-3 desktop" src="@/assets/img/Upload/background.png" alt=""/> 
       <div class="inner-container">
        <div class="high">
            <div class="high__left desktop">
                <Balance />
                <Exchange />
            </div>
            <div class="mobile">
                <Funded />
            </div>
            <Chart />
        </div>
        <div class="bottom">
            <div class="header">
                <div class="header__left">
                    <h2 class="title">Transactions</h2>
                    <span class="number">45 transactions total</span>
                </div>
                <SelectDeposit name="Last year"/>
            </div>
            <div class="list">
                <div class="item" v-for="i in 5" :class="{'item--first' : i===1}">
                    <div class="status"></div>
                    <ul class="item-list">
                        <li class="item__block">
                            <span class="item__key">Sent</span>
                            <span class="item__value">0.0789673</span>
                        </li>
                        <li class="item__block">
                            <span class="item__key">Fee</span>
                            <span class="item__value">0.006437</span>
                        </li>
                        <li class="item__block">
                            <span class="item__key">Date</span>
                            <span class="item__value">Yesterday</span>
                        </li>
                        <li class="item__block">
                            <span class="item__key">Transaction ID</span>
                            <span class="item__value">12589675</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
   </div>
</template>

<style lang="scss" scoped> 
.page-deposit {
    position: relative;
    background: #000000;
    min-height: 100vh;
    overflow: hidden;
    .sphere-1 {
        position: absolute;
        width: calc(1px * 415 * v-bind('innerWidth')/1920);
        aspect-ratio: 100%;
        aspect-ratio: 415/412;
        top: 40%;
        background: #9037D6;
        filter: blur(280.5px);
        transform: rotate(-93.98deg) translate(0, -95%);
    }
    .sphere-2 {
        position: absolute;
        width: calc(1px * 582 * v-bind('innerWidth')/1920);
        aspect-ratio: 100%;
        aspect-ratio: 582/578;
        top: 0%;
        right: 0;
        background: #4E1A23;
        filter: blur(280.5px);
        transform: rotate(-93.98deg) translate(70%, 40%);
    }
    .sphere-3 {
        position: absolute;
        width: calc(1px * 1854 * v-bind('innerWidth')/1920);
        aspect-ratio: 1854/2668;
        bottom: 0;
        right: 0;
        mix-blend-mode: hard-light;
        transform: translate(5%, 12%);
    }
    .inner-container {
        padding: 8.92rem 6.42rem 9.24rem;
        @include width-restriction;

        @media (max-width: 850px) {
            padding: 9.72rem 0 6.76rem;
        }
    }
    .high {
        display: flex;
        flex-flow: row;
        gap: 2.56rem;
        @media (max-width: 850px) {
            flex-flow: column-reverse;
            gap: 2.81rem;
        }
    }
    .high__left {
        display: flex;
        flex-flow: column;
        gap: 2.56rem;
    }
    .bottom {
        margin-top: 12.84rem;
        display: flex;
        flex-flow: column;
        @media (max-width: 850px) {
            margin-top: 4.28rem;
        }
    }
    .header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 850px) {
            flex-flow: column;
            align-items: flex-start;
            gap: 2.81rem;
        }
    }
    .header__left {
        display: flex;
        flex-flow: column;
        gap: 0.42rem;
        @media (max-width: 850px) {
            gap: 0.7rem;
        }
    }
    .title {
        font-weight: 700;
        font-size: 4.11rem;
        line-height: 5.05rem;
        @media (max-width: 850px) {
            font-size: 4.51rem;
            line-height: 5.63rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    .number {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 2rem;
        @media (max-width: 850px) {
            font-size: 2.25rem;
            line-height: 2.67rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .list {
        display: flex;
        flex-flow: column;
        margin-top: 3.52rem;
        gap: 1.11rem;
        @media (max-width: 850px) {
            margin-top: 4.22rem;
            gap: 2.11rem;
        }
    }
    .item {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.71rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        @media (max-width: 850px) {
            gap: 2.25rem;
            align-items: flex-start;
        }
    }
    .item-list {
        padding: 1.11rem 0 1.36rem;
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 12.84rem;
        width: 100%;
        @media (max-width: 850px) {
            padding: 2.11rem 0;
            flex-flow: row;
            flex-wrap: wrap;
            gap: 4.22rem;
        }
    }
    .item--first {
        border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
    .status {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: #FA6800;

        @media (max-width: 850px) {
            margin-top: 4.36rem;
        }
    }
    .item__block {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        gap: 0.42rem;
        @media (max-width: 850px) {
            gap: 0;
        }
    }

    .item__key {
        font-weight: 500;
        font-size: 1.36rem;
        line-height: 1.62rem;

        color: #C0C0C0;

        @media (max-width: 850px) {
            font-size: 2rem;
            line-height: 2.39rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }
    .item__value {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 2rem;
        @media (max-width: 850px) {
            font-size: 2.25rem;
            line-height: 2.67rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
}
</style>