<script>
  import Autofocus from "../../components/Autofocus.svelte";
	import Counter, { getTotal } from "../../components/Counter.svelte";
  import PostList from "../../components/PostList.svelte";
	import TabA from "../../components/TabA.svelte";
	import TabB from "../../components/TabB.svelte";
	import TabC from "../../components/TabC.svelte";

  let activeTab = TabA;
</script>

<!-- Context module -->
<button on:click={() => {alert(getTotal())}}>Total</button>
<Counter />
<Counter />
<Counter />

<!-- svelte dynamic component -->
<button on:click={() => activeTab=TabA}>Tab A</button>
<button on:click={() => activeTab=TabB}>Tab B</button>
<button on:click={() => activeTab=TabC}>Tab C</button>

<svelte:component this={activeTab} />

<!-- onMount -->
<!-- <Autofocus />
<PostList /> -->