<script>
	import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
</script>

<h2>This is POPUP</h2>
<button on:click={() => dispatch('close', { name: "data from child" })}>Close Popup</button>