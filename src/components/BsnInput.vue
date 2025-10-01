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
    <button v-if="store.bsnIsValid" id="bsn-number__copy-button" type="button">
      <i class="fa fa-copy" id="bsn-number__copy-icon">COPY</i>
    </button>
  </div>
</template>

<style scoped>
input {
  min-width: 35rem;
  max-width: 90vw;
  border: none;
  outline: none;
  background: none;
  font-size: 2rem;
  padding: 2rem;
  color: inherit;
  margin-bottom: 3rem;
  margin-top: 3rem;
  border-radius: 3rem;
  box-shadow:
    inset 8px 8px 8px var(--color-grey-light),
    inset -8px -8px 8px var(--color-white);
  text-align: center;
}

section div {
  position: relative;
}

#bsn-number__copy-button {
  all: revert;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

#bsn-number__copy-icon {
  font-size: 2rem;
  color: var(--color-grey-dark);
  background-color: var(--color-white-smoke);
  transition: 0.3s;
}

#bsn-number__copy-icon:hover {
  transform: scale(1.1);
}
</style>
