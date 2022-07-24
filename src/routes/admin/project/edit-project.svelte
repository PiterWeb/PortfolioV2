<script lang="ts">
	import Texteditor from '../../../components/texteditor.svelte';
	import type projectModel from '../../../models/projectModel';

	export let project: projectModel;

	const { id, name, description, github_url, image } = project;

	type methodType = 'create' | 'edit';


	type optionsType = {
		method: methodType;
		id?: number;
		name: string;
		description: string;
		imgUrl: string;
		ghUrl: string;
	};

	export let options: optionsType = {
		method: 'edit',
		id: id,
		name,
		description,
		imgUrl: image,
		ghUrl: github_url
	};
</script>

<div>
	<Texteditor {options} />
</div>
