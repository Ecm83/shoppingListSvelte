<script>
  export let amount
</script>
<label>Cuantitat:
  <input type="number" bind:value={amount} class="input">
</label>

<style scoped>
  input {
    width: 6rem;
  }
</style>