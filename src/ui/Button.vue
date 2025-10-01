<script setup>
defineProps(["caption"]);
defineEmits(["handle-click"]);
</script>

<template>
  <button type="button" @click="$emit('handle-click')">
    {{ caption }}
  </button>
</template>

<style scoped>
button {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  min-width: 35rem;
  max-width: 90vw;
  height: 6rem;
  border-radius: 3rem;
  font-size: 2rem;
  font-family: inherit;
  color: inherit;
  background-color: var(--color-white-smoke);
  box-shadow:
    3px 3px 8px var(--color-grey-medium),
    -3px -3px 8px var(--color-white);
  transition: 0.5s;
}

button:hover {
  box-shadow:
    2px 2px 5px var(--color-grey-medium),
    -2px -2px 5px var(--color-white);
}

button:active {
  box-shadow:
    inset 1px 1px 3px var(--color-grey-light),
    inset -1px -1px 3px var(--color-white);
}
</style>
