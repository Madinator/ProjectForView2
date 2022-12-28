<script setup lang="ts">import { ref } from 'vue';


const props = defineProps({
    name: {
        type: String,
        required: true
    }
});

const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
}
const handleFocusOut = () => {
    isOpen.value = false;
}
</script>

<template>
    <button class="select-governance" @click="toggle" @focusout="handleFocusOut">
        <span class="name">{{name}}</span>
        <img class="arrow" :class="{'arrow--open': isOpen}" src="@/assets/svg/arrowWhite.svg" alt="" />
        <Transition>
            <div v-if="isOpen" class="options">
                <button class="option">last 7 days</button>
                <button class="option">Last 30 days</button>
                <button class="option">Last 90 days</button>
                <button class="option">Last year</button>
                <button class="option">in all time</button>
            </div>
        </Transition>
    </button>
</template>

<style lang="scss" scoped> 
.select-governance {
    display: flex;
    flex-flow: row;
    gap: 8.52rem;
    align-items: center;
    position: relative;
    height: fit-content;

    background: rgba(255, 255, 255, 0.04);
    border-radius: 10px;

    border: 1px solid rgba(255, 255, 255, 0.2);

    padding: 1.41rem 2.58rem;

    @media (max-width: 850px) {
        padding: 1.41rem 2.81rem;
        justify-content: space-between;
        width: 100%;
    }
    .name {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;
        white-space: nowrap;
        @media (max-width: 850px) {
            line-height: 3.1rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    .arrow {
        transform: rotate(180deg);
        transition: all 0.3s;
   }
   .arrow--open {
        transform: rotate(0);
   }
   .options {
        position: absolute;
        top: 55px;
        left: 0;
        z-index: 59;
        display: flex;
        flex-flow: column;
        width: 100%;
        background-color: #302A49;
        padding: 2.14rem 0 2.56rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        backdrop-filter: blur(75px);
        width: 100%;
        transition: all 0.3s;
        @media (max-width: 850px) {
            top: 60px;
        }
    .option {
        padding: 0.85rem 2.56rem;
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;
        transition: all 0.3s;
        width: 100%;
        text-align: left;
        @media (max-width: 850px) {
            line-height: 3.1rem; 
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    .option:hover {
        // background-color: #85888A;
        background-color: lighten(rgba(255, 255, 255, 0.2), 20%);

    }
   }
   .select-governance:hover {
        background-color: lighten(rgba(255, 255, 255, 0.04), 20%);
   }
}
</style>