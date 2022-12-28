<script setup lang="ts">
import { ref, type PropType } from 'vue';

const props = defineProps({
    options: {
        type: Object as PropType<string[]>,
        required: true,
    }
});

const emit = defineEmits(['pickedSteam'])

const choosed = ref(props.options[0]);

const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};

const chooseOption = (value: string) => {
    choosed.value = value;
    if(choosed.value === 'Stream') {
        emit('pickedSteam', true);
        return;
    }
    emit('pickedSteam', false)
}
</script>

<template>
   <button class="upload-select" @click="toggle">
        <span class="text">{{choosed}}</span>
        <img class="arrow" :class="{'arrow--open': isOpen}" src="@/assets/svg/arrowWhite.svg" alt="" />
        <Transition>
            <div v-if="isOpen" class="options">
                <button class="option" v-for="item in options" @click="chooseOption(item)">{{ item }}</button>
            </div>
        </Transition>
   </button>
</template>

<style lang="scss" scoped> 
.upload-select {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1.62rem 2.56rem;
    width: 100%;

    display: flex;
    flex-flow: row;
    gap: 2.56rem;
    align-items: center;
    justify-content: space-between;

    .text {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media (max-width: 850px) {
            font-size: 2.25rem;
        }
    }
    .arrow {
        width: 2rem;
        height: 2rem;
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
        z-index: 50;
        background: #191919;
        border: 1px solid rgba(255, 255, 255, 0.06);
        /* Grey */
        padding: 2.56rem 0;
        border-radius: 9px;

        display: flex;
        flex-flow: column;
        width: 100%;
        backdrop-filter: blur(75px);
        @media (max-width: 850px) {
            top: 40px;
        }
    }
    .option {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 120%;
        padding: 0.85rem 2.56rem;
        transition: all 0.3s;
        border-radius: .5rem;
        text-align: left;

        @media (max-width: 850px) {
            padding: 1.2rem 3.7rem 1.2rem 2.56rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .option:hover {
        // background-color: #85888A;
        background-color: lighten(#000, 20%);

    }
}
</style>