<script setup lang="ts">
import InfoCard from '../../components/Reusable/profile/InfoCard.vue';
import type { WalletInfo } from '@/typing/profile';

const img = '/svg/1inch.svg';
const name = '1INCH';
const data: WalletInfo[] = [
    {
        key: 'Total amount',
        value: '0.14956800'
    },
    {
        key: 'Accrual of interest',
        value: '2021-03-24'
    },
    {
        key: 'Subscriptions today',
        value: '0.000000'
    },
    {
        key: 'To be received',
        value: '0.000000'
    },
    {
        key: 'Aggregate interest',
        value: '0.00341241'
    },
    {
        key: 'Return on investment in 7 days',
        value: '3.29%'
    },
    {
        key: 'Operation',
        value: 'Close'
    },
    
] 
</script>

<template>
    <div class="page page-fix-staiking">
        <div class="inner-container">
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