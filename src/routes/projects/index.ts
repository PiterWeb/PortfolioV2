

/** @type {import('@sveltejs/kit').RequestHandler} */

import { getProjects } from '../../db';

export async function get() {
	const projects = await getProjects();

	return {
		headers: {
			'cache-control': 'public, max-age=3600'
		},
		body: { projects }
	};
}
