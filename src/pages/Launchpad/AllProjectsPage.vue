<script setup lang="ts">
import ProjectCard from '@/components/Reusable/Launchpad/ProjectCard.vue';
import SortDropdown from '@/components/Singular/Launchpad/SortDropdown.vue';
</script>

<template>
    <div class="page page-allProjects">
        <div class="inner-container">
            <router-link class="page-allProjects__back-button" to="/Launchpad">Back</router-link>
            <h1 class="page-allProjects__title">Earn Project</h1>
            <div class="page-allProjects__dropdown">
                <SortDropdown />
            </div>
            <div class="page-allProjects__box">
                <ProjectCard v-for="i in 9" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-allProjects {
    background: linear-gradient(70.87deg, #010001 -10.19%, #27052D 126.44%);

    &__back-button {
        background: url('@/assets/svg/Tournaments/back-arrow.svg') no-repeat;
        background-position: left;
        padding-left: 2.7rem;
        font-size: 1.54rem;
        line-height: 85%;
        align-self: flex-start;

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }

        &:hover {
            opacity: 0.8;
        }
    }

    &__dropdown {
        margin-bottom: 3.43rem;
    }

    &__title {
        font-weight: 700;
        font-size: 4.15rem;
        line-height: 5.33rem;
        color: var(--color-white);
        margin: 2.6rem 0;

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }

    &__sort-button {
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        padding: 1.1rem 28rem 1.1rem 2.6rem;
        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.37);
        background-image: url('@/assets/svg/Launchpad/arrow-down.svg');
        background-repeat: no-repeat;
        background-size: 2.06rem;
        background-position: calc(100% - 2rem);
        margin: 2.6rem 0 3.5rem 0;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }

        &:hover {
            opacity: 0.8;
        }
    }

    &__box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.6rem;

        @media only screen and (max-width: 1024px) and (min-width: 500px) {
            grid-template-columns: 1fr 1fr;
        }

        @media only screen and (max-width: 500px) {
            grid-template-columns: 1fr;
        }
    }

    .inner-container {
        @include width-restriction;
        padding: 8.6rem 6.35rem 6rem;

        @media only screen and (max-width: 850px) {
            padding: 8.6rem 0 6rem;
        }
    }
}
</style>