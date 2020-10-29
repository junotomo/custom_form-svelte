<script>
  import Btn from './fragments/Btn.svelte'
  import Modal from './Modal.svelte'
  import {dndzone} from 'svelte-dnd-action'

  export let form

  let items = form.components
  let modal = false

  const add_input = () => {
    modal = !modal
  }
  const excluir = (id) => {

  }

  const closeModal = () => {
    modal = false
  }

  function handleDndConsider(e) {
		items = e.detail.items;
	}

	function handleDndFinalize(e) {
		items = e.detail.items;
	}
</script>

<div class='form_box'>

  <div class='form_header'>
    <span>{form.title}</span>
    <div class='form_header_combo'>
      <span>titulo da seção</span>

      <Btn type='button'
        iconClass={'inverted_icon'}
        classname={'inverted'}
        icon={'form_icon_block'}
        on:click={() => excluir(form.id)}
      />

      <Btn type='button'
        iconClass={'inverted_icon'}
        classname={'inverted'}
        icon={'form_icon_drag'}
      />

    </div>
  </div>

  <section class='input_list'
    use:dndzone={{items}}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as component(component.id)}
      <div class='form'>
        {component.type}
      </div>
    {/each}
  </section>

  <Btn type='button'
    classname={'pontilhado'}
    icon={'form_icon_plus'}
    on:click={() => add_input()}
  />
</div>
{#if modal}
  <Modal on:close={closeModal}/>
{/if}

<style type='text/scss'>
  @import '../assets/settings';
  .form_box{
    display: grid;
    grid-gap: 1.5em;
    margin: 1em 0px;
  }

  .form_header {
    display: flex;
    justify-content: space-between;
    background-color: var(--dark-gray);
    padding: 0.5em;
    border-radius: var(--btn-border-radius);
    & span {
      color: var(--white);
      margin: auto 5px;
    }
  }
  .form_header_combo{
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
  }
  .input_list {
    display: grid;
    grid-gap: 1em;
  }
</style>
