<script setup lang="ts">
import { ref } from 'vue';

const hoverState = ref({
  photo: false,
  video: false,
  drone: false,
  remote: false
});

function enter(type: string) {
  hoverState.value[type] = true;
}

function leave(type: string) {
  hoverState.value[type] = false;
}
</script>

<template>
  <!-- desktop version -->
  <div id="alt-menu-inner"
    class="text-7xl bg-rose-950 w-full text-white border-y-2 humane flex-row justify-between tracking-wide px-6 md:px-20 flex relative z-30">
    <NuxtLink to="/photo" class="hover-effect py-20 px-10 pl-0 text-center cursor-pointer" @mouseenter="enter('photo')"
      @mouseleave="leave('photo')">
      <span class="text">{{ hoverState.photo ? 'VIEW' : 'PHOTO' }}</span>
    </NuxtLink>
    <NuxtLink to="/video" class="hover-effect py-20 px-10 text-center cursor-pointer" @mouseenter="enter('video')"
      @mouseleave="leave('video')">
      <span class="text">{{ hoverState.video ? 'VIEW' : 'VIDEO' }}</span>
    </NuxtLink>
    <NuxtLink to="/drone" class="hover-effect py-20 px-10 text-center cursor-pointer" @mouseenter="enter('drone')"
      @mouseleave="leave('drone')">
      <span class="text">{{ hoverState.drone ? 'VIEW' : 'DRONE' }}</span>
    </NuxtLink>
    <!-- <NuxtLink to="/remote" class="hover-effect py-20 px-10 pr-0 text-center cursor-pointer"
      @mouseenter="enter('remote')" @mouseleave="leave('remote')">
      <span class="text">{{ hoverState.remote ? 'VIEW' : 'REMOTE' }}</span>
    </NuxtLink> -->
  </div>
  <!-- mobile version -->
  <!-- <div
    class="text-5xl md:text-7xl bg-rose-950 w-full border-y-2 humane flex flex-col justify-between tracking-wide px-6 md:px-20 md:hidden relative z-30 text-white">
    <div class="flex flex-row">
      <NuxtLink to="/photo"
        class="hover-effect flex-grow py-12 md:py-20 px-4 md:px-10 text-center cursor-pointer flex items-center justify-center w-1/2">
        <span class="text">{{ hoverState.photo ? 'VIEW' : 'PHOTO' }}</span>
      </NuxtLink>
      <NuxtLink to="/video"
        class="hover-effect flex-grow py-12 md:py-20 px-4 md:px-10 text-center cursor-pointer flex items-center justify-center w-1/2">
        <span class="text">{{ hoverState.video ? 'VIEW' : 'VIDEO' }}</span>
      </NuxtLink>
    </div>
    <div class="flex flex-row">
      <NuxtLink to="/drone"
        class="hover-effect flex-grow py-12 md:py-20 px-4 md:px-10 text-center cursor-pointer flex items-center justify-center w-1/2">
        <span class="text">{{ hoverState.drone ? 'VIEW' : 'DRONE' }}</span>
      </NuxtLink>
      <NuxtLink to="/remote"
        class="hover-effect flex-grow py-12 md:py-20 px-4 md:px-10 text-center cursor-pointer flex items-center justify-center w-1/2">
        <span class="text">{{ hoverState.remote ? 'VIEW' : 'REMOTE' }}</span>
      </NuxtLink>
    </div>
  </div> -->


</template>

<style scoped>
.hover-effect {
  display: inline-block;
  width: 20%;
  transition: all 0.3s ease-in-out;
}

.text {
  transition: opacity 0.3s ease-in-out;
}
</style>
