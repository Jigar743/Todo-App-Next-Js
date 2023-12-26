import { resolvers, typeDefs } from "@/Server/modules";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    console.error("Error from graphql server side:", error);
    return error;
  },
  includeStacktraceInErrorResponses: true,
});

export default startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({ req, res }),
});
