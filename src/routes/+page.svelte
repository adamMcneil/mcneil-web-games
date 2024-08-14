<script lang="ts">
  import Button from "$lib/Button.svelte";
  import { games } from "$lib/game.js";

  function loadPage(link) {
    window.location.href = link;
  }
</script>

<section>
  <h1 class="title">McNEIL WEB GAMES</h1>

  <div class="button-container">
    {#each games as game}
      <Button
        text={game.name}
        color={game.color}
        onClick={() => loadPage(game.link)}
      />
    {/each}
  </div>
</section>

<style>
  @import "../app.css";
</style>
