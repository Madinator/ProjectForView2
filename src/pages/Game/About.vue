<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';
import { useSlideFunctionsStore } from '@/stores/slideFunctions';
import { useYoutubeStore } from '@/stores/youtube';
import FAQ from '@/components/Reusable/game/FAQ.vue';
import GameBaseButton from '@/components/Reusable/game/BaseButton.vue';
import NFTCard from '@/components/Reusable/NFTCard.vue';
import RelatedVideo from '@/components/Reusable/RelatedVideo.vue';

const slideFunctionsStore = useSlideFunctionsStore();

const gameStore = useGameStore();
const { faq, NFTTypes } = storeToRefs(gameStore);

const youtubeStore = useYoutubeStore();
const { videoInfo } = storeToRefs(youtubeStore);

const videoId = 'epA_8nN1y4I';
const videoIdForRelatedStreams = 'JMN7Xx4POJE';

// TOGGLE EVENT
const toggleEvent = (event: Event, index: number): void => {
    const target = event.target as HTMLElement;
    const parent = target?.closest('.toggle-container');
    const titleContainer = target?.closest('.title-container');
    const descriptionContainer = parent?.querySelector('.description-container') as HTMLElement;

    if (titleContainer && parent && descriptionContainer && !parent.classList.contains('animating')) {
        const arrow = parent?.querySelector('.arrow');

        let timeoutTime = 700;

        slideFunctionsStore.slideToggle(descriptionContainer, 700);

        if (arrow) {
            arrow.classList.toggle('arrow-active');
        }

        parent.classList.add('animating');

        const plusElement = document.getElementById('plus-' + index);
        if(plusElement) {
            if(plusElement.classList.contains('plus-animation')) {
                plusElement.classList.remove('plus-animation');
                plusElement?.classList.add('minus-animation')
            }
            else {
                plusElement.classList.remove('minus-animation');
                plusElement?.classList.add('plus-animation')

            }
        }
        setTimeout(() => {
            
            parent.classList.remove('animating');
        }, timeoutTime);
    }

};

onMounted(async () => {
    youtubeStore.getVideoInfo(videoId);
    youtubeStore.getVideoInfo(videoIdForRelatedStreams);
})

</script>

<template>
    <div class="page page-game-about">
        <div class="page-game-about__initial-info">
            <h1 class="page-game-about__title">Before you start</h1>
            <div class="page-game-about__content">
                <iframe id="player" class="page-game-about__video"
                    :src="`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com%22`">
                </iframe>
                <div class="page-game-about__faq">
                    <FAQ @click="toggleEvent($event, index)" v-for="(item, index) in faq" :question="item.question" :answer="item.answer" :index="index" />
                </div>
            </div>
        </div>
        <div class="page-game-about__NFT">
            <h1 class="page-game-about__nft-name">Earnland NFT Assets</h1>
            <div class="page-game-about__nft-types">
                <GameBaseButton v-for="item in NFTTypes" :name="item">{{ item }}</GameBaseButton>
            </div>
            <div class="page-game-about__nft-list">
                <NFTCard v-for="i in 6" />
            </div>
            <div class="page-game-about__load-more">
                <button class="btn-white">See more</button>
            </div>
        </div>
        <h1 class="page-game-about__related-videos-title">Related Streams</h1>
        <div class="page-game-about__related-videos-container">
            <div class="page-game-about__related-videos">
                <RelatedVideo v-for="i in 6" :videoId="videoIdForRelatedStreams" :videoInfo="videoInfo" />
            </div>
        </div>
        <div class="page-game-about__load-more">
            <button class="btn-white">See more</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-game-about {

    &__title,
    &__nft-name {
        font-weight: 600;
        font-size: 3.4rem;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__initial-info {
        display: flex;
        flex-flow: column;
        gap: 4.22rem;
    }

    &__content {
        display: flex;
        flex-flow: column;
        gap: 4.22rem;

        @media (min-width: 850px) {
            flex-flow: row;
        }
    }

    &__video {
        width: 100%;
        height: 35rem;
        background: rgba(12, 9, 24, 0.2);
        border-radius: 2.11rem;

        @media (min-width: 850px) {
            width: 50%;
        }
    }

    &__faq {
        display: flex;
        flex-flow: column;
        gap: 1.41rem;

        @media (min-width: 850px) {
            width: 50%;
        }
    }

    &__NFT {
        margin-top: 6rem;
    }

    &__nft-types {
        display: flex;
        flex-flow: row wrap;
        gap: 1.41rem;
        margin-top: 4rem;
    }

    &__nft-list {
        // display: flex;
        // flex-flow: row wrap;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        // gap: 1.12rem;
        margin-top: 3.52rem;
        gap: 2rem;

        @media (min-width: 850px) {
            gap: 2.56rem;
        }

        @media only screen and (max-width: 850px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__load-more {
        display: flex;
        justify-content: center;
        margin-top: 2.81rem;
    }

    &__related-videos-title {
        font-weight: 600;
        font-size: 3.52rem;
        line-height: 5.5rem;
        display: block;
        margin-top: 5.63rem;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__related-videos-container {
        margin-top: 4.22rem;
    }

    &__related-videos {
        // padding: 0 -3.38rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;

        @media (min-width: 850px) {
            gap: 2.56rem;
        }

        @media only screen and (max-width: 850px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media only screen and (max-width: 750px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}

</style>