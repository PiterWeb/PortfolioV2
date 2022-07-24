<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url: url.href } });
</script>

<script>
	import PageTransition from '../components/pagetransition.svelte';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	export let url = '';
</script>

<section>
	<Navbar />
</section>

<div>
	<PageTransition {url}>
		<slot />
	</PageTransition>
</div>

<section>
	<Footer />
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;400&display=swap');

	div {
		font-family: 'Cairo', sans-serif;
	}

	section {
		font-family: 'Cairo', sans-serif;
	}
</style>
