import { NextApiRequest, NextApiResponse } from 'next';
import redaxios from 'redaxios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const secureCookie = !(!process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL.startsWith('http://'));
    // const cookieName = secureCookie ? '__Secure-next-auth.session-token' : 'next-auth.session-token';
    // const token = req.cookies[cookieName];

    // if (!token) return res.status(402).send('Access denied');

    const apiRes = await redaxios({
        url: process.env.TODAILY_GQL_GATE,
        method: 'post',
        headers: {
            Authorization: `Bearer ${process.env.TODAILY_GQL_TOKEN}`,
        },
        data: req.body,
    });

    return res.send(apiRes.data);
}
