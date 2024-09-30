<template>
  <div class="bg-stone-950 min-h-screen flex justify-center items-center">
    <div class="w-full flex flex-col gap-4 mt-32 px-8 md:px-20">
      <!-- Title Section -->
      <div class="relative">
        <div class="absolute inset-0 z-0 animate-spin-slow blur-xl">
          <!-- Background gradient div -->
        </div>
        <div class="relative z-10 text-center">
          <h1 class="text-white text-8xl tracking-wide humane text-left leading-none !mb-0">Videography</h1>
        </div>
      </div>

      <!-- Images Grid -->
      <div class="images-grid pb-6 md:pb-10">
        <nuxt-img src="/chr.webp" :placeholder="[50, 25, 75, 5]" class="image-container" />
        <nuxt-img src="/cirque-thumbnail.webp" :placeholder="[50, 25, 75, 5]" class="image-container" />
        <nuxt-img src="/wedding.webp" :placeholder="[50, 25, 75, 5]" class="image-container" />
        <nuxt-img src="/yifei.webp" :placeholder="[50, 25, 75, 5]" class="image-container" />
        <nuxt-img src="/6.webp" :placeholder="[50, 25, 75, 5]" class="image-container" />
        <nuxt-img src="/7.webp" :placeholder="[50, 25, 75, 5]" class="image-container" />
        <nuxt-img src="/8.webp" :placeholder="[50, 25, 75, 5]" class="image-container" />
        <nuxt-img src="/9.webp" :placeholder="[50, 25, 75, 5]" class="image-container" />
      </div>
    </div>
  </div>
</template>


<style scoped>
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
  /* Adjust based on your preferred height */
  background-size: cover;
  background-position: center;
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
</style>
