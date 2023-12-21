export const Resolvers = {
  Query: {
    getMessage: async (_parent: any, args: any, context: any) => "Hello there!",
  },

  Mutation: {
    addMessage: async (_parent: any, args: any, context: any) => {
      return args.message + " " + "any thing from mutation!";
    },
  },
};
