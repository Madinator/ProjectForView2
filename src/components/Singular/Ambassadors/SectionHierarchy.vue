<script setup lang="ts">

</script>

<template>
    <section class="section section-hierarchy">
        <div class="inner-container">
            <div class="info">
                <h1 class="title-primary title-main">
                    <span class="white">Ambassadors </span>
                    <span class="yellow"> Hierarchy</span>
                </h1>
                <h3 class="title-primary subtitle">6 Steps to Growth</h3>
            </div>
            <div class="line-container">
                <div class="items-numbers">
                    <strong class="item-number">01</strong>
                    <strong class="item-number">02</strong>
                    <strong class="item-number">03</strong>
                    <strong class="item-number">04</strong>
                    <strong class="item-number">05</strong>
                    <strong class="item-number">06</strong>
                </div>
                <div class="lines-container">
                    <div class="line"></div>
                    <div class="dot"></div>
                    <div class="line"></div>
                    <div class="dot"></div>
                    <div class="line"></div>
                    <div class="dot"></div>
                    <div class="line"></div>
                    <div class="dot"></div>
                    <div class="line"></div>
                    <div class="dot"></div>
                    <div class="line"></div>
                    <div class="dot"></div>
                    <div class="line"></div>
                </div>
                <div class="items-info">
                    <div class="item-info">
                        <strong class="item-name">Community</strong>
                        <p class="item-description">
                            Join the program by filling out the application form
                        </p>
                    </div>
                    <div class="item-info">
                        <strong class="item-name">Verification</strong>
                        <p class="item-description">
                            Our team will verify your details and shortlist the top applications
                        </p>
                    </div>
                    <div class="item-info">
                        <strong class="item-name">Explorers</strong>
                        <p class="item-description">
                            We'll evaluate your performance on assigned tasks and see if you qualify for the next step
                        </p>
                    </div>
                    <div class="item-info">
                        <strong class="item-name">Ambassador</strong>
                        <p class="item-description">
                            After successfully completing the trial phase and passing evaluation, you become our Ambassador
                        </p>
                    </div>
                    <div class="item-info">
                        <strong class="item-name">Prime</strong>
                        <p class="item-description">
                            Ambassador Prime spots for high level performers. Note: Primes can be demoted if he/she doesn't perform well
                        </p>
                    </div>
                    <div class="item-info">
                        <strong class="item-name">Investor DAO</strong>
                        <p class="item-description">
                            Invited to EG InvestorsDAO (invitation only upon verified investment)
                        </p>
                    </div>
                </div>
            </div>
            <!-- <div class="rectangle rectangle-left"></div>
            <div class="rectangle rectangle-right"></div> -->
        </div>
        <div class="info-socials">
            <h2 class="title-socials title-primary">
                <span class="yellow">Follow Us On Social Media</span>
            </h2>
            <div class="socials">
                <ul class="list">
                    <li class="item">
                        <a href="#" target="_blank" class="link">
                            <img src="@/assets/svg/socials/big/youtube.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="_blank" class="link">
                            <img src="@/assets/svg/socials/big/facebook.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="_blank" class="link">
                            <img src="@/assets/svg/socials/big/telegram.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="_blank" class="link">
                            <img src="@/assets/svg/socials/big/tiktok.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="_blank" class="link">
                            <img src="@/assets/svg/socials/big/discord.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="_blank" class="link link-to-right">
                            <img src="@/assets/svg/socials/big/twitch.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="_blank" class="link link-to-right">
                            <img src="@/assets/svg/socials/big/m.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="_blank" class="link link-to-right">
                            <img src="@/assets/svg/socials/big/instagram.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="_blank" class="link link-to-right">
                            <img src="@/assets/svg/socials/big/linkdn.svg" alt="" class="icon">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <img src="@/assets/svg/Ambassadors/purpleCircleSocials.svg" alt="" class="purple-circle">
    </section>
</template>

