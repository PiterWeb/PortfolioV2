<script>
	import { page } from '$app/stores';
	import Icon from '../public/icon.png';

	let pathname = '';

	$: pathname = $page.url.pathname;
</script>

<nav>
	<section id="main">
		<a sveltekit:prefetch href="/">
			<img src={Icon} alt="PiterDev Icon" />
		</a>
	</section>
	<section id="nav-links">
		<a sveltekit:prefetch class:active={`/` == pathname} href="/"> Sobre mi </a>
		<a sveltekit:prefetch class:active={`/projects` == pathname} href="/projects"> Proyectos </a>
	</section>
</nav>

<style>
	nav {
		background-color: #fafafa;
		margin: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border-radius: 0 0 1rem 1rem;
	}

	section#nav-links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}

	section#nav-links > a.active {
		color: #fafafa;
		background-color: black;
	}

	section#nav-links > a {
		background-color: #fafafa;
		color: black;
		padding: 1rem;
		border-left: 1px solid black;
		border-right: 1px solid black;
		transition: all 0.3s ease-in-out;
	}

	section#nav-links > a:hover {
		color: #fafafa;
		background-color: black;
		transition: all 0.5s ease;
	}

	a {
		text-decoration: none;
	}

	img {
		max-width: 8rem;
		height: auto;
	}

	@media (max-width: 768px) {
		nav {
			justify-content: center;
		}
	}
</style>
