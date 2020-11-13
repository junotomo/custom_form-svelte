<script>
  import {forms, getInputs} from '../../store/formulario'

  export let formID = ''
  export let inputID = ''
  export let editable = ''

  let escala = getInputs(formID, inputID)

</script>

  <div class='escala_grid'>
    <div class='marks_box'>
    <div>
      <span>1</span>
      <input class:editable='{editable === true}' class='marks' on:change={() => console.log($forms)} type="text" bind:value={escala.start} placeholder='Marcador(opcional)'>
    </div>
    <div>
      <span>
          {escala.range}
      </span>
      <input class:editable='{editable === true}' class='marks' type="text" bind:value={escala.end} placeholder='Marcador(opcional)'>
    </div>
    </div>

    <div class='escala_box'>
      <span class='initialVaule'>1</span>
      <span class='divisor'>à</span>
      <select bind:value={escala.range} >
        {#each Array(9) as counter, idx}
          <option value={2+ idx}>{2+idx}</option>
        {/each}
      </select>
    </div>

  </div>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .marks {
    @extend %default_input;
    border: none;
    &::placeholder {
        color: var(--light-gray);
    }
    &:focus {
      border-bottom: 1px solid var(--dark-gray);
    }
  }

  .editable {
    border-bottom: 1px solid var(--light-gray);
  }
  .escala_grid {
    display: flex;
    justify-content: space-between;
  }
  .marks_box {
    display: grid;
    grid-gap: 8px;
  }

  .initialVaule{
    border-bottom: 1px solid var(--light-gray);
    background-color: transparent;
    padding: 0 .7em;
  }

  .escala_box{
    width: 80px;
    box-sizing: border-box;
    & select{
      appearance: none;
      border: none;
      color: var(--dark-gray);
      border-bottom: 1px solid var(--light-gray);
      background-color: transparent;
      width: 25px;
      padding: 0 .5em;

    }
    & select:focus {
      outline: none;
    }
  }
  .divisor{
    padding: .5em;
  }
</style>
