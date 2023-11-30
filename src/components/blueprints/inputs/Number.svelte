<script>
  //@ts-nocheck
  import { createEventDispatcher } from "svelte";

  export let value = 0;
  const dispatch = createEventDispatcher();

  const handleChange = (event) => {
    const numericValue = parseFloat(event.target.value);
    if (!isNaN(numericValue)) {
      dispatch("change", { value: numericValue });
    }
  };
</script>

<label>
  Cantidad:
  <input type="number" bind:value on:input={handleChange} />
</label>

<style scoped>
  input {
    width: 6rem;
  }
</style>
