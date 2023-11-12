<template>
  <div>
    <div class="sticky-navbar">
      <Header />
      <Navbar />
    </div>
    <Hero />
    <slot />
  </div>
</template>
<script setup></script>
<style scoped>
.sticky-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
