<script lang="ts">

	import {goto } from "$app/navigation";

	const methods = {
		create: function () {
			fetch('/api/admin/project/create-project', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name,
					description,
					image: imgUrl,
					github_url: ghUrl
				})
			}).then(res => res.json()).then(res => {
				alert('Project created successfully');
				goto('/admin');
			});
		},
		edit: function () {
			fetch('/api/admin/project/edit-project', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id,
					name,
					description,
					image: imgUrl,
					github_url: ghUrl
				})
			}).then((res) => res.json())
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
					alert('Project updated successfully');
				}
			})
		},
		delete: function () {
			fetch('/api/admin/project/delete-project', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id
				})
			}).then((res) => res.json())
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
					goto('/admin');
					alert('Project deleted successfully');
				}
			})
		}
	};

	type methodType = 'create' | 'edit';

	type optionsType = {
		method: methodType,
		id?: number,
		name: string,
		description: string,
		imgUrl: string,
		ghUrl: string
	}

	export let options: optionsType = {
		method: 'create',
		id: 0,
		name: '',
		description: '',
		imgUrl: '',
		ghUrl: ''
	}

	let {method, id, name, description, imgUrl, ghUrl} = options;

</script>

<section>
	<fieldset>
		<input type="text" bind:value={name} placeholder="Name" />

		<input type="text" bind:value={ghUrl} placeholder="Github URL" />

		<input type="text" bind:value={imgUrl} placeholder="Image URL" />
	</fieldset>

	<textarea bind:value={description} placeholder="Description" />

	<button on:click={methods[method]}>{method.toUpperCase()}</button>

	{#if method === 'edit'}
		<button on:click={methods.delete}>DELETE</button>
	{/if}
</section>

<style>
	input {
		width: 12rem;
	}

	textarea {
		width: 100%;
		height: 15rem;
		resize: none;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		gap: 2rem;
	}
</style>
