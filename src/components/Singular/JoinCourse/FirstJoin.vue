<script setup lang="ts">
import { useCoursesList } from '@/stores/courseList';
import { ref } from 'vue';

// ALL COURSE DATA
const guildList = useCoursesList();


// GET COURSE NAME FROM INPUT
const guildName = ref('');

const handleChangeSearch = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    guildName.value = value;
}

// SEARCH COURSE BY NAME
const guildFilter = () => {
    return guildList.getGuildListByName(guildName.value);
}

// CHOOSE COURSE HANDLER
const handleChooseGuild = (id: Number): void => {
    guildList.setIsChoosen(id);
}

</script>

<template>
    <div class="join">
        <div class="join__header">
            <h2 class="join__header__title join-title">Let's start with the course</h2>
            <span class="join__header__text join-text">Please enter the course you want to take</span>
        </div>
        <div class="join__search">
            <span class="join__search__title join-sub-title">Search</span>
            <input :value="guildName" @input="handleChangeSearch" type="text" class="join__search__input join-input">
        </div>
        <div class="join__guild-list">
            <span class="join__guild-list__title join-sub-title">Course</span>
            <div class="join__guild-list__box">
                <div v-for="item in guildFilter()" class="join__guild-list__box__el"
                    :class="{ choosen: item.isChoosen }" @click="handleChooseGuild(item.id)">
                    <div class="join__guild-list__box__el__wrapper">
                        <div class="join__guild-list__box__el__info">
                            <span class="join__guild-list__box__el__info__title">Course Name</span>
                            <span class="join__guild-list__box__el__info__text">{{ item.courseName }}</span>
                        </div>
                        <div class="join__guild-list__box__el__info">
                            <span class="join__guild-list__box__el__info__title">Duration</span>
                            <span class="join__guild-list__box__el__info__text">{{ item.duration
                            }}</span>
                        </div>
                        <div class="join__guild-list__box__el__info">
                            <span class="join__guild-list__box__el__info__title">Cost</span>
                            <span class="join__guild-list__box__el__info__text">{{ item.cost
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="join__buttons">
            <router-link to="stepTwo" class="join__buttons__next next-button btn-purple">Next</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.join {
    &__header {
        display: flex;
        flex-direction: column;
        margin-bottom: 4.3rem;
    }

    &__search {
        display: flex;
        flex-direction: column;
    }

    &__guild-list {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;

        &__box {
            display: flex;
            flex-direction: column;
            gap: 1.71rem;
            width: calc(100% + 1.8rem);
            max-height: 25.1rem;
            overflow-y: scroll;
            padding-right: 1.71rem;

            &__el {
                width: 100%;
                background: linear-gradient(90.13deg, rgba(144, 55, 214, 0.1) -5.32%, rgba(255, 255, 255, 0) 111.89%);
                border-radius: 15px;
                border: 3px solid rgba(144, 55, 214, 0);

                cursor: pointer;


                &:hover {
                    border: 3px solid rgba(144, 55, 214, 0.3);
                }

                &.choosen {
                    border: 3px solid rgba(144, 55, 214, 1);
                }

                &__wrapper {
                    padding: 1.2rem 7.44rem 1.2rem 3rem;
                    display: grid;
                    grid-template-columns: auto repeat(2, 6rem);
                    gap: 6rem;

                    @media only screen and (max-width: 850px) {
                        padding: 2rem 2.2rem 2.5rem 2.2rem;
                        grid-template-columns: auto repeat(2, 60px);
                        gap: 3rem;
                    }
                }

                &__info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1rem;

                    &__title {
                        font-weight: 400;
                        font-size: 1.36rem;
                        line-height: 1.62rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 13px !important;
                        }
                    }

                    &__text {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 85%;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }
                    }
                }
            }
        }
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 2.56rem;
    }
}
</style>
