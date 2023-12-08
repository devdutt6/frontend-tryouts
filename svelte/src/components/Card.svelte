<script>
  // export let content;
</script>

<div class="card">
  <slot name='card'>Default</slot>
  <div class="header"><slot name='header'></slot></div>
  <div class="content"><slot name='content'>Fall back content</slot></div>
  {#if $$slots.footer}
    <hr />
    <div class="footer"><slot name='footer'></slot></div>
  {/if}
</div>

<style>
  .card{
    text-align: center;
    padding: 1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 16px;
  }

  .card:hover{
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
</style>