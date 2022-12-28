<script setup lang="ts">

</script>

<template>
    <div class="creative-studio-forum">
        <div class="desktop">
            <div class="left">
                <div class="left-block">
                    <div class="money">12k $</div>
                    <span class="stream">We evaluate your streams</span>
                </div>
                <div class="left-block">
                    <h2 class="title">DEwOoodo</h2>
                    <span class="date">1 minute ago</span>
                </div>
            </div>
            <div class="right">
                <div class="block">
                    <h2 class="value">240</h2>
                    <span class="key">Vote</span>
                </div>
                <div class="block">
                    <h2 class="value">120</h2>
                    <span class="key">Measures</span>
                </div>
                <div class="block">
                    <h2 class="value">12.8k</h2>
                    <span class="key">Stats</span>
                </div>
                <div class="block">
                    <h2 class="value">Last Post: DEwOoodo</h2>
                    <span class="key">25 June, 2022 - 05:09 PM</span>
                </div>
            </div>
        </div>
        <div class="mobile">
            <div class="top">
                <span class="money">12k $</span>
                <h2 class="stream">We evaluate your streams</h2>
                <div class="left-block">
                    <h2 class="title">DEwOoodo</h2>
                    <span class="date">1 minute ago</span>
                </div>
            </div>
            <div class="line"></div>
            <div class="center">
                <div class="block">
                    <h2 class="value">240</h2>
                    <span class="key">Vote</span>
                </div>
                <div class="block">
                    <h2 class="value">120</h2>
                    <span class="key">Measures</span>
                </div>
                <div class="block">
                    <h2 class="value">12.8k</h2>
                    <span class="key">Stats</span>
                </div>
            </div>
            <div class="line"></div>
            <div class="block bottom">
                <h2 class="value">Last Post: DEwOoodo</h2>
                <span class="key">25 June, 2022 - 05:09 PM</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.creative-studio-forum {
    .money {
        background: var(--color-yellow);
        border-radius: 3px;
        padding: 0.08rem 1.11rem;
        font-weight: 400;
        font-size: 1rem;
        line-height: 140%;
        white-space: nowrap;
        height: fit-content;

        @media (max-width: 850px) {
            font-size: 1.71rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 11px !important;
        }
    }

    .stream {
        font-weight: 500;
        font-size: 1.54rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2.53rem;
            margin-top: 1rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    .left-block {
        display: flex;
        flex-flow: row;
        gap: 0.86rem;

        @media (max-width: 850px) {
            gap: 1.41rem;
            margin-top: 0.7rem;
        }
    }

    .title {
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    .date {
        color: #858585;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    .block {
        display: flex;
        flex-flow: column;
        text-align: center;
        gap: 0.17rem;

        @media (max-width: 850px) {
            gap: 0.28rem;
        }
    }

    .value {
        font-weight: 500;
        font-size: 1.54rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2.53rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }

    .key {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 140%;

        opacity: 0.5;

        @media (max-width: 850px) {
            font-size: 2rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    .desktop {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1000px) {
            align-items: flex-start;
        }

        .video {
            border-radius: 5px 0px 0px 5px;
            width: 12.84rem;
            height: 7.71rem;
        }

        .left {
            display: flex;
            flex-flow: column;
            gap: 0.34rem;
        }

        .info {
            display: flex;
            flex-flow: column;
            gap: 0.43rem;
        }

        .right {
            display: flex;
            flex-flow: row;
            gap: 12.84rem;
        }
    }

    .mobile {
        padding: 2.81rem 2.81rem 4.22rem;
        filter: drop-shadow(0px 4px 42px rgba(0, 0, 0, 0.05));
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background-color: #141314;

        display: flex;
        flex-flow: column;

        .line {
            margin-top: 2.81rem;
        }

        .center {
            margin-top: 2.11rem;
            display: flex;
            flex-flow: row;
            gap: 7rem;
        }

        .bottom {
            margin-top: 2.81rem;
            text-align: left;
        }
    }
}
</style>