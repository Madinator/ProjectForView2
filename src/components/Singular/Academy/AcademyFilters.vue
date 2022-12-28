<script setup lang="ts">
import { ref } from 'vue';

// FILTERS DATA
const data = ref([
    {
        id: 0,
        name: "All",
        checkedStatus: true,
    },
    {
        id: 1,
        name: "Web 3.0",
        checkedStatus: false,
    },
    {
        id: 2,
        name: "Gamer",
        checkedStatus: false,
    },
    {
        id: 3,
        name: "Creator",
        checkedStatus: false,
    },
    {
        id: 4,
        name: "Trader",
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
        <div class="filters">
            <button class="filters__el btn" v-for="(item, index) in data" :class="{ active: item.checkedStatus }"
                @click="setFilter(item.id)" :key="index">
                {{ item.name }}</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filters {
    display: flex;
    flex-direction: column;
    gap: 2.6rem;

    @media only screen and (max-width: 850px) {
        flex-direction: row;
        overflow-x: scroll;
        white-space: nowrap;
        align-items: center;
        padding: 2rem 0;
    }

    &__el {
        align-self: flex-start;
        padding: 0.86rem 2.15rem;
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        backdrop-filter: blur(4.5px);
        border-radius: 87px;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 85%;
        border: 1px solid rgba(255, 255, 255, 0.37);

        @media only screen and (max-width: 850px) {
            padding: 1rem 3rem;
            font-size: 15px !important;

            &:first-child {
                margin-left: 2.6rem;
            }

            &:last-child {
                margin-right: 2.6rem;
            }
        }

        &:hover {
            opacity: 0.8;
        }

        &.active {
            background: rgba(144, 55, 214, 0.5);
            backdrop-filter: blur(4.5px);
        }
    }
}
</style>