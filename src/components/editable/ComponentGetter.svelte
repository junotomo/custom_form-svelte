<script>
  import TextDefined from './TextDefined.svelte'
  import TextInput from './TextInput.svelte'
  import MultipleChoice from './MultipleChoice.svelte'

  export let type = ''
  export let formType = ''

  let chosenComponent = formType.defined ? TextDefined : TextInput
</script>

  <svelte:component this={chosenComponent} form={type}/>
<style>

</style>
