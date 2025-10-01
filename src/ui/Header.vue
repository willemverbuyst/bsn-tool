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
  background: #666;
  background: linear-gradient(to right, #666 0%, #b8b8b8 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
