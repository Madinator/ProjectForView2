<script setup lang="ts">

</script>

<template>
    <section class="section section-professor">
        <div class="inner-container">
            <div class="image-container">
                <img src="/img/Courses/CreativeTraining/professor.png" alt="" class="professor">
            </div>
            <div class="info">
                <strong class="professor-text">Course Professor</strong>
                <h1 class="title-primary">Judy Brooke</h1>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-professor {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 70;

    .inner-container {
        @include width-restriction;
        position: relative;
        height: 100vh;

        .image-container {
            position: absolute;
            bottom: 0;
            left: 5%;
            width: 65rem;

            @media only screen and (max-width: 1000px) {
                left: 1%;
                width: 60rem;
            }

            @media only screen and (max-width: 850px) {
                width: 50rem;
                left: -1%;
            }

            .professor {
                width: 100%;
            }
        }

        .info {
            position: absolute;
            top: 55%;
            right: 10%;
            transform: translateY(-50%);
            width: 50rem;

            @media only screen and (max-width: 1000px) {
                right: 5%;
            }

            @media only screen and (max-width: 850px) {
                top: 35%;
                text-align: right;
            }

            .professor-text {
                font-family: Delirium;
                font-weight: 400;
                font-size: 4.75rem;
                letter-spacing: 1px;
                border: 3px solid #C1A6DA;
                border-radius: 50rem;
                padding: .5rem 2.5rem .1rem;
                position: absolute;
                top: -7rem;
                right: 0;
                transform: rotate(17deg);
            }

            .title-primary {
                font-size: 15.5rem;
                line-height: 1.1;
            }

            .description {
                font-weight: 500;
                font-size: 2rem;

                @media only screen and (max-width: 850px) {
                    font-size: 19px;
                    text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
                    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, .5));
                }
            }
        }
    }
}
</style>