<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        required: true
    }
});
const src = ref< string | null>();

const events: string[] = ['dragenter', 'dragleave', 'dragover', 'drop'];
const isDragging = ref(false);

onMounted(() => {
    events.forEach(event => window.addEventListener(event, (e) => e.preventDefault));
});
onUnmounted(() => {
    events.forEach(event => window.removeEventListener(event, (e) => e.preventDefault));
});

const emit = defineEmits<{(e:"upload",file: File):void}>();
const handleDrop = ($event: DragEvent): void => {
    const files = $event.dataTransfer?.files as FileList;
    
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => (src.value = reader.result as string);
}

const handleDragenter = (): void => {
    isDragging.value = true;
};
const handleDragleave = (): void => {
    isDragging.value = false;
}
</script>

<template>
   <div v-bind="$attrs" 
        class="file-uploader" 
        :class="{'dragging': isDragging}"
        @drop.prevent="handleDrop" 
        @dragenter.prevent="handleDragenter"
        @dragleave.prevent="handleDragleave"
        >
        <input v-if="props.type === 'Image'" class="input" type="file" name="" id="" accept="image/*">
        <input v-if="props.type === 'Video'" class="input" type="file" name="" id="" accept="video/mp4, video/mov">
        <slot></slot>
        <img v-if="props.type === 'Image' && src" class='image' :src="src" alt="" />
        <video v-if="props.type === 'Video'  && src" class='image' :src="src" alt="" ></video>
   </div>
</template>

<style lang="scss" scoped> 
.file-uploader {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    background: rgba(217, 217, 217, 0.1);
    border-radius: 15px;
    .input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 10;
        cursor: pointer;
    }
    .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
}
.dragging {
    background-color: lighten(rgba(217, 217, 217, 0.1), 80%)
}
</style>