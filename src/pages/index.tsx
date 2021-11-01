import styled, { css } from 'styled-components';

import { getGQL, Post } from '../utils/gql';
import { textColorPrimary, textColorSecondary, iconColorPrimary } from '../@generated/themes';
import { Link } from '../components/Link/Link';
import { Icon } from '../components/Icon/Icon';
import { routes } from '../hooks/router';

const timeAgo = (previous: string) => {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = Date.now() - Date.parse(previous);

    if (elapsed < msPerMinute) {
        return `${Math.round(elapsed / 1000)} seconds ago`;
        // eslint-disable-next-line no-else-return
    } else if (elapsed < msPerHour) {
        return `${Math.round(elapsed / msPerMinute)} minutes ago`;
    } else if (elapsed < msPerDay) {
        return `${Math.round(elapsed / msPerHour)} hours ago`;
    } else if (elapsed < msPerMonth) {
        return `${Math.round(elapsed / msPerDay)} days ago`;
    } else if (elapsed < msPerYear) {
        return `${Math.round(elapsed / msPerMonth)} months ago`;
    } else {
        return `${Math.round(elapsed / msPerYear)} years ago`;
    }
};

const StyledFeedPost = styled.div`
    position: relative;
    padding-left: 2px;
    padding-bottom: 40px;

    max-width: 800px;
`;

const StyledFeedPostTitle = styled.div`
    display: flex;
    align-items: center;

    font-size: 32px;
    font-weight: 500;
    color: ${textColorPrimary};
`;

const StyledFeedPostMeta = styled.div`
    font-size: 14px;
    color: ${textColorSecondary};
`;

const StyledFeedPostPromo = styled.div`
    padding-top: 20px;

    font-size: 16px;
    color: ${textColorPrimary};
`;
const StyledFeedPostActivity = styled.div`
    padding-top: 20px;

    font-size: 16px;
    color: ${textColorPrimary};
`;

const StyledFeedPostComments = styled.div`
    display: flex;
    align-items: baseline;
`;

const StyledFeedPostCommentsCount = styled.span`
    display: flex;

    padding-left: 10px;

    font-size: 16px;
`;

const StyledFeedPostReactions = styled.div``;

const StyledFavoriteTrigger = styled.div`
    position: absolute;
    top: 10px;
    margin-left: -40px;
`;

const StyledTag = styled.span<{ borderColor: string; backgroundColor: string }>`
    display: inline-block;

    padding: 4px 10px;

    margin-left: 10px;

    border-radius: 20px;
    border-width: 1px;
    border-style: solid;

    ${({ borderColor, backgroundColor }) => css`
        border-color: ${borderColor};

        background-color: ${backgroundColor};

        color: ${borderColor};
    `}

    font-size: 12px;
    font-weight: 500;
`;

const Tag: React.FC<{ rgb: string }> = ({ rgb, children }) => {
    const borderColor = `rgba(${rgb},1)`;
    const backgroundColor = `rgba(${rgb},.15)`;

    return (
        <StyledTag borderColor={borderColor} backgroundColor={backgroundColor}>
            {children}
        </StyledTag>
    );
};

interface HomeProps {
    posts?: Post[];
}

export default function Home({ posts }: HomeProps) {
    if (!posts) return <>No posts yet</>;

    return (
        <>
            {posts.map((post) => {
                const author = post?.author?.name;
                const channel = post?.channels ? ` in ${post?.channels[0]?.title}` : '';
                const time = timeAgo(post?.published_at);

                return (
                    <StyledFeedPost key="title">
                        <StyledFavoriteTrigger>
                            {/* <Icon type="heart" size="s" color="#fff" /> */}
                        </StyledFavoriteTrigger>

                        <StyledFeedPostTitle>
                            <Link type="inline" href={routes.post(post.slug!)}>
                                {post?.title}
                            </Link>
                            {post?.tags?.map((tag) => (
                                <Tag key={tag?.title} rgb={tag?.rgb!}>
                                    {tag?.title}
                                </Tag>
                            ))}
                        </StyledFeedPostTitle>

                        <StyledFeedPostMeta>
                            {author} posted {channel} {time}
                        </StyledFeedPostMeta>
                        <StyledFeedPostPromo>{post?.promo}</StyledFeedPostPromo>
                        <StyledFeedPostActivity>
                            <StyledFeedPostComments>
                                <Icon type="chat" size="s" color={iconColorPrimary} />
                                <StyledFeedPostCommentsCount>{post?.comments?.length}</StyledFeedPostCommentsCount>
                            </StyledFeedPostComments>
                            <StyledFeedPostReactions></StyledFeedPostReactions>
                        </StyledFeedPostActivity>
                    </StyledFeedPost>
                );
            })}
        </>
    );
}

export async function getStaticProps() {
    const gqlSdk = getGQL();
    const { posts } = await gqlSdk.posts();

    return {
        props: { posts },
        revalidate: 10,
    };
}
