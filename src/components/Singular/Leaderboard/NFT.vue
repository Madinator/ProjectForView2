<script setup lang="ts">
import NFTCard from '@/components/Reusable/NFTCard.vue';


</script>

<template>
    <div class="nft">
        <NFTCard v-for="i in 12" />
    </div>
</template>


<style lang="scss" scoped>
.nft {
    display: grid;
    gap: 2.6rem;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
}
</style>