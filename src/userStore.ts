import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const user = writable({
	username: '',
	password: ''
});

export const language = browser ? navigator.language : 'es-ES';