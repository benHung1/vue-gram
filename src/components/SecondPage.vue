<script setup>
const props = defineProps({
  items: {
    tyep: Array,
    required: true,
  },
});
</script>

<template lang="">
  <section
    class="w-full flex text-white h-screen -mt-[100px]"
    v-for="(item, index) in props.items"
    :key="index"
  >
    <div class="bg-[#eeb17f] h-full w-[50%] flex flex-col items-center">
      <div
        class="h-[120px] flex w-full justify-center items-center bg-[#c06476]"
      >
        <font-awesome-icon icon="arrow-down" class="w-[18px] h-[18px]" />
        <p class="pl-[15px]">See What We Do</p>
      </div>

      <div
        class="md:px-[100px] h-full flex flex-col justify-center items-start"
      >
        <p class="text-[#d77a42] font-bold">
          {{ item.title }}
        </p>
        <h1 class="my-[20px] md:text-5xl text-4xl">
          {{ item.content }}
        </h1>
        <button class="p-4 bg-[#d77a42] rounded-[30px]">
          {{ item.buttonText }}
          <font-awesome-icon icon="arrow-right" class="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
    <div
      class="bg w-[50%] h-screen bg-no-repeat bg-conver bg-left"
      :style="
        index % 2 == 0
          ? { 'background-color': 'red' }
          : { 'background-color': 'pink' }
      "
    ></div>
  </section>
</template>

<style></style>
