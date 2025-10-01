<script setup>
import BsnGeneratorButton from "./components/BsnGeneratorButton.vue";
import BsnInput from "./components/BsnInput.vue";
import BsnValidatorButton from "./components/BsnValidatorButton.vue";
</script>

<template>
  <section class="link">
    <a
      href="https://github.com/willemverbuyst/bsn-tool"
      target="_blank"
      rel="noreferrer"
      aria-labelledby="gh-icon"
      ><i class="fab fa-github icon__github">GH ICON</i></a
    >
  </section>

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
