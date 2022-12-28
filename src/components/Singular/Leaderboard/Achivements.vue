<script setup lang="ts">

</script>

<template>
    <div class="achivements">
        <div v-for="i in 4" class="achivements__el desktop">
            <img src="@/assets/img/Leaderboard/achivements-img.png" alt="icon" class="achivements__el__img">
            <div class="achivements__el__box">
                <span class="achivements__el__box__title">Achivement name</span>
                <p class="achivements__el__box__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="achivements__el__right">
                <span class="achivements__el__right__number">1000</span>
                <span class="achivements__el__right__text">people have it</span>
            </div>
        </div>
        <div v-for="i in 4" class="achivements__el mobile">
            <div class="achivements__el__header">
                <img src="@/assets/img/Leaderboard/achivements-img.png" alt="icon" class="achivements__el__img">
                <div class="achivements__el__right">
                    <span class="achivements__el__right__number">1000</span>
                    <span class="achivements__el__right__text">people have it</span>
                </div>
            </div>
            <div class="achivements__el__box">
                <span class="achivements__el__box__title">Achivement name</span>
                <p class="achivements__el__box__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.achivements {
    display: flex;
    flex-direction: column;
    gap: 3.44rem;

    &__el {
        background: rgba(255, 255, 255, 0.05);
        align-items: center;
        border-radius: 15px;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        background-image: url('@/assets/svg/Leaderboard/achivements-bg.svg');
        background-repeat: no-repeat;
        background-position: 100%;

        @media only screen and (max-width: 850px) {
            flex-direction: column;
            background-image: none;
        }

        &__header {
            position: relative;
            width: 100%;
            background-image: url('@/assets/svg/Leaderboard/achivements-bg-mobile.svg');
            background-repeat: no-repeat;
            background-position: 100%;
            border-radius: 15px 15px 0 0;
        }

        &__img {
            position: absolute;
            height: 15.3rem;
            left: 1.35rem;
            bottom: 0;

            @media only screen and (max-width: 850px) {
                left: 0.5rem;
                bottom: -4rem;
            }
        }

        &__box {
            padding: 2.6rem 14rem 2.6rem 23.21rem;
            display: flex;
            flex-direction: column;
            gap: 2.15rem;

            @media only screen and (max-width: 850px) {
                padding: 2.4rem 3rem 5rem;
            }

            &__title {
                font-weight: 600;
                font-size: 2.4rem;
                line-height: 85%;

                @media only screen and (max-width: 850px) {
                    font-size: 23px !important;
                }
            }

            &__text {
                font-size: 1.55rem;
                line-height: 120%;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }
        }

        &__right {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-right: 3.43rem;
            gap: 0.9rem;

            @media only screen and (max-width: 850px) {
                align-items: flex-end;
                padding: 1.5rem 3rem;
            }

            &__number {
                font-weight: 600;
                font-size: 3.4rem;
                line-height: 85%;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                }
            }

            &__text {
                font-weight: 500;
                font-size: 1.71rem;
                line-height: 85%;
                white-space: nowrap;

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }
        }
    }
}
</style>