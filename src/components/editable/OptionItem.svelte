<script>
  import Btn from '../fragments/Btn.svelte'
  import {createEventDispatcher} from 'svelte'

  export let grid = ''
  export let idx = ''
  export let option = ''
  export let type = ''
  export let editable = ''

  const prefix = type === 'checkbox_grade' ? 'square': 'circle'
  const dispatch = createEventDispatcher()

  let hide = true

  const remove = id => dispatch('delete', {id: id})
  const showDrag = () => hide = false
  const hideDrag = () => hide = true
  const drag = () => dispatch('drag')
</script>

  <div class='row' on:mouseover={showDrag} on:mouseleave={hideDrag}>
      <svg class:hideIcon='{hide}' class='icon_default no_border' on:mousedown={drag} on:touchstart={drag}>
        <use xlink:href="#form_icon_drag" />
      </svg>
    {#if grid === 0}
      <span class='prefix'>{1+idx}.</span>
    {:else if grid === 0 && prefix === 'square'}
      <div class='square'></div>
    {:else}
        <div class='circle'></div>
    {/if}

    <input class:editable='{editable === true}'class='input_option' type='text' bind:value={option.text} placeholder='opção'>
    <span class="input_line"></span>
    <Btn type='button'
      classname={'no_border'}
      icon={'form_icon_times'}
      on:click={() => remove(option.id)}
    />
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
    padding: .5em;
    gap: 5px;
  }

  .hideIcon{
    visibility:hidden;
  }

  .prefix{
    margin: auto .5em auto 0;
  }

  .input_option{
    border: none;
    color: var(--dark-gray);
    width: 70%;
    box-sizing: border-box;
    transition: outline 1.6s linear;
    &:focus {
      outline: none;
      border-bottom: 1px solid var(--dark-gray);
    }
  }

  .editable{
    border-bottom: 1px solid var(--light-gray);
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
