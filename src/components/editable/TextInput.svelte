<script>
  import Btn from '../fragments/Btn.svelte'
  export let form = ''

  form.title = form.title ? form.title : ''
  const dummyText = form.type === 'single_input' ? 'Texto de resposta curta ...' : 'Texto de resposta longa ...'
</script>

  <div class='input_box'>
    <div class='input_box_nav'>
      <input class='inpu_title' type='text' bind:value={form.title} placeholder='Título do texto curto'>
      <div class='nav_combo'>
        <Btn type='button'
          classname={'no_border'}
          icon={'form_icon_edit'}
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
    <div class='dummy_text'>
      {dummyText}
    </div>
  </div>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .input_box {
    @extend %default_container;
    width: 45%;
    display: grid;
    padding: 1em 1em;
    grid-gap: 1em;
    font-weight: bold;
  }

  .input_box_nav {
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

  .dummy_text {
    color: var(--light-gray)

  }
</style>
