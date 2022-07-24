<script lang="ts"> 

    import Texteditor from "../../../components/texteditor.svelte";

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
		method: 'create',
		id: undefined,
		name:'',
		description:'',
		imgUrl: '',
		ghUrl: ''
	};

</script>

<Texteditor {options} />