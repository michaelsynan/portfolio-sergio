<template>
  <div ref="getInTouch" class="opacity-0 cursor-pointer getInTouch bg-amber-400 hover:bg-amber-300 transition-color duration-500 work-bold w-48 h-48 absolute bottom-20 left-20 rounded-full text-stone-950 text-lg flex items-center justify-center border-stone-500">
    Get in touch
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue';

const getInTouch = ref(null);

onMounted(() => {
  nextTick(() => {
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
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
      observer2.observe(getInTouch.value);
    }
  });
});
</script>

<style scoped>
/* Styles for second observer's animations */
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
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.5s ease-in-out;
}

.getInTouch:hover {
  transform: rotate(360deg);
}
</style>
