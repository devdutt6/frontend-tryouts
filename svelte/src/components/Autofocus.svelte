<script>
	import { onMount } from "svelte";
  let inputRef;

  onMount(() => {
    inputRef.focus();
  })
</script>

<label for='name'>Name: </label>
<input type='text' id='name' bind:this={inputRef} />