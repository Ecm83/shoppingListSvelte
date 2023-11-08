<script>
  // Recupera los datos del usuario del Local Storage
  const userLocal = JSON.parse(localStorage.getItem('users'));
  let welcomeMessage = '';

  // Verifica si se encontraron datos del usuario en el Local Storage
  if (userLocal) {
    welcomeMessage = `Hola ${userLocal.nameValue}, bienvenido a nuestra aplicación.`;
  } else {
    welcomeMessage = 'Bienvenido a nuestra aplicación. Inicia sesión para obtener una experiencia personalizada.';
  }
</script>

<p>{welcomeMessage}</p>
