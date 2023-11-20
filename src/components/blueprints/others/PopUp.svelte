<!-- PopUp.svelte -->
<script>
  import Close from "../buttons/Close.svelte";

  export let selectedProduct;
  export let closePopup;

  export let isOpen = false;
  export let onClose = () => {};

  export function open() {
    isOpen = true;
  }

  export function close() {
    isOpen = false;
    onClose();
  }
</script>

{#if isOpen}
  <div class="popup-overlay">
    <!-- Contenido del pop-up aquí -->
    <div class="popup-content">
      <h2>{selectedProduct}</h2>
      <slot></slot>
      <Close closeHandler={closePopup}/>
    </div>
  </div>
{/if}

<style>
  /* Estilos para el pop-up y el fondo overlay */
  h2{
    font-family: var(--primary-font);
    text-align: center;
    margin-bottom: 3rem;
    padding: 1rem;
    font-size: 2.5rem;
    color: var(--primary-color);
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 8px 16px var(--primary-color); /* Sombra naranja más pronunciada */
  }
</style>
