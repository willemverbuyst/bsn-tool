<script setup>
import BsnGeneratorButton from "./components/BsnGeneratorButton.vue";
import BsnInput from "./components/BsnInput.vue";
import BsnValidatorButton from "./components/BsnValidatorButton.vue";
import GithubLink from "./components/GithubLink.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <GithubLink />
  <Header />

  <main>
    <form autocomplete="off" onsubmit="return false;">
      <section>
        <BsnGeneratorButton />
      </section>
      <section>
        <BsnInput />
      </section>
      <section>
        <BsnValidatorButton />
      </section>
    </form>
  </main>
</template>

<style scoped></style>
