<script setup lang="ts">

</script>

<template>
    <button class="nft-buton-secondary">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.nft-buton-secondary {
     background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
     backdrop-filter: blur(4.5px);
     border-radius: 5px;

     height: 5.63rem;
     width: 100%;

     font-weight: 400;
     font-size: 2.53rem;
     line-height: 85%;

     @media only screen and (max-width: 850px) {
         font-size: 17px !important;
     }
 }
</style>