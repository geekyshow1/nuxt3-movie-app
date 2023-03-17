<script setup>
// Search Movie
const searchError = ref(false);
const searchMovie = (searchInput) => {
  // console.log("Search Text: ", searchInput);
  if (searchInput === "") {
    searchError.value = true;
  }
  if (searchInput !== "") {
    searchError.value = false;
    // Write Movie Search Code
  }
};

// Fetch Movie
const movieid = ref(123);
const title = ref("Batman Brown City");
const date = ref("20-01-2023");
const poster = ref(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg"
);
</script>

<template>
  <div>
    <SearchBar @search-movie="searchMovie" :searchError="searchError" />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-cyan-50"
    >
      <div v-for="n in 8">
        <MovieCard
          :movieid="movieid"
          :title="title"
          :date="date"
          :poster="poster"
        />
      </div>
    </div>
  </div>
</template>
