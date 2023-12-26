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

export type CreateTodoInputType = {
  title: string;
  description: string;
};

export type UpdateTodoInputType = {
  title: string;
  description: string;
  id: number;
};

export type DeleteTodoInputType = {
  id: number;
};
