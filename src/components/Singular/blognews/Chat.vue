<script setup lang="ts">

</script>

<template>
    <div class="blognews-chat">
        <div class="blognews-chat__main">
            <section class="blognews-chat__header">
                <div class="blognews-chat__header-left">
                    <span class="blognews-chat__chat">Chat</span>
                    <span class="blognews-chat__text">Interesting</span>
                </div>
                <div class="blognews-chat__header-center">
                    <img class="blognews-chat__icon" src="@/assets/svg/human.svg" alt="" />
                    <span class="blognews-chat__count">92</span>
                </div>
                <button @click="$emit('close')">
                    <img class="blognews-chat__close" alt="" src="@/assets/svg/closeWhite.svg" />
                </button>
            </section>
            <div class="blognews-chat__line"></div>
            <div class="blognews-chat__messages">
                <div class="blognews-chat__message-container" v-for="i in 20">
                    <img class="blognews-chat__img" src="@/assets/img/game/GameCommentUser.png" alt="" />
                    <div class="blognews-chat__user">
                        <span class="blognews-chat__name">RESHALA HELEX</span>
                        <span class="blognews-chat__message">What are you worried about?</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blognews-chat {
     background: linear-gradient(90.33deg, rgba(0, 0, 0, 0.062) 0.24%, rgba(240, 237, 247, 0.043) 94.13%);
     backdrop-filter: blur(45px);

     border-radius: 24px;


     width: 100%;

     &__main {
         padding: 3.52rem 3.52rem 0;

     }

     &__header {
         display: flex;
         flex-flow: row;
         justify-content: space-between;
         align-items: center;
     }

     &__header-left {
         display: flex;
         flex-flow: column;
         gap: 0.7rem;
     }

     &__chat {
         font-weight: 400;
         font-size: 2.53rem;
         line-height: 85%;

         @media only screen and (max-width: 850px) {
             font-size: 17px !important;
         }
     }

     &__text {
         font-weight: 400;
         font-size: 2rem;
         line-height: 85%;

         opacity: 0.6;

         @media only screen and (max-width: 850px) {
             font-size: 13px !important;
         }
     }

     &__header-center {
         display: flex;
         flex-flow: row;
         gap: 1.12rem;
         align-items: center;
     }

     &__icon {
         width: 2.82rem;
         height: 2.82rem;
     }

     &__count {
         font-weight: 400;
         font-size: 2rem;
         line-height: 85%;
         opacity: 0.6;

         @media only screen and (max-width: 850px) {
             font-size: 13px !important;
         }
     }

     &__close {
         padding: 0.5rem;
     }

     &__line {
         margin-top: 2.11rem;
         border-top: 1px solid rgba(242, 242, 242, 0.25);
     }

     &__messages {
         margin-top: 2.81rem;
         display: flex;
         flex-flow: column;
         gap: 2.53rem;
         overflow-y: scroll;
         height: 70vh;
     }

     &__message-container {
         display: flex;
         flex-flow: row;
         gap: 1.41rem;
     }

     &__img {
         width: 30px;
         height: 30px;
         border-radius: 100%;
     }

     &__user {
         display: flex;
         flex-flow: column;
     }

     &__name {
         font-size: 2.25rem;
         font-weight: 600;
         line-height: 18px;
         letter-spacing: 0.025em;

         @media only screen and (max-width: 850px) {
             font-size: 15px !important;
         }
     }

     &__message {
         font-size: 2.25rem;
         font-weight: 400;
         line-height: 2.53rem;
         letter-spacing: 0.025em;

         @media only screen and (max-width: 850px) {
             font-size: 15px !important;
         }
     }
 }
</style>