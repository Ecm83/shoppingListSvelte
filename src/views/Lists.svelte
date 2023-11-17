<!-- App.svelte -->
<script>
  //@ts-nocheck
  import { onMount } from 'svelte';
  import Form from "../components/blueprints/forms/Form.svelte";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import PopUp from "../components/blueprints/others/PopUp.svelte";

  let value = '';
  let selectedProduct = '';
  let isOpen = false;

  const openPopup = (product) => {
    selectedProduct = product;
    isOpen = true;
  };

  const closePopup = () => {
    selectedProduct = null;
    isOpen = false;
  };

  const handleKeyDown = (product) => {
      openPopup(product);
  };

  onMount(() => {
    // Puedes abrir el popup automáticamente después de montar el componente
    // openPopup('Producto predeterminado');
  });
</script>



<div class="container">
  <Form legend={'Buscador de productos'} handleSubmit={onload}>
    <Text lblName={'Introduce el producto a comprar'} placeholder={'Nombre del producto'} bind:value={value}/>
  </Form>

  <ul>
    <button on:click={() => handleKeyDown('Producte XXXX Preu XXXX')} tabindex="0">
      <span class="product-name">Producte XXXX Preu XXXX</span>
      <span class="material-symbols-outlined">task_alt</span>
    </button>
  </ul>

  <PopUp bind:isOpen {closePopup} {selectedProduct}>    
    <p>¡Hola, mundo!</p>
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

  .product-name {
    flex-grow: 1;
  }
</style>
