<script setup lang="ts">
import { useGovernanceStore, type Vote } from '@/stores/governance';
import { toRefs, type PropType } from 'vue';

const governanceStore = useGovernanceStore();

const props = defineProps({
    data: {
        type: Object as PropType<Vote>,
        required: true
    }
});

const { data } = toRefs(props);

const vote = () => {
    governanceStore.setActiveVote(data.value.id);
};

</script>

<template>
    <button class="vote-button" @click="vote">
        <span class="name">{{data.name}}</span>
        <div class="circle" :class="{'circle-voted': data.isVoted}"></div>
    </button>
</template>

<style lang="scss" scoped> 
.vote-button {
    background: rgba(255, 255, 255, 0.04);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1.28rem 2.56rem;

    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1.71rem;

    @media (max-width: 850px) {
        align-items: center;
        padding: 1.69rem 2.11rem;
        gap: 4.22rem;
    }

    &:hover {
        filter: brightness(75%);
    }
    .name {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;

        @media (max-width: 850px) {
            line-height: 124.5%;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
            text-align: start;
        }
    }
    .circle {
        border: 1px solid white;
        border-radius: 100%;
        min-width: 2rem;
        min-height: 2rem;
        max-width: 2rem;
        max-height: 2rem;
        transition: all 0.3s;

        @media (max-width: 850px) {
            border: 2px solid white;
            min-width: 2.81rem;
            min-height: 2.81rem;
            max-width: 2.81rem;
            max-height: 2.81rem;
        }
    }
    .circle-voted {
        background-color: white;
    }
}
</style>