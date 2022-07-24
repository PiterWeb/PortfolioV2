<script lang="ts">
	import type projectModel from 'src/models/projectModel';
	import GithubIcon from '../../components/githubIcon.svelte';
	import imgPlaceholder from '../../public/img-placeholder.png';
	import Lazy from 'svelte-lazy';
	export let projects: projectModel[];
</script>

<svelte:head>
	<title>PiterDev \ Proyectos 🖥</title>
	<meta name="description" content="Algunos de los proyectos más destacados de PiterDev" />
</svelte:head>

<section id="projectSection">
	{#each projects as { name, description, github_url, image }}
		<Lazy height={300} fadeOption={{ delay: 500, duration: 800 }}>
			<article class="project">
				<header>
					<img src={image === '' ? imgPlaceholder : image} alt={`Project ${name}`} />
				</header>
				<footer>
					<h2>{name}</h2>
					<p>{description}</p>
					<button on:click={() => (window.location.href = github_url)}>
						<GithubIcon />
						<i>Github</i>
					</button>
				</footer>
			</article>
		</Lazy>
	{/each}
</section>

<style>
	#projectSection {
		display: grid;
		grid-template-columns: 1;
		grid-gap: 1.75rem;
		padding: 3rem;
	}

	.project {
		background-color: #fafafa;
		border-radius: 0.5rem;
		padding: 10%;
		width: 80%;
		display: flex;
		flex-direction: row;
	}

	.project > header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.project > footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 100%;
		min-width: 50%;
	}

	.project > footer > h2 {
		margin: 0;
	}

	.project > header > img {
		max-width: 75%;
		min-width: 8rem;
		height: auto;
	}

	button {
		background-color: #fafafa;
		color: #fafafa;
		border: none;
		border-radius: 50%;
		font-size: 1.25rem;
		text-decoration: none;
		padding: 0;
		width: 5rem;
		height: 5rem;
		transition: all 0.3s ease-in-out;
	}

	button:hover {
		background-color: #000;
		transition: all 0.5s ease;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.project {
			flex-direction: column;
		}
	}
</style>
