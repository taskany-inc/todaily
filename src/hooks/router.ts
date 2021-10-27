import { useRouter as NextRouter } from 'next/router';

export const routes = {
    feed: () => '/',
    stream: () => '/stream',
    createPost: () => '/posts/new',
    post: (slug: string) => `/posts/${slug}`,
    createChannel: () => '/channels/new',
    channel: (id: string) => `/channels/${id}`,
};

export const useRouter = () => {
    const router = NextRouter();

    return {
        feed: () => router.push(routes.feed()),
        stream: () => router.push(routes.stream()),
        post: (slug: string) => router.push(routes.post(slug)),
        createPost: () => router.push(routes.createPost()),
        channel: (id: string) => router.push(routes.channel(id)),
        createChannel: () => router.push(routes.createChannel()),
    };
};
