<script>
  import Inner from "./Inner.svelte";
</script>

<!-- To forward the event to parent just declare the event and event will be forwarded to parent -->
<Inner on:greet on:mouseenter />