<script>
  import TextDefined from './TextDefined.svelte'
  import TextInput from './TextInput.svelte'
  import MultipleChoice from './MultipleChoice.svelte'
  import {createEventDispatcher} from 'svelte'

  export let type = ''
  export let formType = ''
  
  let chosenComponent = formType.defined ? TextDefined
    : (type.type.includes('text')) ? TextInput
    : MultipleChoice

  const dispatch = createEventDispatcher()

  const deleteInput = e => {
    dispatch('delete',{id: e.detail.id})
  }

  const passDrag = e => {
      e.preventDefault()
      dispatch('dragging')
    }
</script>
  <svelte:component
    this={chosenComponent}
    form={type}
    formID={formType.id}
    on:dragging={passDrag}
    on:delete={deleteInput}
  />
<style>

</style>
