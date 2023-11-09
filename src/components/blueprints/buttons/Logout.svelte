<script>
  import { list } from "../../../stores/userList";
  import { navigate } from "svelte-routing";

  const logout = () => {
    list.setUser(null);
    navigate('./login', { replace: true });
  }
</script>

<button class="logout-button" on:click={logout}>
  <span class="material-symbols-outlined">logout</span> Sortir
</button>

<style scoped>
  .logout-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 1rem;
    font-family: var(--primary-font);
    position: relative;
    color: var(--black); /* Color predeterminado */
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;

    transition: color 0.3s;
  }

  .logout-button::before,
  .logout-button::after {
    content: "";
    position: absolute;
    width: 0;
    height: .5rem;
    bottom: 0;
    background-color: var(--primary-color);
    transition: width 0.3s ease 0s;
  }

  .logout-button::before {
    left: 50%;
  }

  .logout-button::after {
    right: 50%;
  }

  .logout-button:hover {
    color: var(--primary-color); /* Color en hover */
  }

  .logout-button:hover::before {
    width: 50%;
  }

  .logout-button:hover::after {
    width: 50%;
  }
</style>
