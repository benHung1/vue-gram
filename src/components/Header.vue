<script setup></script>

<template>
  <div class="header flex justify-between p-4 bg-inherit w-full">
    <div
      class="title flex items-center cursor-pointer group group-hover:opacity-100"
    >
      <img src="../assets/logo.png" alt="" class="w-10" />
      <p class="opacity-0 group-hover:opacity-100 animate-pulse">GROW</p>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.title:hover > p:nth-child(2) {
  transition: pulse 1s infinite 1s;
}
</style>
