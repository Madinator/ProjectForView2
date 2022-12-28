<script setup lang="ts">

</script>

<template>
    <div class="modal">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped> 
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: rgba(0,0,0,0.4);
    z-index: 100000;
}
</style>