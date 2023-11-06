<script>
  //@ts-nocheck
  import './inpStyles.css'
  export let value = '';

  function handleChange(event) {
    if(!value.trim()){
      
    }
    value = event.target.value;
    console.log(value)
  }
</script>

<label>Introdueix el teu email
  <input type="email" placeholder='Email' bind:value={value} on:input={handleChange} class=input/>
</label>