<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watchEffect } from 'vue';
import Switcher from '@/components/Singular/blognews/Switcher.vue';
import RelatedVideo from '@/components/Reusable/RelatedVideo.vue';
import { useYoutubeStore } from '@/stores/youtube';
import { storeToRefs } from 'pinia';
import CommentCard from '@/components/Reusable/CommentCard.vue';
import TopicUser from '@/components/Reusable/TopicUser.vue';

const youtubeStore = useYoutubeStore();
const { videoInfo } = storeToRefs(youtubeStore);

const videoId = 'epA_8nN1y4I';
const videoIdForRelatedStreams = 'JMN7Xx4POJE';

const contentLeft = ref('');
const data = reactive({
    screenWidth: 0,
});

const countBannerWidth = () => {
    data.screenWidth = window.innerWidth;

    let title = document.getElementsByClassName("blog-news-main__live-title")[0];
    if (title) {
        contentLeft.value = title.getBoundingClientRect().left + 'px';
    }
};

const handleScroll = (event: Event) => {
    let contentEl = document.getElementsByClassName("blog-news-main__broadcasts")[0];
    
    if (contentEl) {
        let topDistanceOfContent = contentEl.getBoundingClientRect().top;

        let switcherEl = document.getElementsByClassName("blog-news-main__switcher");
        let switcherElArray = Array.from(switcherEl as HTMLCollectionOf<HTMLElement>)

        console.log(topDistanceOfContent < switcherElArray[0].getBoundingClientRect().top)
        if(((innerHeight - switcherElArray[0].getBoundingClientRect().top 
            - switcherElArray[0].getBoundingClientRect().height) > 0) && 
            (topDistanceOfContent < switcherElArray[0].getBoundingClientRect().top)
            ) {
            switcherElArray[0].style.position = "fixed"
            switcherElArray[0].style.bottom = '11rem'
        }
        else {
            // console.log('here')
            switcherElArray[0].style.position = "relative"
            switcherElArray[0].style.bottom = '0rem'
        }
        // if(topDistanceOfContent < 0) {
        //     switcherElArray[0].style.position = "fixed"
        //     switcherElArray[0].style.bottom = '11rem'
        // }
        // else {
        //     switcherElArray[0].style.position = "relative"
        //     switcherElArray[0].style.bottom = '0rem'
        // }
    }
}

