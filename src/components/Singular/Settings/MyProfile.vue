<script setup lang="ts">
import { ref } from 'vue';

// CURENT PROFILE PICTURE
const profilePic = ref("/img/user/avatar.png");

// CHANGE PROFILE PICTURE HANDLER
const handlePicChange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (files) profilePic.value = URL.createObjectURL(files[0]);
}

// CURRENT USER DATA
const data = ref({
    name: "Karna.Val",
    email: "karnaval@info.com",
    phone: "+ 381 62 987 98 95",
    isNameChanging: false,
    isEmailChanging: false,
    isPhoneChanging: false,
});

// INPUT FOCUS AFTER PRESSING CHANGE BUTTON
const focus = (id: string) => {
    setTimeout(() => {
        document.getElementById(id)?.focus();
    }, 0);
};

// CHANGE NAME BUTTON CLICK HANDLER
const handleChangeName = (id: string) => {
    data.value.isNameChanging = true;
    focus(id);
}

// CHANGE EMAIL BUTTON CLICK HANDLER
const handleChangeEmail = (id: string) => {
    data.value.isEmailChanging = true;
    focus(id);
}

// CHANGE PHONE BUTTON CLICK HANDLER
const handleChangePhone = (id: string) => {
    data.value.isPhoneChanging = true;
    focus(id);
}

// CHANGING END HANDLER
const handleEndChanging = () => {
    data.value.isEmailChanging = false;
    data.value.isPhoneChanging = false;
    data.value.isNameChanging = false;
}

// CHANGE NAME HANDLER
const handleChangeNameInput = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    data.value.name = value;
}

// CHANGE EMAIL HANDLER
const handleChangeEmailInput = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    data.value.email = value;
}

// CHANGE PHONE HANDLER
const handleChangePhoneInput = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    data.value.phone = value;
}

</script>

