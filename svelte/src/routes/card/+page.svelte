<script>
  import Card from "../../components/Card.svelte";
	import NameList from "../../components/NameList.svelte";
  import Display from "../../components/Display.svelte";
  import Increment from "../../components/Increment.svelte";
	import Decrement from "../../components/Decrement.svelte";
	import Reset from "../../components/Reset.svelte";
	import Time from "../../components/Time.svelte";
</script>

<Card />
<Card>Hello from content</Card>
<Card><h2>Hello from content</h2></Card>
<Card>
  <div slot='card'>CARD COMPO</div>
  <div slot='header'><h3>HEADER COMPO</h3></div>
  <div slot='content'>Content</div>
  <div slot='footer'>FOOTER COMPO</div>
</Card>

<NameList>
  <h3 slot="hero" let:fname let:lname>{fname} {lname}</h3>
</NameList>
<NameList>
  <h3 slot="hero" let:fname let:lname>{lname} {fname}</h3>
</NameList>
<NameList>
  <h3 slot="hero" let:lname>{lname}</h3>
</NameList>

<!-- Stores -->
<Display />
<Increment />
<Decrement />
<Reset />

<!-- Readable store -->
<Time />