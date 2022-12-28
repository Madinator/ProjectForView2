<script setup lang="ts">
import Video from '@/components/Reusable/CreativeStudio/Video.vue';
import Forum from '@/components/Reusable/CreativeStudio/Forum.vue';
</script>

<template>
   <div class="page page-my-content">
        <h2 class="title">Videos</h2>
        <div class="block">
            <Video/>
            <div class="line"></div>
            <Video/>
            <button class="showAll">Show all</button>
        </div>
        <h2 class="title title-next">Forum</h2>
        <div class="block">
            <Forum/>
            <div class="line"></div>
            <Forum/>
            <button class="showAll">Show all</button>
        </div>
   </div>
</template>

<style lang="scss" scoped>
.page-my-content {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: baseline;
    .title {
        font-weight: 600;
        font-size: 2.74rem;
        line-height: 3.34rem;

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }
    .block {
        width: 100%;
        margin-top: 2.5rem;
        display: flex;
        flex-flow: column;
        gap: 1.28rem;

        @media (max-width: 850px) {
            gap: 2.11rem;
        }
    }
    .showAll {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 2rem;
        color: var(--color-purple-dark);

        width: fit-content;
        margin-left: auto;

        &:hover {
            color: var(--color-purple-light)
        }

        @media (max-width: 850px) {
            font-size: 2.53rem;
            line-height: 2.96rem;
            margin-top: 1.41rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    .title-next {
        margin-top: 4.97rem;

        @media (max-width: 850px) {
            margin-top: 5.63rem;
        }
    }
}
</style>