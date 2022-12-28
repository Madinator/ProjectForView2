<script setup lang="ts">

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    isInput: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <div class="creative-studio-input">
        <label class="label">{{name}}</label>
        <input v-if="isInput" class="input"/>
        <textarea v-if="!isInput" class="input textarea" placeholder="You can write something"></textarea>
    </div>
</template>

<style lang="scss" scoped>
.creative-studio-input {
    display: flex;
    flex-flow: column;
    align-items: left;
    gap: 1.28rem;
    width: 100%;

    @media (max-width: 850px) {
        gap: 1.41rem;
    }

    .label {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .input {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 1.62rem 2.56rem;

        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;
        opacity: 0.6;

        @media (max-width: 850px) {
            padding: 1.83rem 4.22rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .textarea {
        padding: 2.14rem 2.56rem;
        height: 8.56rem;

        @media (max-width: 850px) {
            padding: 1.83rem 4.22rem;
            height: 11.26rem;
        }
    }
}
</style>