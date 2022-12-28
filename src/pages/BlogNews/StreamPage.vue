<script setup lang="ts">
import Rating from '@/components/Reusable/Rating.vue';
import { useYoutubeStore } from '@/stores/youtube';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import Chat from '@/components/Singular/blognews/Chat.vue';
import EmojisPicker from '@/components/Reusable/EmojisPicker.vue';
import router from '@/router';

const youtubeStore = useYoutubeStore();
const { videoInfo } = storeToRefs(youtubeStore);

const videoId = 'epA_8nN1y4I';
const videoIdForRelatedStreams = 'JMN7Xx4POJE';

const isSigned = ref(false);
const sign = () => {
    isSigned.value = !isSigned.value;
}

const isChatMobileOpen = ref(false);

const text = ref('');

const openChatMobile = () => {
    isChatMobileOpen.value = true;
}
const closeChatMobile = () => {
    isChatMobileOpen.value = false;
}

const toDonate = () => {
    router.push({ name: 'donate' });
}
const emojiPicked = (emoji: string): void => {
    text.value = text.value + emoji
}
onMounted(() => {
    youtubeStore.getVideoInfo(videoId);
    youtubeStore.getVideoInfo(videoIdForRelatedStreams);

    let chat = (<HTMLScriptElement>document.getElementById('chat'));
    chat.scrollTop = chat.scrollHeight;

    let started = (<HTMLScriptElement>document.getElementsByClassName('stream-page__main-live-info-text')[0]);
    let chatDesktop = (<HTMLScriptElement>document.getElementsByClassName('stream-page__chat-desktop')[0]);
    chatDesktop.style.height = started.getBoundingClientRect().top + 'px';

});
</script>

