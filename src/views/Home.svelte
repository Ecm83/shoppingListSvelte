<script>
// @ts-nocheck

  import Text from "../components/blueprints/inputs/Text.svelte";
  import Email from "../components/blueprints/inputs/Email.svelte";
  import Pasword from "../components/blueprints/inputs/Pasword.svelte";
  import Date from "../components/blueprints/inputs/Date.svelte";
  import Form from "../components/blueprints/forms/Form.svelte";


  let email = ''


</script>
<h1>Hi i'm the HOME page!</h1>


<Form legend={'login'}>
  <Email />
  <Pasword />
  <Date />
</Form>


<style>

</style>


