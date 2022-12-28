<script setup lang="ts">
const props = defineProps({
    name: String,
    image: String,
})
</script>

<template>
    <div class="input-with-img">
        <img :src="image" alt="" />
        <input type="search" class="input-with-img__input" :placeholder="props.name">
    </div>
</template>

<style lang="scss" scoped> 
    .input-with-img {
        cursor: pointer;
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        border-radius: 1.13rem;
        padding: 1.408rem 2.112rem;
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        gap: 1.549rem;
        border: 0.14rem solid;
        border-image-source: linear-gradient(94.8deg, rgba(255, 255, 255, 0.15) -1.62%, rgba(255, 255, 255, 0.06) 104.45%, rgba(255, 255, 255, 0.06) 104.45%, #FFFFFF 104.45%);
        border-radius: .5rem;
        
        &__input {
            width: 100%;
            height: 100%;
        border-radius: .5rem;
        }
        ::placeholder {
            font-weight: 500;
            font-size: 2.25rem;
            line-height: 2.67rem;
            color: white;
        }
    }
</style>