<template>
    <div class="page stream-page">
        <div class="inner-container">
            <div class="stream-page__content">
                <section class="stream-page__header">
                    <div class="stream-page__stream">
                        <iframe class="stream-page__video"
                            :src="`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com%22`">
                        </iframe>
                        <span class="stream-page__remark">ON THE AIR</span>
                    </div>
                </section>
                <section class="stream-page__main">
                    <div class="stream-page__main-content">
                        <div class="stream-page__main-header">
                            <div class="stream-page__main-base-info">
                                <Rating />
                                <span class="stream-page__main-platform">Twitch</span>
                            </div>
                            <h1 class="stream-page__main-name">
                                THE WAY OF A GTA SAMP BUSINESS OWNER (UPDATE) - OIL TANKS FIX ARIZONA RP?! - GTA SAMP
                                STREAM
                            </h1>
                            <div class="stream-page__main-live-info">
                                <span class="stream-page__main-live-info-text">Now watching: 92</span>
                                <span class="stream-page__main-live-info-text">Started 66 minutes ago</span>
                            </div>
                            <div class="stream-page__main-reaction">
                                <button class="stream-page__main-reaction-button">
                                    <img class="stream-page__main-reaction-icon" src="@/assets/svg/like.svg" alt="" />
                                    <span class="stream-page__main-reaction-text">233</span>
                                </button>
                                <button class="stream-page__main-reaction-button">
                                    <img class="stream-page__main-reaction-icon" src="@/assets/svg/dislike.svg"
                                        alt="" />
                                    <span class="stream-page__main-reaction-text">23</span>
                                </button>
                                <button
                                    class="stream-page__main-reaction-button stream-page__main-reaction-button--comment mobile"
                                    @click="openChatMobile()">
                                    <img class="stream-page__main-reaction-icon" src="@/assets/svg/commentNew.svg"
                                        alt="" />
                                </button>
                            </div>
                            <div class="stream-page__main-line"></div>
                        </div>
                        <div class="stream-page__channel">
                            <div class="stream-page__channel-logo">
                                <img class="stream-page__channel-img" alt=""
                                    src="@/assets/img/game/GameCommentUser.png" />
                                <span class="stream-page__remark stream-page__channel-remark">ON THE AIR</span>
                            </div>
                            <div class="stream-page__channel-info">
                                <h1 class="stream-page__channel-name">mwoodo</h1>
                                <h1 class="stream-page__channel-subscribers">466k subscribers</h1>
                            </div>
                            <div class="stream-page__channel-buttons">
                                <button class="stream-page__donate desktop" @click="toDonate">Donate</button>
                                <!-- <router-link to="/donate" class="stream-page__donate desktop">Donate</router-link> -->
                                <button class="stream-page__follow btn-purple"
                                    :class="{ 'stream-page__follow--signed': isSigned }" @click="sign">{{ isSigned ?
                                            "Signed" : "Follow"
                                    }}</button>
                            </div>
                        </div>
                        <h1 class="stream-page__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
                            fermentum augue, sit amet convallis augue. Integer eu iaculis sem, sed euismod eros. Nulla
                            facilisi. Proin luctus odio nunc, sed laoreet est bibendum vitae. Sed a eleifend ex. Integer
                            varius rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend ligula. Aliquam faucibus
                            erat ut tincidunt cursus. Cras et ullamcorper velit. In hac habitasse platea dictumst. Nunc
                            vitae dui quis risus elementum auctor.</h1>
                        <button class="stream-page__donate mobile" @click="toDonate">Donate</button>
                    </div>
                    <Transition>
                        <div v-if="isChatMobileOpen" class="stream-page__chat mobile">
                            <Chat @close="closeChatMobile()" />
                            <div class="stream-page__chat-bottom">
                                <div class="stream-page__chat-bottom-container">
                                    <img src="@/assets/svg/smileCycle.svg" alt="" />
                                    <input class="stream-page__chat-input" placeholder="Write something" />
                                </div>
                            </div>
                        </div>
                    </Transition>
                </section>
            </div>
            <div class="stream-page__chat-desktop desktop">
                <div class="stream-page__chat-desktop-messages">
                    <div id="chat" class="stream-page__chat-desktop-message" v-for="i in 10">
                        <button class="stream-page__chat-desktop-button">
                            <img class="stream-page__chat-desktop-img" src="@/assets/img/game/GameCommentUser.png"
                                alt="" />
                        </button>
                        <div class="stream-page__chat-desktop-text">Revision, open, arteriovenous fistula; without
                            thrombectomy, autogenous or nonautogenous dialysis graft (separate procedure)</div>
                    </div>
                </div>
                <div class="stream-page__chat-desktop-bottom">
                    <button class="stream-page__emogies">
                        <EmojisPicker @picked="emojiPicked"></EmojisPicker>
                    </button>
                    <input class="stream-page__chat-desktop-input" placeholder="Message" v-model="text" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.stream-page {
    background-color: #000000;
    min-height: 100vh;
    background-image: url('@/assets/img/blognews/bg.png');
    background-size: cover;
    background-repeat: no-repeat;

    .inner-container {
        @include width-restriction;
        padding: 12.84rem 0 6.34rem;
        display: flex;
        flex-flow: row;
        gap: 2.57rem;
        width: 100% !important;
        position: relative;

        @media only screen and (min-width: 850px) {
            padding: 6.85rem 6.42rem 12.5rem;
        }
    }

    &__header {
        position: relative;
    }

    &__video {
        width: 100%;
        border: none;
        aspect-ratio: 375/ 175;

        @media (min-width: 850px) {
            aspect-ratio: 1320/743;
        }
    }

    &__remark {
        position: absolute;
        top: 2.11rem;
        right: 2.11rem;
        background: var(--color-red);
        border-radius: 6px;
        padding: 4.9px 4.9px 3.3px 5.7px;

        font-family: 'DELIRIUM';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 85%;

        @media (min-width: 850px) {
            top: 3.55rem;
            right: 3.55rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 18.5px !important;
        }
    }

    &__main {
        position: relative;
        margin-top: 4.22rem;
    }

    &__main-content {
        padding: 0 3.38rem;

        @media (min-width: 850px) {
            padding: 0;
        }

    }

    &__main-header {
        display: flex;
        flex-flow: column;
    }

    &__main-base-info {
        display: flex;
        flex-flow: row;
        gap: 2.11rem;
        align-items: center;
    }

    &__main-platform {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    &__main-name {
        font-family: 'DELIRIUM';
        font-weight: 400;
        font-size: 4.28rem;
        line-height: 85%;

        margin-top: 2.81rem;


        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__main-live-info {
        display: flex;
        flex-flow: row;
        gap: 2.11rem;

        margin-top: 0.98rem;
    }

    &__main-live-info-text {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 85%;
        opacity: 0.5;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__main-reaction {
        display: flex;
        flex-flow: row;
        gap: 1.7rem;

        margin-top: 3.8rem;
    }

    &__main-reaction-button {
        display: flex;
        flex-flow: row;
        gap: 1.26rem;
        align-items: center;
        justify-content: center;

        background-color: rgba(255, 255, 255, 0.09);
        border: 0.79602px solid rgba(255, 255, 255, 0.17);
        backdrop-filter: blur(6.36816px);

        border-radius: 5.57214px;

        width: 10.4rem;
        height: 3.8rem;

        @media (min-width: 850px) {
            width: 7.96rem;
            height: 2.91rem;
        }
    }

    &__main-reaction-button:hover {
        background-color: rgba(255, 255, 255, 0.18)
    }

    &__main-reaction-button--comment {
        width: 8.73rem;
    }

    &__main-reaction-icon {
        width: 2.46rem;
        height: 2.28rem;

        @media (min-width: 850px) {
            width: 1.88rem;
            height: 1.74rem;
        }
    }

    &__main-reaction-text {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 85%;

        opacity: 0.5;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__main-line {
        border-top: 1px solid rgba(242, 242, 242, 0.25);
        width: 100%;
        margin-top: 2.95rem;
    }

    &__channel {
        margin-top: 2.95rem;
        display: flex;
        flex-flow: row;
        align-items: center;
    }

    &__channel-logo {
        position: relative;
        cursor: pointer;
    }

    &__channel-img {
        border: 1px solid var(--color-purple-dark);
        border-radius: 100%;
        width: 7.88rem;
        height: 7.88rem;

    }

    &__channel-remark {
        position: absolute;
        bottom: 0;
        left: 8px;
        top: auto;
        right: 0;

        width: fit-content;
        height: fit-content;

        padding: 0.56rem;

        font-family: 'DELIRIUM';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 85%;
    }

    &__channel-info {
        display: flex;
        flex-flow: column;
        gap: 0.28rem;
        margin-left: 1.41rem;
    }

    &__channel-name {
        font-family: 'DELIRIUM';
        font-style: normal;
        font-weight: 400;
        font-size: 3.42rem;
        line-height: 85%;

        color: var(--color-purple-dark);

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__channel-subscribers {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 85%;


        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__channel-buttons {
        display: flex;
        flex-flow: row;
        margin-left: auto;

        @media only screen and (min-width: 850px) {
            gap: 3.25rem;
        }
    }

    &__follow {
        font-weight: 500;
        font-size: 2rem;
        line-height: 85%;

        padding: 1.13rem 4.65rem;

        @media only screen and (min-width: 850px) {
            width: 17.8rem;
            height: 3.85rem;
            padding: auto;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__follow--signed {
        border: 2px solid #85888A;
        background-color: #000000;
    }

    &__desc {
        margin-top: 2.81rem;

        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;

        opacity: 0.7;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__donate {
        display: inline-block;
        margin-top: 5.28rem;
        width: 100%;
        padding: 1.47rem;
        font-weight: 600;
        font-size: 2.25rem;
        line-height: 85%;
        text-align: center;

        color: var(--color-purple-dark);
        border: 2px solid var(--color-purple-dark);
        border-radius: 5px;

        transition: all 0.3s;

        @media only screen and (min-width: 850px) {
            width: 17.8rem;
            height: 3.85rem;
            padding: inherit;

            font-size: 2rem;

            margin-top: 0;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__donate:hover {
        background: var(--color-purple-dark);
        color: white;
    }

    &__chat {
        width: 100%;
        position: absolute;
        z-index: 10;
        top: 0;
    }

    &__chat-bottom {
        position: fixed;
        bottom: 0;
        background: linear-gradient(90.33deg, rgba(0, 0, 0, 0.062) 0.24%, rgba(240, 237, 247, 0.043) 94.13%);
        backdrop-filter: blur(45px);
        border: 1px solid rgba(255, 255, 255, 0.38);

        width: 100%;
    }

    &__chat-input {
        display: block;
        margin-left: 1.83rem;
        width: 100%;
    }

    &__chat-input::placeholder {
        font-weight: 600;
        font-size: 2.25rem;
        line-height: 112%;

        letter-spacing: 0.025em;

        color: white;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__chat-bottom-container {
        width: 100%;
        height: 100%;
        background: linear-gradient(90.33deg, rgba(0, 0, 0, 0.062) 0.24%, rgba(240, 237, 247, 0.043) 94.13%);
        backdrop-filter: blur(45px);
        padding: 1.7rem 1.7rem 1.7rem 2.11rem;

        display: flex;
        flex-flow: row;
        align-items: center;

    }

    &__chat-desktop {
        position: relative;
        z-index: 10;
        display: flex;
        flex-flow: column;
    }

    &__chat-desktop-messages::-webkit-scrollbar {
        display: none;
        /* Safari and Chrome */
    }

    &__chat-desktop-messages {
        display: flex;
        flex-flow: column;
        gap: 1.71rem;

        overflow-y: scroll;
        overflow-x: visible;
        -ms-overflow-style: none;
        /* Internet Explorer 10+ */
        scrollbar-width: none;
    }

    &__chat-desktop-message {
        display: flex;
        flex-flow: row;
        align-items: end;
        gap: 1.28rem;


    }

    &__chat-desktop-img {
        cursor: pointer;
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
    }

    &__chat-desktop-text {
        border-radius: 8px 8px 8px 0px;

        padding: 1.58rem 2.74rem;
        min-width: 26rem;
        height: fit-content;
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);

        border: 1px solid rgba(255, 255, 255, 0.2);

    }

    &__chat-desktop-bottom {
        margin-top: 3.85rem;
        width: 100%;
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        border-radius: 7px;

        border: 1px solid rgba(255, 255, 255, 0.2);

        padding: 1rem 2.31rem;

        display: flex;
        flex-flow: row;
        align-items: center;
    }

    &__chat-desktop-input {
        margin-left: 1.45rem;
    }

    &__emogies {
        width: fit-content;
        height: fit-content;

    }
}
</style>