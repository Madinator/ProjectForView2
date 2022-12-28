<script setup lang="ts">

</script>

<template>
    <button class="nft-button-base">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped> 

.nft-button-base {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;

    padding: 1.28rem 5.13rem;

    font-weight: 600;
    font-size: 2.07rem;
    line-height: 85%;
    border: 1px solid rgba(255, 255, 255, .2);

    &:hover {
        background: rgba(255, 255, 255, 0.15);
    }
}
</style>