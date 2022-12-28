<script setup lang="ts">
const props = defineProps({
    headers: {
        type: Array<String>,
        required: true,
    },
    values: {
        type: Array<Array<String>>,
        required: true,
    }
})
</script>

<template>
    <div class="nft-table">
        <table class="nft-table__table">
            <tr class="nft-table__col">
                <th class="nft-table__item nft-table__name" v-for="item in props.headers">{{item}}</th>
            </tr>
            <tr class="nft-table__col" v-for="array in values">
                <td class="nft-table__item" v-for="item in array">
                    <div class="nft-table__value" :class="item === 'surfside' ? 'nft-table__value-name' : '' ">
                        <img v-if="item === '1.12 BUSD ≈ ₽ 67.03'" class="nft-table__img" src="@/assets/svg/nft/eth.svg" alt="" />
                        {{item}}
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped> 

.nft-table {
    &__table {
        border-collapse: collapse;
        text-align: left;
        width:100%;
        table-layout: fixed;
        overflow-wrap: break-word;
    }
    &__col {
        border-bottom: 1px solid rgba(242, 242, 242, 0.2);
    }
    &__item {
        padding: 1.71rem 1.71rem 1.28rem 1.28rem;
    }
    &__item {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 2.05rem;
        color: #FFFFFF;
        opacity: 0.7;
    }
    &__name {
        font-size: 1.37rem;
        line-height: 1.71rem;
    }
    &__img {
        width: 2.05rem;
        height: 2.05rem;
    }
    &__value {
        display: flex;
        flex-flow: row;
        gap: 1.28rem;
    }
    &__value-name {
        color: var(--color-yellow);
    }
}
</style>