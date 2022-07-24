<script lang="ts">
	import type aboutModel from '../../../models/aboutModel';

	export let about: aboutModel;

	let content = about?.content;
	let title = about?.title;

	const handleSave = (content: string) => {
		fetch('/api/admin/about/edit-about', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				content,
				title
			})
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.error) {
					alert(res.error);
				} else {
					alert('About updated successfully');
				}
			});
	};
</script>

<section>
	<h2>{title}</h2>

	<textarea bind:value={content} />

	<button on:click={() => handleSave(content)}> Save </button>
</section>

<style>
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
