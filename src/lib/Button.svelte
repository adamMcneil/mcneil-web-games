<script lang="ts">
    export let text;
    export let onClick = () => (console.log("hello world"));
</script>

<button class="button shadow" on:click={onClick}> 
    {text}
</button>

<style>
	@import '../app.css';
</style>
