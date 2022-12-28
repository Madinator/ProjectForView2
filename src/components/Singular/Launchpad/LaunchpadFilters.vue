<script setup lang="ts">
import { ref } from 'vue';

// FILTERS DATA
const data = ref([
    {
        id: 0,
        name: "Currency1 Pool",
        checkedStatus: true,
    },
    {
        id: 1,
        name: "Currency2 Pool",
        checkedStatus: false,
    },
    {
        id: 2,
        name: "Currency3 Pool",
        checkedStatus: false,
    },
]);

// FILTER CHANGE HANDLER
const setFilter = (id: number): void => {
    data.value.forEach(el => {
        el.id === id ? el.checkedStatus = true : el.checkedStatus = false;
    })
}

</script>

<template>
    <div class="filters">
        <button class="filters__el btn" v-for="(item, index) in data" :class="{ picked: item.checkedStatus }"
            @click="setFilter(item.id)" :key="index">
            {{ item.name }}</button>
    </div>
</template>

<style lang="scss" scoped>
.filters {
    display: flex;

    @media only screen and (min-width: 670px) and (max-width: 850px) {
        justify-content: center;
    }

    @media only screen and (max-width: 850px) {
        overflow-x: scroll;
        white-space: nowrap;
        align-items: center;
        padding: 2rem 0;
    }

    &__el {
        margin-right: 1.71rem;
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        backdrop-filter: blur(4.5px);
        border-radius: 87px;
        padding: 0.85rem 2.14rem;
        border: 1px solid;
        border-color: rgba(255, 255, 255, 0.37);

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
            
            &:first-child {
                margin-left: 2rem;
            }
        }
    }

    .picked {
        background: rgba(144, 55, 214, 0.5);
        border-color: rgba(255, 255, 255, 0.06);
    }
}
</style>
