<script>
  let showPopup = false;
  import Popup from "../../components/Popup.svelte";
  import Outer from "../../components/Outer.svelte";
  const handleClose = (event) => {
    showPopup = false;
    console.log(event.detail);
  }
  const openPopup = () => {
    showPopup = true;
  }
</script>

<main>
  <button on:click={openPopup}>Open Popup</button>
  {#if showPopup}
    <Popup on:close={handleClose} />
  {/if}
  <Outer on:greet={e => alert(e.detail)} on:mouseenter={() => alert('on  component')} />
</main>