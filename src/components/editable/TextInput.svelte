<script>
  import Btn from '../fragments/Btn.svelte'
  import InputBlock from './InputBlock.svelte'
  import {createEventDispatcher} from 'svelte'

  export let form = ''

  const dummyText = form.component === 'text' ? 'Texto de resposta curta ...' : 'Texto de resposta longa ...'
  const dispatch = createEventDispatcher()

  const dragItem = e => {
    e.preventDefault()
    dispatch('dragging')
  }
  form.title = form.title ? form.title : ''
  form.placeholder = form.placeholder ? form.placeholder : ''
</script>

  <InputBlock item={form} on:dragging={dragItem}>
    <slot>
      <div class='dummy_text'>
      <input class='placeholder_text' type="text" bind:value={form.placeholder} placeholder={dummyText}>
      </div>
    </slot>
  </InputBlock>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .dummy_text {
    color: var(--light-gray)
  }
  .placeholder_text{
    border: none;
    outline: none;
    &:focus{
        border-bottom: 1px solid var(--dark-gray)
    }
  }
</style>
