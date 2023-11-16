<script>
  // @ts-nocheck
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-routing";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import Form from "../components/blueprints/forms/Form.svelte";
  import ShoppingCart from "../components/backImg/ShoppingCart.svelte";
  import TopPage from "../components/icons/TopPage.svelte";
  import 'mapbox-gl/dist/mapbox-gl.css';

  import { Map } from "mapbox-gl";
  // import "../node_modules/mapbox-gl/dist/mapbox-gl.css";

  let shopName = '';

  let map;
  let mapContainer;
  let searchResults = [];

  onMount(() => {
  const initialState = { lng: 2.3139321838640297, lat: 41.649540287334204, zoom: 9 };

  map = new Map({
    container: mapContainer,
    accessToken: import.meta.env.VITE_MAPBOX_KEY,
    style: `mapbox://styles/mapbox/outdoors-v11`,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom,
  });

  map.on('load', () => {
    // Asegúrate de tener una fuente llamada 'markers' en tu estilo de Mapbox GL
    map.addSource('markers', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
    });

    // Añade una capa de marcadores al mapa con un estilo personalizado ('marker-rocket' en este caso)
    map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png', (error, image) => {
      if (error) throw error;

      map.addImage('custom-marker', image);

      map.addLayer({
        id: 'markers',
        type: 'symbol',
        source: 'markers',
        layout: {
          'icon-image': 'custom-marker', // Cambia a 'custom-marker' si usas un ícono personalizado
          'icon-size': .5
        }
      });
    });
  });
});

  onDestroy(() => {
    map.remove();
  });

  const storeSubmit = () => {
    // Lógica de envío del formulario
  };

  const handleSearchInput = async (inputValue) => {
    const longitude = 2.3139321838640297; // Longitud de la ubicación preestablecida
    const latitude = 41.649540287334204;  // Latitud de la ubicación preestablecida

    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${import.meta.env.VITE_MAPBOX_KEY}&proximity=${longitude},${latitude}&bbox=${longitude - 0.1},${latitude - 0.1},${longitude + 0.1},${latitude + 0.1}`);

    const data = await response.json();
    searchResults = data.features;

    // Comprueba si la fuente 'markers' está inicializada antes de actualizarla
    if (map.getSource('markers')) {
      // Limpiar los marcadores existentes en el mapa
      map.getSource('markers').setData({
        type: 'FeatureCollection',
        features: []
      });

      // Agregar marcadores al mapa
      const markerFeatures = searchResults.map(result => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: result.center
        },
        properties: {
          title: result.place_name
        }
      }));

      map.getSource('markers').setData({
        type: 'FeatureCollection',
        features: markerFeatures
      });
    }
  };
</script>

<div class="background-container">
  <Form legend={'Editar botiga'} handleSubmit={storeSubmit}>
    <Text lblName={'Introdueix el nom de la botiga'} placeholder={'Nom de la botiga'} bind:value={shopName} on:input={e => handleSearchInput(e.detail)} />
  </Form>

  <ul>
    <p>Ubicacions més properes</p>
    {#each searchResults as result (result.id)}
      <li>{result.place_name}</li>
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
