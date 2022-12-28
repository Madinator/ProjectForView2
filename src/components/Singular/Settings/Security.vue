<script setup lang="ts">

</script>

<template>
    <div class="security desktop">
        <div class="security__box">
            <h3 class="security__box__title">Two-Factor Authentication (2FA)</h3>
            <div class="security__box__table">
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__info__title">Phone Number Verification</span>
                        <span class="security__box__table__row__info__descr">Protect your account and
                            transactions</span>
                    </div>
                    <div class="security__box__table__row__data">62******09</div>
                    <button class="security__box__table__row__button btn">Setting</button>
                </div>
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__info__title">Email Address Verification</span>
                        <span class="security__box__table__row__info__descr">Protect your account and
                            transactions</span>
                    </div>
                    <span class="security__box__table__row__data">mwoodo@info.com</span>
                    <button class="security__box__table__row__button btn">Setting</button>
                </div>
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__info__title">Authenticator app</span>
                        <span class="security__box__table__row__info__descr">Protect your account and
                            transactions</span>
                    </div>
                    <span class="security__box__table__row__data">On</span>
                    <button class="security__box__table__row__button btn">Setting</button>
                </div>
            </div>
        </div>
        <div class="security__box">
            <h3 class="security__box__title">Devices and Activities</h3>
            <div class="security__box__table">
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__info__title">Device Management</span>
                        <span class="security__box__table__row__info__descr">Manage devices allowed to access your
                            account</span>
                    </div>
                    <div class="security__box__table__row__data"></div>
                    <button class="security__box__table__row__button btn">Setting</button>
                </div>
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__info__title">Account Activity</span>
                        <span class="security__box__table__row__info__descr">Last login: 2022-09-18 21:07:44</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="security__box">
            <h3 class="security__box__title">Freeze or close account</h3>
            <div class="security__box__table">
                <div class="security__box__table__row small">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__info__title">Freeze account</span>
                        <span class="security__box__table__row__info__descr">Your account will be temporarily disabled.
                            You can contact our support team to unfreeze it</span>
                    </div>
                    <button class="security__box__table__row__button__arrow"></button>
                </div>
                <div class="security__box__table__row small">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__info__title">Close account</span>
                        <span class="security__box__table__row__info__descr">Permanently delete this account if you no
                            longer intend to use it</span>
                    </div>
                    <button class="security__box__table__row__button__arrow"></button>
                </div>
            </div>
        </div>
    </div>

    <div class="security mobile">
        <div class="security__box">
            <h3 class="security__box__title">Two-Factor Authentication (2FA)</h3>
            <div class="security__box__table">
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <div class="security__box__table__row__data">62******09</div>
                        <span class="security__box__table__row__info__descr">Phone Number Verification</span>
                    </div>
                    <button class="security__box__table__row__button btn">Setting</button>
                </div>
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__data">mwoodo@info.com</span>
                        <span class="security__box__table__row__info__descr">Email Address Verification</span>
                    </div>
                    <button class="security__box__table__row__button btn">Setting</button>
                </div>
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__data">On</span>
                        <span class="security__box__table__row__info__descr">Authenticator app</span>
                    </div>
                    <button class="security__box__table__row__button btn">Setting</button>
                </div>
            </div>
        </div>
        <div class="security__box">
            <h3 class="security__box__title">Devices and Activities</h3>
            <div class="security__box__table">
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__data">Device Management</span>
                        <span class="security__box__table__row__info__descr">Manage devices allowed to access your
                            account</span>
                    </div>
                    <button class="security__box__table__row__button btn">Setting</button>
                </div>
                <div class="security__box__table__row">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__data">Account Activity</span>
                        <span class="security__box__table__row__info__descr">Last login: 2022-09-18 21:07:44</span>
                    </div>
                    <div class="security__box__table__row__data"></div>
                </div>
            </div>
        </div>
        <div class="security__box">
            <h3 class="security__box__title">Freeze or close account</h3>
            <div class="security__box__table">
                <div class="security__box__table__row small">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__data">Freeze account</span>
                        <span class="security__box__table__row__info__descr">Your account will be temporarily disabled.
                            You can contact our support team to unfreeze it</span>
                    </div>
                    <button class="security__box__table__row__button__arrow"></button>
                </div>
                <div class="security__box__table__row small">
                    <div class="security__box__table__row__info">
                        <span class="security__box__table__row__data">Close account</span>
                        <span class="security__box__table__row__info__descr">Permanently delete this account if you no
                            longer intend to use it</span>
                    </div>
                    <button class="security__box__table__row__button__arrow"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.security {
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

        &__title {
            display: grid;
            font-weight: 600;
            font-size: 2.73rem;
            line-height: 3.33rem;
            margin-bottom: 2.3rem;

            @media only screen and (max-width: 850px) {
                font-size: 19px !important;
            }
        }

        &__table {

            &__row {
                display: grid;
                grid-template-columns: auto 30% 15rem;
                gap: 5rem;
                padding: 2.2rem 0;

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

                &.small {
                    grid-template-columns: auto 2.2rem;
                }

                &__info {
                    display: flex;
                    flex-direction: column;

                    &__title {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 120%;
                        margin-bottom: 1rem;
                    }

                    &__descr {
                        font-weight: 400;
                        font-size: 1.36rem;
                        line-height: 140%;
                        color: #858585;

                        @media only screen and (max-width: 850px) {
                            font-size: 12px !important;
                            padding-left: 2.6rem;
                            margin-top: 1rem;
                        }
                    }
                }

                &__data {
                    background-image: url('@/assets/svg/Settings/settings-check.svg');
                    background-repeat: no-repeat;
                    background-position: left;
                    background-size: 2.1rem;
                    padding-left: 2.6rem;
                    align-self: center;
                    font-size: 1.54rem;
                    line-height: 140%;

                    @media only screen and (max-width: 850px) {
                        align-self: flex-start;
                        font-size: 15px !important;
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

                    &__arrow {
                        background-image: url('@/assets/svg/Settings/settings-arrow.svg');
                        background-repeat: no-repeat;
                        background-position: center;

                        &:hover {
                            transform: scale(1.5);
                        }
                    }
                }
            }

        }
    }
}
</style>