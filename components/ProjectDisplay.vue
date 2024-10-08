<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);
const showVideo = ref(false);
const videoSrc = ref('');
const videoHeight = 168;  // Height of the video

const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX + 150;  // Adjust this value to move the video to the right of the cursor
  mouseY.value = event.clientY - (videoHeight / 2);  // Center the video vertically
};

const handleMouseEnter = (src: string) => {
  videoSrc.value = src;
  showVideo.value = true;
};

const handleMouseLeave = () => {
  showVideo.value = false;
  videoSrc.value = '';
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div id="projects"
    class="bg-stone-950 border-t-2 border-y-2 w-full flex flex-col examples justify-start items-start gap-10 md:gap-20 text-lg z-10 p-6 pb-20 md:p-20 text-stone-400">
    <div>
      <h2 class="text-8xl humane pb-4 text-stone-200">Projects</h2>
      <p class="text-2xl work font-bold">Featured video, photo, drone and on-site projects.</p>
    </div>
    <!-- Hidden video elements for preloading -->
    <div style="display: none;">
      <video id="video1" preload="auto">
        <source src="/cirque.webm" type="video/webm">
      </video>
      <video id="video2" preload="auto">
        <source src="/Timelapse_clipped.mp4" type="video/mp4">
      </video>
      <video id="video3" preload="auto">
        <source src="/chr.webm" type="video/mp4">
      </video>
      <video id="video4" preload="auto">
        <source src="/wedding.webp" type="video/mp4">
      </video>
      <video id="video5" preload="auto">
        <source src="/yifei.webm" type="video/mp4">
      </video>
      n
    </div>
    <nuxt-link to="/videos/cirque"
      class="flex flex-col md:flex-row w-full work cursor-pointer hover:text-white transition-color duration-300 pb-4 project"
      @mouseenter="handleMouseEnter('/cirque.webm')" @mouseleave="handleMouseLeave">
      <div class="w-full md:w-1/4 work-bold pb-2 text-xl">Cirque Class</div>
      <div class="w-full md:w-1/4 pb-4">
        At the height of the pandemic lockdown, Cirque de Soleil had to solve a problem: They are based in Montreal, and
        their Emmy winning fashion designer, Zaldy Goco, is based in NYC. NativeNYVideo was able to set up a remote
        directing unit at Zaldy’s studio and lead the production on their CirqueClass.
      </div>
      <div class="ml-auto w-full md:w-1/4">
        <img src="/cirque-thumbnail.webp" alt="Placeholder Image" class="max-w-full md:max-w-[300px]" />
      </div>
    </nuxt-link>
    <div
      class="flex flex-col md:flex-row w-full work cursor-pointer hover:text-white transition-color duration-300 pb-4 project"
      @mouseenter="handleMouseEnter('/chr.webm')" @mouseleave="handleMouseLeave">
      <div class="w-full md:w-1/4 work-bold pb-2 text-xl">Church Heavenly Rest</div>
      <div class="w-full md:w-1/4 pb-4">The Church of the Heavenly Rest is a famed Episcopalian masterpiece on 5th
        Avenue
        facing
        Central Park. Known for hosting many film and TV shoots, CHR had to solve a problem when the time came to record
        and livestream their own series of events, starting with their annual Christmas midnight mass and continuing
        with the premiere of world renowned organist David Brigg’s “Festival of Psalms”. Out of everyone on their
        rolodex, they chose NativeNYVideo to livestream when the pressure was on. Using the same individual equipment
        that’s recorded the likes of Metallica and Lincoln Center, the results allowed the congregation who Zoom’d in to
        feel as if they were in the Church’s hallowed halls. </div>
      <div class="ml-auto w-full md:w-1/4"> <img src="/chr.webp" alt="Placeholder Image"
          class="max-w-full md:max-w-[300px]" /></div>
    </div>
    <div
      class="flex flex-col md:flex-row w-full work cursor-pointer hover:text-white transition-color duration-300 pb-4 project"
      @mouseenter="handleMouseEnter('/wedding.webm')" @mouseleave="handleMouseLeave">
      <div class="w-full md:w-1/4 work-bold pb-2 text-xl">Weddings and Events </div>
      <div class="w-full md:w-1/4 pb-4">Did you know the wedding video industry is rampant with unprofessionalism and
        outright footage
        theft? We know - because it's happened to us. With years of experience in our belt and a personal touch,
        NativeNYVideo is the go-to trustworthy video and photo service for wedding and event video production,
        photography, drone and photobooth services.
      </div>
      <div class="ml-auto w-full md:w-1/4"> <img src="/wedding.webp" alt="Placeholder Image"
          class="max-w-full md:max-w-[300px]">
      </div>
    </div>
    <!-- <div 
      class="flex flex-row w-full work cursor-pointer hover:text-white transition-color duration-300"
      @mouseenter="handleMouseEnter('/wedding.webm')"
      @mouseleave="handleMouseLeave"
    >
      <div class="w-1/4 work-bold">Corporate Video</div>
      <div class="w-1/4">Crafting the perfect message for your business is a business in and of itself. NativeNYVideo has experience in coaching people from all walks of life in the art of storytelling. We work with PR people and business coaches, or you can skip the high priced cooks in the kitchen and rely on NativeNYVideo to make you look as decisive on camera as you do in the office. </div>
      <div class="ml-auto w-1/4"> <img src="https://via.placeholder.com/150" alt="Placeholder Image" /></div>
    </div> -->
    <!-- <div 
      class="flex flex-row w-full work cursor-pointer hover:text-white transition-color duration-300"
      @mouseenter="handleMouseEnter('/Timelapse_clipped.mp4')"
      @mouseleave="handleMouseLeave"
    >
      <div class="w-1/4 work-bold">Creative Video</div>
      <div class="w-1/4">Have a creative endeavor that needs the cinematic touch? Upgrade from looking like a grade school play shot on a camcorder to high art with NativeNYVideo. We've shot and edited for the film industry and can help you add the touch of mystique and gravitas that your project deserves.</div>
      <div class="ml-auto w-1/4"> <img src="https://via.placeholder.com/150" alt="Placeholder Image" /></div>
    </div> -->
    <div
      class="flex flex-col md:flex-row w-full work cursor-pointer hover:text-white transition-color duration-300 pb-4 project"
      @mouseenter="handleMouseEnter('/yifei.webm')" @mouseleave="handleMouseLeave">
      <div class="w-full md:w-1/4 work-bold pb-2 text-xl">Law Office of Yifei He PLLC</div>
      <div class="w-full md:w-1/4 pb-4">It was a dark time to be an immigration lawyer. With imminent changes in
        immigration
        law many
        people needed legal counsel for their cases, but the pandemic lockdown was still in effect. Yifei He, Esq.,
        contacted NativeNYVideo in order to create a series of explainer videos to help his prospective client figure
        out what they needed, and to promote his firm. The final result was a resounding success. </div>
      <div class="ml-auto w-full md:w-1/4"> <img src="/yifei.webp" alt="Placeholder Image"
          class="max-w-full md:max-w-[300px]" />
      </div>
    </div>
    <div v-if="showVideo" :style="{ top: `${mouseY}px`, left: `${mouseX}px` }" class="fixed z-50 fade-in">
      <video width="450" height="252" autoplay muted loop>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>

    </div>
  </div>
</template>


<style scoped>
.fixed {
  position: fixed;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.fade-in {
  opacity: 1;
}

#projects {
  position: relative;
  background-color: #000;
  /* Black background */
  overflow: hidden;

  /* Adjust height as needed */
}

#projects::before {
  z-index: -1;
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  /* Large size to maintain aspect ratio during morphing */
  height: 200%;
  background: radial-gradient(circle, rgba(55, 0, 60, 0.4) 0%, rgba(0, 0, 0, 0.7) 60%);
  border-radius: 50%;
  animation: floatyBlob 12s infinite alternate ease-in-out, rotate 12s infinite linear;
  filter: blur(150px);
  /* Heavy blur effect */
}

@keyframes floatyBlob {

  0%,
  100% {
    transform: translate(50%, 50%) scale(1);
  }

  50% {
    transform: translate(25%, -25%) scale(1.2);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
