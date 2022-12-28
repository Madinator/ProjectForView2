<script setup lang="ts">
import router from '@/router';
import { useProfileStore } from '@/stores/profile';

const profileStore = useProfileStore();

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
});

const tab = (to: string) => {
    if(window.innerWidth < 850) {
        router.push(to);
    }
    profileStore.toggleWalletTab(to);
}
</script>

<template>
    <button class="wallet-nav" :class="active ? 'wallet-nav--active' : ''" @click="tab(to)">
        <h2 class="wallet-nav__name">{{name}}</h2>
        <img class="wallet-nav__img mobile" src="@/assets/svg/arrowWhite.svg" alt="" />
    </button>
</template>

<style lang="scss" scoped>
.wallet-nav {
    width: 100%;
    background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
    backdrop-filter: blur(40px);

    border-radius: 7px;

    padding: 1.26rem 0;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 1.41rem;

    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
        filter: brightness(75%)
    }
    &--active {
        background: var(--color-purple-dark);
    }
    @media only screen and (min-width: 850px) {
        width: fit-content;

        padding: 0.94rem 4.62rem;
    }
    &__name {
        font-weight: 400;
        font-size: 2.81rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }
    &__img {
        width: 2.53rem;
        height: 2.53rem;
        transform: rotate(90deg);
    }
}
</style>