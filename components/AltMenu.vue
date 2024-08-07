<script setup lang="ts">
</script>

<template>
  <div class="text-7xl bg-rose-950 w-full z-10 border-y-2 humane flex flex-row justify-between tracking-wide px-20">
    <div class="hover-effect py-20 px-10 pl-0">PHOTO</div>
    <div class="hover-effect py-20 px-10">VIDEOS</div>
    <div class="hover-effect py-20 px-10">DRONE</div>
    <div class="hover-effect py-20 px-10 pr-0">REMOTE</div>
  </div>
</template>

<style scoped>
.hover-effect {
  display: inline-block;
  transition: transform 0.5s, opacity 0.5s;
}

.hover-effect:hover {
  transform: rotateX(90deg);
  opacity: 0;
}
</style>
