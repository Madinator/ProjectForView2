<script setup lang="ts">

</script>

<template>
    <div class="tournament-table">
        <table class="tournament-table__table">
            <tr class="tournament-table__row tournament-table__row--first">
                <th class="tournament-table__item tournament-table__name tournament-table__name--first">Tournament name</th>
                <th class="tournament-table__item tournament-table__name">Date</th>
                <th class="tournament-table__item tournament-table__name">Place</th>
                <th class="tournament-table__item tournament-table__name">Prize</th>
                <th class="tournament-table__item tournament-table__name">Matches</th>
                <th class="tournament-table__item tournament-table__name">Time</th>
                <th class="tournament-table__item tournament-table__name">Deaths</th>
            </tr>
            <tr class="tournament-table__row" v-for="i in 3">
                <td class="tournament-table__item tournament-table__item--first">
                    <img class="tournament-table__img" src="@/assets/img/profile/tournamentSmall.png" alt=""/>
                    <span>Daily Tournament</span>
                </td>
                <td class="tournament-table__item">15/09/2022</td>
                <td class="tournament-table__item">1</td>
                <td class="tournament-table__item">$ 1000</td>
                <td class="tournament-table__item"></td>
                <td class="tournament-table__item"></td>
                <td class="tournament-table__item">0</td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.tournament-table {

    &__table {
        width: 100%;

        border-collapse: collapse;
        text-align: center;
    }
    &__name {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 2rem;
    }
    &__name--first {
        text-align: left;
    }
    &__row--first {
        text-align: center;
        border-bottom: 1px solid rgba(242, 242, 242, 0.2);
    }
    &__item {
        padding: 1.45rem 0;

        font-weight: 500;
        font-size: 1.54rem;
        line-height: 85%;

    }
    &__item--first {
        display: flex;
        flex-flow: row;
        gap: 1.28rem;
        align-items: center;
    }
    &__img {
        width: 4.28rem;
        height: 4.28rem;
    }
}
</style>