<script>
// @ts-nocheck

  import Euro from "../components/backImg/Euro.svelte";
  import List from "../components/backImg/List.svelte";
  import Shop from "../components/backImg/Shop.svelte";
  import ShoppingCart from "../components/backImg/ShoppingCart.svelte";

</script>


<div class="flex">

  <div class="container" >
    <Euro />
    <div class="background-container">
      <h2><span class="claming">Estalvia</span> temps i diners</h2>
      <p>Escull la botiga seleccionada mes propera i deixa que el navegador et guia per la ruta mes rápida i económica</p>
      <p>Compara preus al moment per saber on es més económic</p>
    </div>
  </div>
  
  <div class="container" >
    <List />
    <div class="background-container">
      <h2><span class="claming">Previsió</span> avans d'anar a comprar</h2>
      <p>Sápiga amb antelació el preu de la seva compra</p>
      <p>Disposició dels productes a temps real</p>
    </div>
  </div>
  
  <div class="container" >
    <Shop />
    <div class="background-container">
      <h2><span class="claming">Crea</span> llistes de la compra</h2>
      <p>Llistes de la compra automatitzada amb cercador de productes a les botigues mes conegudes</p>
      <p>Introdueix els teus comerços preferits i crea o edita els productes</p>
    </div>
  </div>


</div>


<style>
  h2 {
    font-size: 2rem;
    font-family: var(--secondary-font);
  }

  p {
    font-family: var(--primary-font);
    font-size: 1.5rem;
  }

  .claming {
    font-size: 2.5rem;
    background: linear-gradient(90deg, #ff7f00, #ffcc00, #ff7f00); /* Tonos naranjas */
    font-family: var(--primary-font);

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;   
    
  }

  .flex {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;    
    justify-content: center;
  }

  .container {
    display: flex;
    justify-content: center;
  
  }

  .background-container {
    display: flex;
    flex-direction: column;
    justify-content: center; 
  
  }
</style>


