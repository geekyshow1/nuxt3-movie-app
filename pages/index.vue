<template>
  <div>
    <SearchBar @search-book="searchBooks" :searchError="searchError" />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-cyan-50"
    >
      <div v-for="book in booksList" :key="book.booksId">
        <MovieCard
          :booksId="book.booksId"
          :title="book.title"
          :date="book.date"
          :poster="book.poster"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Search Movie
const searchError = ref(false);
const searchBooks = (searchInput) => {
  // console.log("Search Text: ", searchInput);
  if (searchInput === "") {
    searchError.value = true;
  }
  if (searchInput !== "") {
    searchError.value = false;
    // Write Movie Search Code
  }
};

const booksList = ref([
  {
    booksId: 1,
    title: "Bhagavat Gita As it is",
    date: "20-01-2023",
    poster:
      "https://m.media-amazon.com/images/I/91msEbTletL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    booksId: 2,
    title: "Bhagavat Gita As it is",
    date: "20-01-2023",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdB3A0fWrgdvoigOCMV7FlS1xBb_U2JeQHOlMovgAgsiFd3WN51FwSDZvwUvy14JgLYOc&usqp=CAU",
  },
  {
    booksId: 3,
    title: "Bhagavat Gita As it is",
    date: "20-01-2023",
    poster: "https://m.media-amazon.com/images/I/5149QdclcTL.jpg",
  },
  {
    booksId: 4,
    title: "Bhagavat Gita As it is",
    date: "20-01-2023",
    poster:
      "https://m.media-amazon.com/images/I/519Uc4kbVES._AC_UF1000,1000_QL80_.jpg",
  },
  {
    booksId: 5,
    title: "Bhagavat Gita As it is",
    date: "20-01-2023",
    poster:
      "https://m.media-amazon.com/images/I/519Uc4kbVES._AC_UF1000,1000_QL80_.jpg",
  },
  {
    booksId: 6,
    title: "Bhagavat Gita As it is",
    date: "20-01-2023",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfrxInX11W9dTs_jz5yvueSkLGDfncLSuFjdbitvPWB8UzSxMOWYU8Et9FzJKOxSUFQ0&usqp=CAU",
  },
]);
</script>
