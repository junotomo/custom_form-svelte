<script>
  import Btn from '../fragments/Btn.svelte'

  export let form = ''

  let showIcon = '#form_icon_block'

  const hideComponent = () => {
    form.show = !form.show
    showIcon = form.show ? '#form_icon_block' : '#form_icon_disabled'
  }
</script>

  <div class='editable_text_container' class:extend='{form.size ==='long'}'>
    <span class='placeholder'>{form.placeholder}</span>
    <div class='icon_combo'>
      <svg class='icon_default hide preDetermined' on:click={hideComponent}>
        <use xlink:href='{showIcon}' />
      </svg>
      <svg class='icon_default preDetermined' >
      	<use xlink:href="#form_icon_drag" />
      </svg>
    </div>
  </div>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .editable_text_container{
    @extend %default_container;
    width: 20%;
    display: flex;
    justify-content:space-between;
    padding: .5em 1em;
  }

  .extend{
    width: 45%;
  }
  .preDetermined{
    fill:var(--light-gray)
  }
  .hide {
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      box-shadow: var(--btn-box-shadow);
    }
  }
  .placeholder {
    min-width: 70px;
  }
</style>
