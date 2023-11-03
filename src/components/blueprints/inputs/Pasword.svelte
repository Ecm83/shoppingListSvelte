<script>
// @ts-nocheck

  import './inpStyles.css'
  export let value = '';

  function handleChange(event) {
    value = event.target.value;
    console.log(value)
  }
</script>

<label>Introdueix el teu password: 
  <input type="password" placeholder='Contrasenya' bind:value={value} on:input={handleChange} class=input/>
</label>