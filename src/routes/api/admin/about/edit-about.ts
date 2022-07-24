import type aboutModel from "../../../..//models/aboutModel";

import { editResume } from "../../../../db";

export async function post({request }: { request: Request }) {

    const about : aboutModel = await request.json();

    await editResume(about).catch((error) => {
        return {
            status: 500,
            body: {
                error
            }
        };
    })

    return {
        status: 200,
        body: {
            message: 'About edited'
        }
    }
    
}