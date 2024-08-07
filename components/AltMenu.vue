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
  <div class="text-7xl bg-rose-950 w-full z-10 border-y-2 humane flex flex-row justify-between tracking-wide px-20">
    <NuxtLink to="/photo" class="hover-effect py-20 px-10 pl-0 text-center cursor-pointer"
              @mouseenter="enter('photo')" @mouseleave="leave('photo')">
      <span class="text">{{ hoverState.photo ? 'VIEW' : 'PHOTO' }}</span>
    </NuxtLink>
    <NuxtLink to="/video" class="hover-effect py-20 px-10 text-center cursor-pointer"
              @mouseenter="enter('video')" @mouseleave="leave('video')">
      <span class="text">{{ hoverState.video ? 'VIEW' : 'VIDEO' }}</span>
    </NuxtLink>
    <NuxtLink to="/drone" class="hover-effect py-20 px-10 text-center cursor-pointer"
              @mouseenter="enter('drone')" @mouseleave="leave('drone')">
      <span class="text">{{ hoverState.drone ? 'VIEW' : 'DRONE' }}</span>
    </NuxtLink>
    <NuxtLink to="/remote" class="hover-effect py-20 px-10 pr-0 text-center cursor-pointer"
              @mouseenter="enter('remote')" @mouseleave="leave('remote')">
      <span class="text">{{ hoverState.remote ? 'VIEW' : 'REMOTE' }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.hover-effect {
  display: inline-block;
  width: 20%; /* Assign a fixed width */
  transition: all 0.3s ease-in-out;
}

.text {
  transition: opacity 0.3s ease-in-out;
}

/* .hover-effect:hover .text {
  opacity: 0.5;
} */
</style>
