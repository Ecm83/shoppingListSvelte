<script>
  //@ts-nocheck
  import { onMount } from "svelte";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import Form from "../components/blueprints/forms/Form.svelte";
  import ShoppingCart from "../components/backImg/ShoppingCart.svelte";
  import TopPage from "../components/icons/TopPage.svelte";
  import { navigate } from "svelte-routing";
  import "mapbox-gl/dist/mapbox-gl.css";
  import { Map, Marker } from "mapbox-gl";
  import { shopName } from "../stores/shopStore";

  let map;
  let mapContainer;
  let searchResults = [];
  let selectedShopName = "";

  onMount(() => {
    const initialState = {
      lng: 2.3139321838640297,
      lat: 41.649540287334204,
      zoom: 12,
    };

    map = new Map({
      container: mapContainer,
      accessToken: import.meta.env.VITE_MAPBOX_KEY,
      style: `mapbox://styles/mapbox/outdoors-v11`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    map.on("load", () => {
      map.addSource("markers", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        (error, image) => {
          if (error) throw error;

          map.addImage("custom-marker", image);

          map.addLayer({
            id: "markers",
            type: "symbol",
            source: "markers",
            layout: {
              "icon-image": "custom-marker",
              "icon-size": 0.5,
            },
          });
        }
      );
    });
  });

  const handleSearchInput = async (inputValue) => {
    if (!inputValue) {
      searchResults = [];
      map.getSource("markers").setData({
        type: "FeatureCollection",
        features: [],
      });
      return;
    }

    try {
      const longitude = 2.3139321838640297;
      const latitude = 41.649540287334204;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${
          import.meta.env.VITE_MAPBOX_KEY
        }&proximity=${longitude},${latitude}&bbox=${longitude - 0.1},${
          latitude - 0.1
        },${longitude + 0.1},${latitude + 0.1}`
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud de búsqueda");
      }

      const data = await response.json();
      searchResults = data.features;

      if (map.getSource("markers")) {
        map.getSource("markers").setData({
          type: "FeatureCollection",
          features: searchResults.map((result) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: result.center,
            },
            properties: {
              title: result.place_name,
            },
          })),
        });
      }
    } catch (error) {
      console.error("Error de búsqueda:", error);
    }
  };

  const selectedShop = (result) => {
    shopName.set(result.place_name);
    console.log(result.place_name);
    navigate("/lists", { replace: true });
  };
</script>

<div class="background-container">
  <Form legend={"Editar botiga"} handleSubmit={() => {}}>
    <Text
      lblName={"Introdueix el nom de la botiga"}
      placeholder={"Nom de la botiga"}
      bind:value={selectedShopName}
      on:input={(e) => handleSearchInput(e.detail)}
    />
  </Form>

  <ul>
    <p>Ubicacions més properes</p>
    {#each searchResults as result (result.id)}
      <button on:click={() => selectedShop(result)}>{result.place_name}</button>
    {/each}
  </ul>

  <div bind:this={mapContainer} class="map"></div>

  <TopPage />
</div>

<ShoppingCart />

<style scoped>
  .background-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 60%;
    max-width: 66rem;
  }

  button {
    border: 0.1rem solid var(--primary-color);
    border-radius: 5rem;
    text-align: center;
    font-family: var(--primary-font);
    padding: 0.5rem;
    background-color: transparent;
  }

  button:hover {
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
