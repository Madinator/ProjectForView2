<script setup lang="ts">
import TournamentCard from '@/components/Reusable/profile/TournamentCard.vue';
import TournamentTable from '@/components/Singular/profile/TournamentTable.vue';
</script>

<template>
    <div class="page page-tournaments">
        <div class="page-tournaments__mobile mobile">
            <span class="page-tournaments__title">Tournament name</span>
            <div class="page-tournaments__line"></div>
            <div class="page-tournaments__cards">
                <TournamentCard v-for="i in 7" />
            </div>
        </div>
        <div class="page-tournaments__desktop desktop">
            <TournamentTable />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-tournaments {
    padding: 0 0 7.32rem;

    @media only screen and (min-width: 850px) {
        padding: 0 0 18rem;
    }

    &__title {
        font-weight: 400;
        font-size: 2.53rem;
        line-height: 2.95rem;

        @media only screen and (max-width: 850px) {
            font-size: 19px !important;
            font-weight: 600;
        }
    }

    &__line {
        margin-top: 1.41rem;
        width: 100%;
        border-top: 1px solid rgba(242, 242, 242, 0.2);
    }

    &__cards {
        margin-top: 2.81rem;

        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 2.11rem;

        @media only screen and (min-width: 700px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
</style>