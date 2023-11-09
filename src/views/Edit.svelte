<script>
  import { user } from "../stores/logedUser.js";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import Form from "../components/blueprints/forms/Form.svelte";
  import ShoppingCart from "../components/backImg/ShoppingCart.svelte"
  import TopPage from "../components/icons/TopPage.svelte";

  onMount(() => {
    if (!$user) {
      navigate('/login');
    }
  });

  let shopName = '';

  const storeSubmit = () => {
    // Lógica de envío del formulario
  };
</script>

<div class="background-container">
  {#if $user}
    <Form legend={'Editar botiga'} handleSubmit={storeSubmit}>
      <Text lblName={'Introdueix el nom de la botiga'} placeholder={'Nom de la botiga'} bind:value={shopName}/>
    </Form>
  {/if}
  <ul>
    <p>Here we render the selected nearest shop</p>
    <li>Shop XXXX at XXXX km</li>
    <li>Shop XXXX at XXXX km</li>
    <li>Shop XXXX at XXXX km</li>
    <li>Shop XXXX at XXXX km</li>
  </ul>

  <div class="map">
    <p>Here goes the map with the nearest shops</p>
  </div>
  <TopPage />

</div>
<ShoppingCart />


<style scoped>
  .background-container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra verticalmente */
    align-items: center; /* Centra horizontalmente */
  }

  p {
    margin-top: 5rem;
    font-family: var(--primary-font);
    font-size: 3rem;
    color: var(--primary-color);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.5rem;
    gap: 0.5rem;
    width: 60%; /* Establece el ancho al 60% del contenedor */
    max-width: 66rem; /* Establece el ancho máximo para que coincida con el formulario anterior */
  }
  
  li {
    border: .1rem solid var(--primary-color);
    border-radius: 5rem;
    text-align: center;
    font-family: var(--primary-font);
    padding: .5rem;
  }

  li:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }

  .map {
    border: 1rem solid var(--primary-color);
    margin-top: 5rem;
    width: 66rem;
    height: 66rem;
    margin-bottom: 5rem;
  }

</style>
