<script setup lang="ts">
import ProjectCard from '@/components/Reusable/profile/ProjectCard.vue';
</script>

<template>
    <div class="page page-launcpad">
        <ProjectCard />
        <ProjectCard />
    </div>
</template>

<style lang="scss" scoped>
.page-launcpad {
    display: flex;
    flex-flow: column;
    gap: 2.81rem;
    padding: 0 3.38rem;
}
</style>