<script setup lang="ts"> 
</script>

<template>
    <div class="page page-vote">
        <div class="inner-container">
            <img class="img" src="@/assets/img/Governance/banner.png" alt=""/>
            <div class="container">
                <span class="name">Voting</span>
                <h2 class="title">Should Cats be <br class="desktop">added to EarnGames</h2>
                <p class="desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p class="text text-1">Long texts (longreads), where big size combines with in-depth reporting, are becoming increasingly popular in print and online media, because these texts enable the publication to stand out against the information noise. The aims of this research are to identify the popularity of longreads in the Russian media and their content and compositional particularities. The research includes the monitoring of Russian federal publications and subsequent content analysis of 10 articles issued in 10 print and online publications. The key findings of the research indicate that longreads can be found in publications of different types from daily newspapers to niche news sites. As a rule, the texts are devoted to a description of a new phenomenon, their normal size being 2−4 thousand words. The usual longread composition scheme is an alternation of examples and generalizations.</p>
                <p class="text text-2">Long texts (longreads), where big size combines with in-depth reporting, are becoming increasingly popular in print and online media, because these texts enable the publication to stand out against the information noise. The aims of this research are to identify the popularity of longreads in the Russian media and their content and compositional particularities. The research includes the monitoring of Russian federal publications and subsequent content analysis of 10 articles issued in 10 print and online publications. The key findings of the research indicate that longreads can be found in publications of different types from daily newspapers to niche news sites. As a rule, the texts are devoted to a description of a new phenomenon, their normal size being 2−4 thousand words. The usual longread composition scheme is an alternation of examples and generalizations.</p>
            </div>
        </div>
    </div>  
</template>

<style lang="scss" scoped>
.page-vote {
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(254.49deg, #231161 -31.18%, #0B0813 58.22%), #000000;

    .inner-container {
        @include width-restriction;
        padding: 0 17.98rem 10rem 6.42rem;

        display: flex;
        flex-flow: row;
        gap: 15.41rem;

        @media (max-width: 850px) {
            padding: 8.72rem 0 5.63rem;
            flex-flow: column;
            gap: 3.8rem;
        }
    }
    .img {
        width: 37.5%;
        aspect-ratio: 720/970;

        @media (max-width: 850px) {
            width: 100%;
        }
    }
    .container {
        display: flex;
        flex-flow: column;
        margin-top: 16.58rem;

        @media (max-width: 850px) {
            margin-top: 0;
        }
    }
    .name {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 1.8rem;
        opacity: 0.5;

        @media (max-width: 850px) {
            line-height: 2.4rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }
    .title {
        margin-top: 0.86rem;
        font-weight: 700;
        font-size: 5.48rem;
        line-height: 108.5%;

        @media (max-width: 850px) {
            margin-top: 0.7rem;
            line-height: 108.5%;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    .desc {
        margin-top: 1.71rem;
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;
        opacity: 0.6;

        @media (max-width: 850px) {
            margin-top: 1.41rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .text {
        margin-top: 4.28rem;
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
            margin-top: 2.8rem;
        }
    }
}
</style>