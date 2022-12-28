<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { gsap } from 'gsap';
import { useRoute } from 'vue-router';

const route = useRoute();
const animationFinishedIndicator = ref<boolean>(false);
const preloaderTimeline = gsap.timeline({});

const timeout1 = ref<ReturnType<typeof setTimeout>>();
const timeout2 = ref<ReturnType<typeof setTimeout>>();

watch(route, () => {
    if (route.name === 'home' || route.name === 'ambassadors' || route.name?.toString().includes('course')) {
        // console.log('ROUTE CHANGE')
        clearTimeout(timeout1.value);
        clearTimeout(timeout2.value);
        preloaderTimeline
        .to(
            ".preloader .text",
            { duration: 0.01, color: 'transparent', ease: "linear" },
            0
        )
        .to(
            ".preloader .description",
            { duration: 0.01, opacity: 0, ease: "linear" },
            0
        )
        .to(
            ".preloader",
            { duration: 0.01, autoAlpha: 1, ease: "linear" },
            0
        )
        .to("html", { duration: 0, overflowY: "hidden" }, 0);
        animationFinishedIndicator.value = false;
        setTimeout(() => {
            // initAnimation();
        }, 300);
    }
})

// watch(animationFinishedIndicator, (newValue) => {
//     if (newValue) {
        
//     } else {
//         initAnimation();
//     }
// })

// END PRELOADER ANIMATION AND CLOSE IT
const initAnimation = (): void => {
    // CLOSE PRELOADER IF PAGE IS LOADING FOR MORE THAN 5 SECONDS
    // console.log('INIT ANIMATION');
    timeout1.value = setTimeout(() => {
        // console.log('TIMEOUT 1');
        preloaderTimeline
        .to(
            ".preloader",
            { duration: .4, autoAlpha: 0, ease: "linear" },
            0
        )
        .to("html", { duration: 0, overflowY: "visible", delay: .3 }, 0);
    }, 3800);

    timeout2.value = setTimeout(() => {
        // console.log('TIMEOUT 2');
        animationFinishedIndicator.value = true;
    }, 5000);

    // CLOSE PRELOADER IF PAGE IS LOADED
    const interval = setInterval(() => {
        if (document.readyState === 'complete') {
            clearInterval(interval);
            animationFinishedIndicator.value = true;
            // console.log('INTERVAL');

            preloaderTimeline
            .to(
                ".preloader .text",
                { duration: .4, color: 'white', ease: "linear", delay: 0 },
                0
            )
            .to(
                ".preloader .description",
                { duration: .4, opacity: 1, ease: "linear", delay: .5 },
                0
            )
            .to(
                ".preloader",
                { duration: .4, autoAlpha: 0, ease: "linear", delay: 1 },
                0
            )
            .to("html", { duration: 0, overflowY: "visible", delay: 1 }, 0)
        }    
    }, 100);
}

onMounted(() => {
    initAnimation();
})
</script>

<template>
    <div :class="{'animation': !animationFinishedIndicator}" class="preloader">
        <div class="center">
            <h1 class="title">
                <span class="text first">EARN</span>
                <span class="text second">GAMES</span>
            </h1>
            <span class="description">Play and learn</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.preloader.animation {

    .center {

        .title {

            .text.first {
                &::before {
                    animation: textFilling 1.25s .25s linear forwards;
                }
            }

            .text.second {
                &::before {
                    animation: textFilling 1.5s 1.5s linear forwards;
                }
            }
        }

        .description {
            animation: toOpacity .3s 3s linear forwards;
        }
    }
}
.preloader {
    @include flex-center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--app-height);
    z-index: 1000000;
    background-image: var(--gradient-purple);

    .center {
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
            font-weight: 400;
            display: flex;
            align-items: center;

            .text {
                display: inline-block;
                font-family: Delirium;
                font-size: 18rem !important;
                color: transparent;
                -webkit-text-stroke: 1px white;
                position: relative;
                transition: all .2s;

                &::before {
                    font-family: inherit;
                    height: 100%;
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;

                    color: white;
                    overflow: hidden;

                    width: 0%;
                }
            }

            .text.first {
                margin-right: 1.25rem;

                &::before {
                    content: "EARN";
                }
            }

            .text.second {
                &::before {
                    content: "GAMES";
                }
            }
        }

        .description {
            display: inline-block;
            margin-top: -2rem;
            opacity: 0;
        }
    }
}

@keyframes textFilling {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes toOpacity {
  100% {
    opacity: 1;
  }
}
</style>