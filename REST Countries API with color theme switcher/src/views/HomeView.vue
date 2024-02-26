<template>
  <div class="home-view container">
    <!-- Input panel -->
    <section class="input">
      <!-- Search -->
      <div class="input-search">
        <button
          class="input-search-button"
          @click="countryStore.filterCountries()"
        >
          <i class="fas fa-search"></i>
        </button>
        <input
          v-model="countryStore.searchValue"
          class="input-search-field"
          type="text"
          placeholder="Search for a country.."
          @keyup.enter="countryStore.filterCountries()"
        />
      </div>

      <!-- Filter -->
      <div class="input-filter" @click="toggleDropdown()">
        <p class="input-filter-selected font-600 font-small">
          {{ countryStore.filterValue || "Filter by Region" }}
        </p>
        <i class="fa-solid fa-chevron-down font-600 font-small"></i>
        <div v-if="optionVisible" class="input-filter-options">
          <div class="option" @click="selectOption('')">All</div>
          <div class="option" @click="selectOption('Africa')">Africa</div>
          <div class="option" @click="selectOption('Americas')">Americas</div>
          <div class="option" @click="selectOption('Asia')">Asia</div>
          <div class="option" @click="selectOption('Europe')">Europe</div>
          <div class="option" @click="selectOption('Oceania')">Oceania</div>
          <div class="option" @click="selectOption('Antarctic')">Antarctic</div>
        </div>
      </div>
    </section>

    <!-- Region panel -->
    <section class="countries">
      <div class="cards" v-if="countryStore.countries.length > 0">
        <div
          v-for="country in countryStore.filteredCountries"
          :key="country.cca3"
          class="card"
          @click="toDetail(country)"
        >
          <img
            class="card-image"
            :src="country.flags.png"
            :alt="country.flags.alt"
          />
          <div class="card-description">
            <h3>{{ country.name.common }}</h3>
            <p>
              Population:
              <span class="text-lighter">{{ country.population }}</span>
            </p>
            <p>
              Region: <span class="text-lighter">{{ country.region }}</span>
            </p>
            <p>
              Capital:
              <span class="text-lighter">{{ country.capital }}</span>
            </p>
          </div>
        </div>
      </div>
      <div v-else>Now loading...</div>
    </section>

    <!-- Scroll top button -->
    <button class="scroll-top-button" @click="toTop()">
      <i class="fa-solid fa-chevron-up text-lighter"></i>
    </button>
  </div>
</template>

<script>
import { useCountryStore } from "@/store/useCountryStore";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const countryStore = useCountryStore();
    const router = useRouter();
    const optionVisible = ref(false);

    // Routing
    const toDetail = (country) => {
      countryStore.setCountryDetail(country);
      router.push({ path: "/detail" });
    };

    const toTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const toggleDropdown = () => {
      optionVisible.value = !optionVisible.value;
    };

    const selectOption = (option) => {
      countryStore.filterValue = option;
      countryStore.filterCountries();
    };

    onMounted(countryStore.getCountries);

    return {
      countryStore,
      toDetail,
      toggleDropdown,
      selectOption,
      optionVisible,
      toTop,
    };
  },
};
</script>
