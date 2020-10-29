<script>
  export let type =''
  const fakeMap = new Map()
  fakeMap.set('single_input', 'Texto curto')
  fakeMap.set('single_dropdown', 'Dropdown')
  fakeMap.set('single_paragrafo', 'Parágrafo')
  fakeMap.set('multipla', 'Escolha múltipla')
  fakeMap.set('checkbox', 'Checkboxes')
  fakeMap.set('checkbox_grade', 'Checkboxes(grade)')
  let title = fakeMap.get(type)
  let items = 3
</script>

  <span class='fake_component_title'>{title}</span>
  {#if type.includes('single')}
    <div class:wider='{type === 'single_paragrafo'}' class:fake_line_component='{type !=='paragrafo'}'>
      <span>Lorem ipsum</span>
      {#if type == 'single_dropdown'}
        <svg  class='icon_default'>
          <use xlink:href="#form_icon_chevron_down" />
        </svg>
      {/if}
    </div>
  {:else}
    <div class='grade_component'>
      {#if type !== 'multipla'}
        <div class='grade_component_header'>
          <span>Linhas</span>
          <span>Colunas</span>
        </div>

        <div class='grade_component_body'>
          {#each Array(3) as item, i}
            <span>{i + 1} Lorem</span>
            <span class='option'>
              {#if type === 'checkbox'}
                <div class='circle'></div>
              {:else}
                <div class='square'></div>
              {/if}
              Lorem</span>
          {/each}
        </div>
      {:else}
        <div class='grade_component_header_multi_choice'>
          <span>Lorem ipsum</span>
        </div>
        {#each Array(3) as item, i}
        <span class='option_dot'>
          <div class='circle_dot'><div class='dot'></div></div>
          Lorem
        </span>
        {/each}
      {/if}

    </div>
  {/if}

<style type='text/scss'>
  @import '../../assets/settings';
  @import '../../assets/common';

  %checkbox {
    border: 1px solid var(--dark-gray);
    height: 7px;
    width: 7px;
    margin: auto;
    display: grid;
  }
  
  %fake_component_style {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    & span {
      margin: auto;
      font-size: var(--text-size)
    }
  }

  .fake_component_title{
    font-size: 14px;
    color: var(--dark-gray);
    margin-bottom: 10px;
    margin-left: 10px;
    display: grid;
  }

  .wider{
    @extend %default_container;
    @extend %fake_component_style;
    padding-bottom: 3em;
  }

  .fake_line_component{
    @extend %default_container;
    @extend %fake_component_style;
  }

  .grade_component {
      @extend %default_container;
      padding: 1em;
      display: grid;
      color: var(--dark-gray);
      & span {
        font-size: var(--text-size)
      }
  }
  .grade_component_body, .grade_component_header{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .grade_component_header, .grade_component_header_multi_choice {
    margin-bottom: 10px;
  }
  .option {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column: 8px;
  }
  .option_dot{
    display: flex;
    justify-content: flex-start;
  }
  .circle_dot {
    border: 1px solid var(--dark-gray);
    height: 7px;
    width: 7px;
    display: grid;
    border-radius: 50%;
    margin: auto 8px auto 0px;
  }
  .dot{
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--dark-gray);
    margin: auto;

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
