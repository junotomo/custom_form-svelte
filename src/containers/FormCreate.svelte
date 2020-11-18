<script>
  import CustomForm from '../components/CustomForm.svelte'
  import Btn from '../components/fragments/Btn.svelte'
  import AlertModal from '../components/modals/AlertModal.svelte'
  import {forms, DEFAULT_FORMS} from '../store/formulario'
  import {createEventDispatcher} from 'svelte'
  import {dndzone} from 'svelte-dnd-action'
  import hexID from '@tadashi/hex-id'

  $forms = JSON.parse(JSON.stringify(DEFAULT_FORMS))

  let dragDisabled = true
  let opendModal = false

  const dispatch = createEventDispatcher()

  const preview = () => dispatch('change', {index: 1})
  const return_page = () => dispatch('change', {index: -1})
  const drag = () => dragDisabled = false

  const save = () => {
    console.log($forms);
  }

  const return_default = () => {
    $forms = JSON.parse(JSON.stringify(DEFAULT_FORMS))
    $forms = [...$forms]
  }

  const addSection = () => {
    let newForm = {
      id: hexID(),
      title: '',
      defined: false,
      items: []
    }
    $forms = [...$forms, newForm]
  }

  function handleDnd(e) {
    $forms = e.detail.items;
    dragDisabled = true
  }

  const deleteFormulario = e => {
    let idx = $forms.findIndex(form => form.id === e.detail.id)
    $forms.splice(idx, 1)
    $forms = [...$forms]
  }
</script>
{#if opendModal}
  <AlertModal/>
{/if}

<div class='create_form_container'>

  <div class='create_form_nav'>
    <Btn class='return_page' classname={'small_btn'} type='button' icon={'form_icon_chevron_left'} on:click={return_page}/>
    <span class='create_form_title'>Pré - formulário</span>
    <div class='btn_combo'>
      <Btn type='button' icon={'form_icon_refresh'} text={'Reorganizar'} on:click={return_default}/>
      <Btn type='button' icon={'form_icon_search'} text={'Pré - visualizar'} on:click={preview}/>
      <Btn type='button' icon={'form_icon_salvar'} text={'Salvar'} on:click={save}/>
    </div>
  </div>

  <section class='create_form_body' use:dndzone={{items: $forms, dragDisabled}} on:consider={handleDnd} on:finalize={handleDnd}>
    {#each $forms as form, idx (form.id)}
      <CustomForm
        formID={form.id}
        on:dragging={drag}
        on:delete={deleteFormulario}
      />
    {/each}
  </section>
  <Btn type='button' text={'Adicionar seção'} on:click={addSection}/>
</div>

<style type='text/scss'>
  @import '../assets/settings';
  .create_form_container {
    display: grid;

  }
  .create_form_nav {
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
    'return title  combo'
  }

  .return_page{
    grid-area: return;
  }

  .create_form_title {
    font-size: var(--title);
    color: var(--dark-gray);
    grid-area: title;
    font-weight: bold;
  }

  .btn_combo{
    grid-area: combo;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 1em;
  }
</style>
