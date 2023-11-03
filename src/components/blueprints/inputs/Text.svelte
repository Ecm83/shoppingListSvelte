<script>
  import './inpStyles.css'
// @ts-nocheck

  export let lblName
  export let placeholder
  export let value = '';

  function handleChange(event) {
    value = event.target.value;
    console.log(value)
  }
</script>

<label>{lblName} 
  <input type="text" {placeholder} bind:value={value} on:input={handleChange} class=input/>
</label>