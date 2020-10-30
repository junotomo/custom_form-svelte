<script>
  import Btn from '../fragments/Btn.svelte'

  export let form = ''
</script>

  <div class='editable_text_container' class:extend='{form.size ==='long'}'>
    <span class='placeholder'>{form.placeholder}</span>
    <div class='icon_combo'>
      <svg class='icon_default hide preDetermined'>
        <use xlink:href="#form_icon_block" />
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
    width: 148px;
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-gap: .2em;
    padding: .5em 1em;
  }

  .extend{
    width: 352px;
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
