<script setup>
const searchInput = ref("");
defineProps(["searchError"]);
</script>

<template>
  <section class="search-section bg-cyan-50 py-4">
    <div class="container mx-auto md:px-40 px-5">
      <div class="flex">
        <input
          class="border border-cyan-400 py-2 px-4 w-full rounded-l-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          type="text"
          placeholder="Search Movie..."
          v-model.lazy="searchInput"
        />
        <button
          class="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-r-full"
          type="submit"
          @click="$emit('searchMovie', searchInput)"
        >
          Search
        </button>
      </div>
      <span v-if="searchError" class="text-red-700 px-4 py-3" role="alert">
        This field is required
      </span>
    </div>
  </section>
</template>

<style lang="css" scoped></style>
