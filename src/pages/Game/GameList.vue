<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';
import { GameView, GameSortBY } from '@/typing/game';
import GameBannerSwitcher from '@/components/Singular/game/GameBannerSwitcher.vue';
import ButtonWithImg from '@/components/Reusable/ButtonWithImg.vue';
import GameCard from '@/components/Singular/game/GameCard.vue';
import GameSearch from '@/components/Singular/game/GameSearch.vue';
import SortPage from '@/components/Reusable/SortPage.vue';
import SetOptions from '@/components/Reusable/game/SetOptions.vue';
import GameCategories from '@/components/Singular/game/GameCategories.vue';
import SortSelect from '@/components/Reusable/game/SortSelect.vue';
import type { SetOptionsType } from '@/typing/game';

const data = [
    {
        id: 0,
        name: '01',
    },
    {
        id: 1,
        name: '02',
    },
    {
        id: 2,
        name: '03',
    },
]

const isSearchOpen = ref(false);
const isSortOpen = ref(false);

const gameStore = useGameStore();
const { banner, activeBannerId, activeViewType, gameCategories } = storeToRefs(gameStore);

const bannerBaseWidth = 1920;
const bannerBaseHeight = 943;

const bannerData = reactive({
    bannerWidth: 0,
    bannerHeight: 0
})

const countBannerSize = () => {
    bannerData.bannerWidth = window.innerWidth;
    bannerData.bannerHeight = bannerData.bannerWidth * bannerBaseHeight / bannerBaseWidth;
}

onMounted(() => {
    countBannerSize();
    window.addEventListener('resize', countBannerSize)
});

onUnmounted(() => {
    window.removeEventListener('resize', countBannerSize)
});

const setActiveButton = (id: number): void => {
    gameStore.setActiveBanner(id);
};
const changeView = (type: GameView): void => {
    gameStore.setActiveViewType(type);
};
const setSelectedSortType = (type: GameSortBY): void => {
    gameStore.setSortType(type);
}

const pickedSubCategories = computed((): SetOptionsType[]  => {
    let array: SetOptionsType[] = [];

    gameCategories.value.filter(item => item.subtitles.filter(elem => 
    { 
        if(elem.picked) {
            array.push({name: elem.name, picked: elem.picked, category: item.title});
        }
    }))

    return array;
})


const openSearch = (): void => {
    isSearchOpen.value = true;
};

const closeSearch = (): void => {
    isSearchOpen.value = false;
}

const openSort = (): void => {
    isSortOpen.value = true;
};

const closeSort = (): void => {
    isSortOpen.value = false;
}

</script>

