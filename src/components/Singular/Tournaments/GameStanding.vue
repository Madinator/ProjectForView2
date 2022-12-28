<script setup lang="ts">
import { useGameStanding } from '@/stores/gameStanding';

// CURRENT GAME STANDING DATA
const gameStanding = useGameStanding();

// MY UD
const myID = 1234;
</script>

<template>
    <div class="standing">
        <div class="standing__title">
            <h2 class="standing__title__text">Standings</h2>
        </div>
        <div class="standing__table-title">
            <div class="standing__table-title__el">№</div>
            <div class="standing__table-title__el participant">Participant</div>
            <div class="standing__table-title__el">Matches</div>
            <div class="standing__table-title__el">Time</div>
            <div class="standing__table-title__el">Deaths</div>
        </div>
        <div class="standing__table">
            <div class="standing__table__row" v-for="(item, index) in gameStanding.$state"
                :class="{ you: item.playerID === myID }">
                <div class="standing__table__row__el">{{ index + 1 }}
                </div>
                <div class="standing__table__row__el participant">
                    <img src="@/assets/img/Tournaments/player-img.png" alt="img"
                        class="standing__table__row__el__player-img">
                    <div class="standing__table__row__el__text">
                        <span class="standing__table__row__el__text__player-name">{{ item.participant }}</span>
                        <span class="standing__table__row__el__text__past-winner" v-if="item.isPastWinner">Past
                            winner</span>
                    </div>
                </div>
                <div class="standing__table__row__el">{{ item.matches }}</div>
                <div class="standing__table__row__el">{{ item.time }}</div>
                <div class="standing__table__row__el">{{ item.deaths }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.standing {
    &__title {
        padding: 0;

        &__text {
            font-weight: 700;
            font-size: 4.1rem;
            line-height: 5.05rem;

            @media only screen and (max-width: 850px) {
                font-size: 31px !important;
            }
        }
    }

    &__table-title {
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 5rem auto repeat(3, 9rem);
        padding-bottom: 1rem;
        margin-bottom: 1.79rem;
        border-bottom: 1px solid rgba(242, 242, 242, 0.2);

        &__el {
            text-align: center;
            font-weight: 600;
            font-size: 1.71rem;
            line-height: 2.05rem;

            @media only screen and (max-width: 850px) {
                font-size: 13px !important;
            }

            &.participant {
                text-align: start;
            }
        }
    }

    &__table {

        &__row {

            display: grid;
            margin-top: 1rem;
            grid-template-columns: 5rem auto repeat(3, 9rem);
            gap: 1.28rem 0;

            @media only screen and (max-width: 850px) {
                margin-top: 1.5rem;
            }

            &.you {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 15px;
            }


            &__el {
                text-align: center;
                font-size: 1.54rem;
                line-height: 85%;
                height: 4.28rem;
                align-items: center;
                display: flex;
                justify-content: center;
                align-items: center;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }

                &__player-img {
                    margin-right: 1rem;
                    height: 100%;
                }

                &__text {
                    display: flex;
                    flex-direction: column;

                    &__player-name {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 2.05rem;
                        margin-bottom: 0.2rem;
                        padding-left: 0.5rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }
                    }

                    &__past-winner {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 2.05rem;
                        color: #733AA6;

                        @media only screen and (max-width: 850px) {
                            font-size: 13px !important;
                            text-align: start;
                            margin-left: 0.5rem;
                        }
                    }
                }

                &.participant {
                    justify-content: flex-start;
                    display: flex;
                }
            }
        }

    }

    :deep(.you:first-child) {
        border-radius: 15px;
    }
}
</style>