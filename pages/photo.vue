<template>
  <div class="bg-stone-950 min-h-screen flex justify-center items-center -mt-[80px]">
    <div class="w-full flex flex-col gap-4 mt-32 px-8 md:px-20">
      <!-- Title Section -->
      <div class="text-center">
        <h1 class="text-white text-8xl tracking-wide humane text-left">STILL PHOTOGRAPHY</h1>
      </div>
      <!-- Images Grid -->
      <div class="images-grid pb-6 md:pb-10">
        <div class="image-container" style="background-image: url('/1.webp');"></div>
        <div class="image-container" style="background-image: url('/2.webp');"></div>
        <div class="image-container" style="background-image: url('/4.webp');"></div>
        <div class="image-container" style="background-image: url('/5.webp');"></div>
        <div class="image-container" style="background-image: url('/6.webp');"></div>
        <div class="image-container" style="background-image: url('/7.webp');"></div>
        <div class="image-container" style="background-image: url('/8.webp');"></div>
        <div class="image-container" style="background-image: url('/9.webp');"></div>
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
