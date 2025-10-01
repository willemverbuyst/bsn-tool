<script setup></script>

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
        <button id="bsn-generator-btn" type="button">generate BSN</button>
      </section>
      <section>
        <div>
          <input
            type="text"
            name="bsn-number"
            id="bsn-number"
            aria-label="bsn-number"
          />
          <button id="bsn-number__copy-button" type="button">
            <i class="fa fa-copy" id="bsn-number__copy-icon">COPY</i>
          </button>
        </div>
        <p id="feedback"></p>
      </section>
      <section>
        <button id="bsn-validator-btn" type="button">validate BSN</button>
      </section>
    </form>
  </main>
</template>

<style scoped></style>
