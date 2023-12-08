<script context="module">
  let total = 0;

  export function getTotal(){
    return total;
  }
</script>

<script>
  let count = 0;
</script>

<h3>
  {count}
</h3>
<button on:click={() => {total+=1;count += 1;}}>Incre</button>
<button on:click={() => {total-=1;count -= 1;}}>decre</button>