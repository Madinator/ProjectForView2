<script setup lang="ts">

</script>

<template>
    <div class="post-writer" @click="$emit('open')">
        <img class="post-writer__user-img desktop" src="@/assets/img/game/GameCommentUser.png" alt=""/>
        <input class="post-writer__input" placeholder="What are you worried about?" />
        <div class="post-writer__actions">
            <img class="post-writer__icon" src="@/assets/svg/circleSmile.svg" alt="" />
            <img class="post-writer__icon" src="@/assets/svg/socials/instagramSqueare.svg" alt="" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.post-writer {
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
    border-radius: 14px;
    width: 100%;
    padding: 2rem 3.38rem;
    border: 1px solid rgba(255, 255, 255, 0.2);

    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 850px) {
        background: transparent;

        padding: 1.54rem 3rem;
    }
    &__user-img {
        width: 3.24rem;
        height: 3.24rem;
        border-radius: 100%;
        @media only screen and (min-width: 850px) {
            width: 2.56rem;
            height: 2.56rem;
        }
    }
    &__input {
        width: 100%;
        min-height: 100%;
        @media only screen and (min-width: 850px) {
            margin-left: 1.28rem;
        }
    }
    &__input::placeholder {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;
        opacity: 1;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__actions {
        display: flex;
        flex-flow: row;
        gap: 1.41rem;
    }
    &__icon {
        width: 3.24rem;
        height: 3.24rem;
        @media only screen and (min-width: 850px){
            width: 1.71rem;
            height: 1.71rem;
        }
    }

}
</style>