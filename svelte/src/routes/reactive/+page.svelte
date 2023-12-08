<script>
  let firstName = "devdutt", lastName = 'chudasama';
  // reactive declartion
  $: fullName = `${firstName} ${lastName}`;
  // reactive statement
  $: {
    let greet = `Hello ${fullName}`;
    console.log(greet);
  }
  const changeName = () => {
    firstName="badrik";
    lastName="patel";
  }
  const changeTotal = () => {
    items = [...items, {id: 4, price: 50, item: 'keyboard'}];
  }
  let items = [
    {
      id: 1,
      price: 100,
      item: 'mobile'
    },
    {
      id: 2,
      price: 200,
      item: 'TV'
    },
    {
      id: 3,
      price: 300,
      item: 'laptop'
    },
  ]
  $:total = items.reduce((t, curr) => t+curr.price, 0);

  // rective statement
  let volume = 0;
  $: if(volume<0){
    alert('cant go lower');
    volume = 0;
  }
  else if(volume>20) {
    alert('cant go higher');
    volume = 20;
  }
</script>

<main>
  <h1>{firstName} {lastName}</h1>
  <button on:click={changeName}>Change Name</button>
  <h1>{fullName}</h1>
  <button on:click={changeTotal}>Change total</button>
  <h2>{total}</h2>
  <h2>Current Volume is {volume}</h2>
  <button on:click={() => volume += 2}>+</button>
  <button on:click={() => volume -= 2}>-</button>
</main>
