<script>
  const products = [
    {
      id: 1,
      name: 'jeans'
    },
    {
      id: 2,
      name: 'football'
    },
    {
      id: 3,
      name: 'airpods'
    },
  ]
</script>


<h2>Product list</h2>
{#each products as product (product.id)}
  <h3><a href={`/product/${product.id}`}>{product.name}</a></h3>
{/each}

<a href="/">Home</a>