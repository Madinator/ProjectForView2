<script setup lang="ts">
import Chart from '@/components/Reusable/CreativeStudio/Chart.vue';
import Video from '@/components/Reusable/CreativeStudio/Video.vue';

const data = [
        {
            id: 0,
            active: true,
            title: 'Views',
            value: '10 876',
            stats: '20% more than in the last 30 days'
        },
        {
            id: 1,
            active: false,
            title: 'Viewing time',
            value: '10:28',
            stats: '20% more than in the last 30 days'
        },
        {
            id: 2,
            active: false,
            title: 'Subscribers',
            value: '+130',
            stats: ''
        },
    ]
</script>

<template>
    <div class="page page-review">
        <Chart :is-options="true" :options="data"/>
        <h2 class="most-popular">Most popular content<br class="mobile"> for the period</h2>
        <div class="video-list">
            <Video/>
            <div class="line"></div>
            <Video/>
            <div class="line"></div>
            <Video/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-review {
    .most-popular {
        margin-top: 4.28rem;
        font-weight: 600;
        font-size: 2.74rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            margin-top: 8rem;
            font-size: 23px !important;
        }
    }
    .video-list {
        margin-top: 2.57rem;
        display: flex;
        flex-flow: column;
        gap: 1.28rem;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
            gap: 2.81rem;
        }
    }
}
</style>