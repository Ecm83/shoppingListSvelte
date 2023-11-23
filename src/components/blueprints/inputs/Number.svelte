<script>
  export let amount = 0;
</script>

<label>Cantidad:
  <input type="number" bind:value={amount} class="input">
</label>

<style scoped>
  input {
    width: 6rem;
  }
</style>
