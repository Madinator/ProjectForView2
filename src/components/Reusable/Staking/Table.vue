<script setup lang="ts">
import { useStakingStore } from '@/stores/staking';
import { storeToRefs } from 'pinia';

const stakingStore = useStakingStore();
const { navigation } = storeToRefs(stakingStore);

const open = () => {
    stakingStore.openModal();
}
</script>

<template>
    <table class="table-staking">
        <tr class="row header">
            <th class="key key--first">Token</th>
            <th class="key">Estimated APR</th>
            <th class="key">Day</th>
            <th class="key">Minimal amount </th>
            <th></th>
        </tr>
        <tr class="row">
            <td class="value value--first row--first">
                <div class="value--first-content">
                    <img class="img" src="@/assets/svg/Staking/logo.svg" alt="" />
                    <h2 class="name">Woo</h2> 
                </div>
            </td>
            <td class="value value--second row--first">10.07%</td>
            <td class="value row--first">
                <div class="value--third--content">
                    <span v-if="navigation[1].isActive" class="value--day">flexible locking</span>
                    <span v-if="navigation[0].isActive" class="value--day">30</span>
                    <span v-if="navigation[0].isActive" class="value--day">90</span>
                    <span class="value--day value--day--special">120</span>
                </div>
            </td>
            <td class="value row--first">0.1 Woo</td>
            <td class="value value--last row--first">
                <button v-if="navigation[0].isActive" class="value--subscribe" @click="open">Subscribe</button>
                <button v-if="navigation[1].isActive" class="value--active" @click="open">Add to active</button>
            </td>
        </tr>
        <tr class="row" v-for="i in 5">
            <td class="value value--first">
                <div class="value--first-content">
                    <img class="img" src="@/assets/svg/Staking/logo.svg" alt="" />
                    <h2 class="name">Woo</h2> 
                </div>
            </td>
            <td class="value value--second">10.07%</td>
            <td class="value row--first">
                <div class="value--third--content">
                    <span v-if="navigation[1].isActive" class="value--day">flexible locking</span>
                    <span v-if="navigation[0].isActive" class="value--day">30</span>
                    <span v-if="navigation[0].isActive" class="value--day">90</span>
                    <span class="value--day value--day--special">120</span>
                </div>
            </td>
            <td class="value">0.1 Woo</td>
            <td class="value value--last">
                <button v-if="navigation[0].isActive" class="value--subscribe" @click="open">Subscribe</button>
                <button v-if="navigation[1].isActive" class="value--active" @click="open">Add to active</button>
            </td>
        </tr>
    </table>
</template>

<style lang="scss" scoped> 
.table-staking {
    border-collapse: collapse;
    width: 100%;

    td:last-child {
        width: 100%;
    }
    .header {
        border-bottom: 1px solid white;
    }
    .row--first {
        margin-top: 1.28rem;
    }
    .key {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 24px;
        padding-bottom: 0.94rem;
        width: 19.5rem;
        white-space: nowrap;
    }
    .key--first {
        text-align: left;
    }
    .value {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 2rem;
        padding: 0.85rem 8.5rem;
        text-align: center;
        white-space: nowrap;

        @media (max-width: 1200px) {
            padding: 0.85rem 5rem;
        }
    }
    .value--first {
        text-align: left;
        padding-left: 0;
    }
    .value--first-content {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.28rem;
    }
    .value--second {
        color: var(--color-green);
    }
    .value--third--content {
        display: flex;
        flex-flow: row;
        gap: 1.28rem;
    }
    .value--day {
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        // backdrop-filter: blur(8px);

        border-radius: 8px;
        padding: 0.68rem 1.54rem;
        border: 1px solid rgba(255, 255, 255, 0.37);
    }
    .value--day--special {
        background: linear-gradient(90.33deg, rgba(253, 253, 253, 0.1) 0.24%, rgba(143, 0, 255, 0.1) 0.25%, rgba(143, 0, 255, 0.049) 94.13%);
        // backdrop-filter: blur(8px);

        border-radius: 8px;
        border: 1px solid rgba(144, 55, 214, 1);
    }
    .value--last {
        text-align: right;
        padding-right: 0;
    }
    .value--subscribe {
        padding: 0.98rem 2.78rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;

        font-weight: 500;
        font-size: 1.71rem;
        line-height: 112%;
        letter-spacing: 0.025em;
    }
    .value--subscribe:hover {
        filter: brightness(75%);
    }
    .value--active {
        padding: 0.98rem 2.95rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 1);

        font-weight: 500;
        font-size: 1.71rem;
        line-height: 112%;
        letter-spacing: 0.025em;
    }
    .value--active:hover  {
        filter: brightness(75%);
    }
    .img {
        width: 3.85rem;
        height: 3.85rem;
    }

}
</style>