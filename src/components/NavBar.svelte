<script>
  import { Link, navigate } from "svelte-routing";
  import { user } from "../stores/User";

  const logout = () => {
    user.setUser(null)
    navigate('./login', {replace: true})
  }
</script>

<nav>
  {#if $user}
    <Link to="/edit">Editar</Link>
    <Link to='/lists'>Llistes</Link>
    <button on:click={logout}>Logout</button>
  {:else}
    <Link to='/'>Inici</Link>
    <Link to='/register'>Registra't</Link>
    <Link to='/login'>Accedeix</Link>

  {/if}
</nav>