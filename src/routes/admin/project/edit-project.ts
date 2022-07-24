import { getProjectById } from "../../../db";

export async function get({ request }: { request: Request }) {

    const {url} = request;

    const Url = new URL(url)

    const idString = Url.searchParams.get('id')

    if (!idString) {
        return {
            status: 400,
            body: {
                error: 'Missing id'
            }
        }
    }

    const id = Number(idString)

    const project = await getProjectById(id).catch(err => {
        return {
            status: 500,
            body: {
                error: err
            }
        }
    })

    return {
        status: 200,
        body: {
            project
        }
    }

}