import { ApolloServer } from "@apollo/server";
import { userSchema } from "../graphql/user/index";
import { connectDB } from "../db/db";

async function createApolloServer() {
  const server = new ApolloServer({
    typeDefs,

    resolvers: {
      Query: {
        ...userSchema.resolvers.queries,
      },
      Mutation: {
        ...userSchema.resolvers.mutations,
      },
    },
  });

  connectDB();

  return server;
}

export default createApolloServer;
