/** @type {import('@sveltejs/kit').RequestHandler} */

import { getProjects, getSocials } from '../../db';

export async function get() {
	const projects = await getProjects();
	const socials = await getSocials();

	return {
		headers: {
			'cache-control': 'public, max-age=1800'
		},
		body: { projects, socials }
	};
}
