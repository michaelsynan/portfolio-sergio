<template>
  <div class="bg-stone-950 min-h-screen flex justify-center items-center flex-col">
    <div>
      <div class="w-full flex flex-col gap-4 mt-32 px-8 md:px-20">
        <div class="relative">
          <div class="absolute inset-0 z-0 animate-spin-slow blur-xl">
          </div>
          <div class="relative z-10 text-center justify-between w-full flex flex-col md:flex-row">
            <h1 class="text-white text-8xl tracking-wide humane text-left leading-none !mb-0">STILL PHOTOGRAPHY</h1>
            <NuxtLink to="/contact"
              class="mb-4 text-lg self-bottom bottom-0 h-auto mt-auto bg-rose-950 text-white max-w-max px-3 py-2 cursor-pointer b-2 border-stone-50 border tracking-widest hover:bg-opacity-80 work-bold">
              Book a Call
            </NuxtLink>
          </div>
        </div>
        <div class="images-grid pb-6 md:pb-10">
          <nuxt-img src="/1.webp" placeholder class="image-container hover:scale-110" />
          <nuxt-img src="/2.webp" placeholder class="image-container hover:scale-110" />
          <nuxt-img src="/4.webp" placeholder class="image-container hover:scale-110" />
          <nuxt-img src="/5.webp" placeholder class="image-container hover:scale-110" />
          <nuxt-img src="/6.webp" placeholder class="image-container hover:scale-110" />
          <nuxt-img src="/7.webp" placeholder class="image-container hover:scale-110" />
          <nuxt-img src="/8.webp" placeholder class="image-container hover:scale-110" />
          <nuxt-img src="/9.webp" placeholder class="image-container hover:scale-110" />
        </div>
      </div>
    </div>
    <TheFooter />
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
  transform: scale(1.5) !important;
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
