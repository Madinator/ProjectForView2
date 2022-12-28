<script setup lang="ts">

</script>

<template>
    <section class="section section-incentives">
        <div class="inner-container">
            <div class="content">
                <h1 class="title-primary">
                    <span class="yellow">Incentives </span>
                    <span class="white"> Category</span>
                </h1>
                <div class="categories">
                    <div class="category-container">
                        <div class="category category-1">
                            <h3 class="category-title">Create</h3>
                            <ul class="list">
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Memes</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Design Content</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Articles / Writing</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Research</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Meetups</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="category-container">
                        <div class="category category-2">
                            <h3 class="category-title">Engage</h3>
                            <ul class="list">
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Invitations</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Like, Share & Comment</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Drive Followers</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Interact With Community</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Educate And Empower</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="category-container">
                        <div class="category category-3">
                            <h3 class="category-title">Proposed</h3>
                            <ul class="list">
                                <li class="item">
                                    <div class="line"></div>
                                    <span>NFT Game Developers</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Partnership</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Advocate Participant's Voice</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Knowledge Sharing</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Guide Individuals</span>
                                </li>
                                <li class="item">
                                    <div class="line"></div>
                                    <span>Raise Brand Awareness</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-incentives {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 600;

    .inner-container {
        @include width-restriction;
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 850px) {
            align-items: flex-start;
            padding-top: 13rem;
            min-height: 450px;
        }

        .title-primary {
            text-align: center;
            margin-bottom: 4.2rem;
            line-height: .9;
            position: relative;
            z-index: 100;

            span {
                font-size: 12.8rem !important;
            }
        }

        .content {

            @media only screen and (max-width: 850px) {
                width: 100%;
                height: 100%;
            }
        }

        .categories {
            display: flex;
            align-items: flex-start;

            @media only screen and (max-width: 850px) {
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }

            .category-container {


                &:not(:last-of-type) {
                    margin-right: 10rem;

                    @media only screen and (max-width: 950px) {
                        margin-right: 8rem;
                    }

                    @media only screen and (max-width: 850px) {
                        margin-bottom: 7rem;
                    }
                }

                &:first-of-type {
                    margin-right: 14rem;

                    @media only screen and (max-width: 950px) {
                        margin-right: 11rem;
                    }
                }

                @media only screen and (max-width: 850px) {
                    margin-right: 0 !important;
                    width: 35rem;
                    @include abs-center;
                }

                @media only screen and (max-width: 500px) {
                    top: 55%;

                    @media only screen and (max-height: 700px) {
                        top: 60%;
                    }

                    @media only screen and (max-height: 650px) {
                        top: 65%;
                    }
                }
            }
            

            .category {


                .category-title {
                    font-family: Delirium;
                    font-weight: 400;
                    font-size: 7.8rem;
                    margin-bottom: 2.5rem;
                    text-align: center;

                    @media only screen and (max-width: 850px) {
                        font-size: 8.5rem;
                    }
                }

                .list {


                    .item {
                        display: flex;
                        align-items: center;

                        &:not(:last-of-type) {
                            margin-bottom: .6rem;

                            @media only screen and (max-width: 850px) {
                                margin-bottom: 1.4rem;
                            }
                        }

                        .line {
                            height: 2px;
                            width: 4.25rem;
                            background-color: white;
                            margin-right: 1.1rem;

                            @media only screen and (max-width: 850px) {
                                width: 5.25rem;
                                min-width: 5.25rem;
                                margin-right: 1.7rem;
                            }
                        }

                        span {
                            font-size: 2.2rem;

                            @media only screen and (max-width: 850px) {
                                font-size: 20px !important;
                            }

                            @media only screen and (max-width: 850px) and (max-height: 500px) {
                                font-size: 16px !important;
                            }
                        }
                    }
                }
            }


            @media only screen and (max-width: 850px) {
                .category-1 {

                }

                .category-2 {
                    transform: translateY(60vh);
                }

                .category-3 {
                    transform: translateY(120vh);
                }

                @media only screen and (max-height: 550px) {
                    .category-2 {
                        transform: translateY(calc(60 * 5.5));
                    }

                    .category-3 {
                        transform: translateY(calc(120 * 5.5));
                    }
                }
            }
        }
    }
}
</style>