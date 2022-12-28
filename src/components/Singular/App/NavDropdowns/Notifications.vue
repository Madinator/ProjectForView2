<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import Notification from '@/components/Reusable/App/Notification.vue';

const userStore = useUserStore();
const { notifications } = storeToRefs(userStore);
</script>

<template>
    <div class="notifications-dropdown dropdown">
        <div class="inner-container">
            <div class="header-notifications">
                <img src="@/assets/svg/nav/bell.svg" alt="" class="bell-icon">
                <div class="title-container">
                    <h3 class="title">Notifications</h3>
                    <span class="description">New events are already here</span>
                </div>
            </div>
            <div class="line"></div>
            <ul class="list">
                <Notification
                    v-for="(notification, index) in notifications"
                    :key="index"
                    :icon="notification.icon"
                    :title="notification.title"
                    :description="notification.description"
                    :important-description="notification.importantDescription"
                />
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.notifications-dropdown {
    position: fixed;
    top: 5.5rem;
    right: 17%;
    border-radius: 1rem;
    width: 30rem;
    padding: 2.25rem;
    filter: drop-shadow(0 0 2rem rgba(0, 0, 0, .3));
    backdrop-filter: blur(80px);
    // background-color: rgba(0, 0, 0, .2);
    background-color: rgba(#1B1B1B, .8);

    // @supports not (backdrop-filter: blur(80px)) {
    //     background-image: linear-gradient(255deg, #8A2B9A -32%, #4d036f 115%);
    // }

    @media only screen and (min-width: 1920px) {
        right: calc((100vw - 1920px) / 2 + 25rem);
    }

    @media only screen and (max-width: 850px) {
        right: 15%;
        width: 280px;
    }

    @media only screen and (max-width: 600px) {
        right: 5%;
        width: 280px;
    }

    .inner-container {

        .header-notifications {
            display: flex;
            align-items: center;

            .bell-icon {
                width: 2.5rem;
                margin-right: 1.25rem;

                @media only screen and (max-width: 850px) {
                    width: 23px;
                    margin-right: 12px;
                }
            }

            .title-container {

                .title {
                    font-weight: 600;
                    font-size: 2.1rem;
                    color: var(--color-white);
                    margin-bottom: .3rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 18px !important;
                    }
                }

                .description {
                    font-weight: 400;
                    font-size: 1.4rem;
                    color: var(--color-white);
                    opacity: .6;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }
            }
        }

        .line {
            margin: 1.75rem 0;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
    }
}
</style>