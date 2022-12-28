<template>
    <section class="section section-cards">
        <div class="content">
            <div class="info-container">
                <div class="info">
                    <h1 class="title title-primary">Financial Incentiuizing</h1>
                    <p class="description">Players will receive digital assets by</p>
                    <ul class="border-items-list">
                        <li class="border-item">Challenging other players</li>
                        <div class="flex-container">
                            <li class="border-item">Clearing levels</li>
                            <li class="border-item">Completing tasks</li>
                        </div>
                    </ul>
                    <p class="small-description">Within games, guilds, & academy.</p>
                    <router-link to="/academy" class="btn btn-yellow">Up-skill & Earn</router-link>
                </div>
            </div>
            <div class="cards">
                <div class="card-container card-container-1">
                    <div class="card-inner-container">
                        <img src="@/assets/img/Landing/cardChallenging.png" alt="" class="card card-1">
                    </div>
                </div>
                <div class="card-container card-container-2">
                    <div class="card-inner-container">
                        <img src="@/assets/img/Landing/cardClearing.png" alt="" class="card card-2">
                    </div>
                </div>
                <div class="card-container card-container-3">
                    <div class="card-inner-container">
                        <img src="@/assets/img/Landing/cardCompleting.png" alt="" class="card card-3">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-cards {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7500;
    width: 100%;
    height: 100vh;
    opacity: 0;
    visibility: hidden;

    @media only screen and (max-width: 850px) and (min-height: 1000px) {
        @include flex-center;
    }

    .content {
        position: relative;
        width: 100%;
        height: 100vh;
        max-width: 1920px;
        margin: 0 auto;

        @media only screen and (max-width: 850px) and (min-height: 1000px) {
            max-height: 1000px;
        }

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            margin-top: 3rem;
        }

        @media only screen and (max-width: 850px) and (min-height: 750px) {
            margin-top: 7rem;
        }

        .border-item {
            display: inline-block;
            // padding: .4rem 1rem;
            padding: 5px 13px;
            border: 1px solid white;
            font-size: 1.4rem;
            border-radius: 2rem;
            margin-right: .85rem;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                font-size: 14px !important;
            }
        }

        .border-items-list {
            margin-bottom: .85rem;
            // gap: .85rem;
            // display: grid;
            // grid-template-columns: repeat(4, max-content);
            display: flex;
            align-items: center;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                flex-direction: column;
                margin-bottom: 1rem;
            }

            .flex-container {
                display: flex;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    margin-top: .85rem;
                }
            }
        }


        .info-container {
            position: absolute;
            top: 45%;
            transform: translateY(-50%);
            left: 10%;
            z-index: 100;

            @media only screen and (min-width: 2100px) {
                left: 4%;
            }

            @media only screen and (max-width: 1100px) {
                left: 6%;
            }

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                text-align: center;
                top: 10%;
                left: 50%;
                transform: translateX(-50%);
            }

            @media only screen and (max-width: 1000px) and (max-height: 600px) {
                top: 55%;
                transform: translateY(-50%);
            }

            .title {
                line-height: .9;
                font-size: 19rem !important;
                width: 60rem;
                margin-left: -2px;

                @media only screen and (max-width: 1000px) and (max-height: 600px) {
                    font-size: 13rem !important;
                    line-height: .9;
                }

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    line-height: .85;
                    margin-bottom: 2rem;
                    font-size: 13rem !important;
                }
            }

            .description {
                margin-bottom: .85rem;
                font-size: 1.7rem !important;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    margin-bottom: 1.2rem;
                    font-size: 15px !important;
                }

                @media only screen and (max-width: 370px) {
                    font-size: 16px !important;
                }
            }

            .small-description {
                font-weight: 400 !important;
                font-size: 1.5rem !important;
                opacity: .7;
                margin-bottom: 2.5rem;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    font-size: 13px !important;
                }
            }

            .btn {
                padding: 1rem 4.5rem;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    font-size: 15px !important;
                }
            }
        }

        .cards {
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0;
            right: 5%;
            z-index: 50;
            transition: all .3s;

            @media only screen and (max-width: 1400px) {
                right: 2%;
            }

            @media only screen and (max-width: 1000px) and (max-height: 600px) {
                right: 7%;
            }

            @media only screen and (max-width: 750px) and (max-height: 500px) {
                right: 3%;
            }

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                right: 0;
                transform: scale(.8);
                top: 5%;
            }

            .card-container {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 45rem;

                @media only screen and (max-width: 1000px) and (max-height: 600px) {
                    width: 30rem;
                    top: 54%;
                }

                @media only screen and (max-width: 850px) and (max-height: 600px) {
                    top: 42%;
                }

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    width: 38rem;
                    top: auto;
                    bottom: 5%;
                    right: 50% !important;
                    transform: translateX(50%);
                }

                @media only screen and (max-width: 850px) and (max-height: 800px) {
                    bottom: 0;
                }

                @media only screen and (max-width: 850px) and (max-height: 720px) {
                    bottom: -2rem;
                }
            }
            
            .card {
                width: 100%;
            }

            .card-inner-container {
                width: 100%;

                @media only screen and (max-width: 850px) and (min-height: 950px) {
                    transform: translateY(-5vh);
                }

                @media only screen and (max-width: 850px) and (min-height: 1000px) {
                    transform: translateY(-10vh);
                }

                @media only screen and (max-width: 850px) and (min-height: 1050px) {
                    transform: translateY(-15vh);
                }

                @media only screen and (max-width: 850px) and (min-height: 1100px) {
                    transform: translateY(-18vh);
                }
            }

            .card-container-1 {
                right: 12%;
                z-index: 300;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    transform: translateX(41%);
                }

                .card {
                    backdrop-filter: blur(8px);
                }
            }

            .card-container-2 {
                right: 3%;
                z-index: 200;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    transform: translateX(56%);
                }

                .card {
                    backdrop-filter: blur(8px);
                    transform: scale(.85);
                    filter: blur(3px);

                    // @media only screen and (max-width: 850px),
                    // only screen and (max-width: 1000px) and (max-height: 600px) {
                    //     filter: blur(3px);
                    // }
                }
            }

            .card-container-3 {
                right: -4%;
                z-index: 100;

                @media only screen and (max-width: 850px) and (min-height: 600px) {
                    transform: translateX(68%);
                }

                .card {
                    transform: scale(.75);
                    filter: blur(3px);

                    // @media only screen and (max-width: 850px),
                    // only screen and (max-width: 1000px) and (max-height: 600px) {
                    //     filter: blur(3px);
                    // }
                }
            }
        }
    }
}
</style>