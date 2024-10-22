<template>
  <div class="bg-stone-950 min-h-screen flex justify-center items-center flex-col">
    <div class="w-full flex flex-col gap-4 mt-32 px-8 md:px-20">
      <div class="relative">
        <div class="absolute inset-0 z-0 animate-spin-slow blur-xl"></div>
        <div class="relative z-10 text-center justify-between w-full flex flex-col md:flex-row">
          <h1 class="text-white text-8xl tracking-wide humane text-left leading-none !mb-0">STILL PHOTOGRAPHY</h1>
          <NuxtLink to="/contact"
            class="mb-4 text-lg self-bottom bottom-0 h-auto mt-auto bg-rose-950 text-white max-w-max px-3 py-2 cursor-pointer b-2 border-stone-50 border tracking-widest hover:bg-opacity-80 work-bold">
            Book a Call</NuxtLink>
        </div>
      </div>
      <div class="images-grid pb-6 md:pb-10">
        <div v-for="(src, index) in imageSources" :key="index" class="image-container hover:scale-105 cursor-pointer"
          @click="showLightbox(index)">
          <nuxt-img :src="src" placeholder class="cursor-pointer" />
        </div>
      </div>
    </div>
    <TheFooter />
    <div v-if="lightboxVisible" class="lightbox">
      <div class="lightbox-backdrop" @click="lightboxVisible = false"></div>
      <div class="lightbox-content">
        <nuxt-img :src="imageSources[activeImage]" class="lightbox-image" />
        <button class="close-button work-bold" @click="lightboxVisible = false">CLOSE</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const imageSources = ref(['/1.webp', '/2.webp', '/4.webp', '/5.webp', '/6.webp', '/7.webp', '/8.webp', '/9.webp']);
const lightboxVisible = ref(false);
const activeImage = ref(0);

function showLightbox(index) {
  activeImage.value = index;
  lightboxVisible.value = true;
  document.body.classList.add('no-scroll');
}

function closeLightbox() {
  lightboxVisible.value = false;
  document.body.classList.remove('no-scroll');
}

watch(lightboxVisible, (newVal) => {
  document.body.classList.toggle('no-scroll', newVal);
});
</script>




<style scoped>
.no-scroll {
  overflow: hidden;
  height: 100vh;
}

.text-center h1,
.text-center p {
  margin-bottom: 20px;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 8px;
}

.image-container {
  height: 300px;
  width: 100%;
  object-fit: cover;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 8px;
}

.image-container {
  height: 300px;
  width: 100%;
  overflow: hidden;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.image-container img {
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.3s ease-in-out;
}

.image-container:hover img {
  transform: scale(1.2) !important;
}

@media (min-width: 768px) {
  .images-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .images-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 995;
}

.lightbox-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-image {
  display: block;

  /* Limits the image width */
  max-height: 90vh;
  /* Limits the image height */
  z-index: 1000;
}

.close-button {
  position: absolute;
  top: 0;
  /* Sets the top position */
  right: 0;
  /* Sets the right position */
  padding: 5px 10px;
  background: #000;
  /* Visible background */
  color: #fff;
  /* Font color */
  border: 1px solid #fff;
  /* Adds a border for visibility */
  cursor: pointer;
  z-index: 1005;
  /* Ensures it is above the image */
  font-size: 16px;
  font-family: Arial, sans-serif;
}

.lightbox-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
