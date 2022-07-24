<script>
	import { fly } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 500;
</script>

<div id="transition-outer">
	{#key url}
		<main id="transition-inner"
			in:fly={{ x: -5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
			out:fly={{ x: 5, duration: pageTransitionDuration }}
		>
			<slot />
		</main>
	{/key}
</div>

<style>

    #transition-outer {
        display: grid;
        grid-template: 1fr 1fr;
    }
    #transition-inner {
        grid-row: 1;
        grid-column: 1;
    }

</style>
