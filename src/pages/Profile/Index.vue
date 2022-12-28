<script setup lang="ts">
import NavigationButton from "@/components/Reusable/NavigationButton.vue"
import router from "@/router";
import { useProfileStore } from "@/stores/profile"; 
import { storeToRefs } from "pinia";
import { onMounted, onUnmounted, ref } from "vue";

const profileStore = useProfileStore();
const { navigation } = storeToRefs(profileStore);

const screnWidth = ref(0);

const setCurrentWidth = () => {
    screnWidth.value = window.screen.width;
}
const toBecomeAmbassador = () => {
    router.push({name: 'becomeAmbassador'})
}
onMounted(() => {
    setCurrentWidth();
    window.addEventListener('resize', setCurrentWidth);
});
onUnmounted(() => {
    window.removeEventListener('resize', setCurrentWidth);
});
</script>

<template>
    <div class="page page-profile">
        <div class="page-profile__main">
            <img class="page-profile__img mobile" src="@/assets/img/profile/profileMainMobile.png" alt="" />
            <div class="page-profile__img desktop">
                <img class="page-profile__objects"  src="@/assets/img/profile/profileMainDesktop.png" alt="" />
            </div>
            <div class="page-profile__content">
                <div class="inner-container">
                    <div class="page-profile__info">
                        <!-- <div class="page-profile__add-info">
                            <img class="page-profile__checkmark" src="@/assets/svg/profile/checkmark.svg" alt="" />
                            <span class="page-profile__title">Ambassadors</span>
                        </div> -->
                        <router-link to="/becomeAmbassador" class="page-profile__verification">
                            <img class="page-profile__plus" src="@/assets/svg/plus.svg" alt="" />
                            <span class="page-profile__verification-text">verification</span>
                        </router-link>
                        <h1 class="page-profile__name">KARNAVAL</h1>
                        <p class="page-profile__description">Past recorded videos have to sometimes be tapped twice to open on the Android app (though single-tap works most of the time)</p>
                    </div>
                    <div class="page-profile__navigation">
                        <RouterLink 
                            :to="{name: nav.to }" 
                            v-for="nav in navigation"
                            @click="profileStore.toggleTab(nav.to)"
                            >
                            <NavigationButton :name="nav.name" :active="nav.active" />
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-profile__page">
            <div class="page-profile__page-bg desktop">
            </div>
            <div class="inner-container">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-profile {
    background-color: #000000;

    @media only screen and (min-width: 850px) {
        padding-top: 5.15rem;
        min-height: 100vh
    }

    &__main {
        position: relative;
        @media only screen and (min-width: 850px) {
            width: 100%;
            aspect-ratio: 1920/650;
        }
    }

    &__img {
        width: 100%;
        @media only screen and (min-width: 850px) {
            position: absolute;
            background-color: #0B0405;
        }
    }
    &__objects {
        position: absolute;
        width: 100%;
        z-index: 20;
    }
    &__bg {
        position: absolute;
        top: 0;
        right: 0;
        mix-blend-mode: hard-light;
        z-index: 10;
        width: 70%;
    }
    &__content {
        display: flex;
        flex-flow: column;
        @media only screen and (min-width: 850px) {
            padding: 0;
            position: relative;
            min-height: 100%;
        }


        .inner-container {
            @include width-restriction;
            padding: 0 6.5rem;
            margin-top: auto;
        @media only screen and (max-width: 850px) {
            padding: 3.52rem 0 0 0;
        }
    }
    }
    &__info {
        display: flex;
        flex-flow: column;

        @media only screen and (min-width: 850px) {
            position: relative;
            z-index: 200;
        }
    }
    &__add-info {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 0.98rem;
        
        @media only screen and (min-width: 850px) {
            gap: 1.28rem;
        }
    }
    &__verification {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 0.85rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        width: fit-content;
        padding: 0.9rem 2rem;
        position: relative;
        z-index: 100;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
    &__verification-text {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 112%;
        letter-spacing: 0.025em;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__checkmark {
        width: 2rem;
        height: 1.41rem;
        
        @media only screen and (min-width: 850px) {
            width: 1.45rem;
            height: 1.03rem;
        }
    }
    &__title {
        font-family: 'Qanelas';
        font-style: normal;
        font-weight: 400;
        font-size: 2.05rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 2.05rem;
        }
    }
    &__name {
        margin-top: 1.41rem;

        font-family: 'DELIRIUM';
        font-style: normal;
        font-weight: 400;
        font-size: 14.1rem;
        line-height: 14.1rem;

        @media only screen and (min-width: 850px) {
            margin-top: -0.5rem;

            font-size: calc( 1px * 283 * v-bind('screnWidth')/1920);
            line-height: calc( 1px * 283 * v-bind('screnWidth')/1920);
        }
    }
    &__description {
        margin-top: -1.41rem;
        font-family: 'Qanelas';
        font-style: normal;
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;

        opacity: 0.8;

        width: 44rem;
        @media only screen and (min-width: 850px) {
            margin-top: -2rem;
            font-size: 14px !important;
            width: calc( 1px * 535 * v-bind('screnWidth')/1920);
        }
        
    }
    &__navigation {
        margin-top: 6.76rem;

        display: flex;
        flex-flow: row;
        justify-content: space-between;

        @media only screen and (min-width: 450px) {
            justify-content: unset;
            gap: 5.48rem;
        }
        @media only screen and (min-width: 850px) {
            margin-top: 8rem;



            position: relative;
            z-index: 30;
        }
        @media only screen and (min-width: 1100px) {
            margin-top: calc( 1px * 142 * v-bind('screnWidth')/1920);
        }
    }
    &__page {
        margin-top: 3rem !important;
        min-height: 100vh;
        @media only screen and (min-width: 850px) {
            margin-top: 5.1rem;
            padding-top: 5.15rem;
            min-height: 100vh;
        }
        .inner-container {
        @include width-restriction;
            padding: 0 6.5rem;
            position: relative;
            z-index: 100;
            @media only screen and (max-width: 850px) {
                padding: 3.52rem 0 0 0;
            }
        }
    }
    &__page-bg {
        position: fixed;
        top: 0;
        min-width: 100%;
        min-height: 100%;
        background: url('@/assets/img/profile/bg.png');
        background-position: top 200px right;
        background-attachment: fixed;
        background-size: contain;
        background-repeat: no-repeat;
        mix-blend-mode: hard-light;
        z-index: 10;
        opacity: .4;
    }
}
</style>