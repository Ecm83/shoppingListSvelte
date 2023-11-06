<script>
  export let btnName;
  export let handleSubmit;
</script>

<button on:click={handleSubmit}>{btnName}</button>

<style scoped>
  button {
    padding: 1rem;
    background-color: var(--white);
    border: none;
    background-color: var(--primary-color);
    border-radius: 2rem;
    color: var(--white);
    font-family: var(--secondary-font);
    font-size: large;
    width: 60%;
    align-self: center;
    margin-top: 2rem;
    cursor: pointer;
  }

  button:hover {
    scale: 1.1;
    background-color: var(--secondary-color);
  }
</style>