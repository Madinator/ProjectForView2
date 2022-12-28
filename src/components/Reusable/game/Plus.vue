<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    index: {
        type: Number,
        required: true
    },
});
</script>

<template>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line :id="'plus-' + index" x1="7" y1="0" x2="7" y2="14" style="stroke:white;stroke-width:3" />
        <line x1="0" y1="7" x2="14" y2="7" style="stroke:white;stroke-width:3" />
    </svg>

</template>

<style lang="scss" scoped> 
.plus-animation {
    animation: plusAnimation 0.3s forwards;
}
@keyframes plusAnimation {
    100% {
        opacity: 0;
    }
}
.minus-animation {
    animation: minusAnimation 0.3s forwards;
}
@keyframes minusAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>