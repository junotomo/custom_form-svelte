<script>
  export let icon = false
  export let text = false
  export let classname = ''
  export let iconClass = ''

</script>
<button class:default_btn='{classname === ''}' class='custom_btn {classname}' on:click>

  {#if icon}
    <svg class:icon_default='{iconClass === ''}' class='{iconClass}' >
    	<use xlink:href="#{icon}" />
    </svg>
  {/if}

  {#if text}
      <span class='custom_btn_text'>{text}</span>
  {/if}

  <svg class="btn_ripple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <circle cx="300" cy="300" r="300" />
  </svg>

</button>

<style type='text/scss'>
  @import '../../assets/common';
  @import '../../assets/settings';

  .small_btn{
    width: 25px;
    height: 25px;
    margin: auto 0px;
    box-shadow: var(--btn-box-shadow);
    background-color: var(--white);
    border: var(--btn-border);
  }
  .no_border{
    background-color: var(--white);
    border: none;
  }

  .default_btn{
    min-width: 64px;
    height: 36px;
    color: var(--dark-gray);
    box-shadow: var(--btn-box-shadow);
    background-color: var(--white);
    border: var(--btn-border);
  }
  .inverted {
    background-color: var(--dark-gray);
    color: var(--white);
    border: none;
  }
  .pontilhado{
    background-color: #9999AD33;
    border: 2px dashed #67677B;
  }
  .btn_ripple {
    fill: var(--dark-gray);
    opacity: 0;
    pointer-events: none;
    width: 100%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    transition: transform 0.7s, opacity 1s;
    will-change: transform, opacity;
  }

  .custom_btn {
		align-items: center;
		background-image: none;
		border-radius: var(--btn-border-radius);
		box-sizing: border-box;

		cursor: pointer;
		display: inline-flex;
		font-size: var(--text-size);
		font-weight: 300;
		justify-content: center;
		outline: 0;
		overflow: hidden;
		padding:0.1em;
		position: relative;
	}

  .custom_btn:before {
    content: ' ';
    overflow: hidden;
    width: 0px;
  }

  .custom_btn:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  .custom_btn:not(:disabled):active {
    background-color: var(--dark-gray);
    background-image: none;
  }

  .custom_btn:not(:disabled):active > .btn_ripple {
  transform: translate(-50%, -50%) scale(0);
  opacity: 1;
  transition: 0s;
}
</style>
