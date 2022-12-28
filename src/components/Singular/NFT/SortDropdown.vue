<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const sortDropdownOpenIndicator = ref<boolean>(false);

const closeDropdown = (): void => {
    sortDropdownOpenIndicator.value = false;
};

const toggleDropdown = (): void => {
    if (sortDropdownOpenIndicator.value) {
        closeDropdown();
    } else {
        sortDropdownOpenIndicator.value = true;
    }
}

const handleClick = (event: Event) => {
    if (sortDropdownOpenIndicator.value) {
        const target = event?.target as HTMLElement;
        const isClickInsideElement = target.closest('.sort-container');

        if (!isClickInsideElement) {
            closeDropdown();
        }
    }
}
onMounted(() => {
    window.addEventListener('click', handleClick)
});

onUnmounted(() => {
    window.removeEventListener('click', handleClick)
});

</script>

<template>
    <div class="sort-container desktop">
        <button @click="toggleDropdown" class="sort-dropdown-opener">
            <span class="current-sort">Sort by</span>
            <img :class="{'arrow-active': sortDropdownOpenIndicator}" src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow">
        </button>
        <div :class="{'closed': !sortDropdownOpenIndicator}" class="dropdown sort-dropdown">
            <ul @click="closeDropdown" class="list">
                <li class="item">
                    <button class="parameter">
                        <span>Recently created</span>
                        <div class="circle-container"></div>
                    </button>
                </li>
                <li class="item">
                    <button class="parameter">
                        <span>Recently sold</span>
                        <div class="circle-container"></div>
                    </button>
                </li>
                <li class="item">
                    <button class="parameter">
                        <span>Recently received</span>
                        <div class="circle-container"></div>
                    </button>
                </li>
                <li class="item">
                    <button class="parameter">
                        <span>Ending soon</span>
                        <div class="circle-container"></div>
                    </button>
                </li>
                <li class="item">
                    <button class="parameter">
                        <span>Price low to high</span>
                        <div class="circle-container"></div>
                    </button>
                </li>
                <li class="item">
                    <button class="parameter">
                        <span>Price high to low</span>
                        <div class="circle-container"></div>
                    </button>
                </li>
                <li class="item">
                    <button class="parameter">
                        <span>Highest last sale</span>
                        <div class="circle-container"></div>
                    </button>
                </li>
                <li class="item">
                    <button class="parameter">
                        <span>Oldest</span>
                        <div class="circle-container"></div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>


.sort-container {
    position: relative;

    .sort-dropdown-opener {
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30rem;
        padding: 1rem 2rem;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .04));
        backdrop-filter: blur(3px);
        border: 1px solid rgba(255, 255, 255, .2);
        border-radius: 1.2rem;

        &:hover {
            background-color: rgba(255, 255, 255, .07);
        }

        .arrow {
            width: 1.25rem;
            transition: all .2s;
        }

        .arrow-active {
            transform: rotate(-180deg);
        }
    }

    .sort-dropdown {
        position: absolute;
        top: 110%;
        right: 0;
        z-index: 1000;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .04));
        border: 1px solid rgba(255, 255, 255, .2);
        backdrop-filter: blur(20px);
        border-radius: 1.2rem;
        width: 30rem;
        padding: 1.5rem 0;
        transition: all .3s;


        .list {

            .item {

                .parameter {
                    width: 100%;
                    font-weight: 500;
                    padding: 1rem 2.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: .6rem;

                    &:hover {
                        background-color: rgba(255, 255, 255, .18);
                    }

                    .circle-container {
                        border-radius: 40rem;
                        width: 1.75rem;
                        height: 1.75rem;
                        border: 2px solid var(--color-white);
                        transition: all .2s;
                    }

                    &:hover .circle-container {
                        background-color: var(--color-white);
                    }
                }
            }
        }
    }
}
</style>