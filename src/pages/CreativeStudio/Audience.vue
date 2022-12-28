<script setup lang="ts">
import Chart from '@/components/Reusable/CreativeStudio/Chart.vue';
import ProgressBar from '@/components/Reusable/CreativeStudio/ProgressBar.vue';

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
    <div class="page page-audience">
        <Chart :options="data"/>
        <div class="content">
            <div class="block">
                <div class="item">
                    <h2 class="title">Country</h2>
                    <div class="stats">
                        <ProgressBar name="United Arab Emirates" :value="80.1"/>
                        <ProgressBar name="Serbia" :value="19.9"/>
                    </div>
                </div>
                <div class="item">
                    <h2 class="title">City</h2>
                    <div class="stats">
                        <ProgressBar name="Dubai" :value="50"/>
                        <ProgressBar name="Belgrade" :value="12"/>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="block">
                <div class="item">
                    <h2 class="title">Gender</h2>
                    <div class="stats">
                        <ProgressBar name="Male" :value="60"/>
                        <ProgressBar name="Female" :value="40"/>
                    </div>
                </div>
                <div class="item">
                    <h2 class="title">Age</h2>
                    <div class="stats">
                        <ProgressBar name="16-20" :value="1"/>
                        <ProgressBar name="20-24" :value="19.9"/>
                        <ProgressBar name="24-28" :value="79.1"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.page-audience {
    .content {
        margin-top: 3.42rem;
        display: flex;
        flex-flow: column;
        gap: 3.42rem;

        @media (max-width: 850px) {
            margin-top: 5.63rem;
            gap: 3.52rem;
        }
    }
    .stats {
        display: flex;
        flex-flow: column;
        gap: 3.42rem;
        margin-top: 3.42rem;

        @media (max-width: 850px) {
            margin-top: 3.52rem;
        }
    }
    .block {
        display: flex;
        flex-flow: row;
        justify-content: space-between;

        @media (max-width: 850px) {
            flex-flow: column;
            gap: 4.93rem;
        }
    }

    .title {
        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
}
</style>