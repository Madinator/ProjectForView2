<script setup lang="ts">
import { useLanguageDropdown } from '@/stores/languageDropdown';

// DROPDOWN DATA
const dropdownStatus = useLanguageDropdown();

// LANGUAGE CHANGE HANDLER
const handleChangeChoosenLanguage = (e: Event): void => {
    const language = (e.target as HTMLInputElement).innerHTML;
    dropdownStatus.changeLanguage(language);
}

// DROPDOWN OPEN HANDLER
const handleOpenLanguageDropdown = () => {
    dropdownStatus.changeStatus();
}

</script>

<template>
    <div class="settings">
        <div class="settings__box desktop">
            <div class="settings__box__table">
                <div class="settings__box__table__row">
                    <span class="settings__box__table__row__info__title">Language</span>
                    <div class="settings__box__table__row__data"></div>
                    <button id="dropdown" class="settings__box__table__row__data language"
                        @click="handleOpenLanguageDropdown">
                        <span id="dropdown" class="settings__box__table__row__data__text">{{
                                dropdownStatus.$state.language
                        }}</span>
                        <img id="dropdown" src="@/assets/svg/Settings/settings-arrow-down.svg" alt="arrow"
                            class="settings__box__table__row__data__img"
                            :class="{ 'arrow-active': dropdownStatus.$state.isLanguageDropdownOpen }" />
                    </button>
                    <div class="settings__box__table__row__language-dropdown"
                        :class="{ closed: !dropdownStatus.$state.isLanguageDropdownOpen }">
                        <div id="dropdown" class="settings__box__table__row__language-dropdown__wrapper">
                            <span @click="handleChangeChoosenLanguage"
                                class="settings__box__table__row__language-dropdown__language">English</span>
                            <span @click="handleChangeChoosenLanguage"
                                class="settings__box__table__row__language-dropdown__language">Poland</span>
                            <span @click="handleChangeChoosenLanguage"
                                class="settings__box__table__row__language-dropdown__language">Russian</span>
                            <span @click="handleChangeChoosenLanguage"
                                class="settings__box__table__row__language-dropdown__language">DSDS</span>
                        </div>
                    </div>
                </div>
                <div class="settings__box__table__row">
                    <span class="settings__box__table__row__info__title">Notifications</span>
                    <span class="settings__box__table__row__info__title">News, Activity, Transaction Alerts, System
                        Messages</span>
                    <button class="settings__box__table__row__button btn">Setting</button>
                </div>
                <div class="settings__box__table__row">
                    <span class="settings__box__table__row__info__title">Promotional newsletter</span>
                    <div class="settings__box__table__row__data"></div>
                    <button class="settings__box__table__row__button btn">Setting</button>

                </div>
            </div>
        </div>
        <div class="settings__box mobile">
            <div class="settings__box__table">
                <div class="settings__box__table__row">
                    <span class="settings__box__table__row__info__data">Language
                    </span>
                    <button id="dropdown" class="settings__box__table__row__data language"
                        @click="handleOpenLanguageDropdown">
                        <span id="dropdown" class="settings__box__table__row__data__text">{{
                                dropdownStatus.$state.language
                        }}</span>
                        <img id="dropdown" src="@/assets/svg/Settings/settings-arrow-down.svg" alt="arrow"
                            class="settings__box__table__row__data__img"
                            :class="{ 'arrow-active': dropdownStatus.$state.isLanguageDropdownOpen }" />
                    </button>
                    <div class="settings__box__table__row__language-dropdown"
                        :class="{ closed: !dropdownStatus.$state.isLanguageDropdownOpen }">
                        <div id="dropdown" class="settings__box__table__row__language-dropdown__wrapper">
                            <span @click="handleChangeChoosenLanguage"
                                class="settings__box__table__row__language-dropdown__language">English</span>
                            <span @click="handleChangeChoosenLanguage"
                                class="settings__box__table__row__language-dropdown__language">Poland</span>
                            <span @click="handleChangeChoosenLanguage"
                                class="settings__box__table__row__language-dropdown__language">Russian</span>
                            <span @click="handleChangeChoosenLanguage"
                                class="settings__box__table__row__language-dropdown__language">DSDS</span>
                        </div>
                    </div>
                </div>
                <div class="settings__box__table__row">
                    <div class="settings__box__table__row__info">
                        <span class="settings__box__table__row__info__data start">Notifications</span>
                        <span class="settings__box__table__row__info__descr">News, Activity, Transaction Alerts,
                            System
                            Messages</span>
                    </div>
                    <button class="settings__box__table__row__button btn">Setting</button>
                </div>
                <div class="settings__box__table__row">
                    <span class="settings__box__table__row__info__data">Promotional newsletter</span>
                    <button class="settings__box__table__row__button btn">Setting</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.settings {
    display: flex;
    flex-direction: column;
    padding-bottom: 6rem;

    &__box {
        display: flex;
        flex-direction: column;
        width: 80%;

        @media only screen and (max-width: 850px) {
            width: 100%;
        }

        margin-top: 5.2rem;

        &:first-child {
            margin-top: 1rem;
        }

        &__table {

            &__row {
                display: grid;
                grid-template-columns: 21rem auto 15rem;
                gap: 5rem;
                padding: 2.2rem 0;
                position: relative;

                &:first-child {
                    padding-top: 0;
                }

                border-top: 1px solid rgba(242, 242, 242, 0.2);

                @media only screen and (max-width: 850px) {
                    grid-template-columns: auto 15rem;
                    border-top: none;
                    border-bottom: 1px solid rgba(242, 242, 242, 0.2);
                }

                &:first-child {
                    border: none;

                    @media only screen and (max-width: 850px) {
                        border-bottom: 1px solid rgba(242, 242, 242, 0.2);
                    }
                }

                &__info {
                    display: flex;
                    flex-direction: column;

                    &__title {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 120%;
                        align-self: center;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }
                    }

                    &__data {
                        align-self: center;
                        background-size: 2.1rem;
                        align-self: center;
                        font-size: 1.54rem;
                        line-height: 140%;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }


                        &.start {
                            align-self: flex-start;
                        }
                    }

                    &__descr {
                        font-weight: 400;
                        font-size: 1.36rem;
                        line-height: 140%;
                        color: #858585;
                        margin-top: 1rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 12px !important;
                        }
                    }
                }

                &__data {
                    justify-self: flex-end;
                    display: flex;
                    align-self: center;
                    font-size: 1.54rem;
                    line-height: 140%;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }


                    &.language:hover {
                        opacity: 0.8;
                    }

                    &__img {
                        transition: all .2s;
                        height: 2.06rem;
                        width: 2.06rem;

                        &.arrow-active {
                            transform: rotate(-180deg);
                        }

                    }
                }

                &__button {
                    background: linear-gradient(90.71deg, rgba(255, 255, 255, 0.094) 0.51%, rgba(240, 237, 247, 0.049) 116.99%);
                    backdrop-filter: blur(40px);
                    border: 1px solid #FFFFFF0F;
                    border-radius: 7px;
                    color: var(--color-white);
                    height: 3.85rem;
                    align-self: center;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }

                &__language-dropdown {
                    position: absolute;
                    transition: all .3s;
                    right: 0;
                    top: 3rem;

                    background: var(--color-black);
                    border: 1px solid var(--color-grey);
                    border-radius: 9px;

                    z-index: 100;

                    &__wrapper {
                        padding: 2.2rem 6.5rem 2.2rem 2.2rem;
                        display: flex;
                        flex-direction: column;
                        gap: 1.3rem;
                    }

                    &__language {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 120%;
                        cursor: pointer;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }

                        &:hover {
                            opacity: 0.8;
                        }
                    }
                }
            }

        }
    }
}
</style>