<script>
  export let closeHandler
</script>

<button on:click={closeHandler}>X</button>

<style scoped>
  button {
    padding: 1rem;
    color: var(--white);
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 2rem;
    font-weight: bolder;
    background-color: var(--primary-color);
  }
</style>