<script setup lang="ts">
import InfoCard from '../../components/Reusable/profile/InfoCard.vue';
import type { WalletInfo } from '@/typing/profile';

const img = '/svg/binance.svg';
const name = 'Binance';
const data: WalletInfo[] = [
    {
        key: 'Total amount',
        value: '0.14956800'
    },
    {
        key: 'Date of subscription',
        value: '2021-03-24'
    },
    {
        key: 'Return on investment in 7 days',
        value: '0.14956800'
    },
    {
        key: 'Blocking period',
        value: '30 days'
    },
    {
        key: 'Accrual days',
        value: '0 days'
    },
    {
        key: 'The date on which the interest accrual ends',
        value: '2021-03-24'
    },
    {
        key: 'Estimated amount of the following distribution',
        value: '0.000005680'
    },
] 
</script>

<template>
    <div class="page page-fix-staiking">
        <div class="inner-container" >
            <InfoCard class="" :image="img" :data="data" :name="name"/>
            <InfoCard :image="img" :data="data" :name="name"/>
            <!-- <span></span> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-fix-staiking {

    .inner-container {
        @include width-restriction;

        display: flex;
        flex-flow: column;
        gap: 2rem;
    }
}
</style>