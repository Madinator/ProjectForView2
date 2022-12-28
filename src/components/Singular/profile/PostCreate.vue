<script setup lang="ts">import { ref } from 'vue';

const text = ref('');
</script>

<template>
    <div class="post-create">
        <div class="post-create__header">
            <button @click="$emit('close')">
                <img class="post-create__close" src="@/assets/svg/cross.svg" alt=""/>
            </button>
            <span class="post-create__author">KARNAVAL</span>
            <span></span>
        </div>
        <div class="post-create__line"></div>
        <label id="textarea" class="post-create__label" placeholder="What are you worried about?" >
            {{text}}
        </label>
        <div class="post-create__bottom">
            <div class="post-create__line"></div>
            <div class="post-create__base">
                <div class="post-create__actions">
                    <img class="post-create__action" src="@/assets/svg/socials/instagramSqueare.svg" alt=""/>
                    <img class="post-crate__action" src="@/assets/svg/smileCycle.svg" alt="" />
                </div>
                <input class="post-create__input" type="textarea"  v-model="text" />
                <img class="post-create__send" src="@/assets/svg/send.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.post-create {
    position: fixed;
    z-index: 10000;
    min-width: 100vw;
    min-height: calc(100vh - 2.81rem);
    top: 2.81rem;
    // padding: 2.11rem 3.52rem;

    background: linear-gradient(90.33deg, rgba(0, 0, 0, 0.062) 0.24%, rgba(240, 237, 247, 0.043) 94.13%);
    backdrop-filter: blur(45px);
    border-radius: 24px 24px 0 0;

    &__header {
        padding: 2.11rem 3.52rem 1.41rem;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

    }
    &__close {
        width: 2.81rem;
        height: 2.81rem;
    }
    &__author {
        font-family: 'DELIRIUM';
        font-style: normal;
        font-weight: 400;
        font-size: 6.76rem;
        line-height: 6.76rem;
    }
    &__line {
        min-width: 100%;
        border-top: 1px solid #B7B7B7;
    }
    &__label {
        display: block;
        min-height: 70vh;
        max-height: 70vh;
        max-width: 100vw;
        padding: 3.52rem;

        word-wrap: break-word;
        overflow-y: scroll;

        font-weight: 400;
        font-size: 2.25rem;
        line-height: 140%;
        color: white;
    }
    &__label::placeholder {
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 140%;
        color: white;
    }
    &__bottom {
        position: fixed;
        bottom: 0;

        width: 100%;
    }
    &__bottom-content {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        align-items: center;
    }
    &__base {
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    &__actions {
        display: flex;
        flex-flow: row;
        gap: 2.11rem;

        margin-left: 3.53rem;
    }
    &__input {  
        height: 7.6rem;
        width: 100%;
        margin-left: 2rem;

        font-weight: 400;
        font-size: 2.25rem;
    }
    &__action {
        width: 2.81rem;
        height: 2.81rem;
    }
    &__send {
        margin-right: 3.52rem;
    }
}
</style>