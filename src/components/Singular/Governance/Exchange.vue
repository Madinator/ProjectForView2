<script setup lang="ts">
import Select from '@/components/Reusable/Governance/Select.vue';

</script>

<template>
    <div class="exchange">
        <div class="block">
            <Select name="ETH"/>
            <input class="input" type="number" value="0"/>
        </div>
        <div class="main">
            <div class="line-name"></div>
            <img class="img" src="@/assets/svg/exchange.svg" alt="" />
            <div class="line-input"></div>
        </div>
        <div class="block block-bottom">
            <Select name="USDT"/>
            <input class="input" type="number" value="0"/>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.exchange {
    background: rgba(217, 217, 217, 0.1);
    padding: 4.5rem 0;
    border-radius: 10px;
    
    @media (max-width: 850px) {
        padding: 3.38rem 0;
    }

    .block {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 11rem;
        margin-left: 3.88rem;

        @media (max-width: 850px) {
            margin-left: 3.38rem;
            gap: 0;
            justify-content: space-between;
        }
    }
    .input {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 2.31rem;

        @media (max-width: 850px) {
            line-height: 3.8rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 17px !important;
        }
    }
    .main {
        margin-top: 2.63rem;
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.11rem;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
            gap: 2.25rem;
        }
    }
    .line-name {
        border-top: 2px solid rgba(255, 255, 255, 0.25);

        width: 18%;

        @media (max-width: 850px) {
            width: 26%;
        }
    }
    .img {}

    .line-input {
        border-top: 2px solid rgba(255, 255, 255, 0.25);
        width: 100%;
    }
    .block-bottom {
        margin-top: 2.51rem;

        @media (max-width: 850px) {
            margin-top: 2.81rem;
        }
    }
}
</style>