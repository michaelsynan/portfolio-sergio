<template>
  <div ref="getInTouch" class="opacity-0 getInTouch bg-amber-400 work font-bold w-48 h-48  absolute bottom-20 left-20 rounded-full text-stone-950 text-lg flex items-center justify-center border-stone-500">
   Get in touch
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

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
      threshold: 0.3, // Different threshold
    }
  );

  if (getInTouch.value) {
    observer2.observe(getInTouch.value);
  }
})
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
}
</style>
