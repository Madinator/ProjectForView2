<script setup lang="ts">import { ref } from 'vue';


const isActive = ref(false)
const toggle = () => {
    isActive.value = !isActive.value;
};
const focus = () => {
    document.getElementById('your-name')?.focus();
}; 
</script>

<template>
    <div class="your-name" @click="focus">
        <img class="your-name__img" src="@/assets/svg/human.svg" alt="" />
        <input id="your-name" class="your-name__input" placeholder="Your name"/>
        <span class="your-name__type">Send anonymously</span>
        <button 
            class="your-name__checbox" 
            :class="isActive ? 'your-name__checbox--active' : ''"
            @click="toggle()"
            
            >
            <div class="your-name__cycle"
                 :class="isActive ? 'your-name__cycle-active' : ''"></div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.your-name {
    cursor: text;
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.08) 94.13%);
    border-radius: 5px;
    padding: 1.26rem 1.7rem 1.7rem 2.81rem;

    display: flex;
    flex-flow: row;
    align-items: center;

    border: 1px solid rgba(255, 255, 255, 0.2);

    @media (min-width: 850px) {
        padding: 0.78rem 1rem 1rem 1.71rem;
    }
    &__img {
        opacity: 0.5;
    }
    &__input {
        width: 100%;
        height: 100%;
        margin-left: 1.41rem;
        @media (min-width: 850px) {
            font-weight: 700;
        }
    }
    &__input::placeholder {
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 92.7%;
        @media (min-width: 850px) {
            font-size: 1.54rem;
            font-weight: 700;
        }
        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    &__type {
        display: block;
        margin-left: auto;
 
        font-weight: 500;
        font-size: 1.7rem;
        line-height: 92.7%;

        white-space: nowrap;

        @media (min-width: 850px) {
            font-size: 1.28rem;
            font-weight: 700;
        }

        @media only screen and (max-width: 850px) {
            font-size: 11px !important;
        }
    }
    &__checbox {
        position: relative;
        min-width: 30px;
        height: 14.3px;

        background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
        border-radius: 33px;

        border: 1px solid rgba(255, 255, 255, 0.06);

        margin-left: 1.26rem;

        -webkit-transition: .5s;
        transition: .5s;
        
    }
    &__checbox--active {  
        background: var(--color-purple-light);  
    }
    &__cycle {
        position: absolute;
        left: -1px;
        top: -0.7px;
        border-radius: 100%;
        background-color: var(--color-purple-dark);
        min-width: 13.5px;
        max-width: 13.5px;
        height: 14.3px;

        transition: all 0.3s;
    }
    &__cycle-active {
        left: 16px;
    }
}
</style>