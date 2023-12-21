export const TypeDefs = `#graphql
  type Query {
    getMessage: String
  }
  
  type Mutation {
    addMessage(message: String): String
  }
`;