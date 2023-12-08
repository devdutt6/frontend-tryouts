<script>
  import Greet from "../../components/Greet.svelte";
  import CompoA from "../../components/CompoA.svelte";
  import { setContext } from "svelte";
  let name = "dev", surname="chudasama";
  let obj = {
    name: "Jessie",
    surname: "pinkman"
  }
  let userName = "UNIQUEE";
  setContext('user-context', userName);
</script>

<main>
  <Greet name={name} surname={surname} />
  <Greet {name} {surname} />
  <Greet name="bruce" surname="wayne" />
  <Greet {...obj} />
  <Greet />
  <CompoA />
</main>