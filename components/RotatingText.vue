<template>
  <div v-if="!loading">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const messages = ref([
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
]);

const currentIndex = ref(0);
const message = ref(messages.value[currentIndex.value]);
const loading = ref(true);

onMounted(() => {
  const rotateMessage = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % messages.value.length;
    message.value = messages.value[currentIndex.value];
  }, 2000); // Rotate messages every 2 seconds

  // Simulate loading delay for the demonstration
  setTimeout(() => {
    loading.value = false;
  }, 100);

  // Cleanup interval when component unmounts
  onUnmounted(() => {
    clearInterval(rotateMessage);
  });
});
</script>

<style scoped>

</style>
