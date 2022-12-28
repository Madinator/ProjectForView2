<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Step from "@/components/Reusable/Steps.vue";

// GET URL
const route = useRoute();

// SET CURRENT FORM GUILD PAGE ON LOAD
const page = ref(`translateX(${0}rem)`);

onMounted(() => {
    changeUrl();
});

// CHANGE CURRENT FORM GUILD PAGE
const changeUrl = (): void => {
    Steps.value.forEach(el => {
        el.isActive = false;
        if (route.fullPath.includes('One') && el.number === '1') {
            el.isActive = true;
        } else if (route.fullPath.includes('Two') && el.number === '2') {
            el.isActive = true;
        } else if (route.fullPath.includes('Three') && el.number === '3') {
            el.isActive = true;
        } else if (route.fullPath.includes('Four') && el.number === '4') {
            el.isActive = true;
        } else if (route.fullPath.includes('Five') && el.number === '5') {
            el.isActive = true;
        }

        if (el.isActive === true && el.number === '1') {
            page.value = `translateX(${0}rem)`;
        } else if (el.isActive === true) {
            page.value = `translateX(${-19 + (-22.572) * (parseInt(el.number, 10) - 2)}rem)`;
        }
    });    
};

watch(route, (newValue) => {
    if (newValue.fullPath.includes('step')) {
        changeUrl();
    }
})

// GO BACK BUTTON HANDLER
const router = useRouter();

const handleGoBack = () => {
    router.go(-1);
};

// FORM GUILD PAGES DATA
const Steps = ref([
    {
        title: "Description",
        number: "1",
        isActive: false
    },
    {
        title: "Category",
        number: "2",
        isActive: false
    },
    {
        title: "Strategy",
        number: "3",
        isActive: false
    },
    {
        title: "Support Needed",
        number: "4",
        isActive: false
    },
    {
        title: "Form Your Guild",
        number: "5",
        isActive: false
    },
]);

</script>

<template>
    <div class="page page-formGuild">
        <div class="inner-container">
            <div class="page-formGuild__header">
                <button class="page-formGuild__header__back-button" @click="handleGoBack()">Back</button>
                <h1 class="page-formGuild__header__title">Proposal form</h1>
                <span class="page-formGuild__header__text">Follow the simple 5 steps to form a guild</span>
            </div>
            <div class="page-formGuild__content">
                <div class="page-formGuild__content__steps desktop">
                    <Step v-for="item in Steps" :title="item.title" :number="item.number" :isActive="item.isActive"
                        :numberOfSteps="Steps.length" />
                </div>
                <div class="page-formGuild__content__steps__mobile mobile">
                    <Step v-for="item in Steps" :title="item.title" :number="item.number" :isActive="item.isActive"
                        :numberOfSteps="Steps.length" />
                </div>
                <div class="page-formGuild__content__box">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.page-formGuild {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(258.81deg, #0F0041 -29.36%, #0B0813 122.35%), linear-gradient(196.65deg, #0D2E5A 2.27%, #5F92E6 104.63%), #000000;
    font-weight: 500;

    &__header {
        display: flex;
        flex-direction: column;

        &__back-button {
            background: url('@/assets/svg/Tournaments/back-arrow.svg') no-repeat;
            background-position: left;
            padding-left: 2.7rem;
            font-size: 1.54rem;
            line-height: 85%;
            align-self: flex-start;

            @media only screen and (max-width: 850px) {
                font-size: 17px !important;
            }

            &:hover {
                opacity: 0.8;
            }
        }

        &__title {
            margin-top: 2.2rem;
            font-weight: 700;
            font-size: 5.47rem;
            line-height: 7.1rem;

            color: var(--color-white);

            @media only screen and (max-width: 850px) {
                font-size: 31px !important;
            }
        }

        &__text {
            margin-top: 1rem;
            font-weight: 600;
            font-size: 1.55rem;
            line-height: 85%;

            @media only screen and (max-width: 850px) {
                font-size: 15px !important;
            }
        }
    }

    &__content {
        display: flex;
        width: 80%;
        margin: 5.2rem auto 0;

        @media only screen and (max-width: 850px) {
            width: 100%;
            flex-direction: column;
        }

        &__steps {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 21.5rem;
            gap: 5.2rem;
            padding-right: 5.2rem;
            border-right: 2px solid;
            border-color: rgba(53, 25, 75, 1);

            &__mobile {
                display: flex;
                gap: 2rem;
                margin-bottom: 7rem;
                white-space: nowrap;
                width: 150%;
                transform: v-bind(page);

                @media only screen and (max-width: 600px) {
                    width: 1000px;
                }
            }

        }

        &__box {
            margin: 0 auto;
            width: 65%;

            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
    }


    :deep(.hr) {
        display: none;
        background-color: rgb(53, 25, 75);
        border: none;
        width: 10rem;
        height: 0.42rem;
        margin-top: 4.28rem;

        @media only screen and (max-width: 850px) {
            display: block;
        }
    }

    :deep(.form-title) {
        font-weight: 600;
        font-size: 2.75rem;
        line-height: 85%;
        margin-bottom: 2.2rem;

        @media only screen and (max-width: 850px) {
            margin-bottom: 1.5rem;
            font-size: 23px !important;
        }
    }

    :deep(.form-text) {
        font-weight: 600;
        font-size: 1.54rem;
        line-height: 85%;

        @media only screen and (max-width: 850px) {
            font-weight: 400;
            font-size: 15px !important;
        }
    }

    :deep(.form-sub-title) {
        font-weight: 600;
        font-size: 1.71rem;
        line-height: 85%;
        margin-bottom: 1.71rem;

        @media only screen and (max-width: 850px) {
            margin-bottom: 1.5rem;
            font-size: 15px !important;
        }
    }

    :deep(.form-input) {
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 85%;
        padding: 1.71rem 2.4rem;

        &::placeholder {
            color: #9E9E9E;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
            border-radius: 10px;
        }
    }

    :deep(.next-button),
    :deep(.back-button) {
        font-weight: 600;
        font-size: 2.05rem;
        line-height: 85%;
    }

    :deep(.back-button) {
        &:hover {
            transform: scale(1.1);
        }

        @media only screen and (max-width: 850px) {
            display: none;
            font-size: 15px !important;
        }
    }

    :deep(.next-button) {
        margin-left: 5.2rem;
        padding: 1.1rem 5.56rem;

        @media only screen and (max-width: 850px) {
            background-color: rgba(144, 55, 214, 0.2);
            border-color: rgba(144, 55, 214, 1);
            border-radius: 10px;
            text-align: center;
            position: absolute;
            bottom: 3rem;
            margin-left: 0;
        }

        @media only screen and (min-width: 750px) and (max-width: 850px) {
            width: 70%;
            left: 15%;
        }

        @media only screen and (min-width: 600px) and (max-width: 750px) {
            width: 75%;
            left: 12.5%;
        }

        @media only screen and (min-width: 450px) and (max-width: 600px) {
            width: 90%;
            left: 5%;
        }

        @media only screen and (max-width: 450px) {
            width: 92%;
            left: 4%;
        }
    }

    .inner-container {
        @include width-restriction;
        padding: 11rem 6.35rem 5rem;

        @media only screen and (max-width: 850px) {
            padding: 11rem 0 5rem;
        }
    }
}
</style>