<script setup lang="ts">
import AnalyticsNav from '@/components/Reusable/CreativeStudio/AnalyticsNav.vue';
import Select from '@/components/Reusable/CreativeStudio/Select.vue';
</script>

<template>
    <div class="page page-analytics">
        <div class="header">
            <AnalyticsNav />
            <router-link to="/upload" class="button btn-purple mobile">Add a video</router-link>
            <div class="line mobile"></div>
            <Select />
        </div>
        <section class="content">
            <RouterView></RouterView>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.page-analytics {
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
    .button {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 140%;
        padding: 0.94rem 4.8rem ;

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
    .content {
        margin-top: 3.42rem;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
        }
    }
}
</style>