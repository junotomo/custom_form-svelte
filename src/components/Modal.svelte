<script>
  import Fake from './fakeComponents/Fake.svelte'
  import {createEventDispatcher} from 'svelte'

  let types = ['single_input', 'single_dropdown', 'single_paragrafo','multipla', 'checkbox', 'checkbox_grade']

  const dispatch = createEventDispatcher()

  const add = (component) => {

  }
  const handleOuterClick = (event) => {
    if (
      state.closeOnOuterClick && (
        event.target === background || event.target === wrap
      )
    ) {
      event.preventDefault();
    console.log('fechado')
    }
  }

  function clickOutside(node) {

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

 function handleClickOutside(event) {
   dispatch('close')
 }
</script>


  <div class="modal_window" use:clickOutside on:click_outside={handleClickOutside}>
    {#each types as type}
      <div class='container_fake_item'on:click={add(type)}>
        <Fake type={type}/>
      </div>
    {/each}
  </div>

<style type='text/scss'>
  @import '../assets/common';

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
