<script>
  import { count, customCount } from "../store/stores";

  const clickHandle = () => {
    count.set(0);
  }
  const clickHandle2 = () => {
    customCount.reset();
  }
</script>

<button on:click={clickHandle}>Reset</button>
<button on:click={clickHandle2}>Custom Reset</button>