<script>
  import InputBlock from './InputBlock.svelte'
  import OptionsColumn from './OptionsColumn.svelte'
  import {forms} from '../../store/formulario'
  export let form = ''

  let options = ['test', 'teest', 'teeest']
  const twoColumns = ['checkbox_grade', 'multipla_grade']
  const prefix = form.type === 'checkbox_grade' ? 'square': 'circle'
  console.log(form)
</script>


<InputBlock title={form.title}>
  <slot>
  {#if twoColumns.includes(form.type)}
    <div class="columns">
      <OptionsColumn options={form.rows}/>
      <OptionsColumn options={form.columns} {prefix}/>
    </div>
  {:else}
    <div class='singleColumn'>
      <OptionsColumn {options}/>
    </div>

  {/if}
  </slot>

</InputBlock>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .columns{
    display: flex;
    justify-content: space-between;
  }
  .singleColumn{
    width: 60%;
  }
</style>
