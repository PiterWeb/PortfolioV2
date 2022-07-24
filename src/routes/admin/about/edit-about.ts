import { getResume } from "../../../db";


export async function get() {

    const resume = await getResume();

    return {
        body: { about: resume }
    }

}