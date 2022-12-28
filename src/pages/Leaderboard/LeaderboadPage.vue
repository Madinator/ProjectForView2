<script setup lang="ts">
import Filters from '@/components/Singular/Leaderboard/Filters.vue';


</script>

<template>
    <div class="page page-leaderboard">
        <div class="inner-container">
            <header class="page-leaderboard__header">
                <h2 class="page-leaderboard__header__title primary-title">Leaderboard</h2>
                <div class="page-leaderboard__header__filters">
                    <Filters />
                </div>
            </header>
            <section class="page-leaderboard__content">
                <RouterView />
            </section>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.page-leaderboard {
    min-height: 100vh;
    background: linear-gradient(258.81deg, #0B001D -29.36%, #040307 122.35%), linear-gradient(196.65deg, #0D2E5A 2.27%, #5F92E6 104.63%), #000000;

    &__header {
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 850px) {
            flex-direction: column;
        }

        @media only screen and (min-width: 500px) and (max-width: 850px) {
            position: relative;
        }


        &__title {
            font-weight: 700;
            font-size: 5.5rem;
            line-height: 7.15rem;
            color: var(--color-white);

            @media only screen and (max-width: 850px) {
                margin-bottom: 7rem;
                font-size: 31px !important;
            }
        }

        &__filters {
            display: flex;
            align-items: center;

            @media only screen and (max-width: 850px) {
                top: 16rem;
                left: 0;
                position: absolute;
                width: 100%;
                -ms-overflow-style: none;
                overflow: -moz-scrollbars-none;

                ::-webkit-scrollbar {
                    width: 0;
                }
            }

            @media only screen and (min-width: 500px) and (max-width: 850px) {
                top: 7rem;
            }
        }
    }

    &__content {
        margin-top: 4.55rem;
    }

    .inner-container {
        @include width-restriction;
        padding: 8.6rem 6.35rem 6rem;

        @media only screen and (max-width: 850px) {
            padding: 8.6rem 0 6rem;
        }
    }

}
</style>