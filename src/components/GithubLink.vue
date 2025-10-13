<script setup></script>

<template>
  <section class="link">
    <a
      href="https://github.com/willemverbuyst/bsn-tool"
      target="_blank"
      rel="noreferrer"
      aria-labelledby="gh-icon"
      ><i class="fab fa-github icon__github"
    /></a>
  </section>
</template>

<style scoped>
.link {
  display: flex;
  justify-content: end;
  padding: 1rem;

  .icon__github {
    background-image: linear-gradient(
      to right top,
      var(--color-grey-light),
      var(--color-font)
    );
    background-clip: text;
    color: transparent;
    font-size: 4rem;
  }
}
</style>
