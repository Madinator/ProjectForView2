<template>
    <footer class="footer">
        <div class="inner-container">
            <nav class="navigation">
                <div class="block">
                    <h4 class="title">Earn.Games</h4>
                    <ul class="list">
                        <li class="item">
                            <a href="https://docs.google.com/document/d/18Hq2h7z5IjqJVdxFGyJmQ1DuEFJB1eTdrrjVTJl5UiE/edit?usp=sharing"
                                target="_blank" class="link">Privacy Policy</a>
                        </li>
                        <li class="item">
                            <a href="https://docs.google.com/document/d/1ChhUMGimkFIhleacjIzekbdfqU9PpHzc08Wj1KGY3mI/edit?usp=sharing"
                                target="_blank" class="link">Terms and Conditions</a>
                        </li>
                    </ul>
                </div>
                <div class="block">
                    <h4 class="title">User Support</h4>
                    <ul class="list">
                        <li class="item">
                            <a href="" class="link">Help Center</a>
                        </li>
                        <li class="item">
                            <a href="https://docs.google.com/document/d/1vlJBqr8ipmuTwRkRZWe2ouMcYIt9P2OZ9FhXfQueJuE/edit?usp=sharing"
                                target="_blank" class="link">Data Center</a>
                        </li>
                    </ul>
                </div>
                <div class="block">
                    <h4 class="title">Service Support</h4>
                    <ul class="list">
                        <li class="item">
                            <router-link to="/academy" class="link">EG Academy</router-link>
                        </li>
                        <li class="item">
                            <router-link to="/" class="link">Token Economics</router-link>
                        </li>
                    </ul>
                </div>
                <div class="block info-block">
                    <h4 class="title">Stay updated with the latest Play-to-Earn games!</h4>
                    <form action="#" class="subscribe-form">
                        <input type="email" class="input" placeholder="Please enter your email">
                        <button class="btn">Subscribe</button>
                    </form>
                    <p class="description">Please enter your email and we will contact you within 1 working day</p>
                </div>
            </nav>
            <div class="socials">
                <ul class="list">
                    <li class="item">
                        <a href="#" target="" class="link">
                            <img src="@/assets/svg/socials/facebook.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="" class="link">
                            <img src="@/assets/svg/socials/telegram.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="" class="link">
                            <img src="@/assets/svg/socials/youtube.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="" class="link">
                            <img src="@/assets/svg/socials/tiktok.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="" class="link">
                            <img src="@/assets/svg/socials/discord.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="" class="link link-to-right">
                            <img src="@/assets/svg/socials/twitch.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="" class="link link-to-right">
                            <img src="@/assets/svg/socials/m.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="" class="link link-to-right">
                            <img src="@/assets/svg/socials/instagram.svg" alt="" class="icon">
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" target="" class="link link-to-right">
                            <img src="@/assets/svg/socials/linkdn.svg" alt="" class="icon">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    position: relative;
    background-color: #392678;
    z-index: 10000;

    .inner-container {
        @include width-restriction;
        padding: 6.75rem 6.75rem 5.5rem;

        @media only screen and (max-width: 850px) {
            padding: 5rem 0 10rem;
        }

        @media only screen and (max-width: 500px) {
            padding: 5rem 0 2rem;
        }

        .navigation {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-columns: 1fr;

            @media only screen and (max-width: 850px) {
                grid-template-columns: repeat(2, 1fr);
                justify-content: center;
                grid-row-gap: 4rem;
                grid-column-gap: 4rem;
                width: 55rem;
                margin: 0 auto;
            }

            @media only screen and (max-width: 500px) {
                grid-template-columns: 1fr;
                grid-row-gap: 4rem;
                grid-column-gap: 4rem;
                width: 30rem;
            }

            .block {

                .title {
                    font-weight: 500;
                    font-size: 2.2rem;
                    margin-bottom: 2.5rem;

                    @media only screen and (max-width: 500px) {
                        font-size: 20px;
                    }
                }

                .list {

                    .item {
                        &:not(:last-child) {
                            margin-bottom: 1.25rem;
                        }

                        .link {

                            &:hover {
                                opacity: .7;
                            }
                        }
                    }
                }
            }

            .block.info-block {
                width: 30rem;
                margin-top: -1.5rem;

                @media only screen and (max-width: 500px) {
                    margin-top: 0;
                    width: 32rem;
                }

                .subscribe-form {
                    position: relative;
                    width: 100%;
                    margin-bottom: 2.15rem;

                    @media only screen and (max-width: 850px) {
                        width: 110%;
                    }

                    input {
                        border: 1px solid #F2F2F2;
                        border-radius: .85rem;
                        width: 100%;
                        padding: 1rem 11rem 1rem 2.25rem;

                        &::placeholder {
                            font-family: Qanelas;
                            font-weight: 500;
                            color: #625b7a;
                        }
                    }

                    .btn {
                        position: absolute;
                        top: 50%;
                        right: .5rem;
                        transform: translateY(-50%);
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 5px;
                        padding: .65rem .85rem;
                        width: 10rem;

                        @media only screen and (max-width: 850px) {
                            width: 11rem;
                            font-size: 14px !important;
                        }

                        &:hover {
                            background-color: rgba(255, 255, 255, 0.3);
                        }
                    }
                }
            }
        }

        .socials {
            position: absolute;
            bottom: 3.15rem;
            left: 6.25rem;

            @media only screen and (min-width: 1920px) {
                left: calc((100vw - 1920px) / 2 + 6.25rem);
            }

            @media only screen and (max-width: 850px) {
                left: 50%;
                transform: translateX(-50%);
                bottom: 2rem;
            }

            @media only screen and (max-width: 500px) {
                position: static;
                transform: none;
                width: 40rem;
                margin: 0 auto;
                margin-top: 3rem;
            }

            .list {
                display: flex;
                align-items: center;

                @media only screen and (max-width: 500px) {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    justify-content: center;
                    justify-items: center;
                    text-align: center;
                }

                .item {
                    &:not(:last-of-type) {
                        margin-right: 1.25rem;
                    }

                    .link {
                        width: 5.25rem;
                        height: 5.25rem;

                        &:hover {
                            opacity: .7;
                            transform: scale(1.1);
                        }

                        .icon {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }

            .link.link-to-right {
                @media only screen and (max-width: 500px) {
                    margin-right: -7.5rem;
                }
            }
        }
    }
}
</style>