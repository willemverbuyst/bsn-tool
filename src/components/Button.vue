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
  color: #044d8c;
  background-color: #f3f3f3;
  box-shadow:
    3px 3px 8px #b1b1b1,
    -3px -3px 8px #fff;
  transition: 0.5s;
}

button:hover {
  box-shadow:
    2px 2px 5px #b1b1b1,
    -2px -2px 5px #fff;
}

button:active {
  box-shadow:
    inset 1px 1px 3px #cbced1,
    inset -1px -1px 3px #fff;
}
</style>
