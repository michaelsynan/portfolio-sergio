<template>
  <div class="bg-stone-950 min-h-full h-screen -mt-[80px] flex justify-center align-center items-center text-8xl tracking-wide humane">
    <div ref="videoWrapper" class="relative w-full h-full">
      <transition name="fade" mode="out-in">
        <div v-if="showContent === 'videoTitle'" key="videoTitle" ref="videoTitle" class="text-white opacity-0 video-title text-center clamp text-9xl tracking-widest absolute">
          VIDEO
        </div>
        <div v-else key="videoContent" ref="videoContent" class="text-white absolute">
          <div class="flex flex-row gap-10 pb-10">
            <div class="p-10 border-2">Thing 1</div>
            <div class="p-10 border-2">Thing 2</div>
            <div class="p-10 border-2">Thing 3</div>
          </div>
          <div class="flex flex-row gap-10">
            <div class="p-10 border-2">Thing 4</div>
            <div class="p-10 border-2">Thing 5</div>
            <div class="p-10 border-2">Thing 6</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const videoWrapper = ref(null);
const videoTitle = ref(null);
const videoContent = ref(null);
const showContent = ref('videoTitle');



setTimeout(() => {
  showContent.value = "videoContent";
}, 3000);



onMounted(() => {
  videoTitle.value.classList.add('animate-initial');
});


</script>

<style scoped>

.animate-initial {
  animation: fadeInInitial 0.5s ease-out forwards;
}

@keyframes fadeInInitial {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }
}

.video-title, .text-white {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) translateY(20px);
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%) translateY(0);
}
</style>
