import { defineStore } from "pinia";
import { ref } from "vue";

export const useColorStore = defineStore("color", () => {
  const savedColorMode = localStorage.getItem("colorMode");
  let colorMode = ref(savedColorMode || "light-mode");

  function colorModeToggle() {
    colorMode.value =
      colorMode.value === "dark-mode" ? "light-mode" : "dark-mode";

    localStorage.setItem("colorMode", colorMode.value);
  }

  return {
    colorMode,
    colorModeToggle,
  };
});
