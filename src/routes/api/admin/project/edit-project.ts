import { editProject } from '../../../../db';
import type projectModel from '../../../../models/projectModel';


export async function post({ request }: { request: Request }) {
	const project : projectModel = await request.json();

	await editProject(project).catch((error) => {
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
			message: 'Project edited'
		}
	};
}
