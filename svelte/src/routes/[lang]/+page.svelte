<script>
  import { page } from '$app/stores';

  let { lang='en' } = $page.params;

  const greetings = {
    en: "Hello",
    fr: "Bonjour",
    sp: "Hola"
  }

  const greeting = greetings[lang];

</script>

<h2>{greeting}</h2>