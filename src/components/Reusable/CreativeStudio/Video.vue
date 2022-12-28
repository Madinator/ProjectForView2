<script setup lang="ts">
import { onMounted, ref } from 'vue';

const infoHeight = ref(0);

onMounted(() => {
    let element = document.getElementsByClassName('video-info')[0];
    infoHeight.value = element.getBoundingClientRect().height;
});
</script>

<template>
    <div class="creative-studio-video">
        <div class="left">
            <img class="video" src="@/assets/img/game/GameCommentUser.png" alt="" />
            <div class="video-info">
                <h2 class="title">Video title</h2>
                <span class="desc">Description video</span>
                <div class="actions mobile">
                    <div class="action">
                        <img class="action__img" src="@/assets/svg/eye.svg" alt=""/>
                        <span class="action__value">1000</span>
                    </div>
                    <div class="action">
                        <img class="action__img" src="@/assets/svg/commentCircle.svg" alt=""/>
                        <span class="action__value">23</span>
                    </div>
                </div>
                <span class="time mobile">15 September, 2022</span>
            </div>
        </div>
        <div class="right desktop">
            <div class="block">
                <h2 class="value">15 September, 2022</h2>
                <span class="key">Upload date</span>
            </div>
            <div class="block">
                <h2 class="value">1000</h2>
                <span class="key">Views</span>
            </div>
            <div class="block">
                <h2 class="value">15</h2>
                <span class="key">Comments</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.creative-studio-video {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 850px) {
        flex-flow: column;
        align-items: flex-start;
    }
    .video {
        border-radius: 5px 0px 0px 5px;
        width: 12.84rem;
        height: 7.71rem;
        object-fit: cover;
        @media (max-width: 850px) {
            width: 21rem;
            height: calc(1px * v-bind('infoHeight'));
        }
    }
    .left {
        display: flex;
        flex-flow: row;
        gap: 3.42rem;
        align-items: center;

        @media (max-width: 850px) {
            gap: 2.54rem;
            align-items: flex-start;
        }
    }
    .video-info {
        display: flex;
        flex-flow: column;
        gap: 0.43rem;
    }
    .title {
        font-weight: 500;
        font-size: 1.54rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2.53rem;
            line-height: 140%;
            font-weight: 600;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    .desc {
        color: #858585;
        font-weight: 400;
        font-size: 1.37rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2.25rem;
            line-height: 140%;
            color: white;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .right {
        display: flex;
        flex-flow: row;
        gap: 12.84rem;
    }
    .block {
        display: flex;
        flex-flow: column;
        text-align: center;
        gap: 0.17rem;
    }
    .value {
        font-weight: 500;
        font-size: 1.54rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 11px !important;
        }
    }

    .key {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 140%;

        opacity: 0.5;


    }

    .actions {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.83rem;
        margin-top: 1rem;
    }
    .action {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 0.7rem;

    }
    .action__img {
        width: 2.81rem;
        height: 2.81rem;
        opacity: 0.5;
    }
    .action__value {
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 140%;
        opacity: 0.5;
    }
    .time {
        margin-top: 1rem;
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 140%;
        opacity: 0.5;

        @media only screen and (max-width: 850px) {
            font-size: 11px !important;
        }
    }
}
</style>