<script setup>
definePageMeta({
  layout: "custom",
});
const title = ref("Batman Brown City");
const date = ref("20-01-2023");
const poster = ref(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg"
);
const revenue = ref(45467545);
const overview = ref(
  "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine."
);
</script>

<template>
  <div>
    <MovieDetail
      :title="title"
      :date="date"
      :poster="poster"
      :revenue="revenue"
      :overview="overview"
    />
  </div>
</template>

<style lang="css" scoped></style>
