<template>
  <div v-if="!loading">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const messages = ref([
  "Life's a trip, heard you gotta take it in stride.",
  'To document the city, is to document life itself.',
  'Video captures something beyond the immediate moment, something intangible.',
  "Authenticity is a videographer's best friend, you gotta be yourself.",
  "Hard work pays off—that's facts"
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

<style scoped></style>
