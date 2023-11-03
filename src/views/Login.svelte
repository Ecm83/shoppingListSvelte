<script>

  import {user} from '../stores/User'
  import {navigate} from 'svelte-routing'

  let email = ''
  let password = ''

  const processForm = () => {
    if(!email.trim() || !password.trim()) {
      console.log('The fields are empty!');
      return
    }
    user.setUser({
      email, password
    })
    navigate('/profile', {replace: true})
  }
</script>

<div>
  <h1>Login</h1>
  <form on:submit|preventDefault={processForm}>
    <input type="text" placeholder="Email" bind:value={email}>
    <input type="text" placeholder="Your password" bind:value={password}>
    <button type="submit">Login</button>
    
  </form>
</div>