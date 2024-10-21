<template>
  <div id="getInTouchRow" class="flex flex-col justify-end w-full absolute m-4 z-50">
    <nuxt-link to="/contact">
      <div v-if="!clicked" ref="getInTouch"
        class="opacity-0 cursor-pointer getInTouch bg-amber-400 hover:bg-amber-300 transition-colors duration-500 work-bold w-48 h-48 rounded-full text-stone-950 text-lg flex items-center justify-center border-stone-500">
        Get In Touch
      </div>
    </nuxt-link>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue';
import { useNuxtApp } from '#app';
const getInTouch = ref<HTMLDivElement | null>(null);
const clicked = ref(false);

onMounted(() => {
  nextTick(() => {
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Observed entry:', entry);
          if (entry.isIntersecting) {
            console.log('Element is intersecting.');
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
            console.log('Element is not intersecting.');
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (getInTouch.value) {
      console.log('Observing element:', getInTouch.value);
      observer2.observe(getInTouch.value);
    } else {
      console.error('getInTouch element not found');
    }
  });
});
</script>

<style scoped>
.fade-in {
  opacity: 1;
  transition: opacity 0.5s ease-in;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.getInTouch {
  border: 6px solid black;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), letter-spacing 0.8s ease, opacity 0.5s ease-in-out;
  letter-spacing: normal;
}

.getInTouch:hover {
  transform: rotate(360deg);
  letter-spacing: 0.125em;
}

.loading-spinner {
  height: 24px;
  width: 24px;
  animation: spin 1s linear infinite;
  display: block;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
