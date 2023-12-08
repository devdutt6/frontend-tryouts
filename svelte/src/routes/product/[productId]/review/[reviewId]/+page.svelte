<script>
  import { page } from '$app/stores';

  let pId = $page.params.productId;
  let rId = $page.params.reviewId;
</script>

<h2>The detailed review {rId} for product {pId}</h2>