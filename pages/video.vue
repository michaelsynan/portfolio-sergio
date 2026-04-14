<template>
  <div class="bg-stone-950 min-h-screen flex flex-col items-center pt-10 mt-20">
    <h1 class="text-white text-8xl font-bold mb-12 text-center humane">Video & Film Production</h1>
    <div class="w-full max-w-4xl flex flex-col gap-10">
      <div class="flex flex-col items-center">
        <h2 class="text-white text-3xl font-semibold mb-4">Creative Reel</h2>
        <div class="w-full flex justify-center aspect-w-16 aspect-h-9 border-2">
          <video src="https://nativenyvideo.s3.us-east-1.amazonaws.com/creativereel-1080p.mp4" controls
            poster="/creative2.webp" class="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h2 class="text-white text-3xl font-semibold mb-4">Corporate Reel</h2>
        <div class="w-full flex justify-center aspect-w-16 aspect-h-9 border-2">
          <video src="https://nativenyvideo.s3.us-east-1.amazonaws.com/corporate-reel-web.mp4" controls
            poster="/corporate2.webp" class="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h2 class="text-white text-3xl font-semibold mb-4">Wedding Reel</h2>
        <div class="w-full flex justify-center aspect-w-16 aspect-h-9 border-2">
          <video src="https://nativenyvideo.s3.amazonaws.com/wedding.webm" controls poster="/wedding_thum.webp"
            class="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
