<script>
  import CustomForm from '../components/CustomForm.svelte'
  import Btn from '../components/fragments/Btn.svelte'
  import {forms} from '../store/formulario'
  import {createEventDispatcher} from 'svelte'
  import {dndzone} from 'svelte-dnd-action'
  import hexID from '@tadashi/hex-id'
  // import { onMount } from 'svelte'

  let items

    $forms = [
      {
        id: hexID(),
        title: 'Dados do segurado',
        defined: true,
        items: [
          {
            id: hexID(),
            type: 'defined_text',
            placeholder: 'Nome do segurado',
            size: 'long',
            show: true
          },
          {
            id: hexID(),
            type: 'defined_text',
            size: 'normal',
            placeholder: 'Tipo de pessoa',
            show: true
          },
          {
            id: hexID(),
            type: 'defined_text',
            size: 'normal',
            placeholder: 'CPF',
            show: true
          },
          {
            id: hexID(),
            type: 'defined_text',
            size: 'normal',
            placeholder: 'RG',
            show: true
          }
        ],
      },
      {
        id: hexID(),
        title: 'Emails',
        defined: true,
        items: [
          {
            id: hexID(),
            type: 'defined_text',
            size: 'normal',
            placeholder: 'RlG',
            show: true
          },
          {
            id: hexID(),
            type: 'defined_text',
            size: 'normal',
            placeholder: 'RGj',
            show: true
          }
        ]
      },
      {
        id: hexID(),
        title: 'Telefone',
        defined: true,
        items: [
          {
            id: hexID(),
            type: 'defined_text',
            size: 'normal',
            placeholder: 'RGh',
          },
          {
            id: hexID(),
            type: 'defined_text',
            size: 'normal',
            placeholder: 'RGf',
            show: true
          }
        ]
      },
      {
        id: hexID(),
        title: 'Dados do seguro',
        defined: true,
        items: [
          {
            id: hexID(),
            type: 'defined_text',
            size: 'normal',
            placeholder: 'RGx',
            show: true
          }
        ]
      }
    ]
  //items = $forms
    console.log($forms)



  const dispatch = createEventDispatcher()

  const preview = () => {
    dispatch('change', {index: 1})
  }

  const return_page = () => {
    dispatch('change', {index: -1})
  }

  const save = () => {

  }

  const return_default = () => {

  }
  const addSection = () => {
    let newForm = {
      id: hexID(),
      title: 'novo formulário',
      items: []
    }
    $forms = [...$forms, newForm]
  }

  function handleDndConsider(e) {
    console.log('during', e.detail.items)
    $forms = e.detail.items;
  }

  function handleDndFinalize(e) {
    console.log('final', e.detail.items)
    $forms = e.detail.items;
  }
</script>

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

  <section class='create_form_body' use:dndzone={{items:$forms}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
    {#each $forms as form (form.id)}
      <CustomForm {form}/>
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
