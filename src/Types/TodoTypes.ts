export type TodoType = {
  id: number;
  Title: string;
  Description: string;
  CreatedAt: string;
  UpdatedAt: string;
  Completed: boolean;
};

export type TodosInitialState = {
  todos: Array<TodoType>;
};
