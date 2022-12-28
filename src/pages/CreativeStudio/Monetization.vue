<script setup lang="ts">
import Chart from '@/components/Reusable/CreativeStudio/Chart.vue';
import Select from '@/components/Reusable/CreativeStudio/Select.vue';

const data = [
    {
        id: 0,
        active: true,
        title: 'Unique viewers',
        value: '10 000',
    },
    {
        id: 1,
        active: false,
        title: 'Average number of views per user',
        value: '3,5',
    },
    {
        id: 2,
        active: false,
        title: 'Subscribers',
        value: '+130',
    },
]
</script>

<template>
    <div class="page page-monetization">
        <div class="header">
            <AnalyticsNav />
            <router-link to="/upload" class="button-main btn-purple mobile">Add a video</router-link>
            <div class="line mobile"></div>
            <Select />
        </div>
        <div class="chart-holder">
            <Chart :isOptions="false" :options="data" />
        </div>
        <div class="block-list">
            <div class="block">
                <h2 class="name">Total number of views</h2>
                <span class="value">10 000</span>
            </div>
            <div class="block">
                <h2 class="name">Average viewing time</h2>
                <span class="value">6:50 min</span>
            </div>
            <div class="block">
                <h2 class="name">Total estimated income</h2>
                <span class="value">$ 10 900</span>
            </div>
        </div>
        <div class="line line-main"></div>
        <div class="balance">
            <h2 class="balance-title">Balance</h2>
            <span class="balance-money">10 000 $</span>
        </div>
        <button class="button btn-purple">Withdraw funds</button>
    </div>
</template>

<style lang="scss" scoped>
.page-monetization {
    width: 100%;

    .header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 850px) {
            flex-flow: column;
            gap: 2.11rem;
        }
    }

    .button-main {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 140%;
        padding: 0.94rem 4.8rem;

        @media (max-width: 850px) {
            margin-top: 1.41rem;
            font-size: 2.53rem;
            padding: 1.76rem 3.38rem;
            width: 100%;
            line-height: 85%;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    .title {
        font-weight: 600;
        font-size: 2.74rem;
        line-height: 120%;
    }

    .chart-holder {
        margin-top: 3.1rem;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
        }
    }

    .block-list {
        margin-top: 2.56rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3.42rem;
        justify-content: space-between;

        @media (max-width: 850px) {
            margin-top: 2.11rem;
            display: flex;
            flex-flow: column;
            gap: 2.11rem;
        }
    }

    .block {
        padding: 2.56rem 2.56rem 2.14rem;
        background: rgba(217, 217, 217, 0.1);
        border-radius: 5px;

        display: flex;
        flex-flow: column;
        gap: 0.85rem;

        @media (max-width: 850px) {
            padding: 0.51rem 1.28rem;
            gap: 0;
        }
    }

    .name {
        font-weight: 500;
        font-size: 2rem;
        line-height: 120%;

        @media (max-width: 850px) {
            font-weight: 500;
            line-height: 140%;

            opacity: 0.5;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    .value {
        font-weight: 500;
        font-size: 3.42rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2.53rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    .line-main {
        margin-top: 3.42rem;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
        }
    }

    .balance {
        margin-top: 3.42rem;
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.28rem;

        @media (max-width: 850px) {
            justify-content: space-between;
        }
    }

    .balance-title {
        font-weight: 600;
        font-size: 2rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2.25rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .balance-money {
        font-weight: 500;
        font-size: 2.74rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 3.38rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }

    .button {
        margin-top: 3.51rem;
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 140%;

        padding: 0.94rem 4.62rem;

        @media (max-width: 850px) {
            margin-top: 2.95rem;
            padding: 1.76rem 3.38rem;
            width: 100%;

            font-size: 2.53rem;
            line-height: 85%;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
}
</style>