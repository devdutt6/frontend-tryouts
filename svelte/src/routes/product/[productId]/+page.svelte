<script>
  import { page } from '$app/stores'

  let pId = $page.params.productId;
</script>

<h2>Details for Product for {pId}</h2>
<p>{JSON.stringify($page)}</p>