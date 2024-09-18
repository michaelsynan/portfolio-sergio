<template>
  <div id="getInTouchRow" class="flex flex-col justify-end w-full absolute m-4">
    <!-- Display the circle button when not clicked -->
    <div v-if="!clicked" ref="getInTouch" @click="handleClicked"
      class="opacity-0 cursor-pointer getInTouch bg-amber-400 hover:bg-amber-300 transition-colors duration-500 work-bold w-48 h-48 rounded-full text-stone-950 text-lg flex items-center justify-center border-stone-500">
      Get in touch
    </div>

    <!-- Display the square with the form when clicked -->
    <div v-else @click="handleClicked"
      class="bg-amber-400 hover:bg-amber-300 transition-colors duration-500 work-bold w-max h-max text-stone-950 text-lg flex flex-col items-center justify-center border-stone-500 gap-4 p-6">
      <h2 class="text-3xl work-bold uppercase">Send a message</h2>
      <form @submit.prevent="handleSubmit" class="flex flex-col items-center">
        <input @click.stop type="email" v-model="email" placeholder="Email"
          class="mb-2 p-2 border border-stone-500 rounded" required />
        <textarea @click.stop v-model="message" placeholder="Message" class="mb-2 p-2 border border-stone-500 rounded"
          required></textarea>
        <button type="submit" class="bg-stone-950 text-stone-50 p-2 rounded w-full">
          Send
        </button>
      </form>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue';

const getInTouch = ref<HTMLDivElement | null>(null);
const clicked = ref(false);

const handleClicked = () => {
  clicked.value = !clicked.value;
  console.log(clicked.value);

  nextTick(() => {
    if (getInTouch.value) {
      getInTouch.value.classList.add('fade-in');
      getInTouch.value.classList.remove('fade-out');
    } else {
      console.error('getInTouch is null');
    }
  });
};


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
</style>
