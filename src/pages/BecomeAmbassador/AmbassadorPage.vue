<script setup lang="ts">
import Popup from '@/components/Singular/BecomeAmbassador/Popup.vue';
import { useBaseStore } from '@/stores';
import { gsap, Power0 } from 'gsap';
import { ref } from 'vue';


const baseStore = useBaseStore();

// DOM
const img1 = ref<null | HTMLElement>(null);
const img2 = ref<null | HTMLElement>(null);
const img3 = ref<null | HTMLElement>(null);
const img4 = ref<null | HTMLElement>(null);
const img5 = ref<null | HTMLElement>(null);
const img6 = ref<null | HTMLElement>(null);


// PARALLAX ON MOUSE MOVE
const parallax = (mouse: MouseEvent, resistance: number, el: HTMLElement) => {
    gsap.to(el, {
        duration: .2, ease: Power0.easeIn,
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

// MOVE DIAMONDS AND GAMEPADS ON MOUSE MOVE
const mouseMove = (event: MouseEvent): void => {
    if (baseStore.isTouchDevice() || !img1.value || !img2.value ||
        !img3.value || !img4.value || !img5.value || !img6.value) return;
    parallax(event, -80, img1.value);
    parallax(event, 60, img2.value);
    parallax(event, -120, img3.value);
    parallax(event, -70, img4.value);
    parallax(event, 100, img5.value);
    parallax(event, -50, img6.value);
};

// POPUP STATUS
const isPopupOpen = ref(false);

// OPEN POPUP HANDLER
const handleOpenPopup = () => {
    isPopupOpen.value = !isPopupOpen.value;
}
</script>

<template>
    <div @mousemove="mouseMove" class="page page-ambassador">
        <div class="inner-container">
            <div class="page-ambassador__box">
                <h2 class="page-ambassador__box__title">Become an Ambasador</h2>
                <span class="page-ambassador__box__earn title-primary">Earn Games</span>
                <p class="page-ambassador__box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet
                    sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt nostrud amet.</p>
                <button @click="handleOpenPopup()" class="page-ambassador__box__button">To apply</button>
                <img src="@/assets/img/BecomeAmbassador/bottom-img.png" alt="img" class="page-ambassador__box__img">
            </div>
        </div>
        <div class="page-ambassador__popup" :class="{ closed: !isPopupOpen }">
            <Popup :handler="{ handleOpenPopup }" />
        </div>
        <img src="@/assets/svg/BecomeAmbassador/light-left.svg" alt="" class="page-ambassador__bg-img light1 desktop">
        <img src="@/assets/svg/BecomeAmbassador/light-right.svg" alt="" class="page-ambassador__bg-img light2 desktop">
        <img src="@/assets/svg/BecomeAmbassador/light-left-mobile.svg" alt=""
            class="page-ambassador__bg-img light1 mobile">
        <img src="@/assets/svg/BecomeAmbassador/light-right-mobile.svg" alt=""
            class="page-ambassador__bg-img light2 mobile">
        <img ref="img1" src="@/assets/img/BecomeAmbassador/gamepad1.png" alt=""
            class="page-ambassador__bg-img gamepad1 desktop">
        <img src="@/assets/img/BecomeAmbassador/gamepad1-mobile.png" alt=""
            class="page-ambassador__bg-img gamepad1 mobile">
        <img ref="img2" src="@/assets/img/BecomeAmbassador/gamepad2.png" alt=""
            class="page-ambassador__bg-img gamepad2">
        <img ref="img3" src="@/assets/img/BecomeAmbassador/gamepad3.png" alt=""
            class="page-ambassador__bg-img gamepad3">
        <img ref="img4" src="@/assets/img/BecomeAmbassador/roket1.png" alt=""
            class="page-ambassador__bg-img roket1 desktop">
        <img ref="img5" src="@/assets/img/BecomeAmbassador/roket2.png" alt=""
            class="page-ambassador__bg-img roket2 desktop">
        <img ref="img6" src="@/assets/img/BecomeAmbassador/roket3.png" alt=""
            class="page-ambassador__bg-img roket3 desktop">
    </div>
</template>

<style lang="scss" scoped>
.page-ambassador {
    min-height: 100vh;
    background: #000000;

    &__popup {
        transition: all .2s;
    }

    &__bg-img {
        position: fixed;

        &.light1 {
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 1;
        }

        &.light2 {
            height: 100vh;
            top: 0;
            right: 0;
            z-index: 1;
        }

        &.gamepad1 {
            bottom: 0;
            left: -20px;

            @media only screen and (max-width: 850px) {
                top: 20%;
                left: 0;
            }
        }

        &.gamepad2 {
            bottom: 40%;
            left: 10%;

            @media only screen and (max-width: 850px) {
                top: 20%;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
            }
        }

        &.gamepad3 {
            bottom: 35%;
            left: 20%;

            @media only screen and (max-width: 850px) {
                top: 20%;
                left: auto;
                right: -2rem;
            }
        }

        &.roket1 {
            right: -20px;
            bottom: 0;
        }

        &.roket2 {
            bottom: 30%;
            right: 8%;
        }

        &.roket3 {
            bottom: 35%;
            right: 20%;
        }
    }

    &__box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 61.4rem;
        z-index: 10;

        @media only screen and (max-width: 500px) {
            width: 100%;
            align-items: center;
        }

        &__title {
            text-align: center;
            font-weight: 600;
            font-size: 5.5rem;
            line-height: 84.5%;
            color: var(--color-white);

            @media only screen and (max-width: 500px) {
                font-size: 3.75rem;
                white-space: nowrap;
            }

            @media only screen and (max-width: 850px) and (max-height: 450px) and (min-width: 600px) {
                font-size: 3.75rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 29px !important;
            }
        }

        &__earn {
            text-align: center;
            margin-top: 4.3rem;
            font-size: 23rem;
            line-height: 84.5%;
            color: #DCB45B;

            @media only screen and (max-width: 500px) {
                margin-top: 1rem;
                font-size: 15rem;
                white-space: nowrap;
            }

            @media only screen and (max-width: 850px) and (max-height: 450px) and (min-width: 600px) {
                margin-top: 1rem;
            }

            @media only screen and (max-height: 600px) {
                font-size: 10rem !important;
            }

        }

        &__text {
            font-size: 1.54rem;
            line-height: 140%;
            text-align: center;

            @media only screen and (max-width: 500px) {
                margin-top: 2rem;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        &__button {
            align-self: center;
            font-weight: 500;
            margin-top: 3rem;
            background-color: rgba(144, 55, 214, 0.2);
            border-radius: 5px;
            padding: 1rem 4.9rem;
            font-size: 1.71rem;
            line-height: 112%;
            letter-spacing: 0.025em;
            border: 1px solid rgba(144, 55, 214, 1);

            @media only screen and (max-width: 500px) {
                width: 100%;
            }

            @media only screen and (max-width: 850px) and (max-height: 450px) and (min-width: 600px) {
                margin-top: 1rem;
            }

            &:hover {
                opacity: 0.8;
            }

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        &__img {
            margin-top: 4.72rem;

            @media only screen and (max-width: 500px) {
                width: 150%;
            }

            @media only screen and (max-width: 850px) {
                margin-top: 15rem;
            }
        }
    }

    .inner-container {
        @include width-restriction;
        min-height: 100vh;
        padding: 0 6.35rem 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        @media only screen and (max-width: 850px) {
            padding: 0 6.35rem 0;
        }
    }
}
</style>