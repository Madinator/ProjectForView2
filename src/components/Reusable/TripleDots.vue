<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

// const isOpen = ref(false);
// const toggle = () => {
//     isOpen.value = !isOpen.value;
// };

const edit = () => {
    emit('edit');
    closeDropdown();
}
const emit = defineEmits(['edit']);

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
};

const handleClick = (event: Event) => {
    if (sortDropdownOpenIndicator.value) {
        const target = event?.target as HTMLElement;
        const isClickInsideElement = target.closest('.triple-dots');

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
})
</script>

<template>
    <div class="triple-dots">
        <button @click="toggleDropdown">
            <img src="@/assets/svg/threeDots.svg" alt="" />
        </button>
        <div :class="!sortDropdownOpenIndicator ? 'closed' : ''" class="triple-dots__menu">
            <button class="triple-dots__button">Delete a post</button>
            <button class="triple-dots__button" @click="edit">Edit</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.triple-dots {
    position: relative;
    &__menu {
        position: absolute;
        z-index: 100;
        padding: 1.5rem 0;

        background: #61605e;
        backdrop-filter: blur(109.5px);
        border-radius: 10px;
        

        top: 3.27rem;
        right: -1rem;

        display: flex;
        flex-flow: column;
        transition: all .3s;
    }
    &__button {
        font-weight: 500;
        font-size: 1.54rem;
        line-height: 140%;
        white-space: nowrap;
        text-align: left;
        width: 20rem;
        padding: 1rem 2rem;
        border-radius: .5rem;

        @media only screen and (max-width: 850px) {
            font-size: 14px;
        }
    }
    &__button:hover {
        background-color: rgba(255, 255, 255, 0.18);
    }

}
</style>