<!-- App.svelte -->
<script>
  //@ts-nocheck
  import { onMount } from 'svelte';
  import Form from "../components/blueprints/forms/Form.svelte";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import PopUp from "../components/blueprints/others/PopUp.svelte";
  import Number from '../components/blueprints/inputs/Number.svelte';
  import { shopName } from '../stores/shopStore';
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

  // onMount(() => {
  //   // Puedes abrir el popup automáticamente después de montar el componente
  //   openPopup({value});
  // });

  const addProductToShoppingList = () => {
    console.log('Linked')
  }

  // Construccion de productos para prueba de buen funcionamiento
  const products = [
    {
      id: 1,
      name: "Agua de la Fuente del olivo",
      price: 0.99,
      category: "Bebidas",
    },
    {
      id: 2,
      name: "Agua sabor a lentejas",
      price: 1.25,
      category: "Bebidas",
    },
    {
      id: 3,
      name: "Agua con gas",
      price: 0.50,
      category: "Bebidas",
    },
    {
      id: 4,
      name: "Coca-cola",
      price: 0.30,
      category: "Bebidas",
    },
    {
      id: 5,
      name: "Fanta limón",
      price: 0.30,
      category: "Bebidas",
    },
    {
      id: 6,
      name: "Fanta naranja",
      price: 0.30,
      category: "Bebidas",
    },
    {
      id: 7,
      name: "Papel de culo",
      price: 2.50,
      category: "Hijene",
    },
    {
      id: 8,
      name: "Pasta de dientes",
      price: 1.79,
      category: "Hijene",
    },
    {
      id: 9,
      name: "Toallitas húmedas",
      price: 3.05,
      category: "Hijene",
    },
    {
      id: 10,
      name: "Pasta de dientes",
      price: 1.79,
      category: "Hijene",
    },
    {
      id: 11,
      name: "Listerine sabor Ajoblanco",
      price: 5.15,
      category: "Hijene",
    },
    {
      id: 12,
      name: "Kleenex 1m x 1m",
      price: 1.79,
      category: "Hijene",
    },
    {
      id: 13,
      name: "Lejia perfumada",
      price: 0.59,
      category: "Limpieza",
    },
    {
      id: 14,
      name: "Amoníaco",
      price: 1.20,
      category: "Limpieza",
    },
    {
      id: 15,
      name: "Fairi de Villavajo",
      price: 2.09,
      category: "Limpieza",
    },
    {
      id: 16,
      name: "Fregasuelos",
      price: 3.02,
      category: "Limpieza",
    },
    {
      id: 17,
      name: "Bobina papel secante",
      price: 1.15,
      category: "Limpieza",
    },
    {
      id: 18,
      name: "Limpiacristales",
      price: 1.85,
      category: "Limpieza",
    },
    {
      id: 19,
      name: "Paño limpiamuebles",
      price: 1.79,
      category: "Limpieza",
    },
    {
      id: 20,
      name: "Leche de cabra",
      price: 2.08,
      category: "Lácteos",
    },
    {
      id: 21,
      name: "Leche de vaca",
      price: 1.55,
      category: "Lácteos",
    },
    {
      id: 22,
      name: "Leche de burra",
      price: 4.85,
      category: "Lácteos",
    },
    {
      id: 23,
      name: "Leche de búfala",
      price: 1.99,
      category: "Lácteos",
    },
    {
      id: 24,
      name: "Leche de oca",
      price: 2.08,
      category: "Lácteos",
    },
    {
      id: 25,
      name: "Leche de pulpo",
      price: 2.08,
      category: "Lácteos",
    },
    {
      id: 26,
      name: "Leche mezcla aves",
      price: 3.55,
      category: "Lácteos",
    },
    {
      id: 27,
      name: "Dorada",
      price: 6.75,
      category: "Alimentción",
    },
    {
      id: 28,
      name: "Lubina",
      price: 6.99,
      category: "Alimentción",
    },
    {
      id: 29,
      name: "Pulpo hermitaño",
      price: 20.99,
      category: "Alimentción",
    },
    {
      id: 30,
      name: "Wagyú anoréxico",
      price: 117,
      category: "Alimentción",
    },
    {
      id: 31,
      name: "Capón entero",
      price: 50,
      category: "Alimentción",
    },
    {
      id: 22,
      name: "Chuletas y medianas de cordero",
      price: 6.75,
      category: "Alimentción",
    },
  ]
</script>



<div class="container">
  <Form legend={`Llista de la compra per ${$shopName}`}  handleSubmit={onload}>
    <Text lblName={'Introduce el producto a comprar'} placeholder={'Nombre del producto'} bind:value={value}/>
  </Form>

  <ul>
    <button on:click={() => handleKeyDown('Producte XXXX Preu XXXX')} tabindex="0">
      <span class="product-name">`Aqui se renderiza el valor devuelto del scrapping {value}`</span>
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
      <Number bind:amount={amount}/>
      <p>Here i render de sub total price</p>
    </div>
    <button on:click={addProductToShoppingList}>Afegir producte</button>
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

  button {
    width: 15rem;
    padding: 1rem;
    border-radius: 2rem;
    margin: 2.5rem 20rem 2rem 2.5rem;
    border: .1rem solid var(--primary-color);
    background-color: transparent;
    color: var(--primary-color);
  }
</style>
