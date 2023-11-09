<script>
// @ts-nocheck

  import './inpStyles.css';
  export let value 
  let isPasswordValid = false;
  let passwordErrors = [];

  function handleChange(event) {
    value = event.target.value;
    validatePassword(value);
  }


  function validatePassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    passwordErrors = [];

    // switch(true) {
    //   case password.length < minLength:
    //     passwordErrors.push('La contrasenya ha de tenir almenys 8 caràcters.')
    //     break;

    //   case !hasUppercase:
    //     passwordErrors.push('La contrasenya ha de contenir almenys una majúscula.');
    //     break;

    //   case !hasLowercase:
    //     passwordErrors.push('La contrasenya ha de contenir almenys una minúscula.');
    //     break;

    //   case !hasNumber:
    //     passwordErrors.push('La contrasenya ha de contenir almenys un número.');
    //     break;

    //   case !hasSpecialChar:
    //     passwordErrors.push('La contrasenya ha de contenir almenys un caràcter especial.');
    //     break;
    // }

    if (password.length < minLength) {
      passwordErrors.push('La contrasenya ha de tenir almenys 8 caràcters.');
    }

    if (!hasUppercase) {
      passwordErrors.push('La contrasenya ha de contenir almenys una majúscula.');
    }

    if (!hasLowercase) {
      passwordErrors.push('La contrasenya ha de contenir almenys una minúscula.');
    }

    if (!hasNumber) {
      passwordErrors.push('La contrasenya ha de contenir almenys un número.');
    }

    if (!hasSpecialChar) {
      passwordErrors.push('La contrasenya ha de contenir almenys un caràcter especial.');
    }

    isPasswordValid = passwordErrors.length === 0;
  }
</script>

<label>Introduce tu contraseña
  <input
    type="password"
    placeholder="Contraseña"
    bind:value={value}
    class:input={isPasswordValid ? 'valid' : 'invalid'}
    on:input={handleChange}
  />
</label>

{#if passwordErrors.length > 0}
  <div class="error">
    <ul>
      {#each passwordErrors as error (error)}
        <li>{error}</li>
      {/each}
    </ul>
  </div>
{/if}


<style>
  li {
    list-style: none;
    text-align: left;
  }

  .error {
    color: red;
    font-family: var(--primary-font);
    font-size: 1.3rem;
  }
</style>

