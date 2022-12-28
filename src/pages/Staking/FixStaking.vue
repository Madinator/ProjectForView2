<script setup lang="ts">
import Table from '@/components/Reusable/Staking/Table.vue';
import Item from '@/components/Reusable/Staking/Item.vue';

</script>

<template>
    <div class="page fix-staking">
        <Table class="desktop"/>
        <div class="list mobile">
            <Item v-for="i in 6" />
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.fix-staking {
    .list {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2.11rem;
    }
}
</style>