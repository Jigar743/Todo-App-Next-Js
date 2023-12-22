import { Resolvers } from "@/Server/Config/Resolvers";
import { TypeDefs } from "@/Server/Config/TypeDefs";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const server = new ApolloServer({
  typeDefs: TypeDefs,
  resolvers: Resolvers,
});

export default startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({ req, res }),
});
