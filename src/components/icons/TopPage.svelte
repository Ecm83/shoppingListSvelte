<script>
  //@ts-nocheck
  let scrollButtonClicked = false;

  function scrollToTop() {
    if (!scrollButtonClicked) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      scrollButtonClicked = true;
      setTimeout(() => {
        scrollButtonClicked = false;
      }, 1000); // Restablece el valor después de 1 segundo
    }
  }
</script>

<span class="material-symbols-outlined" on:click={scrollToTop}>
  stat_3
</span>

<style>
  .material-symbols-outlined {
    margin-bottom: 2em;
    border: .1rem solid var(--primary-color);
    font-size: 5rem;
    padding: 2rem;
    border-radius: 5rem;
    color: var(--primary-color);
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
    cursor: pointer;
  }

  .material-symbols-outlined:hover {
    color: var(--white);
    background-color: var(--primary-color);
  }
</style>

