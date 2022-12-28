<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    headers: {
        type: Object as PropType<String[]>,
        required: true
    },
    data: {
        type: Object as PropType<Array<String[]>>,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
</script>

<template>
    <table class="wallet-table">
        <tr class="wallet-table__row wallet-table__header">
            <th 
                class="wallet-table__item wallet-table__title" 
                v-for="(name, index) in headers"
                :class="index === 0 ? 'wallet-table__item--first' : ''"
                >
                {{name}}
            </th>
        </tr>
        <tr class="wallet-table__row wallet-table__data" v-for="array in data">
            <td 
                class="wallet-table__item" 
                v-for="(item, index) in array"
                :class="[index === 0 ? 'wallet-table__item--first' : '', item === 'Close' ? 'wallet-table__item--operation' : '']"
                >
                <img class="wallet-table__img" v-if="(index === 0)" :src="image" alt=""/>
                <span>{{item}}</span>
            </td>
        </tr>
    </table>
</template>

<style lang="scss" scoped>
.wallet-table {
    width:100%;
    border-collapse: collapse;
    &__row {
        border-bottom: 1px solid rgba(242, 242, 242, 0.3);
        text-align: right;
    }
    &__item {
        padding: 3.52rem 0;
        font-weight: 500;
        font-size: 1.37rem;
        line-height: 1.63rem;
    }
    &__item--first {
        text-align: left;
        display: flex;
        flex-flow: row;
        gap: 1.28rem;
        align-items: center;
    }
    &__item--operation {
        color: var(--color-yellow);
    }
    &__title {
        font-weight: 400;
    }
}
</style>