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
    class="text-4xl md:text-7xl bg-rose-950 w-full text-white border-y-2 humane flex-row justify-between tracking-wide px-4 md:px-8 flex relative z-30">
    <NuxtLink to="/photo" class="hover-effect py-10 md:py-20 px-2 md:px-8 text-center cursor-pointer"
      @mouseenter="enter('photo')" @mouseleave="leave('photo')">
      <span class="text">{{ hoverState.photo ? 'VIEW' : 'PHOTO' }}</span>
    </NuxtLink>
    <NuxtLink to="/video" class="hover-effect py-10 md:py-20 px-2 md:px-8 text-center cursor-pointer"
      @mouseenter="enter('video')" @mouseleave="leave('video')">
      <span class="text">{{ hoverState.video ? 'VIEW' : 'VIDEO' }}</span>
    </NuxtLink>
    <NuxtLink to="/drone" class="hover-effect py-10 md:py-20 px-2 md:px-8 text-center cursor-pointer"
      @mouseenter="enter('drone')" @mouseleave="leave('drone')">
      <span class="text">{{ hoverState.drone ? 'VIEW' : 'DRONE' }}</span>
    </NuxtLink>
  </div>

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
