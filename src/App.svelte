<script>
	import FormList from './containers/FormList.svelte'
	import FormCreate from './containers/FormCreate.svelte'
	import FormView from './containers/FormView.svelte'
	import Sprite from './components/svg/Sprite.svelte'

	let currentPage = FormCreate

	const pages = [FormList, FormCreate, FormView]

	const changePage = (event) => {
		let currentIndex = pages.findIndex(page => page === currentPage)
		currentIndex += event.detail.index
		currentPage = pages[currentIndex]
		console.log(currentIndex)
	}
</script>
<Sprite/>
<main class='main-container'>
	<h1>Pŕe - configuração NIMBLE</h1>
	<svelte:component on:change={changePage} this={currentPage}/>
</main>

<style type='text/scss'>
	.main-container {
		display: grid;
		background-color: #EFEFF4;
		max-width: 792px;
		margin: auto;
	}
	</style>
