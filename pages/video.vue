<template>
  <div class="bg-stone-950 min-h-screen flex flex-col items-center py-10 px-4 mt-20">
    <!-- Title Section -->
    <h1 class="text-white text-6xl font-bold mb-12 text-center">Video & Film Production</h1>

    <!-- Projects Wrapper -->
    <div class="w-full max-w-4xl flex flex-col gap-10">
      <!-- Wedding Section -->
      <div class="flex flex-col items-center">
        <h2 class="text-white text-3xl font-semibold mb-4">Wedding</h2>
        <div class="w-full flex justify-center aspect-w-16 aspect-h-9">
          <video src="https://nativenyvideo.s3.amazonaws.com/wedding.webm" controls
            poster="https://nativenyvideo.s3.amazonaws.com/wedding.webp" class="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
        <p class="text-white text-center mt-2">Description of wedding projects, highlighting the unique aspects of these
          events.</p>
      </div>

      <!-- Corporate Section -->
      <div class="flex flex-col items-center">
        <h2 class="text-white text-3xl font-semibold mb-4">Corporate</h2>
        <div class="w-full flex justify-center aspect-w-16 aspect-h-9">
          <video src="https://nativenyvideo.s3.amazonaws.com/corporate-compressed-2.webm" controls
            poster="https://nativenyvideo.s3.amazonaws.com/corporate-placeholder.webp"
            class="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
        <p class="text-white text-center mt-2">Overview of corporate projects, including business events, promotional
          videos, etc.</p>
      </div>

      <!-- Creative Section -->
      <div class="flex flex-col items-center">
        <h2 class="text-white text-3xl font-semibold mb-4">Creative</h2>
        <div class="w-full flex justify-center aspect-w-16 aspect-h-9">
          <video src="https://nativenyvideo.s3.amazonaws.com/creative-compressed-2.webm" controls
            poster="https://nativenyvideo.s3.amazonaws.com/creative-placeholder.webp"
            class="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
        <p class="text-white text-center mt-2">Insight into creative projects, such as music videos, art pieces, and
          more.</p>
      </div>
    </div>
  </div>
</template>
