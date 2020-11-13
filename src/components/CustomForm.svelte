<script>
  import Btn from './fragments/Btn.svelte'
  import ComponentGetter from './editable/ComponentGetter.svelte'
  import InputModal from './modals/InputModal.svelte'
  import {forms, getForm} from '../store/formulario'
  import {dndzone} from 'svelte-dnd-action'
  import hexID from '@tadashi/hex-id'
  import {createEventDispatcher} from 'svelte'

  export let formID = ''

  let form = getForm(formID)
  let modal = false
  let showIcon = 'form_icon_block'
  let dragDisabled = true
  let dndScope = form.defined ? 'imutavel' : 'custom'

  const dispatch = createEventDispatcher()
  const openModal = () => modal = !modal
  const closeModal = () => modal = false

  const add_input = event => {
    let inputType = event.detail.type
    modal = false

    if (inputType.includes('text')) {
        form.items = [...form.items, {id: hexID(), type: inputType, title: ''}]
    } else if (inputType === 'checkbox_grade' || inputType === 'multipla_grade') {
        form.items = [...form.items, {id: hexID(), type: inputType,
          options: [
            [
              {
              id: hexID(),
              text: ''
              },
              {
                id: hexID(),
                text: ''
              }
            ],
            [
              {
              id: hexID(),
              text: ''
              },
              {
                id: hexID(),
                text: ''
              }
            ]
          ]
        }
      ]
    }else if (inputType === 'escala') {
      form.items = [...form.items, {id: hexID(), type: inputType, range: 2,start: '', end: ''}]
    } else {
      form.items = [...form.items, {id: hexID(), type: inputType,
         options: [
           {
           id: hexID(),
           text: ''
           },
           {
             id: hexID(),
             text: ''
           }
         ]
        }
      ]
    }
  }

  const hideComponent = () => {
    showIcon = form.show ? 'form_icon_block' : 'form_icon_disabled'
    form.show = !form.show
  }

  const handleDnd = (id, e) => {
		form.items = e.detail.items;
    dragDisabled =true
	}

  // drag do formulario
  const drag = e => {
   e.preventDefault()
    dispatch('dragging')
  }

  // drag dos itens dentro do formulario
  const dragItem = e =>{
     e.preventDefault()
     dragDisabled = false
  }

  const deleteInput = e => {
    let itemIdx = form.items.findIndex( item => item.id === e.detail.id)
    form.items.splice(itemIdx, 1)
    form.items = [...form.items]
  }
  const deleteFormulario = () => {
    dispatch('delete',{id: formID})
  }
</script>

<div class='form_box'>

  <div class='form_header'>

    {#if form.defined}
      <span>{form.title}</span>
    {:else}
      <input class='form_title' type='text' bind:value={form.title} placeholder='Nova secção' >
    {/if}

    <div class='form_header_combo'>

      <span>Titulo da secção</span>
      {#if dndScope === 'custom'}
        <Btn type='button'
          iconClass={'inverted_icon'}
          classname={'inverted'}
          icon={'form_icon_excluir'}
          on:click={deleteFormulario}
        />
      {:else}
      <Btn type='button'
        iconClass={'inverted_icon'}
        classname={'inverted'}
        icon={showIcon}
        on:click={hideComponent}
      />
      {/if}


      <Btn type='button'
        iconClass={'inverted_icon'}
        classname={'inverted'}
        icon={'form_icon_drag'}
        on:mousedown={drag}
      />

    </div>
  </div>

  <section class='input_list'
    use:dndzone={{items: form.items, dragDisabled, type: dndScope}}
    on:consider={(e) => handleDnd(form.id, e)}
    on:finalize={(e) => handleDnd(form.id, e)}
  >
    {#each form.items as item (item.id)}
        <ComponentGetter
          type={item}
          formType={form}
          on:dragging={dragItem}
          on:delete={deleteInput}
        />
    {/each}
  </section>
  {#if !form.defined}
    <Btn type='button'
      classname={'pontilhado'}
      icon={'form_icon_plus'}
      on:click={() => openModal()}
    />
  {/if}
</div>

{#if modal}
  <InputModal on:close={closeModal} on:addInput={add_input} formID={form.id} />
{/if}

<style type='text/scss'>
  @import '../assets/settings';
  .form_box{
    display: grid;
    grid-gap: 1.5em;
    margin: 1em 0px;
    font-size: var(--text-size);
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
      font-weight: bold;
    }
  }

  .form_title, .form_title::placeholder {
    background-color: var(--dark-gray);
    border: none;
    color: var(--white);
    font-weight: bold;
    font-size: var(--text-size);
  }

  .form_title:focus {
    outline: 0px gray;
    border-bottom: 1px solid white;
  }

  .form_header_combo{
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
  }
  .input_list {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1.5em;
  }
</style>
