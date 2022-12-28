<script setup lang="ts">

</script>

<template>
    <section class="section section-reviews">
        <div class="inner-container">
            <h1 class="title-primary">Reviews</h1>
            <div class="reviews">
                <div class="review review-1">
                    <div class="stars">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                    </div>
                    <div class="review-content">
                        <strong class="review-title">Great</strong>
                        <p class="review-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="review-info">
                        <img src="/img/user/avatar2.png" alt="" class="avatar">
                        <span class="name">Juli Rawe</span>
                        <span class="date">09/09/2022</span>
                    </div>
                </div>
                <div class="review review-2">
                    <div class="stars">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                    </div>
                    <div class="review-content">
                        <strong class="review-title">Great</strong>
                        <p class="review-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="review-info">
                        <img src="/img/user/avatar2.png" alt="" class="avatar">
                        <span class="name">Juli Rawe</span>
                        <span class="date">09/09/2022</span>
                    </div>
                </div>
                <div class="review review-3">
                    <div class="stars">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                    </div>
                    <div class="review-content">
                        <strong class="review-title">Great</strong>
                        <p class="review-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="review-info">
                        <img src="/img/user/avatar2.png" alt="" class="avatar">
                        <span class="name">Juli Rawe</span>
                        <span class="date">09/09/2022</span>
                    </div>
                </div>
                <div class="review review-4">
                    <div class="stars">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                    </div>
                    <div class="review-content">
                        <strong class="review-title">Great</strong>
                        <p class="review-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="review-info">
                        <img src="/img/user/avatar2.png" alt="" class="avatar">
                        <span class="name">Juli Rawe</span>
                        <span class="date">09/09/2022</span>
                    </div>
                </div>
                <div class="review review-5">
                    <div class="stars">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                        <img src="@/assets/svg/star.svg" alt="" class="star">
                    </div>
                    <div class="review-content">
                        <strong class="review-title">Great</strong>
                        <p class="review-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="review-info">
                        <img src="/img/user/avatar2.png" alt="" class="avatar">
                        <span class="name">Juli Rawe</span>
                        <span class="date">09/09/2022</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-reviews {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 60;

    .inner-container {
        position: relative;
        height: 100vh;
        padding-top: 11vh;

        @media only screen and (max-width: 850px) {
            @include flex-center;
            flex-direction: column;
            padding-top: 0;
        }

        .title-primary {
            font-size: 10rem;
            text-align: center;
        }

        .reviews {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;

            @media only screen and (max-width: 850px) {
                margin-top: 2rem;
                width: 100%;
                height: 50rem;
                justify-content: flex-start;
                overflow-x: scroll;
            }

            .review {
                background-image: linear-gradient(to bottom right, #4B2E66, #452D70);
                // background: rgba(255, 255, 255, 0.1);
                border: 2px solid #5D4880;
                border-radius: 1rem;
                padding: 2rem 2rem 1.25rem;
                width: 38rem;
                min-width: 38rem;

                @media only screen and (max-width: 850px) {
                    // @include abs-center;
                    transform: none !important;
                    margin: 0 !important;
                    width: 42rem;

                    &:not(:last-of-type) {
                        margin-right: 2rem !important;
                    }
                }

                .stars {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 3.5rem;

                    .star {
                        width: 3.5rem;

                        &:not(:last-of-type) {
                            margin-right: 1.5rem;
                        }
                    }
                }

                .review-content {
                    text-align: center;
                    margin-bottom: 3.75rem;

                    .review-title {
                        font-weight: 500;
                        font-size: 2rem;
                        display: inline-block;
                        margin-bottom: 2rem;
                    }

                    .review-paragraph {
                        font-size: 1.8rem;
                    }
                }

                .review-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .avatar {
                        width: 5.3rem;
                        margin-bottom: 1.25rem;
                    }

                    .name {
                        font-weight: 500;
                        font-size: 1.8rem;
                        display: inline-block;
                        margin-bottom: .8rem;
                    }

                    .date {

                    }
                }
            }

            .review-1 {
                // perspective: 110rem;
                transform: perspective(100rem) rotateY(37deg) rotateX(3deg) scale(.83);
                margin-right: -7.5rem;
                margin-bottom: -3rem;
            }

            .review-2 {
                // perspective: 110rem;
                transform: perspective(100rem) rotateY(37deg) rotateX(3deg) scale(.95);
                margin-right: -2.5rem;
                margin-bottom: -3rem;
            }

            .review-4 {
                // perspective: 110rem;
                transform: perspective(100rem) rotateY(-37deg) rotateX(3deg) scale(.95);
                margin-left: -2.5rem;
                margin-bottom: -3rem;
            }

            .review-5 {
                // perspective: 110rem;
                transform: perspective(100rem) rotateY(-37deg) rotateX(3deg) scale(.83);
                margin-left: -7.5rem;
                margin-bottom: -3rem;
            }
        }
    }
}
</style>