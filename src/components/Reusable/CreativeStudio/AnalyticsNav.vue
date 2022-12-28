<script setup lang="ts">
import NavigationButton from '@/components/Reusable/NavigationButton.vue';
import router from '@/router';
import { useCreativeStudioStore } from '@/stores/creativeStudio';
import { storeToRefs } from 'pinia';

const creativeStudioStore = useCreativeStudioStore();
const { analyticsNav } = storeToRefs(creativeStudioStore);

const tab = (to: string) => {
    creativeStudioStore.toggleAnalyticsTab(to);
    router.push(to);
}
</script>

<template>
    <div class="analytics-navigation">
        <NavigationButton 
            v-for="item in analyticsNav" 
            :active="item.active" 
            :name="item.name"
            @click="tab(item.to)"
            />
    </div>
</template>

<style lang="scss" scoped>
.analytics-navigation {
    display: flex;
    flex-flow: row;
    gap: 4.71rem;

    @media (max-width: 850px) {
        width: 100%;
        justify-content: space-between;
    }
}
</style>