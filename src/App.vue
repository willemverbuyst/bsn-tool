<script setup>
import BsnInput from "./components/BsnInput.vue";
import Feedback from "./components/Feedback.vue";
import GithubLink from "./components/GithubLink.vue";
import { store } from "./store";
import Button from "./ui/Button.vue";
import Header from "./ui/Header.vue";
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
        <Feedback />
      </section>
      <section>
        <Button caption="validate BSN" @handle-click="store.validateBsn()" />
      </section>
    </form>
  </main>
</template>

<style scoped></style>
