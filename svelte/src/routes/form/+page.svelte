<script>
  const formValues = {
    name: '',
    age: 0,
    profileSummary: '',
    country: '',
    jobLoc: [],
    remote: false,
    skills: [],
    experience: ''
  }

  const submitForm = (e) => {
    // e.preventDefault();
    console.log(formValues);
  }
</script>

<main>
  <div><pre>
{JSON.stringify(formValues, null, 2)}
  </pre></div>
  <form on:submit|preventDefault={submitForm}>
    <!-- Text -->
    <div>
      <label for="name">Name: </label>
      <input id="name" bind:value={formValues.name} type="text" />
    </div>
    <!-- Number -->
    <div>
      <label for="age">Age: </label>
      <input id="age" bind:value={formValues.age} type="number" />
    </div>
    <!-- textarea -->
    <div>
      <label for="profile">Profile Summary: </label>
      <textarea id="profile" bind:value={formValues.profileSummary} />
    </div>
    <!-- Select -->
    <div>
      <label for="country">Country</label>
      <select id="country" bind:value={formValues.country}>
        <option value="">Select a country</option>
        <option value="india">india</option>
        <option value="singapore">singapore</option>
        <option value="hongkong">hong kong</option>
      </select>
    </div>
    <!-- multi select -->
    <div>
      <label for="jobloc">Job Location</label>
      <select id="jobloc" bind:value={formValues.jobLoc} multiple>
        <option value="">Select a country</option>
        <option value="india">india</option>
        <option value="singapore">singapore</option>
        <option value="hongkong">hong kong</option>
      </select>
    </div>
    <!-- single checkbox -->
    <div>
      <input id="remote" type="checkbox" bind:checked={formValues.remote} />
      <label for="remote">remote work?</label>
    </div>
    <!-- multi checkbox -->
    <div>
      <label>skills</label>
      <input id="html" type="checkbox" value="html" bind:group={formValues.skills} />
      <label for="html">HTML</label>
      <input id="css" type="checkbox" value="css" bind:group={formValues.skills} />
      <label for="css">CSS</label>
      <input id="javascript" type="checkbox" value="javascript" bind:group={formValues.skills} />
      <label for="javascript">Javascript</label>
    </div>
    <!-- radio group -->
    <div>
      <label>Select experience</label>
      <input type="radio" id="0-2" value="0-2" bind:group={formValues.experience} />
      <label for="0-2">0-2</label>
      <input type="radio" id="2-5" value="2-5" bind:group={formValues.experience} />
      <label for="2-5">2-5</label>
      <input type="radio" id="5-7" value="5-7" bind:group={formValues.experience} />
      <label for="5-7">5-7</label>
    </div>

    <div>
      <button>submit</button>
    </div>
  </form>
</main>

<style>
  label + input {
    display: inline-flex;
  }
</style>