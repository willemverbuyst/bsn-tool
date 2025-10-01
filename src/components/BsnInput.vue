<script setup>
import { store } from "../store";
</script>

<template>
  <div>
    <input
      type="text"
      name="bsn-number"
      id="bsn-number"
      aria-label="bsn-number"
      v-model="store.bsn"
      @input="store.resetValidation()"
    />
    <button id="bsn-number__copy-button" type="button">
      <i class="fa fa-copy" id="bsn-number__copy-icon">COPY</i>
    </button>
  </div>
</template>

<style scoped></style>
