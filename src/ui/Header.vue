<script setup>
defineProps(["title"]);
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
header {
  margin-top: 5vh;
  background: var(--color-grey-dark);
  background: linear-gradient(
    to right,
    var(--color-grey-dark) 0%,
    var(--color-grey-light) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
