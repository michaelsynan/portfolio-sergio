<template>
  <div class="relative">
    <header>
      <nav :class="{ 'fixed-nav': true, 'nav-hidden': isHidden }" class="py-6 px-6 md:px-20 ">
        <ul
          class="links text-base justify-between tracking-wide text-stone-300 ml-auto flex gap-6 md:gap-12 items-end rounded-3xl m-auto bg-stone-900 hover:bg-stone-950 transition duration-100 shadow-sm py-2 md:py-3 px-6 md:px-8 uppercase font-bold border-2 border-stone-200 hover:border-stone-600 bg-opacity-50 w-full">
          <li>
            <NuxtLink to="/" class="hover:text-stone-50">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/video" class="hover:text-stone-50">Video</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/photo" class="hover:text-stone-50">Photo</NuxtLink>
          </li>
          <li class="ml-0 md:ml-auto">
            <NuxtLink to="/blog" class="hover:text-stone-50 ">Pay</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="relative z-1 max-h-min">
      <slot />
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

<style scoped>
/* .links li {
  z-index: 1;
}
.links li:hover::before {
  content: "";
  position: absolute;
  display: block;
  height: 20px;
  width: 20px;
  background: palevioletred;
  border-radius: 20px;
  filter: blur(8px);
  margin: auto;
  transform: translateY(0px);
  z-index: 0;
} */

main {
  min-height: 100vh;
  padding-top: 80px;
  /* Extra padding to account for the fixed navbar height */
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
  /* Adjust according to the height of the navbar */
  opacity: 0;
}
</style>
