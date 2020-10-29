<script>
import {createEventDispatcher} from 'svelte'
import {slide} from 'svelte/transition'
import Btn from './fragments/Btn.svelte'

export let form

let editForm = false
const dispatch = createEventDispatcher()
const fastEdit = () => {
  editForm = !editForm
}

const close = () => {
  editForm = false
}

const editar = () => {
  dispatch('change')
}
</script>

<div class='row'>
  {form.nome}
  {form.descricao}
  {form.id}
<Btn type='button' icon={'form_icon_edit'} on:click={fastEdit}/>
<Btn type='button' icon={'form_icon_edit'} on:click={editar}/>
{#if editForm}
  <div transition:slide='{{duration: 500}}' class='form _fastEdit_container'>
    <input type="text">
    <input type="text">
    <Btn type='button' icon={'form_icon_block'} on:click={close}/>
    <Btn type='button' icon={'form_icon_check'} on:click={close} />
  </div>
{/if}
</div>
<style type='text/scss'>
  @import '../assets/common';
  @import '../assets/settings';

  .deafult_btn {
    background-color: #fff;
  }
</style>
