<!-- App.svelte -->
<script>
  //@ts-nocheck
  import { onMount } from 'svelte';
  import Form from "../components/blueprints/forms/Form.svelte";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import PopUp from "../components/blueprints/others/PopUp.svelte";

  let value = '';
  let selectedProduct = null;
  let isOpen = false;

  const openPopup = (product) => {
    selectedProduct = product;
    isOpen = true;
  };

  const closePopup = () => {
    selectedProduct = null;
    isOpen = false;
  };

  const handleKeyDown = (e, product) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      openPopup(product);
    }
  };

  onMount(() => {
    // Puedes abrir el popup automáticamente después de montar el componente
    // openPopup('Producto predeterminado');
  });
</script>

{#if isOpen}
  <div class="popup-overlay">
    <!-- Contenido del pop-up aquí -->
    <div class="popup-content">
      <h2>{selectedProduct}</h2>
      <p>¡Hola, mundo!</p>
      <button on:click={closePopup}>Cerrar Popup</button>
    </div>
  </div>
{/if}

<div class="container">
  <Form legend={'Buscador de productos'} handleSubmit={onload}>
    <Text lblName={'Introduce el producto a comprar'} placeholder={'Nombre del producto'} bind:value={value}/>
  </Form>

  <ul>
    <li on:click={() => handleKeyDown(event, 'Producte XXXX Preu XXXX')} tabindex="0">
      <span class="product-name">Producte XXXX Preu XXXX</span>
      <span class="material-symbols-outlined">task_alt</span>
    </li>
  </ul>

  <PopUp bind:isOpen on:close={closePopup}>
    <div class="popup-content">
      <h2>{selectedProduct}</h2>
      <p>¡Hola, mundo!</p>
      <button on:click={closePopup}>Cerrar Popup</button>
    </div>
  </PopUp>
</div>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    max-width: 66rem;
    margin: auto;
    gap: 3rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.5rem;
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: .1rem solid var(--primary-color);
    border-radius: 5rem;
    text-align: center;
    font-family: var(--primary-font);
    padding: .5rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  li:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }

  .product-name {
    flex-grow: 1;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
