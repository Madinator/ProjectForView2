<script setup lang="ts">

</script>

<template>
    <div class="earn">
        <div class="block">
            <span class="key">Earn games liquidity pool</span>
            <span class="value">$ 14 589,33</span>
        </div>
        <div class="earn-line"></div>
        <div class="block">
            <span class="key">Your funding</span>
            <span class="value value-special">$ 145,04</span>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.earn {
    background: rgba(217, 217, 217, 0.1);
    padding: 3.44rem 0;

    display: flex;
    flex-flow: column;
    gap: 2.2rem;

    border-radius: 10px;

    @media (max-width: 850px) {
        padding: 3.52rem 0;
        gap: 2.25rem;
    }

    .block {
        margin: 0 24.65rem 0 3.88rem;
        display: flex;
        flex-flow: column;
        gap: 0.62rem;

        @media (max-width: 850px) {
            margin: 0 3.38rem 0;
            gap: 0.74rem;
        }
    }
    .key {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 1.8rem;

        @media (max-width: 850px) {
            line-height: 2.4rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 13px !important;
        }
    }
    .value {
        font-weight: 700;
        font-size: 4.11rem;
        line-height: 5.05rem;

        @media (max-width: 850px) {
            line-height: 5.63rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 31px !important;
        }
    }
    .value-special {
        color: var(--color-yellow)
    }
    .earn-line {
        border-top: 2px solid rgba(255, 255, 255, 0.25);
    }

}
</style>