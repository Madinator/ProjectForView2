<script setup lang="ts">
import InputWithImg from '@/components/Reusable/game/InputWithImg.vue';

</script>

<template>
    <div class="game-search">
        <div class="inner-container">
            <div class="game-search__header">
                <div class="game-search__close" @click="$emit('close')">
                    <img src="@/assets/svg/closeWhite.svg" alt="" />
                </div>
                <InputWithImg image="src/assets/svg/game/search.svg" name="Search" class="game-search__input" />
            </div>
            <div class="game-search__results">
                <div class="game-search__result" v-for="i in 3">
                    <img src="@/assets/svg/game/search.svg" alt="" />
                    <span class="game-search__text">WOODY PLAY</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.game-search {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: linear-gradient(0deg, #110B27, #110B27), #0B0C0D;
     z-index: 400;
     // padding: 0 3.38rem;

     ::v-deep(.input-with-img) {
         padding: 0;
         padding-left: 2rem;
     }

     ::v-deep(.input-with-img .input-with-img__input) {
         padding: 1.408rem 2.112rem;
         padding-left: 0;
     }

     .inner-container {
         @include width-restriction;
     }

     &__header {
         display: flex;
         flex-flow: row;
         align-items: center;
         gap: 1.41rem;
         margin-top: 11.7rem;
     }

     &__input {
         width: 100%;
         border-radius: .5rem;
     }

     &__close {
         cursor: pointer;
     }

     &__results {
         margin-top: 1.41rem;
         display: flex;
         flex-flow: column;
     }

     &__result {
         display: flex;
         flex-flow: row;
         gap: 2.11rem;
         border-bottom: 1px solid #85888A;
         padding: 2.11rem 0;

     }

     &__text {
         font-weight: 500;
         font-size: 2.25rem;
         line-height: 2.67rem;

         @media only screen and (max-width: 850px) {
             font-size: 15px !important;
         }
     }
 }
</style>