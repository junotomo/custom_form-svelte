<script>
  import ModalInputsList from './ModalInputsList.svelte'
  import {createEventDispatcher} from 'svelte'

  export let formID

  let components = ['text', 'single_dropdown', 'text_paragraph', 'escala','multipla', 'checkbox', 'checkbox_grade', 'multipla_grade']

  const dispatch = createEventDispatcher()

  const add = (component) => {
    dispatch('addInput', {
      component: component,
      id: formID
    })
  }

  const clickOutside = (node) => {
    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('click_outside', node)
        )
      }
    }
    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    }
  }

  const handleClickOutside = () => {
    dispatch('close')
  }

</script>

  <div class="modal_window" use:clickOutside on:click_outside={handleClickOutside}>
    {#each components as component}
      <div class='container_fake_item'on:click={() => add(component)}>
        <ModalInputsList {component}/>
      </div>
    {/each}
  </div>

<style type='text/scss'>
  @import '../../assets/common';

  .modal_window {
    @extend %default_container;
    position: absolute;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    z-index: 100;
    padding: 1.5em 2em;
  }
  .container_fake_item{
    cursor: pointer;
  }
</style>
