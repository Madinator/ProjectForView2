<script setup lang="ts">

</script>

<template>
    <div class="nft-offer-date">
        <input class="nft-offer-date__datepicker" type="date" />
    </div>
</template>

<style lang="scss" scoped> 
input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url('@/assets/svg/nft/datepicker.svg') no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
}
.nft-offer-date {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1rem 2.1rem;

    &__datepicker {
        font-weight: 600;
        font-size: 1.37rem;
        line-height: 85%;
        opacity: 0.6;
        width: 100%;
    }
}
</style>