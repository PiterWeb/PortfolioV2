<script lang="ts">
	import { onMount } from 'svelte';
	import { user } from '../../userStore';
	import { parse } from 'cookie';
	import { browser } from '$app/env';

	let username: string;
	let password: string;

	onMount(() => {
		const cookies = parse(document.cookie);

		if (cookies.session) {
			const userCookie = JSON.parse(cookies.session);

			user.set({
				username: userCookie.username,
				password: userCookie.password
			});
		}
	});

	const changeCredentials = () => {
		if (username === null && password === null) return null;

		user.set({
			username,
			password
		});
	};

	const login = (user: { username: string; password: string }) =>
		new Promise((resolve, reject) => {
			const { username, password } = user;

			if (username === '' || password === '') {
				return reject(new Error('Username or password is null'));
			}

			if (browser) {
				fetch('/api/admin/auth', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username,
						password
					})
				})
					.then((res) => {
						if (res.status === 200) {
							return resolve(res);
						}
						return reject(new Error('Invalid credentials'));
					})
					.catch((err) => reject(err));
			}
		});
</script>

{#await login($user)}
	<h3 style="text-align:center">Loading ...</h3>
{:then}
	<a href="../">Go back</a>
	<slot />
{:catch error}
	<div class="container">
		<h1>Admin</h1>
		<hr />
		<input placeholder="username" type="text" bind:value={username} />
		<input placeholder="password" type="password" bind:value={password} />
		<button on:click={changeCredentials}> Login </button>
	</div>
{/await}

<style>
	a {
		color: rgb(113, 171, 190);
		text-decoration: none;
		margin-left: 2rem;
	}

	a:hover {
		color: rgb(76, 158, 185);
	}
</style>
