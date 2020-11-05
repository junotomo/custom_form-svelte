<script>
  import Btn from '../fragments/Btn.svelte'

  export let options = ''
  export let prefix= ''
</script>

<div class='options_grid'>
  {#each options as option, idx}
    <div class='row'>
      {#if prefix && prefix == 'circle'}
        <div class='circle'></div>
      {:else if prefix === 'square'}
        <div class='square'></div>
      {:else}
        <span class='prefix'>{1+idx}.</span>
      {/if}

      <input class='input_option' type='text' bind:value={option} placeholder='opção'>
      <Btn type='button'
        classname={'no_border'}
        icon={'form_icon_times'}
      />
    </div>
  {/each}
</div>


<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  %checkbox {
    border: 1px solid var(--dark-gray);
    height: 10px;
    width: 10px;
    margin: auto .5em auto 0;
    display: flex;
  }

  .row{
    display: flex;
    margin: .5em 0;
  }

  .prefix{
    margin: auto .5em auto 0;
  }

  .input_option{
    border: none;
    color: var(--dark-gray);
    width: 70%;
    box-sizing: border-box;
    &:focus {
      outline-width: 0px;
      border-bottom: 1px solid var(--dark-gray);
    }
  }
  
  .square {
    @extend %checkbox;
    border-radius: 25%;
  }

  .circle {
    @extend %checkbox;
    border-radius: 50%;
  }
</style>
