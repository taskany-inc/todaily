import { GraphQLClient } from 'graphql-request';

import { getSdk } from '../@generated/sdk';

export * from '../@generated/sdk';

export const getGQL = () => {
    const gqlClient = new GraphQLClient(process.env.TODAILY_GQL_GATE!);
    gqlClient.setHeader('Authorization', `Bearer ${process.env.TODAILY_GQL_TOKEN}`);

    return  getSdk(gqlClient);
};
