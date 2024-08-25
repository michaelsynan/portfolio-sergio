<template>
  <section id="main-hero"
    class="text-white text-8xl min-h-screen flex flex-col items-start justify-center -mt-10 font-bold w-full">
    <div class="video-wrapper">
      <video autoplay muted loop class="video-background">
        <source src="/Timelapse_clipped.mp4" type="video/mp4" />
      </video>
    </div>
    <section class="text-white h-screen flex flex-col items-start justify-end -mt-10 font-bold bottom-0 left-0 z-2">
      <h1
        class="bottom-auto md:bottom-0 top-28 md:top-auto left-0 p-10 md:p-20 max-w-[20ch] md:max-w-[18ch] fixed z-2 tracking-wide humane  text-7xl sm:text-8xl md:text-9xl">
        Untether Your Imagination</h1>
      <p
        class="text-stone-300 text-2xl fixed right-0 bottom-0 p-10 md:p-20 max-w-[30ch] tracking-widest text-right opacity-50 work">
        <RotatingText />
      </p>
    </section>
    <ProjectDisplay class="cursor-pointer" />
    <AltMenu />

    <div id="chinatown"
      class="chinatown w-full p-10 md:p-20 overflow-hidden z-10 relative flex flex-col justify-between">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="z-10 opacity-50 humane aboutSergio ml-auto text-center md:text-right mt-10 md:mt-8" ref="aboutSergio">
        About Sergio</div>
      <span class="work text-2xl mt-10 max-w-[20ch] text-center m-auto md:ml-auto md:mr-0 md:text-right aboutText"
        ref="aboutText">Sergio is a native New Yorker, videographer and photographer. He is based in Queens and uses his
        background to inform his perspective when behind the lens. Proficient in traditional film, as well as modern
        techniques such as drone video capture and remote control cameras.
      </span>

      <GetInTouch class="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      <ProfilePic class="hidden md:block md:absolute bottom-0 w-[900px] left-[25%]" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue';

const aboutSergio = ref(null);
const aboutText = ref(null);

onMounted(() => {
  nextTick(() => {
    const observer1 = new IntersectionObserver(
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
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const observer2 = new IntersectionObserver(
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
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (aboutSergio.value) {
      observer1.observe(aboutSergio.value);
    }

    // Add delay before observing the second element
    if (aboutText.value) {
      setTimeout(() => {
        observer2.observe(aboutText.value);
      }, 200); // 1500ms delay
    }

    // Clean up observers on component unmount
    onUnmounted(() => {
      observer1.disconnect();
      observer2.disconnect();
    });
  });
});
</script>

<style scoped>
.video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.video-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the opacity as needed */
}

.chinatown {
  height: 100vh;
  background: url('/chinatown.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

.chinatown::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

/* Sets initial state of image to be slightly lower and invisible */
.aboutSergio {
  display: block;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.aboutText {
  display: block;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
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
