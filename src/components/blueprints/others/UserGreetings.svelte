<script>
  import { user } from "../../../stores/logedUser"; 
  // Recupera los datos del usuario del Local Storage
  let welcomeMessage = '';

  user.subscribe((user) => {
    if (user?.isLogedIn) {
    console.log('user en pagina edit', user);
    welcomeMessage = `Hola ${user.name}`;
  }
  });

  console.log('user lists page', user);
  // Verifica si se encontraron datos del usuario en el Local Storage


</script>

<p>{welcomeMessage}</p>

<style scoped>
  p {
    font-size: 2rem;
    font-family: var(--primary-font);
    color: var(--primary-color);
    font-weight: 900;
    margin: 0;
  }
</style>