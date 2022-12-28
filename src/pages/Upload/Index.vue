<script setup lang="ts">
import FileUploader from '@/components/Reusable/Upload/FileUploader.vue';
import Select from '@/components/Reusable/Upload/Select.vue';
import { ref } from 'vue';
import router from '@/router';

const isSteam = ref(false);
const startUpload = (file: File[]): void => {
    console.log(file)
};

const toggle = (value: boolean): void => {
    isSteam.value = value;
};

const toVerification = () => {
    router.push({ name: 'verification' })
}

</script>

<template>
    <div class="page page-upload">
        <div class="inner-container">
            <span class="name">Step 1</span>
            <h2 class="title">content Uploading</h2>
            <div class="main">
                <div class="block">
                    <FileUploader class="item upload" type="Image">
                        <div class="image">
                            <img class="upload__img" src="@/assets/svg/Upload/img.svg" alt="" />
                            <span class="upload__text">Drop your file</span>
                        </div>
                    </FileUploader>
                    <FileUploader class="item upload" type="Video" v-if="!isSteam">
                        <div class="video">
                            <img class="upload__img" src="@/assets/svg/Upload/video.svg" alt="" />
                            <span class="upload__text">Drag the files here or click the button below to select them on
                                your computer.</span>
                        </div>
                    </FileUploader>
                </div>
                <div class="block block--second">
                    <div class="item">
                        <label class="main__name">Name</label>
                        <input class="input" />
                    </div>
                    <div class="item">
                        <label class="main__name">Choose type content</label>
                        <Select :options="['Video', 'Stream']" @pickedSteam="toggle"></Select>
                    </div>
                </div>
                <div class="block">
                    <div class="item">
                        <label class="main__name">Description</label>
                        <textarea class="input textarea" placeholder="You can write something"></textarea>
                    </div>
                </div>
                <div class="block" v-if="isSteam">
                    <div class="item">
                        <label class="main__name">Streaming Key</label>
                        <input class="input" placeholder="Defoult stream key (RTMP)" />
                    </div>
                    <div class="item">
                        <label class="main__name">Streaming Key</label>
                        <div class="input input--password">
                            <input class="input-password--text" type="password" placeholder="Defoult stream key (RTMP)" />
                            <img class="password-icon" src="@/assets/svg/eye.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="block" v-if="isSteam">
                    <div class="item">
                        <label class="main__name">Backup URL</label>
                        <input class="input" placeholder="rtmp://x.rtmp.youtube.com.live2" />
                    </div>
                    <div class="item">
                        <label class="main__name">Streaming Key</label>
                        <input class="input" placeholder="rtmp://x.rtmp.youtube.com.live2" />
                    </div>
                </div>
                <div class="block" v-if="isSteam">
                    <div class="item">
                        <label class="main__name">Stream delay</label>
                        <Select :options="['Low', 'Default', 'Minimal']" :isStream="true"></Select>
                    </div>
                    <div class="item">
                        <label class="main__name">Choose type content</label>
                        <Select :options="['Twitch', 'Youtube']" :isStream="true"></Select>
                    </div>
                </div>
                <button class="button" @click="toVerification">Next step</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-upload {
    background-color: #000000;
    min-height: 100vh;

    .inner-container {
        padding: 6.61rem 32rem 9.76rem;
        @include width-restriction;

        @media (max-width: 1300px) {
            padding: 6.61rem 20rem 9.76rem;
        }

        @media (max-width: 850px) {
            padding: 9.72rem 0 7.6rem;
        }
    }

    .name {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;
        opacity: 0.8;

        @media only screen and (max-width: 850px) {
            font-size: 14px !important;
        }
    }

    .title {
        font-family: 'DELIRIUM';
        font-weight: 400;
        font-size: 8.22rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 6.76rem;
        }
    }

    .upload {
        width: 100%;
        height: 22.26rem;
        backdrop-filter: blur(8px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 15px;
    }

    .image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 1.28rem;

        @media (max-width: 850px) {
            gap: 1.83rem;
        }
    }

    .upload__img {
        width: 3.94rem;
        height: 3.94rem;

        @media (max-width: 850px) {
            width: 6.48rem;
            height: 6.48rem;
        }
    }

    .upload__text {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;
        opacity: 0.8;
        text-align: center;

        @media (max-width: 850px) {
            font-size: 2rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    .video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 1.28rem;

        @media (max-width: 850px) {
            gap: 1.83rem;
        }
    }

    .main {
        display: flex;
        flex-flow: column;
        gap: 2.56rem;
        width: 100%;

        @media (max-width: 850px) {
            gap: 2.81rem;
        }
    }

    .block {
        display: flex;
        flex-flow: row;
        gap: 2.56rem;
        width: 100%;

        @media (max-width: 850px) {
            flex-flow: column;
            gap: 2.81rem;
        }
    }

    .block--second {
        @media (max-width: 850px) {
            margin-top: 0.7rem;
        }
    }

    .item {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        gap: 1.28rem;
        width: 100%;

        @media (max-width: 850px) {
            gap: 1.41rem;
        }
    }

    .main__name {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .input {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 1.62rem 2.56rem;
        width: 100%;
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media (max-width: 850px) {
            padding: 1.83rem 2.81rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .input::placeholder {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;
        opacity: 0.6;

        @media (max-width: 850px) {
            font-size: 2.25rem;
        }
    }

    .textarea {
        height: 8.56rem;
        padding: 2.14rem 2.56rem;

        @media (max-width: 850px) {
            height: 10.28rem;
            padding: 1.83rem 2.81rem;
        }
    }

    .input--password {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        gap: 2.56rem;
    }
    .input-password--text{
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;
        opacity: 0.6;
        width: 100%;
        @media (max-width: 850px) {
            font-size: 2.25rem;
        }
    }

    .password-icon {
        width: 1.85rem;
        height: 1.54rem;

        @media (max-width: 850px) {
            widows: 2.14rem;
            height: 1.82rem;
        }
    }

    .button {
        margin-top: 3.09rem;
        padding: 0.98rem 3.125rem;
        width: fit-content;
        background-color: rgba(144, 55, 214, 0.2);
        border-radius: 5px;
        border: 1px solid rgba(144, 55, 214, 0.47);
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media (max-width: 850px) {
            width: 100%;
            padding: 1.41rem 2.81rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .button:hover {
        background-color: lighten(rgba(144, 55, 214, 0.2), 20%);
    }
}
</style>