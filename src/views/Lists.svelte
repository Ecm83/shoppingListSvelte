<script>
  //@ts-nocheck
  /**
   * TODO: Añadir funcionalidad al boton de gurardar llista
   * TODO: Añadir funcionalidad al botón de eliminar llista
   * TODO: Añadir comentarios al código
   * TODO: Refactorizar la pagina
   * ! Corregir el error del refresh
   */

  import { onMount } from "svelte";
  import TopPage from "./../components/icons/TopPage.svelte";
  import Form from "../components/blueprints/forms/Form.svelte";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import PopUp from "../components/blueprints/others/PopUp.svelte";
  import Number from "../components/blueprints/inputs/Number.svelte";
  import { shopName } from "../stores/shopStore";
  import SubmitButton from "../components/blueprints/buttons/SubmitButton.svelte";
  import { fetchData } from "../lib/fetchData";

  let value = "";
  let amount = 0;
  let selectedProduct = "";
  let isOpen = false;
  let products = [];
  $: shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
  let isImageExpanded = false;
  let subtotal = 0;
  let total = 0;

  const getCheckboxClass = (isChecked) => (isChecked ? "checked" : "");

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

  const parsePrice = () => {
    if (selectedProduct && selectedProduct.currentSku.listPrice) {
      const numericString = selectedProduct.currentSku.listPrice.replace(
        /\$|,/g,
        ""
      );
      const parsedAmount = parseFloat(amount); // Convertir amount a número
      const parsedPrice = parseFloat(numericString);
      return parsedPrice * parsedAmount;
    }
    return 0;
  };

  const updateSubtotal = () => {
    subtotal = parsePrice();
  };

  const handleAmountChange = (event) => {
    amount = event.detail.value;
    updateSubtotal();
  };

  const calculateTotal = () => {
    return shoppingList
      .reduce((acc, product) => acc + parseFloat(product.subtotal), 0)
      .toFixed(2);
  };

  onMount(() => {
    updateSubtotal();
    total = calculateTotal(); // Actualizar total al inicio
  });

  const addProductToShoppingList = () => {
    const product = {
      id: selectedProduct.currentSku.skuId,
      productName: selectedProduct.productName,
      brandName: selectedProduct.brandName,
      img: selectedProduct.image135,
      imgAltText: selectedProduct.currentSku.imageAltText,
      amount,
      subtotal,
      isChecked: false,
    };

    shoppingList = [...shoppingList, product];
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    amount = 0;
    closePopup();
    total = calculateTotal(); // Actualizar total después de añadir producto
  };

  async function handleFetch(value) {
    products = await fetchData(value);
  }

  const toggleImageSize = () => {
    isImageExpanded = !isImageExpanded;
  };

  const removeProduct = (product) => {
    shoppingList = shoppingList.filter((item) => item !== product);
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    total = calculateTotal(); // Actualizar total después de eliminar producto
  };

  const toggleChecked = (product) => {
    product.isChecked = !product.isChecked;
  };
</script>

