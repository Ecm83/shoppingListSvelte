<!-- PopUp.svelte -->
<script>
  import Close from "../buttons/Close.svelte";

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
      <slot />
      <Close closeHandler={closePopup} />
    </div>
  </div>
{/if}

<style>
  /* Estilos para el pop-up y el fondo overlay */

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
    max-width: 50rem;
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 8px 16px var(--primary-color); /* Sombra naranja más pronunciada */
  }
</style>
