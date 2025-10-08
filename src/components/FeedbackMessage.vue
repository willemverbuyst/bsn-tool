<script setup>
import { store } from "../store";
</script>

<template>
  <p
    v-if="store.bsn && store.bsnHasBeenValidated"
    id="feedback"
    :class="{ valid: store.bsnIsValid, invalid: !store.bsnIsValid }"
  >
    {{ store.bsnIsValid ? "this is a valid bsn" : "this bsn is not valid" }}
  </p>
</template>

<style scoped>
.valid {
  color: green;
}

.invalid {
  color: red;
}
</style>