const created = (() => {
    let html = document.getElementsByTagName('html');
    let body = document.getElementsByTagName('body');
    let app = document.getElementById('app');
    
    if(html[0] && body[0] && app) {
        html[0].style.overflowX = 'unset';
        body[0].style.overflowX = 'unset';
        app.style.overflowX = 'unset';
    }
})();
onMounted(() => {
    countBannerWidth();
    window.addEventListener('resize', countBannerWidth);

    youtubeStore.getVideoInfo(videoId);
    youtubeStore.getVideoInfo(videoIdForRelatedStreams);

   

    // if (window.screen.width > 850) {
    //     let switcherEl = document.getElementsByClassName("blog-news-main__switcher");
    //     let switcherElArray = Array.from(switcherEl as HTMLCollectionOf<HTMLElement>)
        
    //     let switcherElHolder = document.getElementsByClassName("blog-news-main__switcher--fake");
    //     let switcherElHolderArray = Array.from(switcherElHolder as HTMLCollectionOf<HTMLElement>)
    //     switcherElHolderArray[0].style.width = switcherElArray[0].getBoundingClientRect().width + 'px';

        // setTimeout(handleScroll, 3000);
        // window.addEventListener('scroll', handleScroll)
        
    // }

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
    window.removeEventListener('resize', countBannerWidth)
    window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
    <div class="page blog-news-main">
        <img class="blog-news-main__logo mobile" src="@/assets/img/blognews/mainMoble.png" alt="" />
        <img class="blog-news-main__logo desktop" src="@/assets/img/blognews/mainDesktop.png" alt="" />
        <div class="blog-news-main__header">
            <h1 class="blog-news-main__title">Vebinar</h1>
            <span class="blog-news-main__desc">designers for designers</span>
            <router-link to="/streamPage" class="blog-news-main__join">December 12 at 12.00</router-link>
        </div>
        <div class="inner-container">
            <h2 class="blog-news-main__live-title">Live broadcast</h2>
            <div class="blog-news-main__broadcasts">
                <div class="blog-news-main__live">
                    <Switcher class="blog-news-main__switcher" />
                    <div class="blog-news-main__switcher--fake desktop" style="height:1px;"></div>
                </div>
                <div class="blog-news-main__top">
                    <div class="blog-news-main__related-videos">
                        <RelatedVideo v-for="i in 5" :videoId="videoIdForRelatedStreams" :videoInfo="videoInfo" />
                        <button class="blog-news-main__see-more mobile">(3) See more videos</button>
                    </div>
                    <div class="blog-news-main__posts">
                    <div class="blog-news-main__post-list">
                        <h2 class="blog-news-main__posts-title mobile">Posts</h2>
                        <div class="blog-news-main__comments">
                            <CommentCard v-for="i in 3" />
                        </div>
                    </div>
                    <div class="blog-news-main__topic desktop">
                        <span class="blog-news-main__topic-notif">Here's what we have on the topic</span>
                        <span class="blog-news-main__topic-title">Similar Blogers</span>
                        <div class="blog-news-main__topic-users">
                            <TopicUser image="/img/GameCommentUser.png" name="RESHALA HELEX"
                                comment="What the call? In love with a money" />
                            <TopicUser image="/img/GameCommentUser.png" name="RESHALA HELEX"
                                comment="What the call? In love with a money" />
                            <TopicUser image="/img/GameCommentUser.png" name="RESHALA HELEX"
                                comment="What the call? In love with a money" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-news-main {
    position: relative;
    background-color: #000000;
    padding: calc(1px * 478 * v-bind('data.screenWidth') / 375) 0 11rem;

    @media (min-width: 850px) {
        background-color: #0A1015;
        padding: calc(1px * 856 * v-bind('data.screenWidth') / 1920) 0 11rem;
    }

    .inner-container {
        @include width-restriction;
        position: relative;
        z-index: 1000;
        padding: 3.42rem 6.5rem 3.59rem;
        @media only screen and (max-width: 850px) {
            padding: 11rem 0 5rem;
        }
    }

    &__logo {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }

    &__header {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    &__title {
        font-weight: 500;
        font-size: 2.74rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__desc {
        font-weight: 400;
        font-size: 1.37rem;
        line-height: 85%;
        margin-top: 1.41rem;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    &__join {
        padding: 1.7rem 3.94rem;
        background-color: var(--color-purple-dark);
        width: fit-content;
        border-radius: 10px;
        margin-top: 2.81rem;
        transition: all 2s;

        @media (min-width: 850px) {
            margin-top: 1.11rem;
            padding: 0.68rem 2.4rem;
        }
    }

    &__join:hover {
        background-color: var(--color-purple-light)
    }

    &__broadcasts {
        @media (min-width: 850px) {
            position: relative;
            display: flex;
            gap: 12.84rem;
        }
    }
    &__top {
        display: flex;
        flex-flow: column;
        gap: 12.84rem;
        margin-top: 3.6rem;
        @media (min-width: 850px) {
            margin-top: 4.64rem;
            gap: 8.45rem;
        }
    }

    &__live-title {
        display: block;
        margin-top: 10.84rem;
        font-weight: 700;
        font-size: 4.48rem;
        line-height: 4.36rem;

        @media only screen and (min-width: 1200px) {
            margin-top: 12.84rem;
            font-size: 5.48rem;
        }

        @media only screen and (min-width: 850px) {
        }

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
            margin-top: 0;
        }

    }

    &__live {        
        @media (min-width: 850px) {
            margin-top: 3.6rem;
        }
    }

    &__switcher {
        margin-top: 3.24rem;
        transition: all 0.3s;
        position: relative;
        top: 0;
        @media (min-width: 850px) {
            margin-top: 0;
            position: sticky;
            top: 80px;
        }
    }

    &__related-videos {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 2.5rem;
        gap: 2.81rem;

        @media (min-width: 850px) {
            flex-flow: row wrap;
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__see-more {
        font-weight: 500;
        font-size: 2.81rem;
        line-height: 3.66rem;

        color: var(--color-purple-dark);

        text-align: center;

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }

    &__posts {

        @media (min-width: 850px) {
            display: flex;
            flex-flow: row;
            gap: 2.57rem;

        }
    }

    &__post-list {
        @media (min-width: 850px) {

            display: flex;
            flex-flow: row;
            justify-content: space-between;
        }
    }

    &__posts-title {
        margin-left: 2.81rem;
        font-weight: 700;
        font-size: 3.38rem;
        line-height: 4.36rem;


        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }

    &__comments {
        margin-top: 3.52rem;
        padding: 1px;

        display: flex;
        flex-flow: column;
        gap: 2.11rem;

        @media (min-width: 850px) {
            margin-top: 0;
        }
    }

    &__topic {
        background: linear-gradient(90.33deg, rgba(0, 0, 0, 0.094) 0.24%, rgba(0, 0, 0, 0.049) 94.13%);
        border-radius: 24px;
        padding: 3.42rem 5.4rem 6.25rem 2.57rem;
        border: 1px solid rgba(255, 255, 255, 0.19);
        height: fit-content;
        
        position: sticky;
        top: 80px;

        @media (max-width: 1200px) {
            display: none;
        }

    }

    &__topic-notif {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 112%;

        letter-spacing: 0.025em;
        opacity: 0.6;

        white-space: nowrap;

    }

    &__topic-title {
        font-weight: 600;
        font-size: 2.05rem;
        line-height: 112%;

        letter-spacing: 0.025em;

        margin-top: 0.85rem;
        display: block;
    }

    &__topic-users {
        margin-top: 2.57rem;

        display: flex;
        flex-flow: column;
        gap: 1.71rem;
    }
}
</style>