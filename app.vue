<template>
  <div class="relative">
    <header>
      <nav :class="{ 'fixed-nav': true, 'nav-hidden': isHidden }" class="py-4 px-4 md:px-20">
        <ul
          class="links text-base justify-between tracking-wide text-stone-300 ml-auto flex gap-4 md:gap-12 items-end rounded-3xl m-auto bg-stone-900 hover:bg-stone-950 transition duration-100 shadow-sm py-2 md:py-3 px-6 md:px-8 uppercase font-bold border-2 border-stone-200 hover:border-stone-600 bg-opacity-50 w-full">
          <li>
            <NuxtLink to="/" class="hover:text-stone-50 text-sm md:text-base">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink prefetch to="/video" class="hover:text-stone-50 text-sm md:text-base">Video</NuxtLink>
          </li>
          <li>
            <NuxtLink prefetch to="/photo" class="hover:text-stone-50 text-sm md:text-base">Photo</NuxtLink>
          </li>
          <li>
            <NuxtLink prefetch to="/contact" class="hover:text-stone-50 text-sm md:text-base">Contact</NuxtLink>
          </li>
          <li class="ml-0 md:ml-auto">
            <NuxtLink to="/" class="hover:text-stone-50 text-sm md:text-base">Pay</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="relative z-1 max-h-min">

      <NuxtPage />

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isHidden = ref(false);
let lastScroll = 0;

const handleScroll = () => {
  const currentScroll = window.pageYOffset;
  isHidden.value = currentScroll > lastScroll && currentScroll > 100;
  lastScroll = currentScroll;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
html {
  background-color: black;
}

main {
  min-height: 100vh;
  /* padding-top: 80px; */
}

.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  transition: top 0.3s, opacity 0.3s;
}

.nav-hidden {
  top: -110px;
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
