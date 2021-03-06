import gql from 'graphql-tag';

export const posts = gql`
    query posts {
        posts {
            title
            slug
            promo
            published_at
            author {
                email
                name
            }
            channels {
                title
            }
            tags {
                title
                rgb
            }
            comments {
                description
                reactions {
                    emoji
                    author {
                        email
                        name
                    }
                }
            }
            reactions {
                emoji
                author {
                    email
                    name
                }
            }
        }
    }
`;

export const postBySlug = gql`
    query postsBySlug($slug: String!) {
        posts(where: { slug: $slug }) {
            title
            slug
            description
            published_at
            author {
                email
                name
            }
            channels {
                title
            }
            tags {
                title
                rgb
            }
            comments {
                description
                reactions {
                    emoji
                    author {
                        email
                        name
                    }
                }
            }
            reactions {
                emoji
                author {
                    email
                    name
                }
            }
        }
    }
`;
