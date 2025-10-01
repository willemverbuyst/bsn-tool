<script setup>
import BsnGeneratorButton from "./components/BsnGeneratorButton.vue";
import BsnInput from "./components/BsnInput.vue";
import BsnValidatorButton from "./components/BsnValidatorButton.vue";
import Feedback from "./components/Feedback.vue";
import GithubLink from "./components/GithubLink.vue";
import Header from "./ui/Header.vue";
</script>

<template>
  <GithubLink />
  <Header title="BSN-tool" />

  <main>
    <form autocomplete="off" onsubmit="return false;">
      <section>
        <BsnGeneratorButton />
      </section>
      <section>
        <BsnInput />
        <Feedback />
      </section>
      <section>
        <BsnValidatorButton />
      </section>
    </form>
  </main>
</template>

<style scoped></style>
