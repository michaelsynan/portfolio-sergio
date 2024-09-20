<template>
  <div>
    <img src="/sergio3.webp" alt="Sergio" ref="sergioImage" class="sergio-image" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const sergioImage = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('animate-slide-down');
        } else {
          entry.target.classList.remove('animate-slide-up');
          entry.target.classList.add('animate-slide-down');
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the image is visible
    }
  );

  if (sergioImage.value) {
    observer.observe(sergioImage.value);
  }
});
</script>

<style scoped>
/* Sets initial state of image to be slightly lower and invisible */
.sergio-image {
  display: block;
  width: 100%;
  opacity: 0;
  transform: translateY(90px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

/* Defines the animation state when image is fully visible and in position */
.animate-slide-up {
  opacity: 1;
  transform: translateY(0);
}

/* Defines the animation state when image is not visible */
.animate-slide-down {
  opacity: 0;
  transform: translateY(90px);
}
</style>
