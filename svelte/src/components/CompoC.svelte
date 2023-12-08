<script>
  import { getContext } from "svelte";
  let cntx = getContext('user-context');
</script>

<h2>Compo C</h2>
<p>UserName - {cntx}</p>
