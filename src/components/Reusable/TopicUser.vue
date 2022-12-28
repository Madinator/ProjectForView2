<script setup lang="ts">

const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="topic-user">
        <img class="topic-user__img" :src="props.image" alt=""/>
        <div class="topic-user__content">
            <h1 class="topic-user__name">{{props.name}}</h1>
            <h1 class="topic-user__comment">{{props.comment}}</h1>
            <button class="topic-user__subscribe">Subscribe</button>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.topic-user {
    display: flex;
    flex-flow: row;
    gap: 1.28rem;
    &__img {
        width: 4.28rem;
        height: 4.28rem;
        border-radius: 100%;
    }
    &__content {
        display: flex;
        flex-flow: column;
        gap: 0.6rem;
        align-items: baseline;
    }
    &__name {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 112%;

        letter-spacing: 0.025em;
    }
    &__comment {
        font-weight: 400;
        font-size: 1.37rem;
        line-height: 112%;

        letter-spacing: 0.025em;

        white-space: nowrap;
    }
    &__subscribe {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 112%;

        letter-spacing: 0.025em;

        color: var(--color-purple-dark);
        border: none;

        &:hover {
            color: var(--color-purple-light);
        }
    }
}
</style>