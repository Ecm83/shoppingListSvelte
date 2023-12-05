<script>
  //@ts-nocheck
  import { createEventDispatcher } from "svelte";

  export let value = 0;
  const dispatch = createEventDispatcher();
  let warning = "";

  const handleChange = (event) => {
    const numericValue = parseFloat(event.target.value);

    if (!isNaN(numericValue) && numericValue > 0) {
      value = numericValue;
      dispatch("change", { value: numericValue });
      warning = ""; // Limpiar la advertencia si es un valor válido
    } else {
      value = 0;
      dispatch("change", { value: 0 });
      warning = "La cuantitat a comprar ha de ser superior a 0"; // Mostrar la advertencia
    }
  };
</script>

<label>
  Cantidad:
  <input type="number" bind:value on:input={handleChange} min="1" />
  <p style="color: red;">{warning}</p>
</label>

<style scoped>
  input {
    width: 6rem;
  }
</style>
