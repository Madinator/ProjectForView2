<script setup lang="ts">

</script>

<template>
    <div class="former">
        <span class="name">Vote</span>
        <div class="content">
            <div class="left">
                <h2 class="title">Should OnlyFans be added to <br class="desktop"> EarnGames for for</h2>
                <p class="desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. <span
                        class="link"> Learn more </span></p>
            </div>
            <div class="right">
                <span class="name">Vote</span>
                <div class="block">
                    <span class="value value--first">Yes</span>
                    <span class="value  value--first">15%</span>
                </div>
                <div class="block">
                    <span class="value value--second">No</span>
                    <span class="value  value--second">23%</span>
                </div>
                <div class="block">
                    <span class="value value--third">Another</span>
                    <span class="value  value--third">62%</span>
                </div>
            </div>
        </div>
        <div class="former-line"></div>
        <div class="bottom">
            <div class="action">
                <div class="close">Close</div>
                <div class="rating">3.8 Rating</div>
            </div>
            <div class="stats">
                <span class="stat">Voters 21.328</span>
                <span class="stat">Was clased 18.09.22</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.former {
    background: rgba(217, 217, 217, 0.1);
    padding: 4.31rem 4.28rem 3.85rem 3.94rem;
    border: 1px solid rgba(255, 255, 255, 0.2);

    border-radius: 10px;

    display: flex;
    flex-flow: column;

    @media (max-width: 850px) {
        padding: 3.52rem 3.38rem;
    }

    .name {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 85%;
        opacity: 0.7;

        @media (max-width: 850px) {
            font-weight: 400;
            line-height: 2.4rem;
            opacity: 0.5;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    .content {
        margin-top: 0.91rem;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12.5rem;

        @media (max-width: 850px) {
            flex-flow: column;
            gap: 2.81rem;
        }
    }

    .left {
        display: flex;
        flex-flow: column;
        gap: 0.94rem;

        @media (max-width: 850px) {
            gap: 2.11rem;
        }
    }

    .title {
        font-weight: 700;
        font-size: 2.74rem;
        line-height: 3.42rem;

        @media (max-width: 850px) {
            line-height: 3.66rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }

    .desc {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2.25rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .link {
        cursor: pointer;
        color: var(--color-purple-dark);
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .link:hover {
        filter: brightness(125%);
    }

    .right {
        background: linear-gradient(90.51deg, rgba(255, 255, 255, 0.016) 0.37%, rgba(240, 237, 247, 0.015) 165.75%);
        backdrop-filter: blur(28px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);

        padding: 1.71rem 1.28rem 2.4rem;

        display: flex;
        flex-flow: column;
        gap: 0.86rem;

        @media (max-width: 850px) {
            width: 100%;
            padding: 2.11rem 3.38rem 2.81rem 2.11rem;
            gap: 1.69rem;
        }

        .name {
            font-weight: 400;
            font-size: 1.54rem;
            line-height: 1.8rem;

            @media (max-width: 850px) {
                line-height: 2.67rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .block {
            display: flex;
            flex-flow: row;
            gap: 7.88rem;
            justify-content: space-between;

        }

        .value {
            font-weight: 400;
            font-size: 1.54rem;
            line-height: 1.8rem;

            @media (max-width: 850px) {
                line-height: 2.67rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .value--first {
            color: var(--color-green)
        }

        .value--second {
            color: var(--color-red)
        }

        .value--third {
            color: var(--color-purple-dark)
        }
    }

    .former-line {
        margin-top: 3rem;

        height: 2px;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%);
        width: 100%;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
        }
    }

    .bottom {
        margin-top: 3rem;

        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
            flex-flow: column;
            gap: 2.81rem;
            align-items: flex-start;
        }
    }

    .action {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.28rem;

        @media (max-width: 850px) {
            gap: 2.11rem;
        }
    }

    .close {
        padding: 0.51rem 2.56rem;
        background-color: var(--color-red);

        font-weight: 400;
        font-size: 1.54rem;
        line-height: 85%;
        border-radius: 5px;

        @media (max-width: 850px) {
            padding: 0.84rem 3.52rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .rating {
        padding: 0.51rem 1.28rem;
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 85%;
        border-radius: 5px;

        @media (max-width: 850px) {
            padding: 0.84rem 3.52rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    .stats {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 3rem;

        @media (max-width: 850px) {
            gap: 2rem;
        }
    }

    .stat {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
}
</style>