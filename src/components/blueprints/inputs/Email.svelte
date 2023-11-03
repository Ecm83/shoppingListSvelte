<script>
  import './inpStyles.css'
  //@ts-nocheck
  export let value = '';

  function handleChange(event) {
    value = event.target.value;
    console.log(value)
  }
</script>

<label>Introdueix el teu email: 
  <input type="email" placeholder='Email' bind:value={value} on:input={handleChange} class=input/>
</label>