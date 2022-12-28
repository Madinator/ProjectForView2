<script setup lang="ts">
import { ref } from 'vue';
import { useLeaderboardProfile } from '@/stores/leaderboardProfile';

const infoData = useLeaderboardProfile();

// FILTER DATA
const data = ref([
    {
        id: 0,
        name: "Players",
        checkedStatus: true,
    },
    {
        id: 1,
        name: "Guilds",
        checkedStatus: false,
    },
    {
        id: 2,
        name: "NFTs",
        checkedStatus: false,
    },
    {
        id: 3,
        name: "Academy",
        checkedStatus: false,
    },
]);

// FILTER CHANGE HANDLER
const setFilter = (id: number): void => {
    data.value.forEach(el => {
        if (el.id === id) {
            el.checkedStatus = true;
            if (el.name === 'Players') renderData.value = infoData.getPlayersInfo().slice(0, 5);
            else if (el.name === 'Guilds') renderData.value = infoData.getGuildsInfo().slice(0, 5);
            else if (el.name === 'NFTs') renderData.value = infoData.getNFTsInfo().slice(0, 5);
            else if (el.name === 'Academy') renderData.value = infoData.getAcademyInfo().slice(0, 5);
        } else {
            el.checkedStatus = false;
        }
    });
}

// RENDER DATA
const renderData = ref(infoData.getPlayersInfo().slice(0, 5));
</script>

