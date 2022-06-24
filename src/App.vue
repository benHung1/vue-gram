<script setup>
// import Header from "./components/Header.vue";
import FirstPage from "./components/FirstPage.vue";
import SecondPage from "./components/SecondPage.vue";

import { ref } from "vue";

const pics = ref([
  {
    bg: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173048/Home_WUM-1.jpg",
      import.meta.url
    ).href,
  },
  {
    bg: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173048/Home_WUM-1.jpg",
      import.meta.url
    ).href,
  },
  {
    bg: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173048/Home_WUM-1.jpg",
      import.meta.url
    ).href,
  },
]);

const items = ref([
  {
    title: "GOOGLE / PLATFORM",
    content:
      "Marketing masterrials for every smaill business in America(No really)",
    buttonText: "Tell me more",
  },
  {
    title: "ADIDAS / EVENT-BASED EXPERIENCES",
    content: "Highlight films for 30,000 runners, wicked fast",
    buttonText: "Get the rundown",
  },
  {
    title: "ADIDAS / MULTI-CHANNEL CAMPAIGNS",
    content: "If its called activewear... shouldnt it move ? ",
    buttonText: "Jump in",
  },
]);
</script>

<template>
  <!-- <Header /> -->
  <FirstPage />
  <SecondPage :items="items" :pics="pics" />
</template>

<style></style>
