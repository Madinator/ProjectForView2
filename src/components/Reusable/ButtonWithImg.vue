<script setup lang="ts">
const props = defineProps({
    name: String,
    image: String,
})
</script>

<template>
    <button class="button-with-img">
        <img :src="image" alt="" />
        <span class="button-with-img__text">{{ name }}</span>
    </button>
</template>

<style lang="scss" scoped>
.button-with-img {
     display: flex;
     flex-flow: row;
     align-items: center;
     justify-content: center;
     padding-left: 2.46rem;
     cursor: pointer;
     background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
     border-radius: .13rem;
     display: flex;
     flex-flow: row;
     justify-content: flex-start;
     gap: 1.549rem;
     border-radius: 8px;
     width: 100%;
     height: 5.63rem;
     border: 1px solid rgba(255, 255, 255, .2);

     // border: 0.14rem solid;
     // border-image-source: linear-gradient(94.8deg, rgba(255, 255, 255, 0.15) -1.62%, rgba(255, 255, 255, 0.06) 104.45%, rgba(255, 255, 255, 0.06) 104.45%, #FFFFFF 104.45%);
     &__text {
         font-weight: 500;
         font-size: 2.25rem;
         line-height: 2.67rem;

         @media only screen and (max-width: 850px) {
            font-size: 15px !important;
         }
     }
 }
</style>