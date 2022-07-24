import { getResume } from "../db";
import { getSocials } from "../db";

export async function get() {
    const resume = await getResume();
    const socials = await getSocials();

    return {
        headers: {
            'cache-control': 'public, max-age=1800'
        },
        body: { about: resume, socials }
    };
}
