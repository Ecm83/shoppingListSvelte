<script>
  //@ts-nocheck
  import SubmitButton from '../components/blueprints/buttons/SubmitButton.svelte';
  import { user } from '../stores/logedUser.js';
  import { navigate } from 'svelte-routing';
  import Form from '../components/blueprints/forms/Form.svelte';
  import Email from '../components/blueprints/inputs/Email.svelte';
  import Password from '../components/blueprints/inputs/Password.svelte';

  let emailValue = ''
  let passwordValue = '';
  let error = null;

  function processForm() {
    if (!emailValue.trim() || !passwordValue.trim()) {
      error = 'Tots els camps són obligatoris';
      return;
    }

    // Recupera la lista de usuarios desde localStorage
    const users = JSON.parse(localStorage.getItem('users'));

    console.log('Users from localStorage:', users);

    // Verifica si el usuario y contraseña coinciden con algún usuario almacenado
    const foundUser = users.find((user) => {
      return user.email.toLowerCase() === emailValue.toLowerCase() && user.password === passwordValue;
    });

    console.log('Found User:', foundUser);

    if (foundUser) {
      user.setUser({isLogedIn: true, ...foundUser}); // Establece el usuario actual
      navigate('/edit', { replace: true });
      
    } else {
      error = 'Credencials incorrectes'; // Muestra un mensaje de error si no se encuentra el usuario
    }
  }


</script>

<Form legend={"Accedeix"} handleSubmit={processForm}>
  <Email bind:value={emailValue} />
  <Password bind:value={passwordValue} />
  <SubmitButton btnName={"Accedeix"}  />
</Form>

{#if error}
  <p class="error-message">{error}</p> <!-- Muestra el mensaje de error al usuario -->
{/if}

<style scoped>
  .error-message {
    color: var(--error);
    font-size: 14px;
    font-family: var(--primary-font);
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
  }
</style>
