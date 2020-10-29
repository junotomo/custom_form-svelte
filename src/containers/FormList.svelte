<script>
  import FormListItem from '../components/FormListItem.svelte'
  import {createEventDispatcher} from 'svelte'
  import Btn from '../components/fragments/Btn.svelte'

  const dispatch = createEventDispatcher()
  let test = [
    {
     nome: 'teste',
     descricao: 'xxxx mas não é porn',
     id: '123234444'
    },
    {
     nome: 'teste2',
     descricao: 'xxxx mas não é porn',
     id: '1232dsfsfs34444'
    },
    {
     nome: 'teste3',
     descricao: 'xxxx mas não é porn',
     id: '1232344eerw44'
    }
]

let editForm = false

const edit = () => {
  dispatch('change', {index: 1})
}

</script>

<div class='formList_container'>

  <div class='header'>
    <h4>Lista  de Pré-formulários</h4>
    <Btn type='button' text={'Adicionar formulário'} on:click={edit}/>
  </div>

  <div class='formList_container-grid'>
    {#each test as form}
      <FormListItem {form} on:change={edit}/>
    {/each}
  </div>

</div>


<style type='text/scss'>
  .formList_container {
    background-color: #fff;
		box-shadow: -5px 5px 10px #7F7F7F33;
		border-radius: 10px;
		padding: 30px 40px;
    display: grid;
    .header{
      display: flex;
      justify-content:space-between;
    }
  }

  .formList_container-grid{
    display: grid;
    .row{

    }
  }
</style>
