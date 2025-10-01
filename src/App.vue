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

<style scoped>
main {
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}

section {
  padding: 1rem;
}

form section:nth-child(2) {
  position: relative;
}

form section:nth-child(2) #feedback {
  width: 100%;
  position: absolute;
  bottom: -5%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
