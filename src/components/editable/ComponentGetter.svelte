<script>
  import TextDefined from './TextDefined.svelte'
  import TextInput from './TextInput.svelte'
  import MultipleChoice from './MultipleChoice.svelte'
  import {createEventDispatcher} from 'svelte'

  export let component = ''
  export let formComponent = ''

  let chosenComponent = formComponent.defined ? TextDefined
    : (component.component.includes('text')) ? TextInput
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
    form={component}
    formID={formComponent.id}
    on:dragging={passDrag}
    on:delete={deleteInput}
  />
<style>

</style>
