<script>
  import InputBlock from './InputBlock.svelte'
  import OptionsColumn from './OptionsColumn.svelte'
  import Escala from './Escala.svelte'
  import {getForm, getInputs} from '../../store/formulario'
  import {createEventDispatcher} from 'svelte'

  export let formID = ''
  export let form = ''
  let editable = ''

  let item = getInputs(formID, form.id)

  let options = item.options ? item.options
    : item.rows ? item.rows
    : item.columns

  const dispatch = createEventDispatcher()

  const dragItem = e => {
    e.preventDefault()
    dispatch('dragging')
  }

  const edit = e =>{
    editable = e.detail.edit
  }

  const deleteInput = e => dispatch('delete',{id: e.detail.id})
  item.title = item.title ? item.title : ''
</script>


<InputBlock {item} on:editable={edit} on:dragging={dragItem} on:delete={deleteInput}>
  <slot>
  {#if item.component === 'escala'}
    <Escala {formID} inputID={form.id} {editable}/>
  {:else if Array.isArray(item.options[0])}
  <div class="columns">
    {#each item.options as options, idx}
      <OptionsColumn {formID} inputID={form.id} grid={idx} {editable}/>
    {/each}
  </div>
  {:else}
    <div class='singleColumn'>
      <OptionsColumn {formID} inputID={form.id} {editable}/>
    </div>

  {/if}
  </slot>

</InputBlock>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .columns{
    display: flex;
    justify-content: space-between;
  }
  .singleColumn{
    width: 60%;
  }
</style>
