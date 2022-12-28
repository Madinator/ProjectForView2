<script setup lang="ts">
// COMPONENTS DATA
const props = defineProps(['title', 'number', 'isActive', 'numberOfSteps']);

</script>

<template>
    <div class="step desktop" :class="{ active: props.isActive }">
        <span class="step__title">{{ props.title }}</span>
        <div class="step__number title-primary">
            <span class="step__number__text">{{ props.number }}</span>
        </div>
        <div class="step__img"></div>
    </div>
    <div class="step__mobile mobile" :class="{ active: props.isActive }">
        <span class="step__title">{{ props.title }}</span>
        <div class="step__number title-primary">
            <span class="step__number__text">{{ props.number }}</span>
        </div>
        <div class="step__img" v-if="(props.number !== JSON.stringify(numberOfSteps))"></div>
        <div v-if="(props.number !== '1')" class="step__img__mobile"></div>
    </div>
    <hr class="hr" v-if="(props.number !== JSON.stringify(numberOfSteps))" />
</template>

<style lang="scss" scoped>
.step {
    display: flex;
    align-items: center;
    position: relative;

    &.active>&__img {
        background-color: #B960FF;
    }

    &__mobile {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        gap: 2rem;
        width: 8.56rem;

        &>.step__number {
            margin-left: 0;
        }

        &.active>.step__img {
            background-color: #B960FF;
        }

        &.active>.step__number {
            background-color: #B960FF;
        }

        &.active>.step__number>.step__number__text {
            color: #FFFFFF;
        }
    }


    &__img,
    &__img__mobile {
        position: absolute;
        right: -6.25rem;
        background: #0D0525;
        border: 0.42rem solid #35194B;
        border-radius: 100%;
        width: 1.8rem;
        height: 1.8rem;

        @media only screen and (max-width: 850px) {
            top: 3.56rem;
            left: 10.56rem;
        }

        &__mobile {
            display: none;

            @media only screen and (max-width: 850px) {
                display: block;
                top: 3.56rem;
                left: -3.8rem;
            }
        }
    }

    &__title {
        font-weight: 600;
        font-size: 2.05rem;
        line-height: 85%;
        white-space: nowrap;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__number {
        margin-left: 2rem;
        width: 8.56rem;
        height: 8.56rem;
        border-radius: 100%;
        background-color: rgba(185, 96, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;

        &__text {
            font-size: 5.5rem;
            line-height: 85%;
            color: rgba(255, 255, 255, 0.3);

            @media only screen and (max-width: 850px) {
            font-size: 24px !important;
        }
        }
    }

    &.active>&__number {
        background-color: #B960FF;
    }

    &.active>&__number>&__number__text {
        color: #FFFFFF;
    }

}
</style>

