<script setup lang="ts">
import VoteButton from '@/components/Reusable/Governance/VoteButton.vue';
import { useGovernanceStore } from '@/stores/governance';
import { storeToRefs } from 'pinia';

const governanceStore = useGovernanceStore();
const { votes } = storeToRefs(governanceStore);

</script>

<template>
    <div class="vote">
       <div class="left">
            <span class="which">Voting 1/3</span>
            <h2 class="title">Should Cats be added to EarnGames</h2>
            <p class="desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br class="desktop"> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat<br class="desktop"> sunt nostrud amet. <RouterLink :to="{name: 'vote'}" class="link">Learn more</RouterLink></p>
            <div class="voting">
                <VoteButton v-for="item in votes" :data="item"/>
            </div>
            <router-link to="/vote" class="button btn-purple">Vote</router-link>
        </div>
        <div class="right">
            <span class="time-text">Time <br class="desktop">for your <br class="desktop">decision</span>
            <div class="right-time">
                <div class="right-block">
                    <span class="time-value">12</span>
                    <span class="time-key">day</span>
                </div>
                <div class="right-block">
                    <span class="time-value">14</span>
                    <span class="time-key">hours</span>
                </div>
                <div class="right-block">
                    <span class="time-value">35</span>
                    <span class="time-key">min</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.vote {
    background: rgba(217, 217, 217, 0.1);
    padding: 3.85rem 1.28rem 1.28rem;
    width: fit-content;
    border-radius: 0 0 10px 10px;

    display: flex;
    flex-flow: row;
    gap: 4.28rem;

    @media (max-width: 1200px) {
        flex-flow: column;
        padding: 3.52rem 3.24rem 4.93rem; 
    }

    @media (max-width: 850px) {
        gap: 3.52rem;
    }
    .left {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        padding: 3rem 0 5.56rem 3rem;

        @media (max-width: 1200px) {
            padding: 0;
        }
    }
    .which {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 1.8rem;
        opacity: 0.5;

        @media (max-width: 850px) {
            line-height: 2.39rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }
    .title {
        margin-top: 0.5rem;

        font-weight: 700;
        font-size: 2.74rem;
        line-height: 3.42rem;

        @media (max-width: 850px) {
            font-size: 3.38rem;
            line-height: 3.66rem;
            margin-top: 0.7rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }
    .desc {
        margin-top: 0.89rem;
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;

        @media (max-width: 850px) {
            font-size: 2.25rem;
            margin-top: 2.11rem;
        }
    }
    .link {
        color: var(--color-purple-dark);
        @media (max-width: 850px) {
            font-size: 2.25rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .link:hover {
        filter: brightness(125%);
    }
    .voting {
        margin-top: 2.65rem;

        display: flex;
        flex-flow: column;
        gap: 2.14rem;
        width: 100%;

        @media (max-width: 850px) {
            margin-top: 3.94rem;
            gap: 1.41rem;
        }
    }
    .right {
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.022) 0.24%, rgba(240, 237, 247, 0.027) 94.13%);
        backdrop-filter: blur(28px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 11rem 5.14rem 10.87rem;

        @media (max-width: 850px) {
            padding: 2.81rem 3.94rem 2.81rem 2.81rem;
        }
    }
    .time-text {
        font-weight: 300;
        font-size: 4.75rem;
        line-height: 5.65rem;

        @media (max-width: 850px) {
            line-height: 3.94rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }
    .right-time {
        margin-top: 1.73rem;

        display: flex;
        flex-flow: row;
        gap: 2.61rem;

        @media (max-width: 850px) {
            margin-top: 1.41rem;
            gap: 3.38rem;
        }
    }
    .right-block {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .time-value {
        font-weight: 700;
        font-size: 5.48rem;
        line-height: 6.76rem;

        @media (max-width: 850px) {
            line-height: 5.63rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    .time-key {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 2rem;

        @media (max-width: 850px) {
            line-height: 2.67rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .button {
        margin-top: 3.08rem;
        padding: 1.2rem 5.95rem;

        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media (max-width: 850px) {
            margin-top: 2.11rem;
            gap: 1.41rem 3.38rem;
            width: 100%;
            text-align: center;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
}

</style>