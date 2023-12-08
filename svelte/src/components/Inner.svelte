<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher()

</script>

<button on:click={() => dispatch('greet', "Hello")} on:mouseenter >Greet</button>