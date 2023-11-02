<script>
  import { user } from "../stores/User";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  console.log($user)

  onMount(() => {
    if(!$user) {
      navigate('/login')
    }
  })
</script>


<div>
  {#if $user}
    <h1>Hi i'm the Profile page!</h1>
    
  {/if}
</div>