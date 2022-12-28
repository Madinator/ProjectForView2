<script setup lang="ts">
import CommentCard from '@/components/Reusable/CommentCard.vue';
import PostWriter from '@/components/Singular/profile/PostWriter.vue';
import PostCreate from '@/components/Singular/profile/PostCreate.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const togglePostCreate = ref(false);

const togglePostCreateF = (action: boolean) => {
    togglePostCreate.value = action;
}

onMounted(() => {
    let html = document.getElementsByTagName('html');
    let body = document.getElementsByTagName('body');
    let app = document.getElementById('app');
    
    if(html[0] && body[0] && app) {
        html[0].style.overflowX = 'unset';
        body[0].style.overflowX = 'unset';
        app.style.overflowX = 'unset';
    }
});
onUnmounted(() => {
    let html = document.getElementsByTagName('html');
    let body = document.getElementsByTagName('body');
    let app = document.getElementById('app');
    
    if(html[0] && body[0] && app) {
        html[0].style.overflowX = 'hidden';
        body[0].style.overflowX = 'hidden';
        app.style.overflowX = 'hidden';
    }
})
</script>

<template>
    <div class="page page-blog-news">
        <div class="page-blog-news__header">
            <h2 class="page-blog-news__title">Posts</h2>
            <div class="page-blog-news__line mobile"></div>
        </div>
        <div class="page-blog-news__content">
            <div class="page-blog-news__posts">
                <PostWriter @open="togglePostCreateF(true)" />
                <CommentCard :is-post="true" v-for="i in 4"/>
            </div>
            <div class="page-blog-news__blogers desktop">
                <h2 class="page-blog-news__blogers-title">Related Blogers</h2>
                <div class="page-blog-news__bloger" v-for="i in 6">
                    <img class="page-blog-news__bloger-img" src="@/assets/img/game/GameCommentUser.png" alt="" />
                    <h1 class="page-blog-news__bloger-name">RESHALA HELEX</h1>
                </div>
            </div>
        </div>
        <!-- <img class="page-blog-news__bg desktop" src="@/assets/img/profile/blognewsbg.png" alt="" /> -->
        <Transition>
            <PostCreate class="mobile" v-if="togglePostCreate" @close="togglePostCreateF(false)"/>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.page-blog-news {
    padding: 0 0 7rem;

    @media only screen and (min-width: 850px) {
        padding: 0 0 17.4rem 0;
    }
    &__header {
        padding: 0 3.52rem;
        @media only screen and (min-width: 850px) {
            padding: 0;
        }
    }
    &__title {
        font-weight: 400;
        font-size: 3.42rem;
        line-height: 2.95rem;
        
        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
            font-weight: 600;
        }
    }
    &__line {
        margin-top: 1.41rem;
        width: 100%;
        border-top: 1px solid rgba(242, 242, 242, 0.2);
    }
    &__content {
        margin-top: 2.11rem;

        @media only screen and (min-width: 850px) {
            display: flex;
            flex-flow: row;
            gap: 10.3rem;
        }
    }
    &__posts {
        display: flex;
        flex-flow: column;
        gap: 2.11rem;
        @media only screen and (min-width: 850px) {
            gap: 2.57rem;
        }

    }
    &__blogers {
        display: flex;
        flex-flow: column;
        gap: 2.57rem;

        position: sticky;
        top: 80px;
        height: fit-content;
    }
    &__blogers-title {
        font-weight: 700;
        font-size: 3.42rem;
        line-height: 4.45rem;
        white-space: nowrap;
    }
    &__bloger {
        display: flex;
        flex-flow: row;
        gap: 1.71rem;
        align-items: center;
        cursor: pointer;
    }
    &__bloger-img {
        width: 6.51rem;
        height: 6.51rem;
        border-radius: 100%;
    }
    &__bloger-name {
        font-weight: 600;
        font-size: 2.05rem;
        line-height: 112%;
        letter-spacing: 0.025em;
        white-space: nowrap;
    }
    &__bg {
        position: fixed;
        bottom: 0;
        right: 0;
        mix-blend-mode: hard-light;
        z-index: 0;
    }
}
</style>