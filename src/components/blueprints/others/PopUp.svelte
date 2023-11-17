<!-- PopUp.svelte -->
<script>
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
    <div class="popup-content">
      <slot></slot>
      <button on:click={close}>Cerrar</button>
    </div>
  </div>
{/if}

<style>
  /* Estilos para el pop-up y el fondo overlay */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100rem;
    height: 100rem;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
  }
</style>
