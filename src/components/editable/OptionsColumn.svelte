<script>
  import Btn from '../fragments/Btn.svelte'
  import OptionItem from './OptionItem.svelte'
  import {forms, getInputs} from '../../store/formulario'
  import {dndzone} from 'svelte-dnd-action'
  import hexID from '@tadashi/hex-id'

  export let grid = ''
  export let formID = ''
  export let inputID = ''
  export let editable = ''

  let inputOptions = getInputs(formID, inputID)
  let options = Array.isArray(inputOptions.options[0]) ? inputOptions.options[grid] : inputOptions.options
  let dragDisabled = true

  const addOption = () => {
    if (grid !== '' && Number(grid) >= 0) {
      inputOptions.options[grid] = [...inputOptions.options[grid], {id: hexID(), text: 'ss'}]
      options = inputOptions.options[grid]
    } else {
      inputOptions.options = [...inputOptions.options, {id: hexID(), text: 'ss'}]
      options = inputOptions.options
    }
  }

  const drag = e => {
    e.preventDefault()
    dragDisabled = false
  }

  function removeOption(e) {
    let id = e.detail.id
    let deleteIdx

    if (grid !== '' && Number(grid) >= 0) {
      deleteIdx = inputOptions.options[grid].indexOf(id)
      inputOptions.options[grid].splice(deleteIdx, 1)
      options = inputOptions.options[grid]
    } else {
      deleteIdx = inputOptions.options.indexOf(id)
      inputOptions.options.splice(deleteIdx, 1)
      options = inputOptions.options
    }
  }

  function handleDnd(e) {
    inputOptions.options = e.detail.items
    options = inputOptions.options
    dragDisabled =false
  }
</script>

  <div class='options_grid'>
    <div class='option_list' use:dndzone={{items: options,dragDisabled ,type: 'teste'}} on:consider={handleDnd} on:finalize={handleDnd}>
      {#each options as option,idx (option.id)}
        <OptionItem
          {idx}
          {option}
          {editable}
          type={inputOptions.type}
          on:delete={removeOption}
          on:drag={drag}
        />
      {/each}
    </div>
    <Btn type='button'
      classname={'no_border'}
      icon={'form_icon_plus'}
      on:click={addOption}
    />
  </div>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .option_list{
    display: flex;
    flex-direction: column;
  }

</style>
