<script setup lang="ts">
import { useBlogNewsStore } from '@/stores/blognews';
import { storeToRefs } from 'pinia';

const blogNewsStore = useBlogNewsStore();
const { activeBroadcastid, broadcastNames } = storeToRefs(blogNewsStore);

</script>

<template>
    <div class="blognews-switcher">
        <button 
            class="blognews-switcher__button" 
            v-for="(item, index) in broadcastNames"
            :class="activeBroadcastid === index ? 'blognews-switcher__button--active' : ''"
            @click="blogNewsStore.setActiveBroadCastid(index)">{{item}}</button>
    </div>
</template>

<style lang="scss" scoped> 
.blognews-switcher {
    display: flex;
    flex-flow: row;
    gap: 1.41rem;
    @media (min-width: 850px) {
        display: flex;
        flex-flow: column;
        min-width: 23rem;
    }
    &__button {
        position: relative;
        padding: 1.7rem 3.52rem;
        background-color: none;
        border-radius: 41px;
        transition: all 0.3s;
        @media (min-width: 850px) {
            text-align: left;
            border-radius: 87px;
        }
        &:hover {
            background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        }
    }
    &__button--active {
        background-color: rgba(144, 55, 214, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.2);
        &:hover {
            background-color: rgba(144, 55, 214, 0.5);
            filter: brightness(105%);
        }
    }
}
</style>