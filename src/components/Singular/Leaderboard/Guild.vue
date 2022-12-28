<script setup lang="ts">
import { ref } from 'vue';
import { useLeaderboardGuild } from '@/stores/leaderboardGuilds';

const infoData = useLeaderboardGuild();


// FILTER DATA
const data = ref([
    {
        id: 0,
        name: "Active guild",
        checkedStatus: true,
    },
    {
        id: 1,
        name: "Forming Guilds",
        checkedStatus: false,
    },
    {
        id: 2,
        name: "Closed Guilds",
        checkedStatus: false,
    },
]);

// FILTER CHANGE HANDLER
const setFilter = (id: number): void => {
    data.value.forEach(el => {
        if (el.id === id) {
            el.checkedStatus = true;
            if (el.name === 'Active guild') renderData.value = infoData.getActiveGuildInfo();
            else if (el.name === 'Forming Guilds') renderData.value = infoData.getFormingGuildsInfo();
            else if (el.name === 'Closed Guilds') renderData.value = infoData.getClosedGuildsInfo();
        } else {
            el.checkedStatus = false;
        }
    });
}

// RENDER DATA
const renderData = ref(infoData.getActiveGuildInfo());
</script>

<template>
    <div class="guild">
        <div class="guild__top-box">
            <div class="guild__top-box__total">
                <div class="guild__top-box__total__wrapper">
                    <h4 class="guild__top-box__total__title">Total</h4>
                    <div class="guild__top-box__total__box">
                        <div class="guild__top-box__total__box__el">
                            <span class="guild__top-box__total__box__el__title">TVL</span>
                            <span class="guild__top-box__total__box__el__number">100</span>
                        </div>
                        <div class="guild__top-box__total__box__el">
                            <span class="guild__top-box__total__box__el__title">Pools</span>
                            <span class="guild__top-box__total__box__el__number">100</span>
                        </div>
                        <div class="guild__top-box__total__box__el">
                            <span class="guild__top-box__total__box__el__title">Yield</span>
                            <span class="guild__top-box__total__box__el__number">100</span>
                        </div>
                        <div class="guild__top-box__total__box__el total">
                            <span class="guild__top-box__total__box__el__title">Performance</span>
                            <span class="guild__top-box__total__box__el__number">100</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="guild__top-box__right">
                <div class="guild__top-box__right__wrapper">
                    <div class="guild__top-box__right__filters">
                        <button v-for="item in data" class="guild__top-box__right__filters__el"
                            :class="item.checkedStatus ? 'active' : ''" @click="setFilter(item.id)">
                            {{ item.name }}</button>
                    </div>
                    <div class="guild__top-box__right__info">
                        <div v-for="(item, index) in renderData" class="guild__top-box__right__info__el">
                            <div class="guild__top-box__right__info__el__left">
                                <span class="guild__top-box__right__info__el__left__number">{{ index + 1 }}</span>
                                <div class="guild__top-box__right__info__el__left__info">
                                    <span class="guild__top-box__right__info__el__title">Guild</span>
                                    <span class="guild__top-box__right__info__el__name">{{ item.guildName }}</span>
                                </div>
                            </div>
                            <div class="guild__top-box__right__info__el__right">
                                <span class="guild__top-box__right__info__el__title">Top player</span>
                                <span class="guild__top-box__right__info__el__name">{{ item.playerName }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="@/assets/img/Leaderboard/prize-pool.png" alt="prize-pool-img" class="guild__prize-img desktop">
        <img src="@/assets/img/Leaderboard/prize-pool-mobile.png" alt="prize-pool-img" class="guild__prize-img mobile">
        <div class="guild__stream">
            <img src="@/assets/img/Leaderboard/stream.png" alt="Stream" class="guild__stream__img">
            <span class="guild__stream__on-air title-primary">on the air</span>
            <div class="guild__stream__info">
                <span class="guild__stream__info__rating">3.8 Rating</span>
                <span class="guild__stream__info__platform">Twitch</span>
            </div>
            <span class="guild__stream__title title-primary">THE WAY OF A GTA SAMP BUSINESS OWNER (UPDATE) - OIL TANKS
                FIX ARIZONA RP?! - GTA SAMP STREAM</span>
            <span class="guild__stream__viewers-info desktop">Now watching: 92 Broadcast started 66 minutes ago</span>
        </div>
        <div class="guild__banners">
            <div class="guild__banners__left">
                <div class="guild__banners__left__wrapper">
                    <span class="guild__banners__left__title">Proposales banner</span>
                    <span class="guild__banners__left__text">Information about a proposales</span>
                </div>
            </div>
            <div class="guild__banners__right">
                <div class="guild__banners__right__wrapper">
                    <span class="guild__banners__right__title">Academy tricks & tips</span>
                </div>
            </div>
        </div>
        <div class="guild__pools">
            <div class="guild__pools__header">
                <h5 class="guild__pools__header__title">Guild Pools</h5>
                <div class="guild__pools__header__buttons">
                    <router-link to="/formGuild/stepOne" class="guild__pools__header__buttons__el">Form Guild</router-link>
                    <router-link to="/joinGuild/stepOne" class="guild__pools__header__buttons__el">Join Guild</router-link>
                </div>
            </div>
            <div class="guild__pools__box">
                <div v-for="i in 5" class="guild__pools__box__el">
                    <div class="guild__pools__box__el__item">
                        <span class="guild__pools__box__el__item__title">Guild</span>
                        <span class="guild__pools__box__el__item__name">Gamers Guild</span>
                    </div>
                    <div class="guild__pools__box__el__item">
                        <span class="guild__pools__box__el__item__title">TVL</span>
                        <span class="guild__pools__box__el__item__name">100</span>
                    </div>
                    <div class="guild__pools__box__el__item">
                        <span class="guild__pools__box__el__item__title">Revenue</span>
                        <span class="guild__pools__box__el__item__name">10 000</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.guild {
    display: flex;
    flex-direction: column;

    &__top-box {
        display: grid;
        grid-template-columns: 72fr 102fr;
        gap: 2.6rem;

        @media only screen and (max-width: 850px) {
            grid-template-columns: 100%;
        }

        &__total {
            background: rgba(217, 217, 217, 0.05);
            border-radius: 15px;

            &__wrapper {
                padding: 3.44rem 3rem 3.8rem 2.15rem;
            }

            &__title {
                text-align: center;
                font-weight: 600;
                font-size: 2.75rem;
                line-height: 85%;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                    text-align: start;
                }
            }

            &__box {
                margin-top: 4.3rem;
                display: flex;
                flex-direction: column;
                gap: 1.3rem;

                &__el {
                    display: flex;
                    justify-content: space-between;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 15px;
                    padding: 1.71rem 2.6rem;

                    &__title {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 2.06rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 19px !important;
                        }
                    }

                    &__number {
                        font-weight: 600;
                        font-size: 2.06rem;
                        line-height: 85%;

                        @media only screen and (max-width: 850px) {
                            font-size: 19px !important;
                        }
                    }

                    &.total {
                        background: rgba(184, 94, 255, 0.8);
                    }
                }
            }
        }

        &__right {
            background: rgba(217, 217, 217, 0.05);
            border-radius: 15px;

            &__info {
                overflow-y: scroll;
                display: flex;
                flex-direction: column;
                margin-top: 4rem;
                padding-right: 2rem;

                &__el {
                    padding: 1.71rem;
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
                        grid-template-columns: 2rem 5fr;
                        align-items: center;
                        gap: 3rem;

                        &__info {
                            display: flex;
                            flex-direction: column;
                        }

                        &__number {
                            font-weight: 700;
                            font-size: 2.4rem;
                            line-height: 85%;

                            @media only screen and (max-width: 850px) {
                                font-size: 23px !important;
                            }
                        }
                    }

                    &__right {
                        display: flex;
                        flex-direction: column;
                        margin-right: 8.6rem;

                        @media only screen and (max-width: 850px) {
                            margin-right: 0;
                        }
                    }

                    &__title {
                        font-size: 1.37rem;
                        line-height: 1.65rem;

                        @media only screen and (max-width: 850px) {
                            opacity: 0.6;
                            font-size: 13px !important;
                        }
                    }

                    &__name {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 85%;
                        margin-top: 0.9rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 16px !important;
                        }
                    }
                }
            }

            &__filters {
                display: grid;
                grid-template-columns: repeat(3, 1fr);

                &__el {
                    font-weight: 500;
                    font-size: 2.75rem;
                    line-height: 85%;
                    color: rgba(255, 255, 255, 0.5);
                    flex-direction: column;
                    display: flex;
                    text-align: center;
                    align-items: center;

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

                    @media only screen and (max-width: 850px) {
                        font-size: 19px !important;
                    }

                }
            }

            &__wrapper {
                padding: 3.44rem 2.6rem 2.4rem;
                display: flex;
                flex-direction: column;
                height: 37.4rem;
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
        }
    }

    &__prize-img {
        margin: 6.9rem 0 4.3rem;
    }

    &__stream {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        &__on-air {
            position: absolute;
            top: 1.71rem;
            right: 2.5rem;
            background: #D64137;
            border-radius: 5.7037px;
            font-size: 1.7rem;
            line-height: 85%;
            padding: 0.42rem 0.5rem;

            @media only screen and (max-width: 850px) {
                top: 1rem;
                right: 1rem;
            }
        }

        &__info {
            margin-top: 2.6rem;
            display: flex;
            align-items: center;
            gap: 1.3rem;

            &__rating {
                font-size: 1.55rem;
                line-height: 85%;
                color: var(--color-white);
                padding: 0.5rem 1.3rem;
                background-color: #DCB45B;
                border-radius: 5px;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }

            &__platform {
                font-size: 1.55rem;
                line-height: 85%;
                color: var(--color-white);

                @media only screen and (max-width: 850px) {
                    font-size: 17px !important;
                }
            }
        }

        &__title {
            margin-top: 2rem;
            font-size: 4.3rem;
            line-height: 85%;
            color: var(--color-white);

            @media only screen and (max-width: 850px) {
                font-size: 31px !important;
            }
        }

        &__viewers-info {
            margin-top: 1rem;
            font-size: 1.55rem;
            line-height: 85%;
            color: var(--color-white);
            opacity: 0.5;
        }
    }

    &__banners {
        margin-top: 6.9rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.6rem;

        @media only screen and (max-width: 850px) {
            grid-template-columns: 100%;
        }

        &__left,
        &__right {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-image: url('@/assets/img/Leaderboard/left-banner.png');
            background-repeat: no-repeat;
            height: 30.09rem;

            &__wrapper {
                height: 100%;
                padding: 3.44rem 2.6rem;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                justify-content: flex-end;
            }

            &__title {
                font-weight: 700;
                font-size: 3.1rem;
                line-height: 85%;
                color: var(--color-white);

                @media only screen and (max-width: 850px) {
                    font-size: 23px !important;
                }
            }

            &__text {
                font-weight: 500;
                font-size: 1.71rem;
                line-height: 85%;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }
        }

        &__right {
            background-image: url('@/assets/img/Leaderboard/right-banner.png');
            background-position: right;

            &__wrapper {
                padding-bottom: 4.3rem;
            }
        }
    }

    &__pools {
        margin-top: 6.9rem;

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media only screen and (max-width: 850px) {
                flex-direction: column;
                align-items: flex-start;
            }

            &__title {
                font-weight: 700;
                font-size: 4.15rem;
                line-height: 5.35rem;
                color: var(--color-white);

                @media only screen and (max-width: 850px) {
                    font-size: 31px !important;
                }
            }

            &__buttons {
                display: flex;
                gap: 1.71rem;

                @media only screen and (max-width: 850px) {
                    margin-top: 2rem;
                    flex-direction: column;
                    width: 100%;
                }

                &__el {
                    background: #9037D6;
                    border-radius: 5px;
                    font-weight: 600;
                    font-size: 2.06rem;
                    line-height: 85%;
                    padding: 1.05rem 5.6rem;

                    &:hover {
                        opacity: 0.8;
                    }

                    @media only screen and (max-width: 850px) {
                        text-align: center;
                        background: rgba(144, 55, 214, 0.2);
                        border-radius: 10px;
                        border: 1px solid rgba(144, 55, 214, 1);
                        font-size: 15px !important;
                    }
                }
            }
        }

        &__box {
            margin-top: 4.2rem;
            background: rgba(217, 217, 217, 0.05);
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            padding: 2rem 3rem 2rem;

            &__el {
                padding: 1rem;
                border-top: 1px solid rgba(242, 242, 242, 0.2);

                display: grid;
                grid-template-columns: auto repeat(2, 26rem);

                @media only screen and (max-width: 850px) {
                    grid-template-columns: 2.5fr repeat(2, 1fr);
                }

                &__item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.9rem;

                    &__title {
                        font-size: 1.4rem;
                        line-height: 1.64rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 13px !important;
                        }
                    }

                    &__name {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 85%;

                        @media only screen and (max-width: 850px) {
                            font-size: 17px !important;
                        }
                    }
                }

                &:first-child {
                    padding-top: 0;
                    border: none;
                }

                &:last-child {
                    padding-bottom: 0;
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