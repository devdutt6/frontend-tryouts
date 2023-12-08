<script>
	import { onDestroy } from "svelte";
  import { count, customCount } from "../store/stores";

  // 1
  // let counter;
  // let unsubscribe = count.subscribe(value => counter=value);
  // onDestroy(unsubscribe);
  // 2

</script>

<!-- 1 -->
<!-- <h2>Current count is {counter}</h2> -->
<!-- 2 svelte it slef handles the subscription and destruction -->
<h2>Current count is {$count}</h2>
<h2>Current Custom Count is {$customCount}</h2>