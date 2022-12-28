<script setup lang="ts">import { ref } from 'vue';


const props = defineProps({
    title: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true,
    },
    fontSize: {
        type: Number,
        required: false,
    }
});

const isOpen = ref(false);
const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="toggle-info">
        <button class="toggle-info__header" @click="toggle">
            <span class="toggle-info__name" :style="{'font-size': props.fontSize + 'rem'}">{{props.title}}</span>
            <img class="toggle-info__arrow" :class="isOpen ? 'toggle-info__arrow-open': ''" src="@/assets/svg/Reusable/arrow3.svg" alt="" />
        </button>
        <div class="toggle-info__content" :style="[isOpen ? { maxHeight: props.height + 'px' }: { maxHeight: 0 }]">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.toggle-info {
    &__header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        &:hover .toggle-info__name {
            opacity: .75;
        }
    }
    &__name {
        font-weight: 500;
        // font-size: 4.51rem;
        font-size: 2.2rem !important;
        line-height: 3rem;
        transition: all .3s;
        @media (min-width: 850px) {
            font-size: 2.4rem;
            line-height: 115%;
        }
    }
    &__arrow {
        width: 1rem;
        transition: all 0.3s;

        @media only screen and (max-width: 850px) {
            width: 1.5rem;
        }
    }
    &__arrow-open {
        transform: rotate(180deg);
    }
    &__content {
        margin-top: 2.81rem;
        overflow: hidden;
        transition: all 0.3s;
    }
}
</style>