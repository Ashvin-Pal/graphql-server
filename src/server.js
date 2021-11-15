/**
 * Libraries and dependencies
 */
import { ApolloServer } from "apollo-server";
/**
 * GraphQL schema definition
 */
import { resolvers, typeDefs } from "./gql";
/**
 * GraphQL server instance
 */
const server = new ApolloServer({ typeDefs, resolvers });
/**
 * Start the server
 */
server.listen().then(({ url }) => console.log(`🚀 GraphQl server playground ready at ${url}`));
