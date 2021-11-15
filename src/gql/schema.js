/**
 * Defines the GraphQL schema for the application.
 */
import { gql } from "apollo-server-core";

export const typeDefs = gql`
    type Query {
        appName: String!
        appVersion: String!
        appDescription: String!
        appNumberOfDevelopers: Int!
        appDevelopers: [String!]!
        appScrumMaster: String!
        appIsDeployed: Boolean!
        appIsDeployedAt: String
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!): UserInfo!
    }

    type UserInfo {
        firstName: String!
        lastName: String!
        email: String!
        fullName: String!
        shortName: String!
        firstLetterInFirstName: String!
    }
`;
