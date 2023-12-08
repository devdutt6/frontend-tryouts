<script>
  import { page } from '$app/stores';

  let { slug } = $page.params;
</script>

<div>
  <pre>
    {JSON.stringify(slug, null, 2)}
    <!-- one/two/three -->
  </pre>
</div>