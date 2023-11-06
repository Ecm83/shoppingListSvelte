<script>
  import './navBar.css'
  import { Link, navigate } from "svelte-routing";
  import { user } from "../../stores/User";

  const logout = () => {
    user.setUser(null)
    navigate('./login', {replace: true})
  }
</script>


<h1>La meva llista de la compra</h1>
<nav>
  {#if $user}
  <div class="private-routes">
    <Link class="svelte-link" to="/edit">Editar</Link>
    <Link class="svelte-link" to='/lists'>Llistes</Link>
    <button on:click={logout}>Logout</button>
  </div>
{:else}
  <div class="public-routes">
    <Link class="svelte-link" to='/'>Inici</Link>
    <Link class="svelte-link" to='/register'>Registra't</Link>
    <Link class="svelte-link" to='/login'>Accedeix</Link>
  </div>
{/if}
</nav>
<hr>


<style scoped>
  h1 {
    font-family: var(--primary-font);
    text-align: center;
    padding: 2rem 0;
    font-size: 3rem;
    color: var(--primary-color);
  }

  .private-routes {
    display: flex;
    justify-content: space-around;
  }

  .public-routes {
    display: flex;
    justify-content: space-around;
  }

  hr {
    margin-top: 4rem;
  }
</style>
