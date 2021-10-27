import gql from 'graphql-tag';

export const posts = gql`
    query posts {
        posts {
            title
            promo
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
