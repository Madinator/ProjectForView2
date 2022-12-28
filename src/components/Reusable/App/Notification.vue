<script setup lang="ts">
interface Props {
    icon: string;
    title: string;
    description: string;
    importantDescription: string;
}

const props = defineProps<Props>();
</script>

<template>
    <li class="notification">
        <div class="icon-container">
            <img :src="icon" alt="" class="icon">
        </div>
        <div class="info">
            <h3 class="title">{{title}}</h3>
            <span class="description">{{description}} <strong>{{importantDescription}}</strong></span>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.notification {
    display: flex;
    align-items: center;
    padding: .95rem 1.35rem;
    border-radius: 1rem;
    transition: all .3s;
    cursor: default;

    &:hover {
        background-color: rgba(255, 255, 255, .1)
    }

    .icon-container {
        @include flex-center;
        width: 3.85rem;
        height: 3.85rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        margin-right: 1.35rem;

        .icon {
            width: 1.9rem;
            height: 1.9rem;
        }
    }

    .info {

        .title {
            font-weight: 600;
            margin-bottom: .3rem;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }

        .description {
            font-weight: 400;
            color: var(--color-white);

            @media only screen and (max-width: 850px) {
                font-size: 14px !important;
            }

            strong {
                font-weight: 600;
            }
        }
    }
}
</style>