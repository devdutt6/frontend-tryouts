<script>
  import { onMount } from "svelte";
  let posts = [];

  onMount(async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts = await resp.json();
    console.log(posts);
  })
</script>

{#each posts as post (post.id)}
  <h3>{post.id}.{post.title}</h3>
  <p>{post.body}</p>
  <hr />
  {:else}
  <p>Loading...</p>
{/each}
