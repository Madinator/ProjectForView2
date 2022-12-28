<script setup lang="ts">
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();

const profileStore = useProfileStore();
const { walletNavigation } = storeToRefs(profileStore);

const tab = (to: string) => {
    profileStore.toggleWalletTab(to);
    moveRight();
};

const moveRight = () => {
    let element = document.getElementsByClassName('page-my-wallet__navs')[0];
    if (profileStore.getActiveTab() === 'Launchpad') {
        element.scrollLeft = element.scrollWidth;
    }
    else {
        element.scrollLeft = 0;
    }
}

onMounted(() => {
    profileStore.toggleWalletTab(route.name);
    moveRight();
});
</script>

<template>
    <div class="page page-my-wallet">
        <div class="page-my-wallet__navs">
            <RouterLink v-for="nav in walletNavigation" :to="nav.to">
                <button class="page-my-wallet__nav" :class="nav.active ? 'page-my-wallet__nav--active' : ''"
                    @click="tab(nav.to)">
                    {{ nav.name }}
                </button>
            </RouterLink>
        </div>
        <div class="page-my-wallet__page">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-my-wallet {
    min-width: 100%;
    min-height: 100vh;
    padding: 12.4rem 0 6.76rem;
    background: #000000;

    &__navs {
        display: flex;
        flex-flow: row;
        gap: 1.12rem;

        overflow-y: scroll;

        -ms-overflow-style: none;
        /* Internet Explorer 10+ */
        scrollbar-width: none;
    }

    &__navs::-webkit-scrollbar {
        display: none;
    }

    &__nav {
        padding: 0.84rem 4.44rem;
        background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
        backdrop-filter: blur(40px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 7px;

        border: 1px solid rgba(255, 255, 255, 0.2);

        font-weight: 400;
        font-size: 2.81rem;
        line-height: 140%;

        white-space: nowrap;

        transition: all 0.3s;

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }

    &__nav:hover {
        filter: brightness(75%);
    }

    &__nav--active {
        background-color: var(--color-purple-dark);
    }

    &__page {
        margin-top: 3.52rem;
    }
}
</style>