<script setup>
import { ref } from "vue";
import { store } from "../store";

const isCopied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(store.bsn);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<template>
  <div>
    <input
      v-model="store.bsn"
      type="text"
      name="bsn"
      aria-label="bsn"
      placeholder="enter bsn"
      @input="store.resetValidation()"
    />
    <button
      v-if="store.bsnIsValid"
      aria-label="copy-button"
      type="button"
      @click="copyToClipboard"
    >
      <i v-if="!isCopied" id="bsn__copy-icon" class="pi pi-copy" />
      <i v-if="isCopied" id="bsn__copy-icon" class="pi pi-clipboard" />
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

button {
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

#bsn__copy-icon {
  font-size: 2rem;
  color: var(--color-grey-dark);
  background-color: var(--color-white-smoke);
  transition: 0.3s;
}

#bsn__copy-icon:hover {
  transform: scale(1.1);
}
</style>