<template>
    <div class="profile">
        <section class="profile__top-box">
            <div class="profile__top-box__el game">
                <span class="profile__top-box__el__type">Top game</span>
                <span class="profile__top-box__el__name">Earnland</span>
            </div>
            <div class="profile__top-box__el guild">
                <span class="profile__top-box__el__type">Top guild</span>
                <span class="profile__top-box__el__name">Guild name</span>
            </div>
            <div class="profile__top-box__el nft">
                <span class="profile__top-box__el__type">Top game</span>
                <span class="profile__top-box__el__name">Top NFT</span>
            </div>
            <div class="profile__top-box__el eth">
                <span class="profile__top-box__el__type">Top currency</span>
                <span class="profile__top-box__el__name">ETH</span>
            </div>
        </section>
        <section class="profile__bottom-box">
            <div class="profile__bottom-box__left">
                <div class="profile__bottom-box__left__wrapper">
                    <h4 class="profile__bottom-box__left__title">Global leaderboard</h4>
                    <div class="profile__bottom-box__left__filters">
                        <button v-for="item in data" class="profile__bottom-box__left__filters__el"
                            :class="item.checkedStatus ? 'active' : ''" @click="setFilter(item.id)">{{ item.name
                            }}</button>
                    </div>
                    <div class="profile__bottom-box__left__info">
                        <div v-for="(item, index) in renderData" class="profile__bottom-box__left__info__el">
                            <div class="profile__bottom-box__left__info__el__left">
                                <span class="profile__bottom-box__left__info__el__left__number">{{ index + 1 }}</span>
                                <img :src=item.img alt="pic" class="profile__bottom-box__left__info__el__left__img">
                                <span class="profile__bottom-box__left__info__el__left__name">{{ item.name }}</span>
                            </div>
                            <div class="profile__bottom-box__left__info__el__right">
                                <span class="profile__bottom-box__left__info__el__right__number">
                                    {{ item.number }}
                                </span>
                                <span class="profile__bottom-box__left__info__el__right__text">
                                    {{ item.text }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button class="profile__bottom-box__left__button">Load more</button>
                </div>
            </div>
            <div class="profile__bottom-box__right">
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">21:07</span>
                        <span class="profile__bottom-box__right__el__text">Time played</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">124.03</span>
                        <span class="profile__bottom-box__right__el__text">Total earned</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">14</span>
                        <span class="profile__bottom-box__right__el__text">NFT`S collected</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">121</span>
                        <span class="profile__bottom-box__right__el__text">Achievements</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">03:11</span>
                        <span class="profile__bottom-box__right__el__text">Time spent learning</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">11</span>
                        <span class="profile__bottom-box__right__el__text">Total games played</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">5</span>
                        <span class="profile__bottom-box__right__el__text">Completed tasks</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">12</span>
                        <span class="profile__bottom-box__right__el__text">Guilds</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">227</span>
                        <span class="profile__bottom-box__right__el__text">Battles won</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">12</span>
                        <span class="profile__bottom-box__right__el__text">Battles lost</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">376</span>
                        <span class="profile__bottom-box__right__el__text">PVP player</span>
                    </div>
                </div>
                <div class="profile__bottom-box__right__el">
                    <div class="profile__bottom-box__right__el__wrapper">
                        <span class="profile__bottom-box__right__el__number">29</span>
                        <span class="profile__bottom-box__right__el__text">PVE played</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style lang="scss" scoped>
.profile {
    display: flex;
    flex-direction: column;
    gap: 4.3rem;

    &__bottom-box {
        display: grid;
        grid-template-columns: 1fr 2.05fr;
        gap: 2.6rem;

        @media only screen and (max-width: 850px) {
            grid-template-columns: 100%;
        }

        &__left {
            background: rgba(217, 217, 217, 0.05);
            border-radius: 15px;

            &__info {
                display: flex;
                flex-direction: column;
                margin-top: 3.43rem;

                &__el {
                    padding: 1.3rem;
                    border-top: 1px solid rgba(242, 242, 242, 0.2);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    &:first-child {
                        padding-top: 0;
                        border: none;
                    }

                    &__left {
                        display: grid;
                        grid-template-columns: 1.7fr 6fr auto;
                        align-items: center;
                        gap: 2rem;

                        @media only screen and (max-width: 850px) {
                            grid-template-columns: 3fr 6fr auto;
                        }

                        &__img {
                            border-radius: 5px;
                            height: 4.3rem;
                            width: 4.3rem;
                        }

                        &__number {
                            font-weight: 600;
                            font-size: 2.06rem;
                            line-height: 85%;

                            @media only screen and (max-width: 850px) {
                                font-size: 23px !important;
                            }
                        }

                        &__name {
                            font-weight: 500;
                            font-size: 1.55rem;
                            line-height: 85%;

                            @media only screen and (max-width: 850px) {
                                font-size: 15px !important;
                            }
                        }
                    }

                    &__right {
                        display: flex;
                        align-items: flex-end;
                        gap: 0.5rem;

                        @media only screen and (max-width: 850px) {
                            flex-direction: column;
                        }

                        &__number {
                            font-weight: 500;
                            font-size: 2.06rem;
                            line-height: 85%;
                            color: #FFFFFF;

                            @media only screen and (max-width: 850px) {
                                font-size: 19px !important;
                            }
                        }

                        &__text {
                            font-size: 1.37rem;
                            line-height: 1.16rem;
                            color: rgba(136, 134, 140, 1);

                            @media only screen and (max-width: 850px) {
                                font-size: 13px !important;
                                margin-top: 5px;
                            }
                        }
                    }
                }
            }

            &__filters {
                display: grid;
                grid-template-columns: repeat(4, 1fr);

                &__el {
                    font-weight: 500;
                    font-size: 1.71rem;
                    line-height: 85%;
                    color: rgba(255, 255, 255, 0.5);
                    flex-direction: column;
                    display: flex;
                    text-align: center;
                    align-items: center;

                    @media only screen and (max-width: 850px) {
                        font-size: 19px !important;
                    }

                    &::after {
                        content: "";
                        align-self: center;
                        width: 2.6rem;
                        padding-top: 1.3rem;
                        display: none;
                    }

                    &:hover {
                        &::after {
                            display: block;
                            border-bottom: 4px solid rgba(255, 255, 255, 0.5);
                            animation: underlineAnimation 0.5s ease;
                        }
                    }

                    &.active {
                        color: #B960FF;

                        &::after {
                            content: "";
                            align-self: center;
                            display: block;
                            width: 2.6rem;
                            padding-top: 1.3rem;
                            border-bottom: 4px solid #B960FF;
                        }
                    }

                    &.active:hover {
                        &::after {
                            animation: none;
                        }
                    }
                }
            }

            &__wrapper {
                padding: 3.44rem 2.6rem 2.4rem;
                display: flex;
                flex-direction: column;
            }

            &__title {
                font-weight: 600;
                font-size: 2.75rem;
                line-height: 85%;
                text-align: center;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                }
            }

            &__filters {
                margin-top: 3.44rem;
            }

            &__button {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                font-weight: 600;
                font-size: 1.71rem;
                line-height: 85%;
                padding: 1.65rem 0;

                &:hover {
                    opacity: 0.8;
                }

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }
        }

        &__right {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2.6rem;

            @media only screen and (max-width: 850px) {
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
            }

            &__el {
                background: rgba(217, 217, 217, 0.05);
                border-radius: 15px;
                height: 17.2rem;

                &__wrapper {
                    padding: 2.6rem;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    gap: 2.6rem;
                    justify-content: flex-end;
                }

                &__number {
                    font-weight: 700;
                    font-size: 4.15rem;
                    line-height: 85%;

                    @media only screen and (max-width: 850px) {
                        font-size: 23px !important;
                    }
                }

                &__text {
                    font-weight: 500;
                    font-size: 1.71rem;
                    line-height: 85%;

                    @media only screen and (max-width: 850px) {
                        font-size: 13px !important;
                    }
                }
            }
        }
    }

    &__top-box {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.6rem;

        @media only screen and (max-width: 850px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        &__el {
            height: 31rem;
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            z-index: 100;
            padding: 2.15rem 3rem;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            &.nft {
                background-image: url('@/assets/img/Leaderboard/nft-bg.png');
            }

            &.game {
                background-image: url('@/assets/img/Leaderboard/game-bg.png');

            }

            &.eth {
                background-image: url('@/assets/img/Leaderboard/eth-bg.png');

            }

            &.guild {
                background-image: url('@/assets/img/Leaderboard/guild-bg.png');

            }

            @media only screen and (max-width: 850px) {
                height: 40rem;
            }

            &__img {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: -1;
                background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
                mix-blend-mode: normal;

                @media only screen and (max-width: 850px) {
                    width: auto;
                }
            }

            &__type {
                font-weight: 500;
                font-size: 2.06rem;
                line-height: 85%;

                @media only screen and (max-width: 850px) {
                    font-size: 13px !important;
                }
            }

            &__name {
                margin-top: 0.9rem;
                font-weight: 700;
                font-size: 3.1rem;
                line-height: 3.86rem;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                }
            }
        }
    }
}

@keyframes underlineAnimation {
    from {
        transform: scaleX(0);
    }

    to {
        transform: scaleX(1);
    }
}
</style>