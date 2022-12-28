<script setup lang="ts">
// RANDOM CARDS SIMULATION
const lastCardChance: string[] = ['Blue', 'Blue', 'Blue', 'Blue', 'Blue', 'Blue', 'Blue', 'Purple', 'Purple', 'Orange'];
const cardChance: string[] = ['Blue', 'Purple', 'Orange'];

let cards: string[] = [];

for (let i = 0; i < 16; i++) {
    cards.push(cardChance[Math.round(Math.random() * 2)]);
}

cards.push(lastCardChance[Math.round(Math.random() * 9)]);

for (let i = 0; i < 3; i++) {
    cards.push(cardChance[Math.round(Math.random() * 2)]);
}

</script>

<template>
    <div class="card-box">
        <div class="card" v-for="(item, index) in cards" :class="'card' + (index + 1).toString()">
            <div v-if="item === 'Blue'" class="card-box__el blue">
                <div class="card-box__el__content">
                    <div class="card-box__el__content__wrapper">
                        <div class="card-box__el__content__type">SSR</div>
                        <p class="card-box__el__content__title">Blue Gen 0 Hero Ticket</p>
                        <div class="card-box__el__content__info">
                            <div class="card-box__el__content__info__el">
                                <span class="card-box__el__content__info__el__title">Chance</span>
                                <span class="card-box__el__content__info__el__number">70.00%</span>
                            </div>
                            <div class="card-box__el__content__info__el">
                                <span class="card-box__el__content__info__el__title">Count</span>
                                <span class="card-box__el__content__info__el__number">700</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="item === 'Orange'" class="card-box__el orange">
                <div class="card-box__el__content">
                    <div class="card-box__el__content__wrapper">
                        <div class="card-box__el__content__type">SSR</div>
                        <p class="card-box__el__content__title">Orange Gen 0 Hero Ticket</p>
                        <div class="card-box__el__content__info">
                            <div class="card-box__el__content__info__el">
                                <span class="card-box__el__content__info__el__title">Chance</span>
                                <span class="card-box__el__content__info__el__number">10.00%</span>
                            </div>
                            <div class="card-box__el__content__info__el">
                                <span class="card-box__el__content__info__el__title">Count</span>
                                <span class="card-box__el__content__info__el__number">100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="item === 'Purple'" class="card-box__el purple">
                <div class="card-box__el__content">
                    <div class="card-box__el__content__wrapper">
                        <div class="card-box__el__content__type">SSR</div>
                        <p class="card-box__el__content__title">Purple Gen 0 Hero Ticket</p>
                        <div class="card-box__el__content__info">
                            <div class="card-box__el__content__info__el">
                                <span class="card-box__el__content__info__el__title">Chance</span>
                                <span class="card-box__el__content__info__el__number">20.00%</span>
                            </div>
                            <div class="card-box__el__content__info__el">
                                <span class="card-box__el__content__info__el__title">Count</span>
                                <span class="card-box__el__content__info__el__number">200</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    align-self: center;
    z-index: 1000000;


    &-box {
        display: flex;
        gap: 2rem;

        &__el {
            background-repeat: no-repeat;
            background-size: cover;
            height: 51.6rem;
            aspect-ratio: 450 / 600;
            transform: skew(-5deg);
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            &.blue {
                background-image: url('@/assets/img/MysteryBox/card-blue.png');
            }

            &.orange {
                background-image: url('@/assets/img/MysteryBox/card-orange.png');
            }

            &.purple {
                background-image: url('@/assets/img/MysteryBox/card-purple.png');
            }

            &__content {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                width: 100%;
                height: 100%;

                &__wrapper {
                    transform: skew(5deg);
                    width: 100%;
                    padding: 5.15rem;
                    display: flex;
                    flex-direction: column;
                    align-self: flex-end;
                }

                &__type {
                    font-weight: 700;
                    font-size: 1.55rem;
                    line-height: 105.4%;
                    color: var(--color-white);
                    background: rgba(185, 96, 255, 0.52);
                    border-radius: 3px;
                    padding: 0.5rem 3rem;
                    align-self: flex-start;
                    border: 1px solid rgba(255, 255, 255, 0.61);
                }

                &__title {
                    margin-top: 1rem;
                    width: 17.5rem;
                    font-weight: 700;
                    font-size: 2.75rem;
                    line-height: 3rem;
                    color: var(--color-white);
                }

                &__info {
                    margin-top: 1.33rem;
                    display: flex;
                    gap: 3rem;

                    &__el {
                        display: flex;
                        flex-direction: column;
                        gap: 0.2rem;

                        &__title {
                            font-size: 1.55rem;
                            line-height: 105.4%;
                            color: var(--color-white);
                        }

                        &__number {
                            font-weight: 700;
                            font-size: 2.06rem;
                            line-height: 105.4%;
                            color: var(--color-white);
                        }
                    }
                }
            }
        }
    }
}
</style>