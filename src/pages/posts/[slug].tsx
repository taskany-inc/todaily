import React from 'react';

import { getGQL, Post } from '../../utils/gql';
import { H1 } from '../../components/Typography/Typography';

interface PageProps {
    post: Post;
}

export default function Page({ post }: PageProps) {
    return <H1>{post.title}</H1>;
}

export async function getStaticPaths() {
    const gqlSdk = getGQL();
    const { posts } = await gqlSdk.posts();

    return {
        paths: posts!.map((post) => ({
            params: { slug: post!.slug },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const gqlSdk = getGQL();
    const { posts } = await gqlSdk.postsBySlug({ slug: params.slug });

    return { props: { post: posts![0] }, revalidate: 10 };
}

