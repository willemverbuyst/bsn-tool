<script setup>
import { store } from "../store";
import Button from "../ui/Button.vue";
</script>

<template>
  <Button caption="validate BSN" @handle-click="store.validateBsn()" />
</template>

<style scoped></style>