<div class="container">
  <Form
    legend={`Llista de la compra per ${$shopName || "Sephora"}`}
    handleSubmit={onload}
  >
    <Text
      lblName={"Introdueix el producte a comprar"}
      placeholder={"Nom del producte"}
      bind:value
    />
    <SubmitButton on:click={() => handleFetch(value)} btnName={"Cercar"} />
  </Form>

  <div class="products-list">
    <ul>
      {#each products as product}
        <button
          class="selection-card"
          on:click={() => handleKeyDown(product)}
          tabindex="0"
        >
          <span class="product-title product-name">{product.productName}</span>
          <div style="width: 100%;"><hr /></div>
          <span class="product-name">{product.brandName}</span>
          <img
            class="miniature"
            alt={"Product miniature"}
            src={product.image135}
          />
        </button>
      {/each}
    </ul>

    <div class="list-answer">
      <div class="title-list list-shopname">
        <h2>{$shopName || "Sephora"}</h2>
        <ul class="list-flex">
          {#each shoppingList as listItem}
            <li class="product-flex">
              <p class="item-in-list">
                <input
                  type="checkbox"
                  class={getCheckboxClass(listItem.isChecked)}
                />
                <span class:selected={listItem.isChecked}>
                  <div class="product-info">
                    <div class="product-text">
                      <span>{listItem.productName} | {listItem.brandName}</span>
                      <hr />
                      <div class="amount-price">
                        <span class="text-in-list">Cuantitat:</span>
                        {listItem.amount}
                        <span class="text-in-list"> Preu: </span>
                        ${listItem.subtotal}
                      </div>
                    </div>
                    <div class="miniature-button"></div>
                  </div>
                </span>
                <img
                  class="miniature"
                  src={listItem.img}
                  alt={listItem.imgAltText}
                />
                <button
                  class="item-delete-button"
                  on:click={() => removeProduct(listItem)}>x</button
                >
              </p>
            </li>
          {/each}
        </ul>
        <p class="p-total">Total: <span class="total-list">${total}</span></p>
        <div class="list-buttons">
          <button>Gurdar llista</button>
          <button class="list-delete-button">Eliminar llista</button>
        </div>
      </div>
    </div>
  </div>
</div>

<PopUp bind:isOpen {closePopup}>
  <h2>{selectedProduct.productName}</h2>
  <div class="img-description">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="img" on:click={toggleImageSize}>
      <img
        src={selectedProduct.image135}
        alt={selectedProduct.imageAltText}
        style={isImageExpanded
          ? "width: 50rem; height: auto;"
          : "width: 100%; height: 100%;"}
      />
    </div>
    <div class="description">
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum, in
        doloribus aperiam, consequatur laborum molestiae excepturi culpa
        laboriosam dolores quaerat beatae iure repellendus totam nisi cupiditate
        minus. Est, sit.
      </p>
    </div>
  </div>

  <div class="product-options">
    <p class="text">Categoría: XXXXXXX</p>
    <Number bind:value={amount} on:change={handleAmountChange} />
    <p>Preu: {selectedProduct.currentSku.listPrice}</p>
    <p>Sub total: ${subtotal}</p>
  </div>
  <button on:click={addProductToShoppingList}>Afegir producte</button>
</PopUp>

<div class="top-page">
  <TopPage />
</div>

<style scoped>
  .products-list {
    display: flex;
    gap: 5rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 66rem;
    margin: auto;
    gap: 3rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0.5rem;
  }

  .selection-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    padding: 0.5rem;
    margin: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .product-name {
    flex-grow: 1;
  }

  .img {
    border: none;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #ff7f00, #ffcc00, #ff7f00);
    background-size: 200% 100%;
    animation: neon 5s linear infinite;
  }

  @keyframes neon {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
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
    border: 0.1rem solid var(--primary-color);
    background-color: transparent;
    color: var(--primary-color);
  }

  h2 {
    font-family: var(--primary-font);
    text-align: center;
    margin-bottom: 3rem;
    padding: 1rem;
    font-size: 2.5rem;
    color: var(--primary-color);
  }

  img {
    height: 19.5rem;
    width: 19.5rem;
    padding: 1rem;
  }

  p {
    font-size: 2rem;
    margin: 0.5rem;
    font-family: var(--primary-font);
  }

  .product-name {
    flex-grow: 1;
  }

  .miniature {
    width: 5rem;
    height: 5rem;
    margin: 0;
    padding: 0;
  }

  .product-title {
    margin-top: 2rem;
  }

  .list-answer {
    display: flex;
    flex-direction: row;
  }

  .list-shopname {
    display: flex;
    flex-direction: row;
    border: 0.1rem solid var(--primary-color);
  }

  .list-flex {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .title-list {
    display: flex;
    flex-direction: column;
    width: 65rem;
  }

  .item-in-list {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    margin: 0;
    gap: 2rem;
    justify-content: space-around;
  }

  .item-in-list input:checked + span {
    text-decoration: line-through;
  }

  .list-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .list-buttons button {
    margin: 0;
    width: 90%;
  }

  input[type="checkbox"] {
    width: 3rem;
    height: 3rem;
    border: 0.1rem solid var(--primary-color);
  }

  /* Estilo adicional cuando está marcado */
  input[type="checkbox"] {
    background-color: var(--primary-color); /* Cambia aquí al color deseado */
  }

  .item-delete-button {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    margin: 0;
  }

  .text-in-list {
    color: var(--primary-color);
    font-weight: 500;
    margin: 0 1rem;
  }

  .amount-price {
    display: flex;
    justify-content: end;
  }

  .miniature-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  .product-text {
    width: 40rem;
  }

  .p-total {
    text-align: end;
    margin: 5rem 5rem 1rem 3rem;
    display: inline-block;
    border-top: 0.1rem solid var(--primary-color);
    border-bottom: 0.1rem solid var(--primary-color);
    padding: 2rem;
  }

  .total-list {
    color: var(--primary-color);
    font-weight: 700;
  }

  .top-page {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
</style>
