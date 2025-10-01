<script setup>
import { store } from "../store";
import Button from "../ui/Button.vue";
</script>

<template>
  <Button caption="generate BSN" @handle-click="store.generateBsn()" />
</template>

<style scoped></style>
