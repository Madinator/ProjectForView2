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
</script>

<template>
    <button class="select-governance" @click="toggle">
        <span class="name">{{name}}</span>
        <img class="arrow" :class="{'arrow--open': isOpen}" src="@/assets/svg/arrowWhite.svg" alt="" />
    </button>
</template>

<style lang="scss" scoped> 
.select-governance {
   display: flex;
   flex-flow: row;
   gap: 1.37rem;
   align-items: center;

   @media (max-width: 850px) {
        gap: 1.41rem;
   }
   .name {
        color: #B8B8B8;
        font-weight: 700;
        font-size: 1.54rem;
        line-height: 2.31rem;
        @media (max-width: 850px) {
            font-size: 2.53rem;
            line-height: 3.8rem;
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

}
</style>