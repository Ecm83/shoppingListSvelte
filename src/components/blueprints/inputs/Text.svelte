<!-- <script>
  // @ts-nocheck
  import './inpStyles.css'

  export let lblName
  export let placeholder
  export let value



  function handleChange(event) {
    value = event.target.value;
    console.log(value);
  }
</script>

<label>{lblName} 
  <input type="text" {placeholder} bind:value={value} on:input={handleChange} class={'input'}/>
</label>
-->
<script>
  // @ts-nocheck
  import './inpStyles.css'
  import { createEventDispatcher } from 'svelte';

  export let lblName
  export let placeholder
  export let value

  const dispatch = createEventDispatcher();

  function handleChange(event) {
    value = event.target.value;
    dispatch('input', value); // Emitir evento de entrada
  }
</script>

<label>{lblName} 
  <input type="text" {placeholder} bind:value={value} on:input={handleChange} class={'input'}/>
</label>
