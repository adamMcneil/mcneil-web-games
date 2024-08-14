<script lang="ts">
  export let text;
  export let color = "black";
  export let onClick = () => console.log("hello world");
</script>

<button style="background: {color};" class="button shadow" on:click={onClick}>
  {text}
</button>

<style>
  @import "../app.css";
</style>
