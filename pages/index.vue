<template>
  <div v-if="!contentVisible" class="loading-screen">
    Loading...

    <video id="backgroundVideo" @loadeddata="handleVideoLoad" @play="handlePlayEvent" autoplay muted loop
      style="position: absolute; width: 0px; height: 00px; margin-top: 300px;">
      <source src="/Timelapse_clipped.mp4?cache-bust=123" type="video/mp4" />
    </video>

  </div>
  <div v-else class="absolute pt-[80px] main-content">
    <section id="main-hero"
      class="text-white text-8xl min-h-screen flex flex-col items-start justify-center -mt-10 font-bold w-full z-10 relative">
      <div class="video-wrapper">
        <video autoplay muted loop class="video-background">
          <source src="/Timelapse_clipped.mp4" type="video/mp4" />
        </video>

      </div>
      <section id="main-hero-content"
        class="text-white h-screen flex flex-col items-start justify-end -mt-10 font-bold bottom-0 left-0 z-2 fixed">
        <h1
          class="bottom-auto md:bottom-0 top-24 md:top-auto left-0 p-6 md:p-20 max-w-[20ch] md:max-w-[18ch] fixed z-2 tracking-wide humane  text-7xl sm:text-8xl md:text-9xl">
          Untether Your Imagination</h1>
        <p
          class="text-stone-300 text-2xl fixed right-0 bottom-0 p-6 md:p-20 max-w-[30ch] tracking-widest text-right opacity-50 work">
          <RotatingText />
        </p>
      </section>
    </section>
    <ProjectDisplay class="cursor-pointer z-20 relative" />
    <AltMenu id="alt-menu" class="z-30 relative" />
    <div id="chinatown"
      class="chinatown w-full p-6 md:p-20 overflow-hidden z-40 relative flex flex-col justify-between bottom-0 h-screen">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="z-50 opacity-50 humane aboutSergio ml-auto text-left md:text-right mt-10 md:mt-8 relative text-stone-100 text-8xl"
        ref="aboutSergio">
        About Sergio</div>
      <div
        class="work text-2xl mt-10 max-w-full md:max-w-[20ch] text-left m-auto md:ml-auto md:mr-0 md:text-right aboutText"
        ref="aboutText">
        <div class="relative z-100 opacity-100 text-stone-100 ">
          Sergio is a native New Yorker, videographer and photographer. He is based in Queens and uses his
          background to inform his perspective when behind the lens. Proficient in traditional film, as well as modern
          techniques such as drone video capture and remote control cameras.
        </div>
        <div class="flex flex-row pt-4 text-start md:justify-end w-full gap-1">
          <a href="https://www.instagram.com/nativenyvideo/" target="_blank" rel="noopener noreferrer"
            class="cursor-pointer p-1">
            <img src="/ig.svg" class="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/sergiotuzurin/" target="_blank" rel="noopener noreferrer"
            class="cursor-pointer p-1">
            <img src="/linkedin.svg" class="w-8 h-8" />
          </a>
        </div>
      </div>

      <GetInTouch class="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      <ProfilePic class="hidden md:block absolute bottom-0 w-[900px] left-full md:left-[25%]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, onUnmounted, watch } from 'vue';

const contentVisible = ref(false);
const aboutSergio = ref(null);
const aboutText = ref(null);

const handleVideoLoad = () => {
  console.log("Video data loaded, attempting to manually hide loading screen.");

  nextTick(() => {
    contentVisible.value = true;
    console.log('Updated contentVisible:', contentVisible.value);
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
    if (loadingScreen) loadingScreen.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
  });
};

const handlePlayEvent = () => {
  console.log("Video started playing.");
};

onMounted(() => {
  // Access the video element inside onMounted
  const videoElement = document.getElementById('backgroundVideo');

  if (videoElement) {
    console.log("Video element found, attaching additional error listener.");
    videoElement.addEventListener('error', (event) => {
      console.error("Video loading error:", event);
    });

    // Check if the video has already loaded
    if (videoElement.readyState >= 3) {
      console.log("Video already loaded, calling handleVideoLoad manually.");
      handleVideoLoad();
    }
  }

  nextTick(() => {
    // Set up IntersectionObserver for aboutSergio and aboutText
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Observed entry for aboutSergio:', entry);
          if (entry.isIntersecting) {
            console.log('aboutSergio is intersecting.');
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('animate-slide-down');
          } else {
            console.log('aboutSergio is not intersecting.');
            entry.target.classList.remove('animate-slide-up');
            entry.target.classList.add('animate-slide-down');
          }
        });
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Observed entry for aboutText:', entry);
          if (entry.isIntersecting) {
            console.log('aboutText is intersecting.');
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('animate-slide-down');
          } else {
            console.log('aboutText is not intersecting.');
            entry.target.classList.remove('animate-slide-up');
            entry.target.classList.add('animate-slide-down');
          }
        });
      },
      { threshold: 0.5 }
    );

    // Wait for nextTick to ensure elements are rendered
    nextTick(() => {
      if (aboutSergio.value) {
        console.log('Observing aboutSergio element:', aboutSergio.value);
        observer1.observe(aboutSergio.value);
      } else {
        console.error('aboutSergio element not found');
      }

      if (aboutText.value) {
        console.log('Observing aboutText element:', aboutText.value);
        observer2.observe(aboutText.value);
      } else {
        console.error('aboutText element not found');
      }
    });
  });
});

onUnmounted(() => {
  // Unmount observers if needed
  if (observer1) observer1.disconnect();
  if (observer2) observer2.disconnect();
});

</script>


<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 2em;
  z-index: 100;
  /* Make sure it's above other content */
}

#main-hero {
  padding-bottom: 80px;
}

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
  background: url('/chinatown.webp') no-repeat center center;
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
