import { checkUser } from '../../../db';
import { serialize } from 'cookie';

export async function post({ request }: { request: Request }) {

	const { username, password }: { username: string; password: string } = await request.json();

	const userExists = await checkUser({ username, password });

	if (userExists) {
        return {
            status: 200,
            body: {
                message: 'Logged in successfully'
            },
            headers: {
                'Set-Cookie': serialize('session', JSON.stringify({ username, password }), {
                    path: '/admin',
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 Year
                    sameSite: 'strict'
                })
            }
        };
	}

    return {
        status: 401,
        body: {
            message: 'Invalid username or password'
        }
    };

}
