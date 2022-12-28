<script setup lang="ts">
import { inject } from 'vue';
import ButtonSecondary from '@/components/Reusable/NFT/ButtonSecondary.vue';

const priceCurrency = inject('priceCurrency');
const priceCurrencyDropdownOpenIndicator = inject('priceCurrencyDropdownOpenIndicator');
</script>

<template>
    <div class="filter-page mobile">
        <div class="inner-container">
            <div class="filter-page__header">
                <span></span>
                <span class="filter-page__title">Filters</span>
                <button class="filter-page__close" @click="$emit('close')">
                    <img src="@/assets/svg/closeWhite.svg" alt="" />
                </button>
            </div>
            <div class="filter-page__list">
                <div class="toggle-container">
                    <div class="title-container">
                        <h3 class="title">Status</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-container">
                        <ul class="list">
                            <li class="item">
                                <button class="parameter">
                                    <span>Buy Now</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                            <li class="item">
                                <button class="parameter">
                                    <span>On Auction</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="toggle-container price-toggle-container">
                    <div class="title-container">
                        <h3 class="title">Price</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-container">
                        <form action="#" class="price-form">
                            <div class="top">
                                <div class="price-dropdown-container">
                                    <div @click="$emit('togglePriceCurrencyDropdown')" class="input-group">
                                        <input type="text" placeholder="ETH" v-model="priceCurrency" readonly>
                                        <img :class="{ 'arrow-active': priceCurrencyDropdownOpenIndicator }"
                                            src="@/assets/svg/Reusable/arrow4.svg" alt="" class="arrow">
                                    </div>
                                    <div :class="{ 'closed': !priceCurrencyDropdownOpenIndicator }"
                                        class="dropdown price-currency-dropdown">
                                        <ul @click="$emit('selectOption')" class="list">
                                            <li class="item">ETH</li>
                                            <li class="item">BTC</li>
                                            <li class="item">BNB</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <input type="number" placeholder="MIN">
                                </div>
                                <span class="to">to</span>
                                <div class="input-group">
                                    <input type="number" placeholder="MAX">
                                </div>
                            </div>
                            <button @click.prevent class="btn-purple">Apply</button>
                        </form>
                    </div>
                </div>
                <div class="toggle-container">
                    <div class="title-container">
                        <h3 class="title">Quantuty</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-container">
                        <ul class="list">
                            <li class="item">
                                <button class="parameter">
                                    <span>Buy Now</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                            <li class="item">
                                <button class="parameter">
                                    <span>On Auction</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                            <li class="item">
                                <button class="parameter">
                                    <span>Bundles</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="toggle-container">
                    <div class="title-container">
                        <h3 class="title">Collections</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-container">
                        <div class="input-group">
                            <input type="text" class="search-input" placeholder="Filter">
                            <img src="@/assets/svg/Reusable/search.svg" alt="" class="search-icon">
                        </div>
                        <ul class="filter-options">
                            <li class="item">
                                <div class="left">
                                    <img src="@/assets/img/nft/nftInfoMobile.png" alt="" class="image">
                                    <span class="name">CryptoPins</span>
                                </div>
                                <div class="right">
                                    <span class="amount">10 000</span>
                                    <div class="circle-container"></div>
                                </div>
                            </li>
                            <li class="item">
                                <div class="left">
                                    <img src="@/assets/img/nft/nftInfoMobile.png" alt="" class="image">
                                    <span class="name">CryptoPins</span>
                                </div>
                                <div class="right">
                                    <span class="amount">10 000</span>
                                    <div class="circle-container"></div>
                                </div>
                            </li>
                            <li class="item">
                                <div class="left">
                                    <img src="@/assets/img/nft/nftInfoMobile.png" alt="" class="image">
                                    <span class="name">CryptoPins</span>
                                </div>
                                <div class="right">
                                    <span class="amount">10 000</span>
                                    <div class="circle-container"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="toggle-container">
                    <div class="title-container">
                        <h3 class="title">Chains</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-container">
                        <ul class="list">
                            <li class="item">
                                <button class="parameter">
                                    <span>ETH</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                            <li class="item">
                                <button class="parameter">
                                    <span>WETH</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="toggle-container">
                    <div class="title-container">
                        <h3 class="title">Category</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-container">
                        <ul class="list">
                            <li class="item">
                                <button class="parameter">
                                    <span>ETH</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                            <li class="item">
                                <button class="parameter">
                                    <span>WETH</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="toggle-container">
                    <div class="title-container">
                        <h3 class="title">Currency</h3>
                        <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                    </div>
                    <div class="description-container">
                        <ul class="list">
                            <li class="item">
                                <button class="parameter">
                                    <span>ETH</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                            <li class="item">
                                <button class="parameter">
                                    <span>WETH</span>
                                    <div class="circle-container"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="filter-page__actions">
                <ButtonSecondary>Clear All</ButtonSecondary>
                <ButtonSecondary @click="$emit('close')">Done</ButtonSecondary>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter-page {
     position: fixed;
     z-index: 1000;
     top: 0;
     left: 0;
     background: url('@/assets/img/nft/bgMobile.png');
     background-size: cover;
     background-position: center;
     width: 100%;
     height: 100%;
     // padding: 13rem 3.38rem 5.63rem;

     display: flex;
     flex-flow: column;

     .inner-container {
         @include width-restriction;
         padding: 0 0 10rem;
         min-height: 100%;
         position: relative;

         @media only screen and (max-height: 500px) {
             padding: 0 0 30rem;
         }
     }

     .price-toggle-container {
         position: relative;
         z-index: 100;
     }

     .toggle-container {
         padding: .5rem 0 1.15rem;

         .title-container {
             padding: .5rem 0;


             .title {
                 font-weight: 500;
                 font-size: 19px !important;
                 transition: all .3s;

                 @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                 }
             }

             &:hover .title {
                 opacity: .75;
             }

             .arrow {
                 width: 1rem;

                 @media only screen and (max-width: 850px) {
                     width: 1.5rem;
                 }
             }
         }

         .description-container {
             font-weight: 500;
             border-radius: 1rem;
             padding: 2.25rem 2.35rem;

             .list {

                 .item {

                     &:not(:last-of-type) {
                         margin-bottom: 1.7rem;
                     }

                     .parameter {
                         display: flex;
                         align-items: center;
                         justify-content: space-between;
                         width: 100%;
                         font-size: 15px !important;

                         span {
                             transition: all .3s;
                         }

                         .circle-container {
                             border-radius: 40rem;
                             width: 2.25rem;
                             height: 2.25rem;
                             border: 2px solid var(--color-white);
                             transition: all .2s;
                         }
                     }
                 }
             }

             .input-group {
                 position: relative;
                 width: 100%;
                 margin-bottom: 1.5rem;

                 input {
                     width: 100%;
                     padding: 1rem 1rem 1rem 5rem;
                     background-image: linear-gradient(90.33deg, rgba(255, 255, 255, 0.12) 0.24%, rgba(240, 237, 247, 0.07) 94.13%);
                     backdrop-filter: blur(30px);
                     border: 1px solid rgba(255, 255, 255, .2);
                     border-radius: 1.1rem;

                     &::placeholder {
                         font-weight: 600;
                         font-family: Qanelas;
                         color: var(--color-white);
                     }
                 }

                 .search-icon {
                     position: absolute;
                     top: 50%;
                     left: 1.8rem;
                     transform: translateY(-50%);
                     width: 1.8rem;
                 }
             }

             .price-form {

                 .top {
                     // display: flex;
                     display: grid;
                     grid-template-columns: 1.3fr 1fr min-content 1fr;
                     align-items: center;
                     gap: 1.25rem;
                     margin-bottom: 1.25rem;
                 }

                 .input-group {
                     // width: 8rem;
                     margin-bottom: 0;

                     input {
                         padding: 1rem 1.25rem;

                         &::placeholder {
                             opacity: .7;
                             text-align: center;
                         }
                     }
                 }

                 .price-dropdown-container {
                     position: relative;

                     .input-group {
                         cursor: pointer;
                         width: 100%;

                         input {
                             font-weight: 600;
                             cursor: pointer;
                         }

                         .arrow {
                             position: absolute;
                             top: 50%;
                             right: 1.2rem;
                             transform: translateY(-50%);
                             width: 1.15rem;
                         }

                         .arrow-active {
                             transform: translateY(-50%) rotate(-180deg) !important;
                         }
                     }

                     .price-currency-dropdown {
                         position: absolute;
                         top: 110%;
                         left: 0;
                         z-index: 1000;
                         width: 100%;
                         background-color: black;
                         border-radius: 1.1rem;
                         border: 1px solid rgba(255, 255, 255, .2);
                         background-color: var(--color-purple-light);
                         padding: 1rem 0;

                         .list {

                             .item {
                                 cursor: pointer;
                                 padding: .75rem 1rem;
                                 margin: 0;
                                 transition: all .3s;
                                 border-radius: .7rem;
                             }
                         }
                     }
                 }

                 .btn-purple {
                     width: 100%;
                     border: 1px solid rgba(255, 255, 255, .2);
                 }
             }

             .filter-options {

                 .item {
                     display: flex;
                     align-items: center;
                     justify-content: space-between;
                     border-radius: 1.1rem;
                     padding: .75rem;
                     cursor: pointer;
                     transition: all .2s;

                     &:hover {
                         background-color: rgba(255, 255, 255, .18);
                     }

                     &:hover .circle-container {
                         background-color: var(--color-white);
                     }

                     .left {
                         display: flex;
                         align-items: center;

                         .image {
                             width: 2.9rem;
                             height: 2.9rem;
                             margin-right: 1.25rem;
                             border-radius: .2rem;
                         }
                     }

                     .right {
                         display: flex;
                         align-items: center;

                         .amount {
                             color: #85888A;
                             display: inline-block;
                             margin-right: .9rem;
                         }

                         .circle-container {
                             border-radius: 40rem;
                             width: 1.75rem;
                             height: 1.75rem;
                             border: 2px solid var(--color-white);
                             transition: all .2s;
                         }
                     }
                 }
             }
         }
     }

     &__header {
         display: flex;
         flex-flow: row;
         justify-content: space-between;
         align-items: center;
         cursor: pointer;
         margin-top: 11.7rem;
     }

     &__title {
         font-weight: 600;
         line-height: 5.63rem;

         font-size: 3.75rem !important;

         @media only screen and (max-width: 850px) {
            font-size: 31px !important;
         }
     }

     &__close {
         @include flex-center;
         width: 3.94rem;
         height: 3.94rem;
         margin-right: -.4rem;
         cursor: pointer;

         img {
             width: 100%;
             height: 100%;
         }
     }

     &__list {
         margin-top: 4.22rem;
         overflow-y: scroll;
         max-height: 70%;

         &::-webkit-scrollbar {
             display: none;
         }
     }

     &__actions {
         display: flex;
         flex-flow: column;
         gap: 1.41rem;

         position: absolute;
         bottom: 5rem;
         left: 0;
         width: 100%;

         @media only screen and (max-height: 600px) {
             bottom: 3rem;
         }
     }
 }
</style>