<template>
  <div class="bg-stone-950 min-h-screen flex justify-center items-center -mt-[80px]">
    <div class="w-full flex gap-12 mt-32">
      
      <!-- First Column with Fixed Text -->
      <div class="w-2/5 flex justify-start h-full fixed flex-col">
        <Transition name="text" mode="out-in">
          <div :key="hoverHeader" class="text-white text-8xl tracking-wide mx-20 humane">
            {{ hoverHeader }}
          </div>
        </Transition>
        <Transition name="text" mode="out-in">
          <div :key="hoverBody" class="text-white text-2xl tracking-wide mt-4 mx-20">
            {{ hoverBody }}
          </div>
        </Transition>
      </div>

      <!-- Second Column with Scrollable Images -->
      <div id="col1" class="w-auto flex flex-col  gap-12 overflow-y-auto max-h-screen ml-[40%]">
        <div class="text-2xl text-white work-bold tracking-wide border-2 w-full h-36 bg-rose-950 align-center items-center justify-center flex h-full">
          Testing
        </div>
        <img 
          src="https://via.placeholder.com/300x300?text=Image+1" 
          alt="Placeholder Image 1" 
          class="block"
          @mouseover="updateText('Image Set 1', 'Description for Image Set 1')"
          @mouseleave="resetText"
          ref="box1"
        >
        <img 
          src="https://via.placeholder.com/300x300?text=Image+2" 
          alt="Placeholder Image 2" 
          class="block"
          @mouseover="updateText('Image Set 2', 'Description for Image Set 2')"
          @mouseleave="resetText"
          ref="box2"
        >
      </div>

      <!-- Third Column with Scrollable Images -->
      <div div="col2" class="w-auto flex flex-col  gap-12 overflow-y-auto max-h-screen">
        <img 
          src="https://via.placeholder.com/300x300?text=Image+3" 
          alt="Placeholder Image 3" 
          class="block"
          @mouseover="updateText('Image Set 3', 'Description for Image Set 3')"
          @mouseleave="resetText"
          ref="box3"
        >
        <img 
          src="https://via.placeholder.com/300x300?text=Image+4" 
          alt="Placeholder Image 4" 
          class="block"
          @mouseover="updateText('Image Set 4', 'Description for Image Set 4')"
          @mouseleave="resetText"
          ref="box4"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-enter-active, .text-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.text-enter-from, .text-leave-to {
  opacity: 0;
  transform: translatex(-80px);
}

.text-leave-from, .text-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>

<script setup>
import { ref } from 'vue';

const hoverHeader = ref('PHOTO');
const hoverBody = ref('');

const updateText = (header, body) => {
  hoverHeader.value = header;
  hoverBody.value = body;
};

const resetText = () => {
  hoverHeader.value = 'PHOTO';
  hoverBody.value = '';
};
</script>
