<script setup lang="ts">
import { ref, toRefs } from 'vue';

const emit = defineEmits(['toggle']);

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true
  }
})

const { isOpen } = toRefs(props);
const clicked = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
  clicked.value = true;
  emit('toggle',);
};
</script>

<template>
    <button class="burger-component" @click="toggle">
        <svg id="burder" xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none">
            <path :id="isOpen ? 'first' : clicked ? 'first-close' : ''" fill="#F2F2F2" d="M0 0h18v2H0V0Zm0"/>
            <path :id="isOpen ? 'second' : clicked ? 'second-close' : ''" fill="#F2F2F2" d="M0 7h18v2H0V7Zm0"/>
            <path :id="isOpen ? 'third' : clicked ? 'third-close' : ''" fill="#F2F2F2" d="M0 14h18v2H0v-2Z"/>
        </svg>
    </button>
</template>

<style lang="scss" scoped>
.burger-component {
    padding: 0.5rem;
}

#burder {
    overflow: visible;
}

#first {  
  animation: first 0.5s forwards;
}
@keyframes first {
  100% {
    transform: rotate(45deg) translate(0,0);
  }
}
#first-close {
  animation: first-close 0.5s forwards;
}
@keyframes first-close {
  0% {
    transform: rotate(45deg) translate(0,0);
  }
  100% {
    transform: rotate(0) translateX(0);
  }
}

#second {
  animation: second 0.5s forwards;
}
@keyframes second {
  100% {
    opacity: 0;
  }
}

#second-close {
  animation: second-close 0.5s forwards;
}
@keyframes second-close {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#third {
  animation: third 0.5s forwards;
}
@keyframes third {
  100% {
    transform: rotate(-45deg) translate(-9.5px, -5.5px);
  }
}

#third-close {
  animation: third-close 0.5s forwards;
}
@keyframes third-close {
  0% {
    transform: rotate(-45deg) translate(-9.5px, -5.5px);
  }
  100% {
    transform: rotate(0) translateX(0);
  }
}

</style>