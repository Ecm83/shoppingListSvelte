<!-- Input.svelte -->
<script>
  export let type 
  export let placeholder
  export let value

  const inputTypes = ['number', 'text', 'date' ]
  
  function foo() {
    console.log(value);
  }
</script>


<label>
  {#if inputTypes.includes(type)}
    <input {type} {placeholder} bind:value={value} on:input={foo}>
  {/if}
</label>

<style scoped>
  label {
    color: var(--primary-color);
    font-family: var(--secondary-font);
  }
</style>

<!-- <script>
  export let type 
  export let placeholder
  export let lblName
  export let value
  
  function foo() {

    console.log(value)
  }

</script>

<label>{lblName}
  <input type={type} placeholder={placeholder} bind:value={value} on:input={foo}>
</label>

<style scoped>
  label {
    color: var(--primary-color);
    font-family: var(--secondary-font);
  }

</style> -->