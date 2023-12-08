import { Resolvers } from "@/Config/Resolvers";
import { TypeDefs } from "@/Config/TypeDefs";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";

const server = new ApolloServer({
  typeDefs: TypeDefs,
  resolvers: Resolvers,
});

export default startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({ req, res }),
});
