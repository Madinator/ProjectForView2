<script setup lang="ts">

interface Props {
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    pageName: string;
}

const props = defineProps<Props>();
</script>

<template>
    <section class="section section-cards">
        <div class="inner-container">
            <div class="info">
                <h1 class="title-primary">
                    <span class="white">{{titleLine1}} </span>
                    <span class="white">{{titleLine2}} </span>
                    <span class="yellow">{{titleLine3}}</span>
                </h1>
            </div>
            <div class="cards-container">
                <div class="card-container card-container-1">
                    <img :src="'/img/Courses/' + pageName + '/card1.png'" alt="" class="card">
                </div>
                <div class="card-container card-container-2">
                    <img :src="'/img/Courses/' + pageName + '/card2.png'" alt="" class="card">
                </div>
                <div class="card-container card-container-3">
                    <img :src="'/img/Courses/' + pageName + '/card3.png'" alt="" class="card">
                </div>
            </div>
        </div>
        <img src="/img/Courses/CreativeTraining/sectionCardsLeftPiece.png" alt="" class="cards-left-piece">
        <img src="/img/Courses/CreativeTraining/sectionCardsRightPiece.png" alt="" class="cards-right-piece">
    </section>
</template>

<style lang="scss" scoped>
.section-cards {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    .cards-left-piece {
        position: absolute;
        bottom: -8rem;
        left: -8rem;
        width: 50rem;
        filter: blur(4px);
    }

    .cards-right-piece {
        position: absolute;
        top: -10rem;
        right: -14rem;
        width: 50rem;
        filter: blur(4px);
    }

    .inner-container {
        position: relative;
        z-index: 100;
        width: 100%;
        height: 100%;

        .info {
            position: absolute;
            top: 50%;
            left: 19%;
            transform: translateY(-50%);

            @media only screen and (max-width: 1500px) {
                left: 14%;
            }

            @media only screen and (max-width: 1000px) {
                left: 9%;
            }

            @media only screen and (max-width: 850px) {
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .title-primary {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                line-height: .85;

                @media only screen and (max-width: 850px) {
                    align-items: center;
                }
                
                span {
                    font-size: 19rem !important;
                }
            }
        }

        .cards-container {
            position: absolute;
            right: 20%;
            top: 50%;
            transform: translateY(-50%);
            width: 65rem;
            height: 65rem;

            @media only screen and (max-width: 1200px) and (min-width: 850px) {
                right: 14%;
            }

            @media only screen and (max-width: 850px) {
                width: 100vw;
                right: auto;
            }


            .card-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateY(-50%);
                width: 40rem;
                // left: 0 !important;

                @media only screen and (max-width: 850px) {
                    transform: translate(-50%, -50%);
                    width: 43rem;
                }

                .card {
                    width: 100%;
                }
            }

            .card-container-1 {
                z-index: 100;
                left: 23%;

                @media only screen and (max-width: 850px) {
                    left: 46%;
                }

                .card {
                    
                }
            }

            .card-container-2 {
                z-index: 50;
                left: 50%;
                width: 36rem;

                @media only screen and (max-width: 850px) {
                    left: 52%;
                    width: 39rem;
                }


                .card {
                    transform: scale(.82);

                    @media only screen and (max-width: 850px) {
                        transform: scale(.95);
                    }
                }
            }

            .card-container-3 {
                z-index: 10;
                left: 70%;
                width: 39rem;

                @media only screen and (max-width: 850px) {
                    left: 58%;
                    width: 42rem;
                }


                .card {
                    transform: scale(.63);

                    @media only screen and (max-width: 850px) {
                        transform: scale(.87);
                    }
                }
            }
        }
    }
}
</style>