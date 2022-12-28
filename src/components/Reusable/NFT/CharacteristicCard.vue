<script setup lang="ts">

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    percent: {
        type: Number,
        required: true
    },
})
</script>

<template>
    <div class="characteristic-card">
        <span class="characteristic-card__text characteristic-card__name">{{ name }}</span>
        <span class="characteristic-card__text characteristic-card__value">{{ value }}</span>
        <span class="characteristic-card__text characteristic-card__percent">{{ percent }}%</span>
    </div>
</template>

<style lang="scss" scoped>
.characteristic-card {
     border: 1px solid #FFFFFF;
     border-radius: 10px;
     width: 22rem;
     // height: 14.65rem;

     display: flex;
     flex-flow: column;
     justify-content: center;
     align-items: center;
     padding: 2.2rem 0;

     @media (min-width: 850px) {
         width: 45%;
     }

     &__name {
         font-size: 1.5rem;
         opacity: 0.6;

         @media only screen and (max-width: 850px) {
             font-size: 14px !important;
         }
     }

     &__value {
         font-size: 2.2rem;
         line-height: 1.45;

         @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
     }

     &__percent {
         font-size: 1.5rem;
         opacity: 0.6;

         @media only screen and (max-width: 850px) {
            font-size: 14px !important;
        }
     }
 }
</style>