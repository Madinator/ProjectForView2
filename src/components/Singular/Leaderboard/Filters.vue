<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    data.value.forEach(el => {
        if (router.currentRoute.value.fullPath.includes(el.name.toLocaleLowerCase())) {
            el.checkedStatus = !el.checkedStatus;
        } else {
            el.checkedStatus = false;
        }
    });
})

// FILTERS DATA
const data = ref([
    {
        id: 0,
        name: "Profile",
        checkedStatus: false,
    },
    {
        id: 1,
        name: "Statistics",
        checkedStatus: false,
    },
    {
        id: 2,
        name: "Guild",
        checkedStatus: false,
    },
    {
        id: 3,
        name: "NFT",
        checkedStatus: false,
    },
    {
        id: 4,
        name: "Achivements",
        checkedStatus: false,
    },
]);

// FILTER CHANGE HANDLER
const setFilter = (id: number): void => {
    data.value.forEach(el => {
        if (el.id === id) {
            router.push(el.name.toLocaleLowerCase());
            el.checkedStatus = !el.checkedStatus;
        } else {
            el.checkedStatus = false;
        }
    });

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

        @media only screen and (min-width: 500px) and (max-width: 850px) {
            &:first-child {
                margin-left: 0;
            }
        }
    }

    .picked {
        background: rgba(144, 55, 214, 0.5);
        border-color: rgba(255, 255, 255, 0.06);
    }
}
</style>
