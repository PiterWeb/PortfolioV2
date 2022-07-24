import { deleteProject } from '../../../../db';
import type projectModel from '../../../../models/projectModel';

export async function post({ request }: { request: Request }) {
	const {id} : {id: projectModel["id"]} = await request.json();

	await deleteProject(id).catch((error) => {
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
			message: 'Project deleted'
		}
	};
}