<template>
    <div class="myProfile desktop">
        <div class="myProfile__el name">
            <div class="myProfile__el__img-box">
                <label for="pic-input" class="myProfile__el__img-box__img">
                    <img :src="profilePic" alt="ProfilePic" class="myProfile__el__img-box__img" />
                </label>
                <input @change="handlePicChange" id="pic-input" type="file" />
                <label class="myProfile__el__img-box__button btn" for="pic-input">Replace</label>
            </div>
        </div>
        <div class="myProfile__box">
            <div class="myProfile__el">
                <div class="myProfile__el__name-change-box">
                    <span v-if="!data.isNameChanging" class="myProfile__el__name-change-box__text">{{ data.name
                    }}</span>
                    <input v-else-if="data.isNameChanging" :value="data.name" @input="handleChangeNameInput"
                        id="changeName" @blur="handleEndChanging" @keyup.enter="handleEndChanging" type="text"
                        class="myProfile__el__name-change-box__text">
                    <button v-if="!data.isNameChanging" @click="handleChangeName('changeName')"
                        class="myProfile__el__name-change-box__button"></button>
                </div>
                <span class="myProfile__el__status">Ambassador</span>
            </div>
            <div class="myProfile__el">
                <span class="myProfile__el__title">Email</span>
                <span v-if="!data.isEmailChanging" class="myProfile__el__info">{{ data.email }}</span>
                <input v-else-if="data.isEmailChanging" :value="data.email" @input="handleChangeEmailInput"
                    id="changeEmail" @blur="handleEndChanging" @keyup.enter="handleEndChanging" type="text"
                    class="myProfile__el__info">
                <button v-if="!data.isEmailChanging" @click="handleChangeEmail('changeEmail')"
                    class="myProfile__el__change-button"></button>
            </div>
            <div class="myProfile__el">
                <span class="myProfile__el__title">Phone</span>
                <span v-if="!data.isPhoneChanging" class="myProfile__el__info">{{ data.phone }}</span>
                <input v-else-if="data.isPhoneChanging" :value="data.phone" @input="handleChangePhoneInput"
                    id="changePhone" @blur="handleEndChanging" @keyup.enter="handleEndChanging" type="text"
                    class="myProfile__el__info">
                <button v-if="!data.isPhoneChanging" @click="handleChangePhone('changePhone')"
                    class="myProfile__el__change-button"></button>

            </div>
        </div>
    </div>
    <div class="myProfile mobile">
        <div class="myProfile__box">
            <div class="myProfile__el">
                <label for="pic-input" class="myProfile__el__img-box__img"><img
                        :src="profilePic" alt="ProfilePic"
                        class="myProfile__el__img-box__img"></label>
                <div class="myProfile__el__mobile">
                    <span v-if="!data.isNameChanging" class="myProfile__el__name-change-box__text">{{ data.name
                    }}</span>
                    <input v-else-if="data.isNameChanging" :value="data.name" @input="handleChangeNameInput"
                        id="changeNameMobile" @blur="handleEndChanging" @keyup.enter="handleEndChanging" type="text"
                        class="myProfile__el__name-change-box__text">
                    <div class="myProfile__el__mobile__box">
                        <button @click="handleChangeName('changeNameMobile')"
                            class="myProfile__el__name-change-box__button"></button>
                        <input @change="handlePicChange" id="pic-input" type="file" />
                        <label class="myProfile__el__img-box__button btn" for="pic-input">Replace</label>
                    </div>
                </div>
            </div>
            <div class="myProfile__el">
                <button @click="handleChangeEmail('changeEmailMobile')"
                    class="myProfile__el__name-change-box__button"></button>
                <div class="myProfile__el__mobile-box">
                    <span class="myProfile__el__title">Email</span>
                    <span v-if="!data.isEmailChanging" class="myProfile__el__info">{{ data.email }}</span>
                    <input v-else-if="data.isEmailChanging" :value="data.email" @input="handleChangeEmailInput"
                        id="changeEmailMobile" @blur="handleEndChanging" @keyup.enter="handleEndChanging" type="text"
                        class="myProfile__el__info">
                </div>
            </div>
            <div class="myProfile__el">
                <button @click="handleChangePhone('changePhoneMobile')"
                    class="myProfile__el__name-change-box__button"></button>
                <div class="myProfile__el__mobile-box">
                    <span class="myProfile__el__title">Phone</span>
                    <span v-if="!data.isPhoneChanging" class="myProfile__el__info">{{ data.phone }}</span>
                    <input v-else-if="data.isPhoneChanging" :value="data.phone" @input="handleChangePhoneInput"
                        id="changePhoneMobile" @blur="handleEndChanging" @keyup.enter="handleEndChanging" type="text"
                        class="myProfile__el__info">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.myProfile {
    display: grid;
    grid-template-columns: 11rem auto;
    align-items: center;
    gap: 2.56rem;

    @media only screen and (max-width: 850px) {
        grid-template-columns: 100%;
    }

    &__box {
        display: grid;
        grid-template-columns: repeat(3, 20rem);
        gap: 9rem;


        @media only screen and (max-width: 1300px) {
            grid-template-columns: repeat(3, 15rem);
        }

        @media only screen and (max-width: 850px) {
            grid-template-columns: 100%;
            gap: 2rem;
        }
    }


    &__el {
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 1.3rem;

        &__change-button {
            position: absolute;
            left: -3.2rem;
            top: 4.45rem;
            background-image: url('@/assets/svg/Settings/change-name-button.svg');
            background-size: cover;
            height: 2.05rem;
            width: 2.05rem;

            &:hover {
                transform: scale(1.2);
            }

            @media only screen and (max-width: 850px) {
                display: none;
                width: 23px;
                height: 23px;
            }
        }


        &__mobile {
            display: flex;
            flex-direction: column;
            width: 100%;
            overflow: hidden;
            margin-left: 1rem;

            &>.myProfile__el__name-change-box__text {
                margin-bottom: 1rem;
            }

            &__box {
                display: flex;
                align-items: center;

                &>.myProfile__el__name-change-box__button {
                    margin-right: 1rem;
                }
            }
        }

        @media only screen and (max-width: 850px) {
            flex-direction: row;
            align-items: center;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(242, 242, 242, 0.2);
        }

        &__mobile-box {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__name-change-box {
            display: flex;
            align-items: center;

            &__text {
                display: block;
                font-weight: 600;
                font-size: 2.73rem;
                line-height: 3.34rem;
                color: var(--color-white);
                max-width: 18rem;
                white-space: nowrap;
                overflow-x: hidden;

                @media only screen and (max-width: 850px) {
                    max-width: 100%;
                    font-size: 23px !important;
                    line-height: normal;
                }
                
            }

            &__button {
                background-image: url('@/assets/svg/Settings/change-name-button.svg');
                background-size: cover;
                height: 2.05rem;
                width: 2.05rem;
                margin-left: 0.85rem;

                @media only screen and (max-width: 850px) {
                    opacity: 0.7;
                    min-height: 2.5rem;
                    min-width: 2.5rem;
                    margin-left: 0;
                }

                &:hover {
                    transform: scale(1.2);
                }
            }
        }

        &__title,
        &__status {
            font-weight: 400;
            font-size: 1.36rem;
            line-height: 1.62rem;
            opacity: 0.8;
            padding-top: 1.54rem;

            @media only screen and (max-width: 850px) {
                padding-top: 0;
                font-size: 13px !important;
            }
        }

        &__status {
            background-image: url('@/assets/svg/Settings/check-ambassador.svg');
            background-position: left;
            background-repeat: no-repeat;
            background-size: 1.2rem;
            padding-left: 1.7rem;
            color: rgba(255, 255, 255, 0.6);
            opacity: 1;
            padding-top: 0;
        }

        &__info {
            font-size: 1.71rem;
            line-height: 2.05rem;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            max-width: 100%;

            @media only screen and (max-width: 850px) {
                font-size: 17px !important;
                margin-top: 3px;
            }
        }

        &__img-box {
            display: grid;
            grid-template-columns: 100%;
            align-items: center;
            gap: 1.3rem;
            justify-items: center;

            &__img {
                border-radius: 100%;
                height: 11rem;
                width: 11rem;
                cursor: pointer;
                transition: all .3s;

                &:hover {
                    opacity: 0.7;
                }
            }

            &__button {
                font-weight: 600;
                font-size: 1.71rem;
                line-height: 85%;
                cursor: pointer;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                }
            }
        }
    }

    :deep(#pic-input) {
        display: none;
    }
}
</style>