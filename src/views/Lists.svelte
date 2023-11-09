<script>
  import { user } from "../stores/logedUser.js"
  // Recupera los datos del usuario del Local Storage
  let welcomeMessage = '';

  user.subscribe((value) => {
    if (user) {
    console.log('user en pagina edit', user);
    welcomeMessage = `Hola ${value.name}, bienvenido a nuestra aplicación.`;
  } else {
    welcomeMessage = 'Bienvenido a nuestra aplicación. Inicia sesión para obtener una experiencia personalizada.';
  }
  });

  console.log('user lists page', user);
  // Verifica si se encontraron datos del usuario en el Local Storage


</script>

<p>{welcomeMessage}</p>
