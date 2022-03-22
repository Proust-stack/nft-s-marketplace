import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'usysm4ng',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skDjqkum4ZfjHcFR2xiuuzuiEB4jKM9TWFCPEMfUts6u3QTP9ZLt4mwwdzTTv72E6fUrwS8t592fK18EggfTjbtTUihTUFCFO9ViyEpOncKk1xtAw8R9Ayef8eWO3tVPZYOgxYbC7EJJimWPwSkMrrsL9QUZvoqM6673rhDhvfTpOwyQ7bBX',
    useCdn: false,
})