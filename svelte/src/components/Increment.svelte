<script>
  import { count, customCount } from "../store/stores";

  const clickHandle = () => {
    count.update(value => {
      value = value ? value : 0;
      return value += 1;
    })
  }
  const clickHandle2 = () => {
    customCount.increment();
  }
</script>

<button on:click={clickHandle}>Increment</button>
<button on:click={clickHandle2}>Custome Increment</button>
