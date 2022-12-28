<script setup lang="ts">
import Balance from '@/components/Singular/profile/Balance.vue';
import WalletNav from '@/components/Reusable/profile/WalletNav.vue';
import NFTCard from '@/components/Reusable/NFTCard.vue';
import NFTAddCard from '@/components/Reusable/NFTAddCard.vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import Table from '@/components/Reusable/profile/Table.vue';
import { onMounted, ref, watchEffect } from 'vue';
import ProjectCard from '@/components/Reusable/profile/ProjectCard.vue';

const profileStore = useProfileStore();
const { walletNavigation } = storeToRefs(profileStore);

const tab = (to: string) => {
    profileStore.toggleWalletTab(to);
};

const headers = ref(['']);
const data = ref([['']]);
const img = ref('')

watchEffect(() => {
    if (profileStore.getActiveTab() === 'Fix Staiking') {
        headers.value = ['Token', 'Total amount', 'Total amount', 'Date of subscription', 'Blocking period', 'Blocking period', 'Accrual days', 'Accrual days'];
        data.value = [
            ['Binance', '0.14956800', '17.34%', '17.34%', '30 days', '2021-03-24', '0 days', '0.000005680'],
            ['Binance', '0.14956800', '17.34%', '17.34%', '30 days', '2021-03-24', '0 days', '0.000005680']
        ];
        img.value = "/svg/binance.svg";
    }
    if (profileStore.getActiveTab() === 'DeFi Staiking') {
        headers.value = ['Floating rate deposits', 'Total amount', 'Accrual of interest', 'Subscriptions today', 'To be received', 'Aggregate interest', 'Return on investment in 7 days', 'Operation'];
        data.value = [
            ['1INCH', '0.14956800', '0.14956800', '0.000000', '0.000000', '0.00341241', '3.29%', 'Close',]
        ];
        img.value = ""
    }
})

</script>

<template>
    <div class="page page-wallet">
        <h2 class="page-wallet__block-title">My wallet</h2>
        <div class="page-wallet__line mobile"></div>
        <Balance class="page-wallet__balance-card" />
        <div class="page-wallet__navs">
            <WalletNav v-for="nav in walletNavigation" :name="nav.name" :to="nav.to" :active="nav.active"
                class="page-wallet__nav" />
        </div>
        <div class="page-wallet__dynamic desktop">
            <Table
                v-if="profileStore.getActiveTab() === 'Fix Staiking' || profileStore.getActiveTab() === 'DeFi Staiking'"
                :headers="headers" :data="data" :image="img"></Table>
            <ProjectCard v-if="profileStore.getActiveTab() === 'Launchpad'"></ProjectCard>
        </div>
        <h2 class="page-wallet__block-title page-wallet__block-title--next">My collection</h2>
        <div class="page-wallet__line mobile"></div>
        <div class="page-wallet__nft-list">
            <NFTCard v-for="i in 4" />
            <!-- <NFTAddCard /> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-wallet {
    padding: 0 0 10rem;

    &__block-title {
        font-weight: 600;
        font-size: 5.48rem;
        line-height: 6.68rem;

        @media only screen and (max-width: 850px) {
            line-height: 3.38rem;
            font-size: 19px !important;
        }
    }

    &__block-title--next {
        margin-top: 7.75rem;

        @media only screen and (min-width: 850px) {
            margin-top: 7.7rem;
        }
    }

    &__line {
        margin-top: 1.41rem;
        border-top: 1px solid rgba(242, 242, 242, 0.2);
    }

    &__balance-card {
        margin-top: 2.11rem;

        @media only screen and (min-width: 850px) {
            margin-top: 3.77rem;
        }
    }

    &__navs {
        margin-top: 2.81rem;

        display: flex;
        flex-flow: column;
        gap: 2.11rem;

        @media only screen and (min-width: 850px) {
            flex-flow: row;
            gap: 2.57rem;
        }
    }

    &__dynamic {
        margin-top: 5.63rem;
    }

    &__nft-list {
        margin-top: 2.81rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2.11rem;

        @media only screen and (max-width: 400px) {
            grid-template-columns: repeat(1, 1fr);
        }

        @media only screen and (min-width: 850px) {
            margin-top: 3.42rem;
        }

        @media only screen and (min-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media only screen and (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}
</style>