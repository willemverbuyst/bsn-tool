<script setup>
import BsnGeneratorButton from "./components/BsnGeneratorButton.vue";
import BsnInput from "./components/BsnInput.vue";
import BsnValidatorButton from "./components/BsnValidatorButton.vue";
import GithubLink from "./components/GithubLink.vue";
</script>

<template>
  <GithubLink />

  <header>
    <h1>BSN-tool</h1>
  </header>

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
