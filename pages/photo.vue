<template>
  <div class="bg-stone-950 min-h-screen flex justify-center items-center -mt-[80px]">
    <div class="w-full flex">
      <!-- First Column -->
      <div class="w-1/5 flex justify-center items-center">
        <div class="text-white text-8xl tracking-wide">
          PHOTO
        </div>
      </div>

      <!-- Second Column with Placeholder Images -->
      <div class="w-2/5 flex flex-col justify-center items-center space-y-4">
        <img src="https://via.placeholder.com/300x300?text=Image+1" alt="Placeholder Image 1">
        <img src="https://via.placeholder.com/300x300?text=Image+2" alt="Placeholder Image 2">
      </div>

      <!-- Third Column with Placeholder Images -->
      <div class="w-2/5 flex flex-col justify-center items-center space-y-4">
        <img src="https://via.placeholder.com/300x300?text=Image+3" alt="Placeholder Image 3">
        <img src="https://via.placeholder.com/300x300?text=Image+4" alt="Placeholder Image 4">
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be empty if all styling is handled by Tailwind */
</style>
