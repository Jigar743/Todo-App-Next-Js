export const TypeDefs = `#graphql
  scalar Date

  type Query {
    getTodos: [Todo!]!
  }
  
  type Mutation {
    addTodo(input: AddTodoInput): String
    updateTodo(input: UpdateTodoInput): String
    deleteTodo(input: DeleteTodoInput): String
  }

  type Todo {
    id: Int
    Title: String!
    Description: String!
    CreatedAt: Date!
    UpdatedAt: Date!
    Completed: Boolean
  }

  input AddTodoInput {
    title: String!
    description: String!
  }

  input UpdateTodoInput{
    id: Int
    title: String!
    description: String!
  }

  input DeleteTodoInput{
    id: Int
  }
`;
