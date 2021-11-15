/**
 * Defines the resolver for the GraphQL schema.
 */
export const resolvers = {
    Query: {
        appName: () => "Test Graphql Application",
        appVersion: () => "1.0.0",
        appDescription: () => "This is a test application",
        appNumberOfDevelopers: () => 12,
        appDevelopers: () => ["Ashvin Pal", "Oscar", "Scott"],
        appScrumMaster: () => "Juan",
        appIsDeployed: () => false,
        appIsDeployedAt: () => null,
    },
    Mutation: {
        createUser: (parent, { firstName, lastName, email }) => ({
            firstName: firstName,
            lastName: lastName,
            email: email,
        }),
    },
    UserInfo: {
        fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
        shortName: (parent) => `${parent.firstName[0]}${parent.lastName[0]}`.toUpperCase(),
        firstLetterInFirstName: (parent) => parent.firstName[0].toUpperCase(),
    },
};
