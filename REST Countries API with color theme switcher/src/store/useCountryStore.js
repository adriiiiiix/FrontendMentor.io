import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountryStore = defineStore("country", () => {
  let countries = ref([]);
  let filteredCountries = ref([]);
  let searchValue = ref("");
  let filterValue = ref("");
  let countryDetail = ref(countries.value[0]);

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      countries.value = await response.json();
      countries.value = countries.value.map((country) =>
        adjustCountries(country)
      );
      filteredCountries.value = countries.value;
      searchValue.value = "";
      filterValue.value = "";
    } catch (err) {
      console.error(err);
    }
  };

  const adjustCountries = (country) => {
    // converting capital
    if (!country.capital) country.capital = "-";
    else country.capital = country.capital.join(",");

    // Converting native name
    if (!country.name.nativeName) country.name.nativeName = "-";
    else {
      country.name.nativeName = [
        ...new Set(
          Object.values(country.name.nativeName).map((name) => name.common)
        ),
      ].join(", ");
    }

    // Check sub region
    if (!country.subregion) country.subregion = "-";

    // Converting top level domain
    if (!country.tld) country.tld = "-";
    else country.tld = country.tld.join(", ");

    // Converting currencies
    if (!country.currencies) country.currencies = "-";
    else {
      country.currencies = Object.values(country.currencies)
        .map((currency) => `${currency.name}(${currency.symbol})`)
        .join(", ");
    }

    // Converting languages
    if (!country.languages) country.languages = "-";
    else country.languages = Object.values(country.languages).join(", ");

    // Converting border
    if (!country.borders) country.borders = "-";
    else {
      country.borders = country.borders.map((border) =>
        countries.value.find((country) => country.cca3 === border)
      );
    }

    return country;
  };

  const setCountryDetail = (country) => {
    countryDetail.value = country;
  };

  const filterCountries = () => {
    filteredCountries.value = countries.value.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .startsWith(searchValue.value.toLowerCase()) &&
        country.region.includes(filterValue.value)
    );
  };

  return {
    countries,
    filteredCountries,
    searchValue,
    filterValue,
    countryDetail,
    getCountries,
    adjustCountries,
    setCountryDetail,
    filterCountries,
  };
});
