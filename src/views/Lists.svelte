<!-- App.svelte -->
<script>
  //@ts-nocheck
  import { onMount } from 'svelte';
  import Form from "../components/blueprints/forms/Form.svelte";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import PopUp from "../components/blueprints/others/PopUp.svelte";
  import Number from '../components/blueprints/inputs/Number.svelte';
  // import Scrapper from "../utils/scrapper/Scrapper.svelte"

  let value = '';
  let amount = 0
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

    <div class="img-description">  
      <div class="img">Product Picture</div>
      <div class="description">
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam quia itaque harum mollitia consequuntur iste libero eos pariatur est. Blanditiis fugit tempore ratione velit itaque magnam laudantium sequi accusamus?</p>
      </div>
    </div>

    <div class="product-options">
    <p class="text">Categoría: XXXXXXX</p>
      <Number bind:value={amount}/>
      <p>Here i render de sub total price</p>
    </div>
  </PopUp>
</div>

<!-- <Scrapper /> -->

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

  .img {
    border: .5rem solid var(--primary-color);
    height: 20rem;
    width: 20rem;
  }

  .img-description {
    display: flex;
    gap: 2rem;
    align-content: center;
    margin: 0 3rem;

  }

  .description {
    display: flex;
    flex-direction: column;
    width: 20rem;
  }

  .text {
    font-family: var(--secondary-font);
    line-height: 2rem;
    font-size: 1.5rem;
    margin: 0;
  }

  .product-options {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 3rem;
  }
</style>
