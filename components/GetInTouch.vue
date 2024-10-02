<template>
  <div id="getInTouchRow" class="flex flex-col justify-end w-full absolute m-4 z-50">
    <!-- Display the circle button when not clicked -->
    <div v-if="!clicked" ref="getInTouch" @click="handleClicked"
      class="opacity-0 cursor-pointer getInTouch bg-amber-400 hover:bg-amber-300 transition-colors duration-500 work-bold w-48 h-48 rounded-full text-stone-950 text-lg flex items-center justify-center border-stone-500">
      <span v-if="!wasSuccess">Get in touch</span> <span v-else>Thank you!</span>
    </div>

    <!-- Display the square with the form when clicked -->
    <div v-else @click="handleClicked"
      class="z-100 bg-amber-400 hover:bg-amber-300 transition-colors duration-500 work-bold w-max h-max text-stone-950 text-lg flex flex-col items-center justify-center gap-4 p-6 border-2 border-stone-950 rounded">
      <h2 class="text-4xl work-bold uppercase w-full tracking-wide">Send a message</h2>
      <form @submit.prevent="handleSubmit" class="flex flex-col items-center max-w-4xl">
        <input @click.stop type="email" v-model="email" placeholder="Email"
          class="mb-2 p-2 border border-stone-500 rounded w-full" required />
        <label class="flex flex-col work text-sm text-stone-700 w-full mt-3">Please include location of where you want
          to shoot, and
          date,
          if
          time
          sensitive.
          <textarea @click.stop v-model="location" placeholder="Location"
            class="mb-2 p-2 border border-stone-500 rounded mt-2 text-xl work-bold" required></textarea></label>
        <label class="flex flex-col work text-sm w-max-content mt-3 text-stone-700">Helpful things you may want to
          include here: How
          fast
          you need
          your
          product
          turned
          around, if this is a W2, 1099 or other project, if your business requires specific insurance, and if you
          operate on a net30/net60 or similar schedule, any special needs, squared footage of your
          establishment, links to any previous video, photos, 3D renderings, timelapses etc. of your business.
          <textarea @click.stop v-model="message" placeholder="Message"
            class="mb-2 p-2 border border-stone-500 rounded mt-2 text-xl work-bold" required></textarea>
        </label>
        <button @click.stop="handleSubmit"
          class="bg-stone-950 text-stone-50 p-2 rounded w-full uppercase tracking-wider relative">
          <span v-if="loading">
            <img src="/MdiLoading.svg" alt="Loading" class="loading-spinner"> <!-- Spinner shows when loading -->
          </span>
          <span v-else>
            Send
          </span>
        </button>

      </form>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue';
import { useNuxtApp } from '#app';
const getInTouch = ref<HTMLDivElement | null>(null);
const clicked = ref(false);
const email = ref('');
const location = ref('');
const message = ref('');
const loading = ref(false); // Track whether the form is submitting
console.log('MAILGUN_DOMAIN:', process.env.MAILGUN_DOMAIN);
const wasSuccess = ref(false);

const nuxtApp = useNuxtApp();
const $mail = nuxtApp.$mail;

const handleSubmit = async () => {
  loading.value = true; // Set loading to true when the form submission starts
  try {
    await $mail.send({
      from: 'testing@sergio.formworkstudios.com', // Verified sender email address
      to: 'mikesynan@gmail.com',  // Recipient's email address
      subject: 'NEW MESSAGE FROM', // Subject of the email
      text: `Email: ${email.value}
             Location: ${location.value}
             Message: ${message.value}` // Email body with form data
    });
    clicked.value = false;
    wasSuccess.value = true;
    nextTick(() => {
      if (getInTouch.value) {
        getInTouch.value.classList.add('fade-in');
        getInTouch.value.classList.remove('fade-out');
      } else {
        console.error('getInTouch is null');
      }
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    alert('Failed to send email.');
  } finally {
    loading.value = false; // Set loading to false when the process completes or fails
  }
};



console.log(process.env.MAILGUN_SMTP_LOGIN, process.env.MAILGUN_SMTP_PASSWORD);

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

.loading-spinner {
  height: 24px;
  width: 24px;
  animation: spin 1s linear infinite;
  display: block;
  /* Ensures that the image is block-level so 'margin: auto' can center it horizontally */
  margin: auto;
  /* Centers the spinner horizontally within the button */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

button {
  display: flex;
  /* Using flex to center the content vertically and horizontally */
  align-items: center;
  /* Centers the content vertically within the button */
  justify-content: center;
  /* Centers the content horizontally within the button */
}
</style>
