<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted, onUnmounted, ref } from 'vue';
import AppNav from '@/components/Singular/App/Nav.vue';
import Preloader from '@/components/Singular/App/Preloader.vue';

const html = ref<null | HTMLElement>(null)

// IF TOUCHPAD DEVICE'S HEIGHT CHANGES - CHANGE BASE 100VH HEIGHT
const appHeight = (): void => {
    const doc = document.documentElement;
    if (window.outerWidth < 1000) {
        doc.style.setProperty('--app-height', `${window.innerHeight * 1.05}px`);
    } else {
        doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    }
};

// ON WINDOW RESIZE
const onResize = (): void => {
  appHeight();
};


onMounted(() => {
  html.value = document.querySelector('html');
  appHeight();
  
  // ADD WINDOW EVENT LISTENER
  window.addEventListener('resize', onResize);
})

onUnmounted(() => {
  // REMOVE WINDOW EVENT LISTENER
  window.removeEventListener('resize', onResize);
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
  <Preloader />
  <AppNav />
</template>

<style lang="scss">
.desktop {
  @media only screen and (max-width: 850px) {
    display: none !important;
  }
}

.mobile {
  @media only screen and (min-width: 850px) {
    display: none !important;
  }
}

.closed {
  opacity: 0;
  visibility: hidden;
  pointer-events: none !important;
}

.btn-white {
  padding: .85rem 2.2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: .5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
.page {
  min-height: 100vh;
}
}

.section {
  position: relative;
  width: 100%;
  height: 100vh;
}

.dropdown {
  transition: all .3s;
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  z-index: 150000;
}

.btn {
  text-align: center;

  &:hover {
    transform: scale(1.02);
  }
}

.btn-yellow {
  background-color: var(--color-yellow);
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 50rem;

  &:hover {
    background-color: darken(#DCB45B, 10%);
  }
}

.btn-transparent {
  background-color: rgba(0, 0, 0, 0.15);
}

.btn-gradient-purple {
  background-image: var(--gradient-purple);
}

.btn-purple {
  background-color: #9037D6;
  padding: .9rem 2.4rem;
  border-radius: .9rem;

  &:hover {
    background-color: darken(#9037D6, 10%);
  }
}

.title-primary {
    font-family: Delirium;
    font-weight: 400;
    text-transform: uppercase;
    
    .yellow {
        color: var(--color-yellow);
    }
}


.rating {
  height: fit-content;
  width: fit-content;
  // padding: 0.986rem 2.112rem;
  padding: 0.7rem 1.5rem;
  background: #DCB45B;
  border-radius: 0.7rem;

  // font-size: 1.97rem;
  line-height: 85%;
  white-space: nowrap;
}

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  z-index: 100000;
  transition: all .3s;
}

.arrow {
  transition: all .2s;
}

.arrow-active {
  transform: rotate(-180deg) !important;
}

.arrow-active-2 {
  transform: rotate(0deg) !important;
}

.toggle-container {

  .title-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .description-container {
    display: none;
  }

  .description-responsive-container {
    @media only screen and (max-width: 850px) {
      display: none;
    }
  }

  .arrow {
    transition: all .2s;
  }

  .arrow-responsive-active {
    transform: rotate(0) !important;

    @media only screen and (max-width: 850px) {
      transform: rotate(-180deg) !important;
    }
  }
}

.line {
  width: 100%;
  border-top: 1px solid rgba(242, 242, 242, 0.2);
}

.page-course {
  
  .slots-container {


    .slots {
      font-family: Delirium;
      font-weight: 400;
      text-transform: uppercase;
      border: 3px solid #C7A5D2;
      border-radius: 30rem;
      padding: 1.1rem 2.5rem .8rem;
      font-size: 4rem !important;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      width: fit-content;
      line-height: .8;

      span:first-of-type {
        display: inline-block;
        margin-right: 1.2rem;
      }

      span {
        font-size: 4rem !important;
      }
    
      .yellow {
        color: var(--color-yellow);
        font-size: 5rem !important;
      }
    }
  }

  .date-container {

      .date {
          display: flex;
          align-items: center;

          .date-month {
              font-weight: 400;
              text-transform: uppercase;

              @media only screen and (max-width: 850px) {
                  font-size: 16px !important;
              }
          }

          .line {
              height: 1px;
              width: 5rem;
              margin: 0 1.2rem;
              background-color: white;
          }
      }
  }
}
</style>
