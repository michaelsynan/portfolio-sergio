<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);
const showVideo = ref(false);
const videoSrc = ref('');

const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX + 100;
  mouseY.value = event.clientY;
};

const handleMouseEnter = (src: string) => {
  videoSrc.value = src;
  showVideo.value = true;
};

const handleMouseLeave = () => {
  showVideo.value = false;
  videoSrc.value = '';
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div class="bg-stone-950 border-t-2 border-y-2 w-full flex flex-col examples justify-start items-start gap-20 text-lg z-10 p-20 text-stone-400">
    <div>
      <h2 class="text-8xl humane pb-4 text-stone-200">Projects</h2>
      <p class="text-2xl work font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div 
      class="flex flex-row w-full work"
      @mouseenter="handleMouseEnter('/Timelapse_clipped.mp4')"
      @mouseleave="handleMouseLeave"
    >
      <div class="w-1/4">some stuff</div>
      <div class="w-1/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla</div>
      <div class="ml-auto w-1/4"> <img src="https://via.placeholder.com/150" alt="Placeholder Image" /></div>
    </div>
    <div 
      class="flex flex-row w-full work"
      @mouseenter="handleMouseEnter('/Timelapse_clipped.mp4')"
      @mouseleave="handleMouseLeave"
    >
      <div class="w-1/4">some stuff</div>
      <div class="w-1/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla</div>
      <div class="ml-auto w-1/4"> <img src="https://via.placeholder.com/150" alt="Placeholder Image" /></div>
    </div>
    <div 
      class="flex flex-row w-full work"
      @mouseenter="handleMouseEnter('/Timelapse_clipped.mp4')"
      @mouseleave="handleMouseLeave"
    >
      <div class="w-1/4">some stuff</div>
      <div class="w-1/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla</div>
      <div class="ml-auto w-1/4"> <img src="https://via.placeholder.com/150" alt="Placeholder Image" /></div>
    </div>
    <div 
      class="flex flex-row w-full work"
      @mouseenter="handleMouseEnter('/Timelapse_clipped.mp4')"
      @mouseleave="handleMouseLeave"
    >
      <div class="w-1/4">some stuff</div>
      <div class="w-1/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla</div>
      <div class="ml-auto w-1/4"> <img src="https://via.placeholder.com/150" alt="Placeholder Image" /></div>
    </div>
    <div v-if="showVideo" :style="{ top: `${mouseY}px`, left: `${mouseX}px` }" class="fixed z-50 fade-in-out">
      <video width="300" autoplay muted loop>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.fade-in-out {
  opacity: 1;
}
</style>
