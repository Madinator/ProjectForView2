<script setup lang="ts">
import ToggleInfo from './ToggleInfo.vue';
import CharacteristicCard from '@/components/Reusable/NFT/CharacteristicCard.vue';
import Details from '@/components/Reusable/NFT/Details.vue';

</script>

<template>
    <div class="nft-info-desktop">
        <img src="@/assets/img/nft/nftInfoMobile.png" alt="" class="nft-info-desktop__img">
        <div class="nft-info-desktop__content">
            <h1 class="nft-info-desktop__desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h1>
            <!-- <ToggleInfo class="nft-info-desktop__characteristic" title="Characteristic" :height="500">
                <div class="nft-info-desktop__characteristic-content">
                    <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                    <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                    <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                    <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                </div>
            </ToggleInfo> -->
            <!-- <ToggleInfo class="nft-info-desktop__details" title="Details" :height="500">
                <Details />
            </ToggleInfo> -->
            <div class="toggle-container nft-info-desktop__characteristic">
                <div class="title-container">
                    <h3 class="title">Characteristic</h3>
                    <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                </div>
                <div class="description-responsive-container">
                    <div class="nft-info-desktop__characteristic-content">
                        <CharacteristicCard name="mdef" :value="8" :percent="7.52"/>
                        <CharacteristicCard name="powerSpeed" :value="8" :percent="88.65"/>
                        <CharacteristicCard name="powerMax" :value="8" :percent="27.22"/>
                        <CharacteristicCard name="Atk" :value="8" :percent="15.84"/>
                    </div>
                </div>
            </div>
            <div class="toggle-container nft-info-desktop__details">
                <div class="title-container">
                    <h3 class="title">Details</h3>
                    <img src="@/assets/svg/Reusable/arrow3.svg" alt="" class="arrow" />
                </div>
                <div class="description-responsive-container">
                    <Details />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.nft-info-desktop {
    background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, .1);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 15px;
    padding: 5.63rem 0 5.07rem;
    max-width: 45rem;

    min-width: 31%;

    .toggle-container {
        
        .title {
            font-weight: 500;
            font-size: 2.3rem;
        }

        .description-container {
            padding-top: 1rem;
        }

        .arrow {
            width: 1.25rem;
            transform: rotate(-180deg);
        }
    }

    &__img {
        width: 100%;
    }
    &__desc {
        font-weight: 400;
        font-size: 1.71rem;
        line-height: 140.5%;
    }
    &__content {
        padding: 3.1rem;
    }
    &__characteristic {
        margin-top: 3.42rem;
    }
    &__characteristic-content {
        display: flex;
        flex-flow: row wrap;
        gap: 2.56rem;
    }
    &__details {
        margin-top: 3.42rem;
    }
}
</style>