<script setup lang="ts">
const props = defineProps({
    active: Boolean,
    name: String
})
</script>

<template>
    <div class="game-nav">
        <button class="game-nav__button" :class="active ? 'game-nav__button--active' : ''">{{ name }}</button>
        <div v-if="active" class="game-nav__line"></div>
    </div>
</template>

<style lang="scss" scoped>
.game-nav {
     cursor: pointer;
     width: fit-content;
     display: flex;
     flex-flow: column;
     align-items: center;
     gap: 0.84rem;

     &__button {
         font-weight: 400;
         font-size: 2.53rem;
         line-height: 2.96rem;

         @media (min-width: 850px) {
             font-size: 1.71rem;
             line-height: 2rem;
         }

         @media only screen and (max-width: 850px) {
             font-size: 17px !important;
         }
     }

     &__button:hover {
         filter: brightness(75%);
     }

     &__button--active {
         color: var(--color-purple-dark);
     }

     &__line {
         width: 4.1rem;
         height: 0.56rem;
         background-color: var(--color-purple-dark);

         @media (min-width: 850px) {
             width: 2.48rem;
             height: 0.34rem;
         }
     }
 }
</style>