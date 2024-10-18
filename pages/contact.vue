<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue';
import { useNuxtApp } from '#app';

const email = ref('');
const location = ref('');
const message = ref('');
const loading = ref(false);
const wasSuccess = ref(false);
const getInTouch = ref<HTMLDivElement | null>(null);

const nuxtApp = useNuxtApp();
const $mail = nuxtApp.$mail;

const handleSubmit = async () => {
  loading.value = true;
  wasSuccess.value = false; // Reset on new submission attempt
  try {
    await $mail.send({
      from: 'website@sergio.formworkstudios.com',
      to: 'sergiotupacuzurin@gmail.com',
      subject: 'NEW MESSAGE FROM WEBSITE',
      text: `Email: ${email.value}\nLocation: ${location.value}\nMessage: ${message.value}`
    });
    wasSuccess.value = true;
    nextTick(() => {
      if (getInTouch.value) {
        getInTouch.value.classList.add('fade-in');
        getInTouch.value.classList.remove('fade-out');
      }
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    alert('Failed to send email.');
    wasSuccess.value = false; // Reset success on failure
  } finally {
    loading.value = false;
  }
};
</script>


<template>
  <div
    class="bg-stone-950 min-h-full flex flex-col justify-center items-center object-contain tracking-wide humane gap-8">
    <div id="getInTouchRow" class="flex flex-col w-full h-screen">
      <div
        class="contact-form bg-amber-400 hover:bg-amber-300 transition-colors duration-500 work-bold w-max h-max text-stone-950 text-lg flex flex-col items-center justify-center gap-4 p-6 border-2 border-stone-950 rounded">
        <h2 class="text-4xl work-bold uppercase w-full tracking-wide">Send Sergio a Message</h2>
        <form @submit.prevent="handleSubmit" class="flex flex-col items-center max-w-4xl">
          <input @click.stop type="email" v-model="email" placeholder="Email"
            class="mb-2 p-2 border border-stone-500 rounded w-full" required />
          <label class="flex flex-col work text-sm text-stone-700 w-full mt-3">
            <div class="mb-2">Please include location of where you want
              to shoot, and date, if time sensitive.</div>
            <textarea @click.stop v-model="location" placeholder="Location"
              class="mb-2 p-2 border border-stone-500 rounded mt-2 text-xl work-bold" required></textarea>
          </label>
          <label class="flex flex-col work text-sm w-max-content mt-3 text-stone-700">
            <div class="mb-2">Helpful things you may want to
              include here: turnaround time, project type, insurance requirements, payment terms, special needs, square
              footage, and links to previous work.</div>
            <textarea @click.stop v-model="message" placeholder="Message"
              class="mb-2 p-2 border border-stone-500 rounded mt-2 text-xl work-bold" required></textarea>
          </label>
          <button :disabled="loading || wasSuccess" :class="{ 'cursor- not - allowed': loading || wasSuccess }"
            class="bg-stone-950 text-stone-50 p-2 rounded w-full uppercase tracking-wider relative">
            <span v-if="loading">
              <img src="/MdiLoading.svg" alt="Loading" class="loading-spinner">
            </span>
            <span v-else-if="wasSuccess">
              Thanks for your message! I will get back to you ASAP.
            </span>
            <span v-else>
              Send
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>




<style scoped>
/* Container setup to align items centrally */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* Full height of the viewport */
  width: 100%;
  /* Full width to avoid horizontal overflow */
  box-sizing: border-box;
  /* Includes padding and border in the element's total width and height */
}

#getInTouchRow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* Ensure it does not overflow the viewport width */
  box-sizing: border-box;
  /* Includes padding and border in the element's total width and height */
}

.contact-form {
  background-color: #fbbe00;
  /* Your specific form color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;
  /* Adjust to fit content width while staying responsive */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Aligns form elements centrally */
}

input,
textarea {
  width: 100%;
  /* Full width to maximize space within the form */
  margin: 0 0 20px 0;
  /* Spacing below each input */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: auto;
  /* Adjust width as necessary */
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  /* Space above the button */
}

.loading-spinner {
  height: 24px;
  width: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
