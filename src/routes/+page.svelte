<script lang="ts">
  import Button from "$lib/Button.svelte";
  import { games } from "$lib/game.js";

  function loadPage(link) {
    window.location.href = link;
  }
</script>

<main>
  <h1 class="title">McNEIL WEB GAMES</h1>
  <div class="button-container">
    {#each games as game}
      <Button text={game.name} onClick={() => loadPage(game.link)} />
    {/each}
  </div>
</main>

<style>
  @import "../app.css";
</style>
