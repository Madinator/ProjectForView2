<script setup lang="ts">
import { useLanguageDropdown } from '@/stores/languageDropdown';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// DROPDOWN CLOSE HANDLER
const dropdownStatus = useLanguageDropdown();
const handleClick = (e: Event): void => {
    const id = (e.target as HTMLInputElement).id;
    if (id !== 'dropdown') {
        dropdownStatus.closeDropdown();
    }
}

// SETTINGS PAGES DATA
const navStatus = ref([
    {
        id: 0,
        name: "My profile",
        link: "MyProfile",
        activeStatus: false,
    },
    {
        id: 1,
        name: "Security",
        link: "security",
        activeStatus: false,
    },
    {
        id: 2,
        name: "Verification",
        link: "verification",
        activeStatus: false,
    },
    {
        id: 3,
        name: "Settings",
        link: "settings",
        activeStatus: false,
    }
]);

// CHANGE CURRENT SETTINGS PAGE
const setNavStatus = (id: number): void => {
    navStatus.value.forEach(el => {
        el.id === id ? el.activeStatus = !el.activeStatus : el.activeStatus = false;
    })
}

// SET CURRENT SETTINGS PAGE ON LOAD
const route = useRoute();

onMounted(() => {
    navStatus.value.forEach(el => {
        route.path.slice(17).includes(el.link) ? el.activeStatus = !el.activeStatus : el.activeStatus = false;
    });
})

</script>

<template>
    <div @click="handleClick" class="page page-settings">
        <div class="inner-container">
            <h2 class="page-settings__title title-primary">Settings</h2>
            <div class="page-settings__box">
                <nav class="page-settings__box__nav desktop">
                    <router-link class="page-settings__box__nav__el" v-for="(item, index) in navStatus"
                        :class="{ active: item.activeStatus }" @click="setNavStatus(item.id)" :to="{ path: item.link }"
                        :key="index">{{ item.name }}</router-link>
                </nav>
                <div class="page-settings__box__nav__mobile-box">
                    <nav class="page-settings__box__nav__mobile mobile">
                        <router-link class="page-settings__box__nav__mobile__el" v-for="(item, index) in navStatus"
                            :class="{ active: item.activeStatus }" @click="setNavStatus(item.id)"
                            :to="{ path: item.link }" :key="index">{{ item.name }}</router-link>
                    </nav>
                </div>
                <div class="page-settings__box__content">
                    <RouterView />
                </div>
            </div>

        </div>
        <img class="settings-bg__left" src="@/assets/svg/Settings/settings-bg-left.svg" alt="">
        <img class="settings-bg__top" src="@/assets/svg/Settings/settings-bg-top.svg" alt="">
        <img class="settings-bg__right" src="@/assets/img/Settings/settings-bg-right.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.page-settings {
    font-weight: 500;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media only screen and (max-width: 850px) {
        padding-top: 10rem;
    }

    &__title {
        width: 100%;
        font-size: 9rem;
        line-height: 9rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(242, 242, 242, 0.2);
    }

    &__box {
        padding-top: 3rem;
        display: grid;
        grid-template-columns: 10rem auto;
        gap: 15rem;

        @media only screen and (max-width: 1000px) {
            gap: 7rem;
        }

        @media only screen and (max-width: 850px) {
            display: flex;
            flex-direction: column;
            padding-top: 0;
        }

        &__content {
            @media only screen and (max-width: 850px) {
                margin-top: 8rem;
            }
        }

        &__nav {
            display: flex;
            flex-direction: column;
            gap: 2.56rem;

            &__el {
                font-weight: 600;
                font-size: 1.71rem;
                line-height: 120%;
                color: #40354D;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                }

                &:hover {
                    transform: scale(1.1);
                }

                &.active {
                    color: #FFF;
                }
            }

            &__mobile-box {
                left: 0;
                position: absolute;
                width: 100%;

                -ms-overflow-style: none;
                overflow: -moz-scrollbars-none;

                ::-webkit-scrollbar {
                    width: 0;
                }

                @media only screen and (min-width: 450px) {
                    width: 90%;
                    margin-left: 5%;
                }

                @media only screen and (min-width: 600px) {
                    width: 75%;
                    margin-left: 12.5%;
                }

                @media only screen and (min-width: 750px) {
                    width: 70%;
                    margin-left: 15%;
                }
            }

            &__mobile {
                display: flex;
                overflow-x: scroll;
                -ms-overflow-style: none;
                overflow: -moz-scrollbars-none;
                padding: 2rem 0;

                ::-webkit-scrollbar {
                    width: 0;
                }

                &__el {
                    background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
                    backdrop-filter: blur(40px);
                    border: 1px solid #FFFFFF0F;
                    border-radius: 7px;
                    color: var(--color-white);
                    align-self: center;
                    padding: 0.5rem 5.5rem;
                    margin-right: 1rem;
                    white-space: nowrap;
                    font-size: 2.5rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 19px !important;
                    }

                    @media only screen and (max-width: 600px) {
                        font-size: 1.7rem;
                    }

                    &:first-child {
                        margin-left: 1px;

                        @media only screen and (max-width: 450px) {
                            margin-left: 2rem;
                        }
                    }

                    &:last-child {
                        margin-right: 1px;

                        @media only screen and (max-width: 450px) {
                            margin-right: 2rem;
                        }
                    }

                    &.active {
                        background: linear-gradient(90.71deg, rgba(144, 55, 214, 0.7) 0.51%, rgba(144, 55, 214, 0.7) 116.38%);
                    }
                }
            }
        }
    }
}

.inner-container {
    @include width-restriction;
    padding: 13rem 6.35rem 0;

    @media only screen and (max-width: 850px) {
        padding: 0;
    }

}

.settings-bg {
    &__left {
        position: fixed;
        left: -1000px;
        bottom: -500px;
        filter: blur(280.5px);
        transform: rotate(-93.98deg);
        background: #9037D6;
        z-index: 100;

        @media only screen and (max-width: 850px) {
            display: none;
        }
    }

    &__right {
        position: fixed;
        bottom: -300px;
        right: 0;
        mix-blend-mode: hard-light;

        @media only screen and (max-width: 850px) {
            bottom: -250px;
        }
    }

    &__top {
        position: fixed;
        right: -600px;
        top: -800px;
        filter: blur(280.5px);
        transform: rotate(-93.98deg);
        background: #4E1A23;
        z-index: 100;

        @media only screen and (max-width: 850px) {
            display: none;
        }
    }
}
</style>