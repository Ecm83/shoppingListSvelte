<script>
  //@ts-nocheck
  import './navBar.css';
  import { Link } from 'svelte-routing';
  import { user } from '../../stores/logedUser';
  import Logout from '../blueprints/buttons/Logout.svelte';
  import Hr from '../blueprints/others/Hr.svelte';
  import UserGreetings from '../blueprints/others/UserGreetings.svelte';
  console.log(user.isLogedIn);
  
  $: logged = false
  
  user.subscribe((user) => {
    logged = user?.isLogedIn === undefined ? false : user?.isLogedIn
  });
</script>

<nav>
  <div class="header-container">
    <h1 class="header">
      ShoppIn 
      <span class="material-symbols-outlined">
        my_location
        </span>
    </h1>
    <UserGreetings />
  </div>

  <div class="links-container">
    {#if logged}
      <div class="private-routes">
        <Link class="svelte-link" to="/edit">Editar</Link>
        <Link class="svelte-link" to='/lists'>Llistes</Link>
        <Logout />
      </div>
    {:else}
      <div class="public-routes">
        <Link class="svelte-link" to='/'>Inici</Link>
        <Link class="svelte-link" to='/register'>Registra't</Link>
        <Link class="svelte-link" to='/login'>Accedeix</Link>
      </div>
    {/if}
  </div>
</nav>

<Hr />

<style scoped>
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .header {
    display: flex;
    align-items: center;
    position: relative;
  }

  .header span {
    position: absolute;
    top: 50%;
    right: -5rem; /* Alineado a la derecha del h1 */
    transform: translate(0%, -50%) rotate(15deg); /* Rotar 15 grados */
    z-index: -1; /* Poner el span detrás del h1 */
    font-size: 10rem;
    color:	#999da067;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .links-container {
    width: 100%;
    max-width: 140rem;
  }

  h1 {
    font-family: var(--primary-font);
    text-align: center;
    padding: 2rem 0;
    font-size: 3rem;
    color: var(--primary-color);
  }

  .private-routes,
  .public-routes {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .material-symbols-outlined {
    font-size: 4rem;
    font-variation-settings:
      'FILL' 0,
      'wght' 900,
      'GRAD' 0,
      'opsz' 24;
  }
</style>
