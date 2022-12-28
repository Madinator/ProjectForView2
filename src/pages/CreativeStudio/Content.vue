<script setup lang="ts">
import Video from '@/components/Reusable/CreativeStudio/Video.vue';

</script>

<template>
    <div class="page page-content">
        <Video/>
        <div class="line"></div>
        <Video/>
        <div class="line"></div>
        <Video/>
        <div class="line"></div>
        <Video/>
        <div class="line"></div>
        <Video/>
    </div>
</template>

<style lang="scss" scoped>
.page-content {
    display: flex;
    flex-flow: column;
    gap: 1.28rem;

    @media (max-width: 850px) {
        margin-top: 4.22rem;
        gap: 2.81rem;
    }
}
</style>