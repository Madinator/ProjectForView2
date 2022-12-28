<script setup lang="ts">

</script>

<template>
    <div class="tournament-card">
        <img class="tournament-card__img" src="@/assets/img/profile/tournament.png" alt="" />
        <div class="tournament-card__info">
            <span class="tournament-card__name">Daily Tournament</span>
            <div class="tournament-card__properties">
                <div class="tournament-card__property">
                    <span class="tournament-card__key">Date</span>
                    <span class="tournament-card__value">15/09/2022</span>
                </div>
                <div class="tournament-card__property">
                    <span class="tournament-card__key">Prize</span>
                    <span class="tournament-card__value">$ 1000</span>
                </div>
                <div class="tournament-card__property">
                    <span class="tournament-card__key">Matches</span>
                    <span class="tournament-card__value">12</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tournament-card {
    background: linear-gradient(92deg, rgba(255, 255, 255, 0.083) 1.41%, rgba(240, 237, 247, 0.069) 104.83%);
    // backdrop-filter: blur(8px);
    border-radius: 13px;

    border: 1px solid rgba(255, 255, 255, 0.2);

    &__img {
        width: 100%;
    }

    &__info {
        padding: 2.11rem 2.81rem 4.93rem;
    }

    &__name {
        font-weight: 500;
        font-size: 3.38rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }

    &__properties {
        margin-top: 2.11rem;
        display: flex;
        flex-flow: row;
        gap: 4.22rem;
    }

    &__property {
        display: flex;
        flex-flow: column;
        gap: 0.28rem;
    }

    &__key {
        font-weight: 400;
        font-size: 2rem;
        line-height: 120%;

        opacity: 0.7;

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }

    &__value {
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
}
</style>