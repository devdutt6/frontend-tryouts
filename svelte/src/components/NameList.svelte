<script>
  let names = [
    {
      fname: "bruce",
      lname: 'wayne'
    },
    {
      fname: "clark",
      lname: 'kent'
    },
    {
      fname: "princess",
      lname: 'diana'
    },
  ]
</script>

{#each names as name}
  <slot name="hero" fname={name.fname} lname={name.lname} />
{/each}