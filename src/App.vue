<script setup>
import BsnInput from "./components/BsnInput.vue";
import Button from "./components/Button.vue";
import GithubLink from "./components/GithubLink.vue";
import Header from "./components/Header.vue";
import { store } from "./store";
</script>

<template>
  <GithubLink />
  <Header title="BSN-tool" />

  <main>
    <form autocomplete="off" onsubmit="return false;">
      <section>
        <Button caption="generate BSN" @handle-click="store.generateBsn()" />
      </section>
      <section>
        <BsnInput />
      </section>
      <section>
        <Button caption="validate BSN" @handle-click="store.validateBsn()" />
      </section>
    </form>
  </main>
</template>

<style scoped></style>
