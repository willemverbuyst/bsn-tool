<script setup>
import { store } from "../store";
</script>

<template>
  <button id="bsn-generator-btn" type="button" @click="store.generateBsn()">
    generate BSN
  </button>
</template>

<style scoped></style>
