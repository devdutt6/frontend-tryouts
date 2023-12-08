<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<script>
  const name = "devdutt";
  const html = "<b>BOLD TEXT</b>";
  const id = "para";
  const className = "yo";
  const disabled = true;
  const danger = "danger";
  const isPromoted = true;
  const promoted = true;
  const num = -0;
  const names = ["dev", "badrik", "devanshu"];
  const fullNames = [{name: "dev"}, {name: "badrik"}, {name: "devanshu"}];
  let count = 0;
  const handleClick = (e, jump) => {
    console.log(e);
    count += jump;
  }
  const handleNormalClick = (e) => {
    count += 1;
  }
</script>

<main>
  <!-- Binding script -->
  <!-- binding values -->
  <h1>Hello {name}!</h1>
  <!-- binding html -->
  <h3>This is HTML {@html html} </h3>
  <!-- binding attributes -->
  <p {id} class={className}></p>
  <input {disabled} value="devdutt" />
  <!-- binding class -->
  <p class="underline">UNDERLINE</p>
  <p class={danger}>DANGER</p>
  <!-- binding class conditionally -->
  <h2 class={isPromoted ? "promoted" : ""}>Movie Title</h2>
  <h2 class:promoted={isPromoted}>Movie Title</h2>
  <h2 class:promoted>Movie Title</h2>

  <!-- if else html #_depicts block start, /_depicts block end, :_depicts continue block -->
  {#if num === 0}
  <h2>Number is Zero</h2>
  {:else if num < 0}
  <h2>Number is negative</h2>
  {:else if num>0}
  <h2>Number is positive</h2>
  {:else}
  <h2>NaN</h2>
  {/if}

  <!-- each block for loops -->
  <ul>
    {#each names as name, index (name)}
      <li>{name}-{index}</li>
    {/each}
  </ul>
  <ul>
    {#each fullNames as name, index (name.name)}
      <li>{name.name}-{index}</li>
    {/each}
  </ul>

   <!--Event binding -->
  <button on:click={handleNormalClick}>Count - {count}</button>
  <button on:click={(e) => handleClick(e, 5)}>Count - {count}</button>

  <a href="/profile">Profile</a>
  <a href="/product">Products</a>

</main>

<style>
  :global(h2){
    font-size: large;
    padding: 1rem;
    margin: 4px;
  }

  .underline{
    text-decoration: underline;
  }
  .danger{
    color: red;
  }
  .success{
    color: green;
  }
  .promoted{
    font-style: italic;
  }
main{
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
}

h1{
  font-size: 4em;
}
</style>