import { createProject } from '../../../../db';
import type projectModel from '../../../../models/projectModel';

export async function post({ request }: { request: Request }) {
	const project: projectModel = await request.json();


	await createProject(project).catch((error) => {
		console.error(error);
		return {
			status: 500,
			body: {
				error
			}
		};
	});

	return {
		status: 200,
		body: {
			message: 'Project created'
		}
	};
}
