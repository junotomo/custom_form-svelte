<script>
  export let type =''

  const oneColumn = ['multipla', 'checkbox', 'escala']
  const fakeMap = new Map()
  fakeMap.set('single_input', 'Texto curto')
  fakeMap.set('single_dropdown', 'Dropdown')
  fakeMap.set('single_paragrafo', 'Parágrafo')
  fakeMap.set('multipla', 'Escolha múltipla')
  fakeMap.set('checkbox', 'Checkboxes')
  fakeMap.set('escala', 'Escala Linear')
  fakeMap.set('checkbox_grade', 'Checkboxes(grade)')
  fakeMap.set('multipla_grade', 'Escolha múltipla(grade)')

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
    {#if oneColumn.includes(type)}
      <div class='grade_component_header_multi_choice'>
        <span>Lorem ipsum</span>
      </div>
      {#if type === 'escala'}
        <div class='escala_config'>
          <span>____ a ____</span>
          <span>Marcador</span>
          <span>Marcador</span>
        </div>
      {:else}
        {#each Array(3) as item, i}
          <div class='option'>
          {#if type === 'multipla'}
            <div class='circle'></div>
          {:else}
            <div class='square'></div>
          {/if}
            <span>Lorem</span>
          </div>
        {/each}
      {/if}
      <!-- else para duas colunas -->
    {:else}
      <div class='grade_component_header'>
        <span>Linhas</span>          <span>Colunas</span>
      </div>
      <div class='grade_component_body'>
        {#each Array(3) as item, i}
          <span>{i + 1} Lorem</span>
          <div class='option'>
            {#if type === 'multipla_grade'}
              <div class='circle'></div>
            {:else}
              <div class='square'></div>
            {/if}
            <span>Lorem</span>
          </div>
        {/each}
      </div>
    {/if}
    <!-- Fim da condicao multiplas escolhas -->
  </div>
{/if}

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

  %fake_component_style {
    padding: .5em 1em;
    display: flex;
    justify-content: space-between;
    & span {
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
  .escala_config{
    display: grid;
    & :first-child{
      margin-bottom: 1em;
    }
  }

  .option {
    display: flex;
    & span{
      margin: auto 0px;;
    }
  }

  .option_dot{
    display: flex;
    justify-content: flex-start;
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
