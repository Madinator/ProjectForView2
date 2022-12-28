<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})
const maxlength = ref('');
const length = ref(0);

const numberWidth: number = 4.8;

onMounted(() => {
    if(window.innerWidth > 850) {
        maxlength.value = '23rem';
    }
    else {
        let container = document.getElementsByClassName('inner-container')[0];
        if(container) {
          const fontSize: number = +getComputedStyle(document.querySelector('html')!).fontSize.slice(0, -2);
          maxlength.value = (container.getBoundingClientRect().width - numberWidth * fontSize) + 'px';
        }
    }

    setTimeout(() => {
        let bar = document.getElementById('bar-holder');
        // console.log(bar?.getBoundingClientRect().width)
        if(bar) {
            length.value = bar?.getBoundingClientRect().width * (props.value / 100);
        }
    }, 2000)
})
</script>

<template>
    <div class="analytics-bar">
        <h2 class="name">{{props.name}}</h2>
        <div class="stats">
            <div id="bar-holder" class="bar-holder">
                <div class="bar"></div>
            </div>
            <span class="number">{{props.value}}%</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.analytics-bar {
    display: flex;
    flex-flow: row;
    gap: 2.56rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1100px) {
        flex-flow: column;
        align-items: flex-start;
        gap: 0.85rem;
    }
    .name {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 140%;
        white-space: nowrap;

        display: block;
        width: 15.66rem;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
            opacity: 0.6;
        }
    }
    .stats {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 2.56rem;

        @media (max-width: 1100px) {
            flex-flow: row-reverse;
            gap: 0.94rem;
        }
    }
    .bar-holder {
        width: v-bind('maxlength');
    }
    .bar {
        background: #B14DFF;
        border-radius: 5px;
        height: 8px;
        margin-left: auto;
        width: calc(v-bind('length') * 1px);

        @media (max-width: 850px) {
            margin-left: 0;
        }
    }
    .number {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 140%;
        white-space: nowrap;
        width: calc(v-bind('numberWidth') * 1rem);
        display: block;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
            margin-right: 5px;
        }
    }
}
</style>