<template>
    <div class="page page-game">
        <div class="banner-mobile mobile">
            <div class="banner-mobile__header">
                <h1 class="banner-mobile__title">{{banner[activeBannerId].title}}</h1>
                <h1 class="banner-mobile__desc">{{banner[activeBannerId].description}}</h1>
                <button class="banner-mobile__button btn-white">Subscribe</button>
            </div>
            <div class="banner-mobile__main">
                <img class="banner-mobile__img" :src="banner[activeBannerId].img" alt=""/>
                <div class="banner-mobile__switcher">
                    <GameBannerSwitcher />
                </div>
            </div>
        </div>
        <div class="banner-desktop desktop">
            <img class="banner-desktop__img-left" src="@/assets/img/game/mainleft.png" alt="" />
            <img class="banner-desktop__pieces-left" src="@/assets/img/game/leftPieces.png" alt="" />
            <img class="banner-desktop__pieces-right" src="@/assets/img/game/rightPieces.png" alt="" />
            <img class="banner-desktop__img-robot" src="@/assets/img/game/mainRobot.png" alt="" />
            <div class="banner-desktop__right">
                <div class="banner-desktop__content">
                    <h1 class="banner-desktop__title">{{banner[activeBannerId].title}}</h1>
                    <div class="banner-desktop__desc">
                        <div class="banner-desktop__curr-text"></div>
                        <div class="banner-desktop__text">{{banner[activeBannerId].description}}</div>
                    </div>
                    <router-link to="/gamePage" class="banner-desktop__button btn-white">Go to game</router-link>
                </div>
                <div class="banner-desktop__switcher">
                    <button class="banner-desktop__switch" v-for="item in data">
                        <div  
                            v-if="activeBannerId === item.id"
                            class="banner-desktop__switch--flag"
                        >
                        </div>
                        <span 
                            class="banner-desktop__switch--number"
                            :class="activeBannerId === item.id ? 'banner-desktop__siwtch--number--active' : ''"
                            @click="setActiveButton(item.id)"
                        >{{item.name}}
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <div class="main">
            <div class="main__header">
                <div class="main-title-container">
                    <h1 class="main__title">Game list</h1>
                    <div class="main__rules desktop">
                        <SetOptions v-for="item in pickedSubCategories" :item="item"/>
                    </div>
                </div>
                <div class="main__control" >
                    <div class="main__view">
                        <SortSelect class="desktop"/>
                        <button @click="changeView(GameView.COLUMN)" class="main__view-button"
                                :class="activeViewType === GameView.COLUMN ? 'main__view-option--active' : ''">
                            <img 
                                class="main__view-option main__view--lines" 
                                src="@/assets/svg/game/tripleLine.svg" alt="" 
                            />
                        </button>
                        <button @click="changeView(GameView.ROW)" class="main__view-button"
                                :class="activeViewType === GameView.ROW ? 'main__view-option--active' : ''">
                            <img 
                                class="main__view-option main__view--rect" 
                                src="@/assets/svg/fourSquares.svg" alt="" 
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div class="main__buttons mobile">
                <ButtonWithImg class="main__button" image="src/assets/svg/game/search.svg" name="Search" @click="openSearch"/>
                <ButtonWithImg class="main__button" image="src/assets/svg/game/setting.svg" name="Sort" @click="openSort"/>

            </div>
            <div class="main__content">
                <div class="main__left desktop">
                    <GameCategories />
                </div>
                <div class="main__cards" :class="activeViewType === GameView.ROW ? 'main__cards--row' : ''">
                    <GameCard v-for="i in 6" :type="activeViewType" />
                </div>
            </div>
        </div>
        <Transition>
            <GameSearch v-if="isSearchOpen" @close="closeSearch"/>
        </Transition>
        <Transition>
            <SortPage class="page-game__sort" v-if="isSortOpen" @close="closeSort"/>
        </Transition>
    </div>
</template>

