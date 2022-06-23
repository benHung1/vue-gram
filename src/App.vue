<script setup>
// import Header from "./components/Header.vue";
import FirstPage from "./components/FirstPage.vue";
import SecondPage from "./components/SecondPage.vue";

import { ref } from "vue";

const items = ref([
  {
    title: "GOOGLE / PLATFORM",
    content:
      "Marketing masterrials for every smaill business in America(No really)",
    buttonText: "Tell me more",
    bgSrc:
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/02/18172920/Home_Small-Thanks-1.jpg",
  },
  {
    title: "ADIDAS / EVENT-BASED EXPERIENCES",
    content: "Highlight films for 30,000 runners, wicked fast",
    buttonText: "Get the rundown",
    bgSrc:
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173006/Home_Boston-1.jpg",
  },
  {
    title: "ADIDAS / MULTI-CHANNEL CAMPAIGNS",
    content: "If its called activewear... shouldnt it move ? ",
    buttonText: "Jump in",
    bgSrc:
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173048/Home_WUM-1.jpg",
  },
]);
</script>

<template>
  <!-- <Header /> -->
  <FirstPage />
  <SecondPage :items="items" />
</template>

<style></style>
