<script setup>
import { store } from "../store";
</script>

<template>
  <button id="bsn-validator-btn" type="button" @click="store.validateBsn()">
    validate BSN
  </button>
</template>

<style scoped></style>
