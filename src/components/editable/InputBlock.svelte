<script>
  import Btn from '../fragments/Btn.svelte'
  import {createEventDispatcher} from 'svelte'

  export let item = ''

  let editable = false
  const toggleEdit = e => {
    let target = e.target.closest('.block')
    editable = !editable
    target.style.pointerEvents = editable ? 'auto':'none'
    dispatch('editable', {edit: editable})
  }

  const dispatch = createEventDispatcher()
  const drag = e => {
    e.preventDefault()
    dispatch('dragging')
  }

  const deleteInput = () => dispatch('delete',{id: item.id})
</script>

<div class='block'>
  <div class='block_nav'>
    <input class='inpu_title' type='text' bind:value={item.title} placeholder='Título do texto curto'>
    <div class='nav_combo'>
      <Btn type='button'
        classname={'no_border'}
        icon={'form_icon_edit'}
        on:click={toggleEdit}
      />
      <Btn type='button'
        classname={'no_border'}
        icon={'form_icon_excluir'}
        on:click={deleteInput}
      />
      <Btn type='button'
        classname={'no_border'}
        icon={'form_icon_drag'}
        on:mousedown={drag}
      />
    </div>
  </div>
  <slot></slot>
</div>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .block {
    @extend %default_container;
    width: 45%;
    display: grid;
    padding: 1em 1em;
    grid-gap: 1em;
    font-weight: bold;
    pointer-events: none;
  }

  .block_nav {
    display: flex;
    justify-content: space-between;
    & input {
      border: none;
      font-size: var(--text-size);
      font-weight: bold;
    }
    & input:focus{
      outline: 0px;
      border-bottom: 1px solid var(--dark-gray);
    }
  }

  .nav_combo {
    display: grid;
    grid-gap: .8em;
    grid-auto-flow: column;
    pointer-events: auto;
  }
</style>
