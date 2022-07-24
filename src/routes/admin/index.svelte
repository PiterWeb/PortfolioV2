<script lang="ts">
	import type projectModel from 'src/models/projectModel';
	import type { social } from 'src/models/aboutModel';

	export let projects: projectModel[];
	export let socials: social[];
</script>

<div id="layout">
	<section>
		<h1>Admin</h1>

		<p>This is the admin page.</p>

		<hr />

		<div>
			<h2>Social Media</h2>

			{#each socials as social}
				<fieldset>
					<legend>{social.name}</legend>

					<input type="text" value={social.url} />
				</fieldset>
			{/each}
		</div>

		<hr />

		<div>
			<h2>About me</h2>
			<a id="navigation" sveltekit:reload href="/admin/about/edit-about">Edit</a>
		</div>
	</section>

	<section>
		<a id="navigation" href="/admin/project/create-project">Create new project</a>
		<h2>Projects</h2>

		{#each projects as project}
			<a href={`/admin/project/edit-project?id=${project.id}`}>
				<div class="project">
					<h3>{project.name}</h3>
					<p>{project.description}</p>
				</div>
			</a>
		{/each}
	</section>
</div>

<style>
	#layout {
		display: grid;
		grid-template-columns: 300px 1fr;
		grid-gap: 1.75rem;
		padding: 3rem;
	}

	.project {
		padding: 1.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	input {
		width: 85%;
	}

	a {
		text-decoration: none;
		color: black;
	}

	#navigation {
		color: rgb(113, 171, 190);
	}

	#navigation:hover {
		color: rgb(76, 158, 185);
	}
</style>
