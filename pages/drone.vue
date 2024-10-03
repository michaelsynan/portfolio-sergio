<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Define a state to control the visibility of the text
const isTextVisible = ref(false);

// Delay the appearance of the text on component mount
onMounted(() => {
  setTimeout(() => {
    isTextVisible.value = true;
  }, 100); // Delay for 1 second (1000ms)
});
</script>

<template>
  <div class="bg-stone-950 min-h-full flex flex-col justify-center object-contain text-8xl tracking-wide humane gap-8">
    <div class="text-white flex flex-row gap-6 mt-32 relative w-10/12 mx-auto h-[500px]">
      <nuxt-img src="/drone-1.jpg" alt="Placeholder Image" placeholder
        class="w-1/2 transform transition-transform duration-300 hover:scale-110 drone-image h-full" />
      <nuxt-img src="/drone-2.jpg" alt="Placeholder Image" placeholder
        class="w-1/2 transform transition-transform duration-300 hover:scale-110 drone-image h-full" />

      <!-- Wrapper for the words -->
      <div class="absolute inset-0 flex items-center justify-center tracking-widest text-9xl">
        <!-- Each word with a different delay -->
        <span class="opacity-0 transition-opacity duration-1000" :class="{ 'opacity-60': isTextVisible }"
          style="transition-delay: 100ms;">
          SHOT
        </span>
        <span class="opacity-0 transition-opacity duration-1000 ml-4" :class="{ 'opacity-60': isTextVisible }"
          style="transition-delay: 200ms;">
          FROM
        </span>
        <span class="opacity-0 transition-opacity duration-1000 ml-4" :class="{ 'opacity-60': isTextVisible }"
          style="transition-delay: 300ms;">
          ABOVE
        </span>
      </div>
    </div>
    <div class="flex flex-row gap-8 items-center justify-center w-10/12 mx-auto mb-10">
      <div id="drone2"
        class="w-1/2 text-white flex flex-col items-start self-start bg-[url('/drone-nyc.gif')] bg-cover bg-center h-[500px]">
        <h2 class="text-4xl work-bold uppercase w-full tracking-wide">Drone Stuff</h2>
        <p>Drone ipsum</p>
      </div>
      <div id="drone2"
        class="w-1/2 text-white flex flex-col items-start self-start bg-[url('/drone-nyc.gif')] bg-cover bg-center h-[500px]">
        <h2 class="text-4xl work-bold uppercase w-full tracking-wide">Drone Stuff</h2>
        <p>Drone ipsum</p>
      </div>
    </div>
    <div class="flex flex-row gap-8 items-center justify-center w-10/12 mx-auto mb-10">
      <div id="drone2"
        class="w-1/2 text-white flex flex-col items-start self-start bg-[url('/drone-nyc.gif')] bg-cover bg-center h-[500px]">
        <h2 class="text-4xl work-bold uppercase w-full tracking-wide">Drone Stuff</h2>
        <p>Drone ipsum</p>
      </div>
      <div id="drone2"
        class="w-1/2 text-white flex flex-col items-start self-start bg-[url('/drone-nyc.gif')] bg-cover bg-center h-[500px]">
        <h2 class="text-4xl work-bold uppercase w-full tracking-wide">Drone Stuff</h2>
        <p>Drone ipsum</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.drone-image {
  background-size: cover;
  background-position: center;
}
</style>
