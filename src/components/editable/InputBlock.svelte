<script>
  import Btn from '../fragments/Btn.svelte'

  export let title = ''

  const toggleEdit = () => {
    //code to disable all elemnts
  }
</script>

<div class='block'>
  <div class='block_nav'>
    <input class='inpu_title' type='text' bind:value={title} placeholder='Título do texto curto'>
    <div class='nav_combo'>
      <Btn type='button'
        classname={'no_border'}
        icon={'form_icon_edit'}
        on:click={toggleEdit}
      />
      <Btn type='button'
        classname={'no_border'}
        icon={'form_icon_excluir'}
      />
      <Btn type='button'
        classname={'no_border'}
        icon={'form_icon_drag'}
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
  }
</style>
