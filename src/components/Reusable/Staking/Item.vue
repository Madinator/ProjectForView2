<script setup lang="ts">
import { useStakingStore } from '@/stores/staking';
import { storeToRefs } from 'pinia';
const stakingStore = useStakingStore();
const { navigation } = storeToRefs(stakingStore);
</script>

<template>
    <div class="staking-item">
        <div class="header">
            <img class="logo" src="@/assets/svg/Staking/axs.svg" alt="" />
            <h2 class="title">Theta</h2>
            <span class="title percent">10.07%</span>
        </div>
        <span class="time">Timeline (Day)</span>
        <div class="options">
            <div class="option" v-if="navigation[1].isActive">flexible locking</div>
            <div class="option" v-if="navigation[0].isActive">30</div>
            <div class="option" v-if="navigation[0].isActive">90</div>
            <div class="option option--special">120</div>
        </div>
        <button class="subscribe" @click="stakingStore.openModal()">Subscribe</button>
    </div>
</template>

<style lang="scss" scoped>
.staking-item {
    padding: 2.81rem 2.81rem 3.52rem;
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
    backdrop-filter: blur(39px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-flow: column;

    .header {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.41rem;
    }

    .logo {
        width: 4.22rem;
        height: 4.22rem;
    }

    .title {
        font-weight: 400;
        font-size: 2.53rem;
        line-height: 2.96rem;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    .percent {
        color: #84FF0A;
    }

    .time {
        margin-top: 2.11rem;
        display: block;
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 2.67rem;
        opacity: 0.6;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .options {
        margin-top: 2.11rem;
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 2.11rem;
    }

    .option {
        padding: 1.12rem 2.53rem;
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;

        font-weight: 400;
        font-size: 2.25rem;
        line-height: 2.676rem;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .option--special {
        background: linear-gradient(90.33deg, rgba(253, 253, 253, 0.1) 0.24%, rgba(143, 0, 255, 0.1) 0.25%, rgba(143, 0, 255, 0.049) 94.13%);
        border-color: rgba(144, 55, 214, 1);
    }

    .subscribe {
        margin-top: 2.11rem;
        width: 100%;
        padding: 1.41rem 3.52rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;

        font-weight: 600;
        font-size: 2.25rem;
        line-height: 85%;

        border: 1px solid rgba(144, 55, 214, 1);

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
}
</style>