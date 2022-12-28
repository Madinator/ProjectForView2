<template>
    <div class="rating">
        3.8 Rating
    </div>
</template>

<style lang="scss" scoped>
.rating {
    height: fit-content;
    width: fit-content;
    padding: 0.986rem 2.112rem;
    background: #DCB45B;
    border-radius: 0.704rem;

    font-weight: 400;
    font-size: 1.54rem;
    line-height: 85%;
    color: var(--color-white);

    @media only screen and (min-width: 850px) {
        padding: 0.68rem 1.28rem;
    }

    @media only screen and (max-width: 850px) {
        font-size: 15px !important;
    }
}
</style>