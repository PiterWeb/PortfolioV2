<script lang="ts">
	import type aboutModel from 'src/models/aboutModel';
	import type {social} from 'src/models/aboutModel';

	
	export let about: aboutModel;
	export let socials: social[];
</script>

<svelte:head>
	<title>PiterDev \ Sobre Mí 🖥</title>
	<meta name="description" content="Sobre PiterDev" />
</svelte:head>

<section id="main">
	<h1>{about.title}</h1>

	<section id="content">{about.content}</section>

	<section id="social">
		<p>Mi email: piterzdev@gmail.com</p>

		{#each socials as { name, url }}
			<a href={url}>{name}</a>
		{/each}
	</section>
</section>

<style>
	h1 {
		font-size: 4em;
		margin: 0.5em 0;
	}

	#content {
		font-size: 1.20em;
		margin: 0.5em 0;
		text-indent: 5%;
		line-break: strict;
		line-clamp: 2;
		line-height: 1.8;
		white-space: pre-wrap;
	}

	#main {
		padding: 1.5rem;
		background: #fafafa;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 3rem;
	}

	#social {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 0.25rem;
		font-size: 1em;
	}

	section a {
		margin: 0 0.5rem;
		color:black;
	}

	section a:hover {
		text-decoration-color: #838282;
	}

</style>
