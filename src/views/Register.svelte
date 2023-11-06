<script>
// @ts-nocheck

  import Form from "../components/blueprints/forms/Form.svelte";
  import Text from "../components/blueprints/inputs/Text.svelte";
  import Password from "../components/blueprints/inputs/Password.svelte";
  import Email from "../components/blueprints/inputs/Email.svelte";
  import Submit from "../components/blueprints/buttons/SubmitButton.svelte";
  
  let nameValue = '' 
  let passwordValue = ''
  let emailValue = ''
  let error = null; // Variable para manejar errores
  
  const users = []

  const registerSubmit = () => {
    error = null; // Restablece el error a nulo antes de la validación

    if (!nameValue.trim() || !emailValue.trim() || !passwordValue.trim()) {
      error = 'Tots els camps són obligatoris';
      return; 
    }

    // Crea un nuevo objeto 'user' con los valores actuales del formulario
    const newUser = {
      nameValue,
      passwordValue,
      emailValue,
    };

    // Agrega el nuevo 'user' al array 'users'
    users.push(newUser);
    console.log(users);

    localStorage.setItem('users', JSON.stringify(users))

    // Reinicia los valores del formulario
    nameValue = '';
    passwordValue = '';
    emailValue = '';
  }
</script>

<Form legend={"Registra't"}>
  <Text lblName={"Introdueix el teu nom"} placeholder={"Nom"} bind:value={nameValue}/>
  <Email bind:value={emailValue}/>
  <Password bind:value={passwordValue}/>
  <Submit btnName={"Registra't"} handleSubmit={registerSubmit} />
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

