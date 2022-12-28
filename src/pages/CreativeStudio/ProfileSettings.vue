<script setup lang="ts">
import Input from '@/components/Reusable/CreativeStudio/Input.vue';
import { onMounted, ref } from 'vue';

const src = ref< string | null>('/img/GameCommentUser.png');

const handleFileUpload = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    if (target && target.files) {
        const reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        reader.onload = () => (src.value = reader.result as string);
    }
};

</script>

<template>
    <div class="page page-profile-settings">
        <h2 class="title">Basic information</h2>
        <div class="main">
            <div class="left-holder">
                <div class="line mobile"></div>
                <button class="left">
                    <div class="img-container">
                        <img class="img" :src="src" v-if="src" alt="" />
                    </div>
                    <span class="replace">Replace</span>
                    <input type="file" class="choose-img" v-on:change="handleFileUpload"/>
                </button>
                <div class="line mobile"></div>
            </div>
            <div class="right">
                <div class="block">
                    <Input name="Name"/>
                    <Input name="Display name"/>
                </div>
                <div class="block">
                    <Input name="Country"/>
                    <Input name="City"/>
                </div>
                <Input name="Description" :isInput="false"/>
            </div>
        </div>
        <div class="social">
            <h2 class="title">Social network</h2>
            <div class="social-list">
                <div class="social-item">
                    <div class="social-left">
                        <img class="social-img" src="@/assets/svg/CreativeStudio/telegram.svg" alt="" />
                        <h2 class="social-title">Telegram</h2>
                    </div>
                    <button class="social-button">Bind</button>
                </div>
                <div class="line desktop"></div>
                <div class="social-item">
                    <div class="social-left">
                        <img class="social-img" src="@/assets/svg/CreativeStudio/twitter.svg" alt="" />
                        <h2 class="social-title">Twitter</h2>
                    </div>
                    <button class="social-button">Bind</button>
                </div>
                <div class="line desktop"></div>
                <div class="social-item">
                    <div class="social-left">
                        <img class="social-img" src="@/assets/svg/CreativeStudio/facebook.svg" alt="" />
                        <h2 class="social-title">Facebook</h2>
                    </div>
                    <button class="social-button">Bind</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.page-profile-settings {
    width: 100%;
    .title {
        font-weight: 600;
        font-size: 2.74rem;
        line-height: 120%;

        @media (max-width: 850px) {
            font: 4.51rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    .main {
        margin-top: 6.34rem;
        display: flex;
        flex-flow: row;
        gap: 3.42rem;
        width: 100%;

        @media (max-width: 850px) {
            margin-top: 2.96rem;
            flex-flow: column;
        }
    }
    .left {
        display: flex;
        flex-flow: column;
        gap: 1.28rem;
        align-items: center;

        position: relative;

        &:hover {
            opacity: .8;
        }

        @media (max-width: 850px) {
            align-items: center;
            flex-flow: row;
            justify-content: left;
            gap: 3.52rem;
        }
    }
    .left-holder {
        @media (max-width: 850px) {
            display: flex;
            flex-flow: column;
            gap: 2.81rem;
        }
    }
    .replace {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media (max-width: 850px) {
            font-size: 2.81rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }
    .img-container {
        transition: all 0.3s;
        position: relative;
    }
    .img {
        width: 10.27rem;
        height: 10.27rem;
        border-radius: 100%;

        @media (max-width: 850px) {
            width: 11.26rem;
            height: 11.26rem;
        }
    }
    .choose-img {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .img-container:hover {
        &:hover {
            opacity: 0.7;
        }
    }
    .right {
        width: 100%;

        display: flex;
        flex-flow: column;
        gap: 2.56rem;

        @media (max-width: 850px) {
            gap: 2.81rem;
        }
    }
    .block {
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 2.56rem;

        @media (max-width: 850px) {
            flex-flow: column;
            gap: 2.81rem;
        }
    }

    .social {
        margin-top: 4.28rem;

        display: flex;
        flex-flow: column;
        gap: 4.28rem;

        @media (max-width: 850px) {
            margin-top: 5.63rem;
            gap: 4.22rem;
        }
    }
    .social-list {
        display: flex;
        flex-flow: column;
        gap: 1.71rem;

        @media (max-width: 850px) {
            gap: 2.81rem;
        }
    }
    .social-item {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
    }
    .social-left {
        display: flex;
        flex-flow: row;
        gap: 1.71rem;
        align-items: center;
        @media (max-width: 850px) {
            gap: 2.11rem;
        }
    }
    .social-img {
        width: 4.71rem;
        height: 4.71rem;
        @media (max-width: 850px) {
            width: 5.63rem;
            height: 5.63rem;
        }
    }
    .social-title {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media (max-width: 850px) {
            font-size: 2.81rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
        }
    }
    .social-button {
        padding: 0.94rem 4.62rem;

        background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
        backdrop-filter: blur(40px);

        border-radius: 7px;

        border: 1px solid rgba(255, 255, 255, 0.2);

        font-weight: 400;
        font-size: 1.71rem;
        line-height: 140%;

        @media (max-width: 850px) {
            padding: 1.55rem 5.56rem;
            font-size: 2.25rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .social-button:hover {
        filter: brightness(75%);
    }
}
</style>