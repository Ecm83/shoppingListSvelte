<script>
  export let legend;
  export let handleSubmit;

</script>

<form on:submit|preventDefault={handleSubmit}>
  <fieldset>
    <legend>{legend}</legend>
      <slot />
  </fieldset>
</form>


<style scoped>

  form {
    background: var(--white);
    border: 1px solid #e0e0e0;
    border-radius: .8rem;
    box-shadow: 0 .4rem .6rem var(--primary-color);
    padding: 2rem;
    width: 60%;
    margin-left: 25rem;
    margin-top: 5rem;
    background-color: transparent;
  }

  fieldset {
    border: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  legend {
    font-size: 3rem;
    font-family: var(--secondary-font);
    color: var(--primary-color);
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 0.5rem;
    display: inline-block;
    margin-bottom: 3rem;
  }

</style>
