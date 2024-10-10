<template>
  <div>
    Loading<span class="dots max-h-min"></span>
  </div>
</template>

<style scoped>
.dots {
  display: inline-block;
  position: relative;
}

.dots::before {
  content: '';
  position: absolute;
  /* Position so the dots animate from the left */
  width: 1.5em;

  text-align: left;

  animation: loadingDots 1.5s infinite;
  left: 6px;
  bottom: -14px;
  text-align: left;
  height: 1.5em;
  animation: loadingDots-cc22637a 1.5s infinite;
}

@keyframes loadingDots {

  0%,
  20% {
    content: '';
  }

  40% {
    content: '.';
  }

  60% {
    content: '..';
  }

  80%,
  100% {
    content: '...';
  }
}
</style>
