<script setup lang="ts">

</script>

<template>
    <div class="game-make-comment">
        <div class="game-make-comment__header">
            <img class="game-make-comment__img" src="@/assets/img/game/GameCommentUser.png" alt="" />
            <div class="game-make-comment__header-right">
                <img class="game-make-comment__starts" src="@/assets/svg/game/stars.svg" alt="" />
                <span class="game-make-comment__ask">What are you worried about?</span>
            </div>
        </div>
    </div>
    <button class="btn-purple button-publish">Publish</button>
</template>

<style lang="scss" scoped>
.game-make-comment {
    background: linear-gradient(90.09deg, rgba(144, 55, 214, 0.1) 34.11%, rgba(144, 55, 214, 0.049) 94.32%);
    backdrop-filter: blur(8px);
    border-radius: 10px;
    padding: 2.11rem;
    height: 29rem;

    @media (min-width: 850px) {
        height: 18rem;
    }

    &__header {
        display: flex;
        flex-flow: row;
        gap: 1.41rem;
    }

    &__img {
        width: 4.22rem;
        height: 4.22rem;
        border-radius: 100%;
    }

    &__starts {
        width: 124px;
    }

    &__ask {
        font-weight: 400;
        // font-size: 2.25rem;
        line-height: 140%;

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }

    &__header-right {
        display: flex;
        flex-flow: column;
        gap: 2.25rem;
    }
}

.button-publish {
    display: block;
    margin-left: auto;
    margin-top: .75rem;

    @media only screen and (max-width: 850px) {
        margin: 0 auto;
        margin-top: 1.25rem;
    }
}
</style>