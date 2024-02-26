<template>
  <div class="detail-view container">
    <!-- Back Button -->
    <button class="back-button" @click="this.$router.push('/')">
      <i class="fas fa-arrow-left"></i>
      <span>Back</span>
    </button>

    <!-- Region section -->
    <section class="region">
      <!-- region flag -->
      <img
        class="region-image"
        :src="useCountry.countryDetail.flags.png"
        :alt="useCountry.countryDetail.flags.alt"
      />

      <!-- region detail -->
      <div class="region-detail">
        <!-- Region Detail name -->
        <h1 class="region-detail-name">
          {{ useCountry.countryDetail.name.official }}
        </h1>

        <!-- Regio detail data -->
        <div class="region-detail-data">
          <div>
            <p>
              Native name:
              <span class="text-lighter">{{
                useCountry.countryDetail.name.nativeName
              }}</span>
            </p>
            <p>
              Population:
              <span class="text-lighter">{{
                useCountry.countryDetail.population
              }}</span>
            </p>
            <p>
              Region:
              <span class="text-lighter">{{
                useCountry.countryDetail.region
              }}</span>
            </p>
            <p>
              Sub Region:
              <span class="text-lighter">{{
                useCountry.countryDetail.subregion
              }}</span>
            </p>
            <p>
              Capital:
              <span class="text-lighter">{{
                useCountry.countryDetail.capital
              }}</span>
            </p>
          </div>
          <div>
            <p>
              Top Level Domain:
              <span class="text-lighter">{{
                useCountry.countryDetail.tld
              }}</span>
            </p>
            <p>
              Currencies:
              <span class="text-lighter">{{
                useCountry.countryDetail.currencies
              }}</span>
            </p>
            <p>
              Languages:
              <span class="text-lighter">{{
                useCountry.countryDetail.languages
              }}</span>
            </p>
          </div>
        </div>

        <!-- Region detail border -->
        <div class="region-detail-border">
          <p class="region-detail-border-text">Border Countries:</p>
          <div class="region-detail-border-buttons">
            <span v-if="useCountry.countryDetail.borders === '-'">-</span>
            <button
              v-else
              v-for="border in useCountry.countryDetail.borders"
              :key="border"
              @click="useCountry.setCountryDetail(border)"
              class="region-detail-border-button"
            >
              {{ border.name.common }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useCountryStore } from "@/store/useCountryStore";

export default {
  setup() {
    const useCountry = useCountryStore();

    return { useCountry };
  },
};
</script>
