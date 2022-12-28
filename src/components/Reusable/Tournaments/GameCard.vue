<script setup lang="ts">

</script>

<template>
    <router-link to="/tournaments/game/1" class="game-card">
        <img src="@/assets/img/Tournaments/game-icon.png" alt="game-icon" class="game-card__img desktop" />
        <img src="@/assets/img/Tournaments/game-icon-mobile.png" alt="game-icon" class="game-card__img mobile" />
        <div class="game-card__wrapper">

            <span class="game-card__time">20 September - start at 16:00 </span>
            <strong class="game-card__game-name">Tournament’s name </strong>
            <div class="game-card__info">
                <div class="game-card__info__el">
                    <span class="game-card__info__el__title">Matches</span>
                    <span class="game-card__info__el__descr">1</span>
                </div>
                <div class="game-card__info__el">
                    <span class="game-card__info__el__title">Time</span>
                    <span class="game-card__info__el__descr">70 min</span>
                </div>
                <div class="game-card__info__el">
                    <span class="game-card__info__el__title">Participants</span>
                    <span class="game-card__info__el__descr">126</span>
                </div>
            </div>
        </div>
        <div class="game-card__footer">
            <div class="game-card__footer__info">
                <span class="game-card__footer__info__title">1st place prize</span>
                <span class="game-card__footer__info__descr">$ 1000</span>
            </div>
            <router-link to="/tournaments/game/1" class="game-card__footer__join-button btn-purple">Join</router-link>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.game-card {
    margin-top: 3.4rem;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    width: calc(420px * 100vw / 1920px);
    max-width: 420px;
    justify-self: center;

    background: linear-gradient(138.03deg, rgba(255, 255, 255, 0.1) -42.18%, rgba(255, 255, 255, 0) 104.38%);
    border-radius: 15px;

    &:hover {
        transform: scale(1.03);
    }

    @media only screen and (max-width: 850px) {
        width: 100%;
        background: linear-gradient(92deg, rgba(255, 255, 255, 0.083) 1.41%, rgba(240, 237, 247, 0.069) 104.83%);
        backdrop-filter: blur(8px);
        max-width: none;
    }

    &__wrapper {
        padding: 1.71rem 2.56rem 0;
    }

    &__time {
        color: var(--color-white);
        font-size: 1.71rem;
        margin-top: 1.3rem;
        opacity: 0.8;
        text-transform: uppercase;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__game-name {
        font-size: 2.73rem;
        font-weight: 600;
        margin-top: 1.28rem;
        display: block;

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }

    &__info {
        display: flex;
        justify-content: space-between;
        margin-top: 2.56rem;

        &__el {
            display: flex;
            flex-direction: column;

            &__title {
                color: #8A8A8A;
                font-size: 1.71rem;

                @media only screen and (max-width: 850px) {
                    font-size: 14px !important;
                    opacity: 0.7;
                }
            }

            &__descr {
                margin-top: 0.9rem;
                font-size: 2.05rem;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                    opacity: 0.7;
                }
            }
        }
    }

    &__footer {
        background: rgba(217, 217, 217, 0.05);
        margin-top: 1.71rem;
        padding: 1.71rem 2.4rem;
        border-radius: 0px 0px 15px 15px;

        display: flex;
        justify-content: space-between;

        &__info {
            display: flex;
            flex-direction: column;

            &__title {
                color: #8A8A8A;
                font-size: 1.71rem;

                @media only screen and (max-width: 850px) {
                    font-size: 14px !important;
                }
            }

            &__descr {
                font-size: 2.05rem;
                margin-top: 0.85rem;

                @media only screen and (max-width: 850px) {
                    font-size: 17px !important;
                }
            }
        }

        &__join-button {
            align-self: center;
            height: 3.25rem;
            font-size: 1.71rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }
    }
}
</style>