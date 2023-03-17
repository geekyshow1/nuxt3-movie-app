<script setup>
const movies = ref([]);

// Search Movie
const searchError = ref(false);
const searchMovie = async (searchInput) => {
  // console.log("Search Text: ", searchInput);
  if (searchInput === "") {
    searchError.value = true;
  }
  if (searchInput !== "") {
    searchError.value = false;
    // Write Movie Search Code
    const { data, error } = await useFetch(
      `/api/movies/search?searchInput=${searchInput}`
    );
    movies.value = data.value;
  }
};

// Fetch All Movie
const { data, error } = await useFetch("/api/movies");
// console.log(movies);
movies.value = data.value;
</script>

<template>
  <div>
    <SearchBar @search-movie="searchMovie" :searchError="searchError" />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-cyan-50"
    >
      <div v-for="movie in movies.results" :key="movie.id">
        <MovieCard
          :movieid="movie.id"
          :title="movie.title"
          :date="movie.release_date"
          :poster="movie.poster_path"
        />
      </div>
    </div>
  </div>
</template>
