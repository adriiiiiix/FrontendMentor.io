<template>
  <div :class="colorStore.colorMode">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
// Components import
import NavBar from "@/components/NavBar.vue";
import { useColorStore } from "@/store/useColorStore";

export default {
  // Components
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const colorStore = useColorStore();

    return { colorStore };
  },
};
</script>
