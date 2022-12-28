<script setup lang="ts">
import { useCreativeStudioStore } from '@/stores/creativeStudio';
import { storeToRefs } from 'pinia';

const emit = defineEmits(['close']);

const creativeStudioStore = useCreativeStudioStore();
const { navigation } = storeToRefs(creativeStudioStore);

const tab = (to: string) => {
    creativeStudioStore.toggleTab(to);
    emit('close');
}
</script>

<template>
    <div class="creative-studio-navigation">
        <div class="line mobile"></div>
        <div class="user">
            <button>
                <img class="img" src="@/assets/img/game/GameCommentUser.png" alt="" />
            </button>
            <div class="info">
                <h2 class="name">mwoodo</h2>
                <span class="count">466k subscribers</span>
            </div>
        </div>
        <div class="line line-next mobile"></div>
        <div class="navs">
            <RouterLink 
                class="nav" 
                v-for="item in navigation" 
                :to="item.to"
                :class="item.active ? 'nav-active' : ''"
                @click="tab(item.to)"
                >{{item.name}}</RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.creative-studio-navigation {
    .user {
        display: flex;
        flex-flow: row;
        gap: 1.37rem;
        align-items: center;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
        }
    }
    .img {
        width: 6.85rem;
        height: 6.85rem;
        border-radius: 100%;
        cursor: pointer;

        @media (max-width: 850px) {
            width: 11.27rem;
            height: 11.27rem;
        }
    }
    .info {
        display: flex;
        flex-flow: column;
        gap: 0.86rem;

        @media (max-width: 850px) {
            gap: 1.41rem
        }
    }
    .name {
        font-family: 'DELIRIUM';
        font-weight: 400;
        font-size: 3.42rem;
        line-height: 85%;

        @media (max-width: 850px) {
            font-size: 5.63rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 39px !important;
        }
    }
    .count {
        font-weight: 400;
        font-size: 1.37rem;
        line-height: 85%;
        white-space: nowrap;

        @media (max-width: 850px) {
            font-size: 2.25rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .line-next {
        margin-top: 2.81rem;
    }
    .navs {
        margin-top: 4.3rem;
        display: flex;
        flex-flow: column;
        gap: 2.57rem;
        align-items: baseline;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
            gap: 4.23rem;
        }
    }
    .nav {
        color: #40354D;
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 120%;
        &:hover {
            filter: brightness(145%);
        }

        @media (max-width: 850px) {
            font-size: 2.81rem;
            color: #F2F2F2;
        }

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }
    .nav-active {
        color: var(--color-white);
        &:hover {
            filter: brightness(75%);
        }
    }
}
</style>