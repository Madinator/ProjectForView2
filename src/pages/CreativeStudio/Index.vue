<script setup lang="ts">
import Navigation from '@/components/Reusable/CreativeStudio/Navigation.vue';
import Burger from '@/components/Singular/CreativeStudio/Burger.vue';
import { onMounted, ref } from 'vue';

const isOpen = ref(false);
const isDesktop = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
const close = () => {
    if(window.innerWidth < 850) {
        isOpen.value = false;
    }
};


onMounted(() => {
    if(window.innerWidth > 850) {
        isOpen.value = true;
        isDesktop.value = true;
    }
})
</script>

<template>
    <div class="page page-creative-studio">
        <div class="inner-container">
            <header class="header">
                <Burger class="mobile" @toggle="toggle" :isOpen="isOpen"/>
                <h2 class="title">creative studio</h2>
                <router-link to="/upload" class="button btn-purple desktop">Add a video</router-link>
            </header>
            <div class="line desktop"></div>
            <div class="content">
                <Transition>
                    <section v-if="isOpen" class="navigation-mobile">
                        <Navigation @close="close"/>
                    </section>
                </Transition>
                <RouterView v-if="isDesktop || (!isDesktop && !isOpen)"></RouterView>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-creative-studio {
    min-width: 100vw;
    min-height: 100vh;
    background-color: #000000;
    .inner-container {
        @include width-restriction;
        padding: 10rem 6.5rem 6.25rem;

        @media (max-width: 850px) {
            padding: 12.5rem 0 8.6rem;

        }
    }
    .header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 850px) {
            justify-content: unset;
            gap: 2.96rem;
        }
    }
    .title {
        font-family: 'DELIRIUM';
        font-weight: 400;
        font-size: 8.22rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 5.63rem;
            line-height: 85%;
        }
    }
    .button {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 140%;
        padding: 0.94rem 4.8rem ;
    }
    .content {
        margin-top: 2.57rem;
        display: flex;
        flex-flow: row;
        gap: 7.28rem;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
            flex-flow: column;
        }
    }

    .navigation-mobile {
        @media (max-width: 850px) {
            position: relative;
            left: 0;
            height: 100vh;
            background-color: #000000;
            z-index: 1000;
        }
    }
}
</style>