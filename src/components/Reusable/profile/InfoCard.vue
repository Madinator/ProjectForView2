<script setup lang="ts">
import type { PropType } from 'vue';
import type { WalletInfo } from '@/typing/profile';

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    data: {
        type: Object as PropType<WalletInfo[]>,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="info-card">
        <div class="info-card__header">
            <img class="info-card__img" :src="image" alt="" />
            <h2 class="info-card__name">{{ name }}</h2>
        </div>
        <div class="info-card__line"></div>
        <div class="info-card__list">
            <div class="info-card__item" v-for="item in data">
                <span class="info-card__key">{{ item.key }}</span>
                <span class="info-card__value"
                    :class="item.key === 'Operation' ? 'info-card__value--special' : ''">{{ item.value }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info-card {
    cursor: pointer;
    min-width: 87vw;
    padding: 3.52rem 3.52rem 4.22rem;

    background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
    backdrop-filter: blur(40px);
    border-radius: 15px;

    border: 1px solid rgba(255, 255, 255, 0.2);

    &__header {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 2.11rem;
    }

    &__img {
        width: 4.22rem;
        height: 4.22rem;
    }

    &__name {
        font-weight: 500;
        font-size: 3.38rem;
        line-height: 4.1rem;

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }

    &__line {
        margin-top: 3.66rem;
        border-top: 1px solid rgba(242, 242, 242, 0.2);
    }

    &__list {
        margin-top: 2.81rem;

        display: flex;
        flex-flow: row wrap;
        gap: 3.38rem;
    }

    &__item {
        display: flex;
        flex-flow: column;
        gap: 0.71rem;
    }

    &__key {
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.4rem;

        opacity: 0.6;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__value {
        font-weight: 500;
        font-size: 2.53rem;
        line-height: 3.1rem;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    &__value--special {
        color: var(--color-yellow);
    }
}
</style>