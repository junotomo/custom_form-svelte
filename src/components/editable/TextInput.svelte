<script>
  import Btn from '../fragments/Btn.svelte'
  import InputBlock from './InputBlock.svelte'

  export let form = ''

  form.title = form.title ? form.title : ''
  const dummyText = form.type === 'single_input' ? 'Texto de resposta curta ...' : 'Texto de resposta longa ...'
</script>

  <InputBlock title={form.title}>
    <slot>
      <div class='dummy_text'>
        {dummyText}
      </div>
    </slot>
  </InputBlock>

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  .dummy_text {
    color: var(--light-gray)
  }
</style>
