<script setup lang="ts">
import VoteButton from '@/components/Reusable/Governance/VoteButton.vue';
import { useGovernanceStore } from '@/stores/governance';
import { storeToRefs } from 'pinia';

const governanceStore = useGovernanceStore();
const { votes } = storeToRefs(governanceStore);

</script>

<template>
    <div class="percentage">
        <h2 class="title">Annual percentage yield</h2>
        <span class="value">18%</span>
    </div>
</template>

<style lang="scss" scoped> 
.percentage {
    background-color: rgba(217, 217, 217, 0.1);
    padding: 5.22rem 0 5.31rem 4.71rem;
    border-radius: 10px;

    background-image: url('@/assets/img/Governance/annual.png');
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-flow: column;

    @media (max-width: 850px) {
        padding: 4.22rem 3.81rem 2.67rem;
    }
    .title {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 1.8rem;

        @media (max-width: 850px) {
            line-height: 2.67rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
   .value {
        font-weight: 700;
        font-size: 10.95rem;
        line-height: 13.61rem;
        color: var(--color-yellow);

        @media (max-width: 850px) {
            line-height: 16.76rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 95px !important;
        }
   }
}

</style>