<style lang="scss" scoped>
.section-hierarchy {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 300;

    .inner-container {
        height: 100vh;
        width: 100%;
        text-align: center;
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        z-index: 100;

        @media only screen and (max-width: 850px) {
            padding-top: 3rem;
        }

        .rectangle {
            position: absolute;
            top: 0;
            height: 100%;
            width: 14%;
            z-index: 1000;
        }

        .rectangle {
            left: 0;
            background-image: linear-gradient(124.28deg, #1A083C 34.02%, rgba(26, 8, 60, 0) 68.53%);
        }

        .info {
            margin-bottom: 5rem;

            @media only screen and (max-width: 850px) {
                margin-bottom: 7rem;
            }

            @media only screen and (max-height: 600px) {
                margin-bottom: 2rem;
            }

            .title-main {
                white-space: nowrap;
                text-align: center;

                @media only screen and (max-width: 850px) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: .75rem;
                }

                @media only screen and (max-width: 850px) and (max-height: 600px) {
                    display: inline-block;
                    white-space: nowrap;
                }

                span {
                    font-size: 13rem !important;
                    line-height: .9;

                    @media only screen and (max-width: 850px) and (max-height: 600px) {
                        font-size: 11rem !important;
                    }
                }
            }

            .subtitle {
                font-size: 6rem !important;
            }
        }

        .line-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 200vw;
            // min-width: 1700px;

            @media only screen and (max-width: 850px) {
                width: calc(100vw * 3);
            }

            @media only screen and (max-width: 450px) {
                width: calc(100vw * 6);
            }

                .item-number {
                    font-family: Delirium;
                    font-weight: 400;
                    font-size: 20rem !important;
                    line-height: .8;
                    display: inline-block;

                    @media only screen and (max-height: 600px) {
                        font-size: 14rem !important;
                        margin-bottom: 1rem;
                    }

                    @media only screen and (max-height: 450px) {
                        font-size: 11rem !important;
                    }
                }

                .item-number,
                .item-info {
                    width: 24rem;

                    &:first-of-type {
                        margin-left: -.75rem;
                    }

                    &:last-of-type {
                        margin-right: -.75rem;
                    }

                    @media only screen and (max-width: 450px) {
                        &:last-of-type {
                            margin-right: -1.5rem;
                        }
                    }

                    @media only screen and (min-width: 2800px) {
                        &:first-of-type {
                            margin-left: -.6%;
                        }

                        &:last-of-type {
                            margin-right: -.6%;
                        }
                    }

                    @media only screen and (min-width: 3200px) {
                        &:first-of-type {
                            margin-left: -1%;
                        }

                        &:last-of-type {
                            margin-right: -1%;
                        }
                    }
                }

                .flex-container {
                    display: flex;
                    align-items: center;
                }

                .dot {
                    background-color: #BE8CFF;
                    box-shadow: 1px 1px 30px rgba(190, 140, 255, 0.3);
                    width: 1.25rem;
                    min-width: 1.25rem;
                    height: 1.25rem;
                    border-radius: 100%;
                    margin: 0 1.1rem;
                }

                .line {
                    background-color: #BE8CFF;
                    border-radius: 10px;
                    height: .45rem;
                    width: 31%;

                    @media only screen and (max-width: 450px) {
                        width: 29%;
                    }

                    &:first-of-type,
                    &:last-of-type {
                        width: 15%;
                    }
                }

                .item-name {
                    font-weight: 500;
                    font-size: 2.9rem !important;
                    display: inline-block;
                    margin-bottom: 1rem;
                }

                .item-description {
                    font-size: 1.9rem;
                }
            // }

            .items-numbers,
            .items-info {
                padding: 0 calc(7.5% + 2.5rem - 12rem);

                @media only screen and (max-width: 450px) {
                    padding: 0 calc(7.5% + 2.5rem - 10rem);
                }

                @media only screen and (min-width: 1920px) {
                    padding: 0 calc(7.5% + 3.5rem - 12rem);
                }

                @media only screen and (min-width: 2200px) {
                    padding: 0 calc(7.5% + 4.5rem - 12rem);
                }

                @media only screen and (min-width: 2900px) {
                    padding: 0 calc(7.5% + 6rem - 12rem);
                }

                @media only screen and (min-width: 3200px) {
                    padding: 0 calc(7.5% + 7rem - 12rem);
                }

                @media only screen and (min-width: 3500px) {
                    padding: 0 calc(7.5% + 8rem - 12rem);
                }
            }

            .items-numbers {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .lines-container {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: .75rem;
                margin-bottom: 1.25rem;
            }

            .items-info {
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
            }
        }
    }

    .info-socials {
        position: absolute;
        // bottom: 12%;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
        // opacity: 0;
        // visibility: hidden;
        white-space: nowrap;
        text-align: center;
        padding-bottom: 4%;
        z-index: 100;

        @media only screen and (max-width: 850px) {
            padding-bottom: 70px;
        }

        .title-socials {
            position: relative;
            z-index: 100;
            margin-bottom: 2.5rem; 

            span {
                font-size: 6.3rem !important;
            }
        }

        .socials {
            position: relative;
            z-index: 100;
            display: flex;
            align-items: center;

            .list {
                display: flex;
                align-items: center;

                .item {
                    &:not(:last-of-type) {
                        margin-right: 1.25rem;
                    }

                    .link {
                        width: 5rem;
                        height: 5rem;

                        @media only screen and (max-width: 500px) {
                            width: 4rem;
                            height: 4rem;
                        }

                        &:hover {
                            opacity: .7;
                            transform: scale(1.1);
                        }

                        .icon {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    .purple-circle {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
        width: 50rem;
        height: 30rem;
        border-radius: 100%;
        filter: blur(60px);
        // opacity: .6;
        z-index: 1;

        // background-color: #60169D;
        background-image: radial-gradient(rgba(#60169D, .8), rgba(#60169D, .5));
    }
}
</style>