<script setup lang="ts">
import type { YoutubeVideoInfo } from '@/services/youtube/index';
import { computed } from '@vue/reactivity';
import type { PropType } from 'vue';


const props = defineProps({
    videoId: {
        type: String,
        required: true
    },
    videoInfo: {
        type: Object as PropType<YoutubeVideoInfo>,
        required: true
    }
});

const viewCount = computed(() => {
    if (props.videoInfo.viewCount > 999999) {
        return Math.round(props.videoInfo.viewCount / 1000000) + 'm'
    }
    if (props.videoInfo.viewCount > 999) {
        return Math.round(props.videoInfo.viewCount / 1000) + 'k'
    }
    return props.videoInfo.viewCount;
});

const publishAt = computed(() => {
    if (dateDiffInDays(new Date(), props.videoInfo.publishAt) < 1) {
        return dateDiffInHours(new Date(), props.videoInfo.publishAt) + ' hours ago'
    }
    if (dateDiffInYears(new Date(), props.videoInfo.publishAt) < 1) {
        return dateDiffInMonth(new Date(), props.videoInfo.publishAt) + ' month ago';
    }
    return dateDiffInYears(new Date(), props.videoInfo.publishAt) + ' years ago'
});

const dateDiffInYears = (date1: any, date2: any): Number => {
    return Math.round((Date.parse(date1) - Date.parse(date2)) / (1000 * 60 * 60 * 24 * 30 * 12));
};
const dateDiffInMonth = (date1: any, date2: any): Number => {
    return Math.ceil((date1 - date2) / (1000 * 60 * 60 * 24 * 30));
};
const dateDiffInDays = (date1: any, date2: any): Number => {
    return Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
};
const dateDiffInHours = (date1: any, date2: any): Number => {
    return Math.round((date1 - date2) / (1000 * 60 * 60));
};

</script>

<template>
    <div class="game-related-video">
        <iframe class="game-related-video__video"
            :src="`https://www.youtube.com/embed/${props.videoId}?enablejsapi=1&origin=http://example.com%22`"></iframe>
        <div class="game-related-video__content">
            <img class="game-related-video__img" :src="props.videoInfo.channelImage" alt="" />
            <div class="game-related-video__info">
                <h1 class="game-related-video__video-name">{{ props.videoInfo.title }}</h1>
                <div class="game-related-video__info-middle">
                    <span class="game-related-video__channel-title">{{ props.videoInfo.channelTitle }}</span>
                    <span class="game-related-video__video-count mobile">{{ viewCount }}</span>
                </div>
                <div class="game-related-video__bottom">
                    <span class="game-related-video__video-count">{{ viewCount }}&nbsp; views</span>
                    <span class="game-related-video__publish-at">{{ publishAt }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.game-related-video {
    // background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
    // backdrop-filter: blur(4.5px);
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.08) 0.3%, rgba(240, 237, 247, 0.06) 94.13%);
    padding: 2.11rem 3.38rem 3.38rem;
    width: 100%;
    border-radius: 15px;
    border: 1px solid #3A364D;
    cursor: pointer;
    transition: all 0.3s;

    @media only screen and (min-width: 850px) {
        padding: 3.68rem 0 3rem;
    }

    // &:hover {
    //     transform: scale(1.05);
    // }
    &__video {
        border-radius: 5px 5px 0px 0px;
        width: 100%;
        border: none;

        @media only screen and (min-width: 850px) {
            aspect-ratio: 420/234;
        }
    }

    &__content {
        margin-top: 2.81rem;
        display: flex;
        flex-flow: row;
        gap: 1.41rem;
        padding: 0 2.14rem 0;

        @media only screen and (min-width: 850px) {
            margin-top: 2.4rem;
        }
    }

    &__img {
        width: 4.22rem;
        height: 4.22rem;
        border-radius: 100%;
    }

    &__info {
        display: flex;
        flex-flow: column;
    }

    &__video-name {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 85%;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    &__info-middle {
        margin-top: 1.69rem;
        display: flex;
        flex-flow: row;
        gap: 1.41rem;

        @media only screen and (min-width: 850px) {
            margin-top: 0.85rem;
        }
    }

    &__channel-title {
        font-weight: 500;
        font-size: 1.97rem;
        line-height: 85%;
        color: var(--color-grey);
    }

    &__video-count {
        font-weight: 500;
        font-size: 1.37rem;
        line-height: 85%;
        white-space: nowrap;
        color: var(--color-grey);


        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__bottom {
        display: flex;
        flex-flow: row;
        gap: 0.85rem;
        margin-top: 0.85rem;
        align-items: baseline;
    }

    &__publish-at {
        font-weight: 500;
        font-size: 1.37rem;
        line-height: 85%;
        color: var(--color-grey);
        margin-top: 0;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
            margin-top: 1.12rem;
        }
    }
}
</style>