<style lang="scss" scoped> 
.page-game {
    background-color: #110B27;
    &__sort {
        background: linear-gradient(0deg, #110B27, #110B27), #0B0C0D;       
    }
}
.banner-mobile {
    padding-top: 18.3rem;
    &__header {
        @include width-restriction;
        // padding: 0 3.38rem;
    }
    &__title {
        font-weight: 700;
        font-size: 4.5rem;
        line-height: 120%;
        color: var(--color-white); 

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    &__desc {
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 120%;

        margin-top: 1.4rem;
        width: 50rem;

        @media only screen and (max-width: 450px) {
            width: 90%;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__button {
        margin-top: 1.66rem;
    }
    &__main {
        margin-top: 3.1rem;
        position: relative;
    }
    &__img {
        width: 100%;
    }
    &__switcher {
        position: absolute;
        left: 50%;
        bottom: 3.94rem;
        transform: translateX(-50%);
    }
    
}

.banner-desktop {
    position: relative;
        aspect-ratio: v-bind('bannerBaseWidth')/v-bind('bannerBaseHeight');
        background: linear-gradient(254.49deg, #231161 -31.18%, #0B0813 95.96%), linear-gradient(196.65deg, #0D2E5A 2.27%, #5F92E6 104.63%), #000000;
        &__img {
            position: absolute;
            bottom: 0;
            background: url('@/assets/img/game/mainDesktop.png') no-repeat;
            background-size: contain;
            background-position: center center; 
            width: 100%;
            z-index: 100;
        }
        &__pieces-left {
            position: absolute;
            bottom: -2.5rem;
            left: 0;
            filter: blur(3px);
            width: 30rem;
            z-index: 100;
        }
        &__pieces-right {
            position: absolute;
            bottom: -2rem;
            right: 0;
            filter: blur(3px);
            width: 40rem;
        }
        &__img-left {
            position: absolute;
            z-index: 50;
            width: calc(1px * 1042 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth'));
            top: calc(1px * 199 * v-bind('bannerData.bannerHeight') / v-bind('bannerBaseHeight'));
            aspect-ratio: 1042/492;
        }   
        &__img-robot {
            position: absolute;
            bottom: 0;
            left: calc(-1px * 172 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth') + 2%);
            z-index: 100;
            // width: 100rem;
            height: 110%;
            // width: calc(1px * 1300 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth'));
            // left: calc(-1px * 172 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth'));
            // top: calc(-1px * 232 * v-bind('bannerData.bannerHeight') / v-bind('bannerBaseHeight'));
            // aspect-ratio: 1300/1302;
        }
        &__right {
            position: absolute;
            display: flex;
            flex-flow: row;
            z-index: 25;
            background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
            backdrop-filter: blur(38px);

            width: calc(1px * 758 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth'));
            left: calc(1px * 849 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth'));
            top: calc(1px * 263 * v-bind('bannerData.bannerHeight') / v-bind('bannerBaseHeight'));
            transform: skewX(-10deg);   
            aspect-ratio: 845/550;
        }
        &__content {
            padding: 7.19rem 3.93rem 9.41rem 14.8rem;
            transform: skewX(10deg);
            @media (min-width: 2300px) {
                padding: 20%;
            }
            @media (max-width: 1900px) {
                padding-top: 4rem;
            }
            @media (max-width: 1400px) {
                padding-top: 4rem;
            }
            @media (max-width: 850px) {
                padding-top: 2.2rem ;
            }
        }
        &__title {
            font-weight: 700;
            font-size: 5.48rem;
            // line-height: 7.1rem;
            line-height: 1.1;
            width: calc(1px * 417 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth'));
            @media (max-width: 1900px) {
                font-size: 5rem;
                // line-height: 6.5rem;
            }
            @media (max-width: 1600px) {
                font-size: 4.5rem;
                // line-height: 6rem;
            }
            @media (max-width: 1000px) {
                font-size: 3.5rem;
                // line-height: 4rem;
            }
            @media (max-width: 850px) {
                font-size: 3rem;
                // line-height: 3.5rem;
            }
        }
        &__desc {
            display: flex;
            flex-flow: row;
            align-items: flex-start;
            gap: 1.32rem;
            margin-top: 1.28rem;
            opacity: .8;
        }
        &__curr-text {
            width: 0.256rem;
            height: 3.125rem;
            background-color: white;
            margin-top: 0.856rem;
        }
        &__text {
            font-weight: 400;
            font-size: 1.54rem;
            // line-height: 140%;
            line-height: 1.5;

            width: calc(1px * 275 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth'));

            @media (max-width: 1900px) {
                font-size: 1.4rem !important;
                // line-height: 130%;
            }
            @media (max-width: 1600px) {
                font-size: 1.3rem !important;
                // line-height: 120%;
            }
            @media (max-width: 1020px) {
                font-size: 1.2rem !important;
                // line-height: 100%;
            }
        }
        &__button {
            margin-top: 2.568rem;
            margin-left: 1.5rem;
        }

        &__switcher {
            margin: 0 0 0 auto;
            width: calc(1px * 112 * v-bind('bannerData.bannerWidth') / v-bind('bannerBaseWidth'));
            aspect-ratio: 112/550;
            background-color: var(--color-purple-dark);
        }
        &__switch {
            display: flex;
            flex-flow: row;
            align-items: center;
            margin-top: calc(1px * 85 * v-bind('bannerData.bannerHeight') / v-bind('bannerBaseHeight'));
        }
        &__switch--flag {
            width: 0.428rem;
            height: 3.34rem;
            background-color: white;
            margin-left: -0.1284rem;
            transition: all .3s;
        }
        &__switch--number {
            font-weight: 400;
            font-size: 2.739rem;
            line-height: 85%;
            color: rgba(255, 255, 255, 0.5);
            transform: skewX(10deg);
            margin-left: 1.71rem;
            transition: all 0.3s;

        }
        &__siwtch--number--active {
            color: white;
        }
}

.main {
    @include width-restriction;
    // padding: 4.647rem 3.38rem;
    padding: 7rem 6.35rem;
    transition: all 2s;

    @media only screen and (max-width: 850px) {
        padding: 5rem 0;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: calc(100% - 34rem - 2.5rem);
        margin-left: auto;

        @media only screen and (max-width: 1400px) {
            width: calc(100% - 30rem - 2.5rem);
        }

        @media only screen and (max-width: 1100px) {
            width: calc(100% - 27rem - 2.5rem);
        }

        @media only screen and (max-width: 850px) {
            width: 100%;
            align-items: center;
        }

        // @media (min-width: 850px) {
        //     flex-flow: column;
        // }
    }
    &__title {
        font-weight: 600;
        font-size: 4.5rem;
        // line-height: 5.49rem;
        margin-bottom: 3rem;

        @media only screen and (max-width: 850px) {
            margin-bottom: 0;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    &__control {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        @media (min-width: 850px) {
            margin-top: 5.63rem;
        }

        @media only screen and (max-width: 850px) {
            margin-top: .5rem;
        }
    }
    &__view {
        display: flex;
        flex-flow: row;
        gap: 1.408rem;
        align-items: center;
    }
    &__rules {
        display: flex;
        flex-flow: row;
        gap: 2rem;
    }
    &__sort-by {
        cursor: pointer;
        font-weight: 600;
        font-size: 2.53rem;
        line-height: 85%;
    }
    &__view-sort-by-arrow {
        transform: rotate(-90deg);
    }
    // &__view-option {
    //     width: 4.788rem;
    //     height: 4.788rem;
    //     background: rgba(255, 255, 255, 0.2);
    //     border-radius: 2px;
    // }
    &__view-button {
        @include flex-center;
        width: 3.5rem;
        height: 3.5rem;
        background-color: #3D3A46;
    }
    &__view--lines {
        // padding: 1.549rem;

        width: 2rem;
        height: 2rem;
    }
    &__view--rect {
        // padding: 1.126rem;

        width: 2.4rem;
        height: 2.4rem;
    }
    &__view-option--active {
        background-color: rgba(144, 55, 214, 0.5);
        // border: 1px solid #663C8E;
    }
    &__buttons {
        display: flex;
        flex-flow: row;
        gap: 1.126rem;
        margin-top: 1.69rem;
    }
    &__button {
        width: 100%;
    }
    &__content {
        margin-top: 4.65rem;
        display: flex;
        flex-flow: row;
        gap: 2.65rem;
    }
    &__left {
        width: 34rem;
        min-width: 34rem;

        @media only screen and (max-width: 1400px) {
            width: 30rem;
            min-width: 30rem;
        }

        @media only screen and (max-width: 1100px) {
            width: 27rem;
            min-width: 27rem;
        }
    }
    &__cards {
        display: flex;
        flex-flow: column;
        gap: 2.81rem;
    }
    &__cards--row {
        width: 100%;
        // flex-flow: row wrap;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2.5rem;

        @media only screen and (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
</style>