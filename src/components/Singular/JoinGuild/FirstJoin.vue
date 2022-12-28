<script setup lang="ts">
import { useGuildList } from '@/stores/guildList';
import { ref } from 'vue';

// ALL GUILDS DATA
const guildList = useGuildList();


// GET GUILD NAME FROM INPUT
const guildName = ref('');

const handleChangeSearch = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    guildName.value = value;
}

// SEARCH GUILD BY NAME
const guildFilter = () => {
    return guildList.getGuildListByName(guildName.value);
}

// CHOOSE GUILD HANDLER
const handleChooseGuild = (id: Number): void => {
    guildList.setIsChoosen(id);
}

// CHANGE NUMBER FORMAT (FROM 10000 TO 10 000 ETC)
function changeNumberFormat(number: Number): string {
    return `${String(number).split("").reverse().map((el, i) => (i + 1) % 3 === 0 ? ` ${el}` : el).reverse().join("")}`;
}

</script>

<template>
    <div class="join">
        <div class="join__header">
            <h2 class="join__header__title join-title">Let's start with the guild</h2>
            <span class="join__header__text join-text">Please enter the guild you want to join</span>
        </div>
        <div class="join__search">
            <span class="join__search__title join-sub-title">Search</span>
            <input :value="guildName" @input="handleChangeSearch" placeholder="Enter the guild name" type="text"
                class="join__search__input join-input">
        </div>
        <div class="join__guild-list">
            <span class="join__guild-list__title join-sub-title">Guild</span>
            <div class="join__guild-list__box">
                <div v-for="item in guildFilter()" class="join__guild-list__box__el"
                    :class="{ choosen: item.isChoosen }" @click="handleChooseGuild(item.id)">
                    <div class="join__guild-list__box__el__wrapper">
                        <div class="join__guild-list__box__el__info">
                            <span class="join__guild-list__box__el__info__title">Guild Name</span>
                            <span class="join__guild-list__box__el__info__text">{{ item.guildName }}</span>
                        </div>
                        <div class="join__guild-list__box__el__info">
                            <span class="join__guild-list__box__el__info__title">Victories</span>
                            <span class="join__guild-list__box__el__info__text">{{ changeNumberFormat(item.victories)
                            }}</span>
                        </div>
                        <div class="join__guild-list__box__el__info">
                            <span class="join__guild-list__box__el__info__title">TVL</span>
                            <span class="join__guild-list__box__el__info__text">{{ changeNumberFormat(item.TVL)
                            }}</span>
                        </div>
                        <div class="join__guild-list__box__el__info">
                            <span class="join__guild-list__box__el__info__title">Revenue</span>
                            <span class="join__guild-list__box__el__info__text">{{ changeNumberFormat(item.revenue)
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
                    grid-template-columns: auto repeat(3, 6rem);
                    gap: 6rem;

                    @media only screen and (max-width: 850px) {
                        padding: 2rem 2.2rem 2.5rem 2.2rem;
                        grid-template-columns: auto repeat(3, 50px);
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
