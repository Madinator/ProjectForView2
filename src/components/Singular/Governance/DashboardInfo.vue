<script setup lang="ts">
</script>

<template>
    <div class="general-info">
        <div class="header">
            <div class="block">  
                <span class="key">Last activity</span>
                <span class="value">12.04.22, August 12:36</span>
            </div>
            <div class="block">  
                <span class="key">Perfomance</span>
                <span class="value">123 Voting passed</span>
            </div>
        </div>
        <div class="line"></div>
        <div class="main">
            <div class="head" >
                <img class="img" src="@/assets/img/game/GameCommentUser.png" alt="" />
                <span class="name">Academy tips</span>
            </div>
            <h2 class="title">If we create something,<br class="desktop"> its full procent something<br class="desktop"> cool. And if you make <br class="desktop"> dont voting, we find you</h2>
            <p class="desc">Amet minim mollit non deserunt <br class="desktop"> ullamco est sit aliqua .</p>
            <button class="button btn-purple">Read more</button>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.general-info {
    padding: 3.42rem 0 3.42rem;
    background: rgba(217, 217, 217, 0.1);
    border-radius: 10px;
    @media (max-width: 850px) {
        padding: 3.52rem 0 3.8rem;
    }
    .header {
        display: flex;
        flex-flow: column;
        gap: 1.71rem;
        padding: 0 6.25rem 0  2.56rem;
        @media (max-width: 850px) {
            gap: 2.81rem;
            padding: 0 3.38rem;
        }
    }
    .block {
        display: flex;
        flex-flow: column;
        gap: 0.42rem;
        @media (max-width: 850px) {
            gap: 0.7rem;
        }
    }
    .key {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 1.8rem;
        opacity: 0.7;
        @media (max-width: 850px) {
            line-height: 2.96rem;
            opacity: 0.5;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    .value {
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
    .line {
        margin-top: 3rem;
        border-color: rgba(255, 255, 255, 0.055);
        @media (max-width: 850px) {
            margin-top: 3.38rem;
        }
    }
    .main {
        margin-top: 2.74rem;
        padding: 0 6.25rem 0  2.56rem;

        @media (max-width: 850px) {
            margin-top: 3.38rem;
            padding: 0 3.38rem;
        }
    }
    .head {
        display: flex;
        flex-flow: row;
        gap: 0.85rem;
        align-items: center;
        @media (max-width: 850px) {
            gap: 1.41rem;
        }
    }
    .img {
        border-radius: 100%;
        width: 3.42rem;
        height: 3.42rem;
        @media (max-width: 850px) {
            width: 4.22rem;
            height: 4.22rem;
        }
    }
    .title {
        margin-top: 2rem;
        font-weight: 700;
        font-size: 2rem;
        line-height: 125.9%;

        @media (max-width: 850px) {
            line-height: 2.67rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }
    .desc {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;
        opacity: 0.6;
        @media (max-width: 850px) {
            margin-top: 1.41rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 14px !important;
        }
    }
    .button {
        margin-top: 3.68rem;
        padding: 0.68rem 5.31rem;
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;
        @media (max-width: 850px) {
            width: 100%;
            margin-top: 3.52rem;
            padding: 1.41rem 3.52rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
}
</style>