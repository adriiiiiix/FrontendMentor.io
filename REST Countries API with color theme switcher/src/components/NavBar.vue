<template>
  <nav class="navbar container">
    <h1 class="navbar-brand font-800 font-large">Where in the world?</h1>
    <button
      class="navbar-color-switch font-800"
      @click="colorStore.colorModeToggle()"
    >
      <i class="fa-regular fa-moon font-800 font-medium color-mode"></i>
      <p class="font-800 font-medium">Dark Mode</p>
    </button>
  </nav>
</template>

<script>
import { useColorStore } from "@/store/useColorStore";

export default {
  setup() {
    const colorStore = useColorStore();

    return { colorStore };
  },
};
</script>
