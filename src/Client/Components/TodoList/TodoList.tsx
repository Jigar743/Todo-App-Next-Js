import { TodoType } from "@/Types/TodoTypes";
import { TodoListContainer, TodoCard } from "./TodoList.styled";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "@/Client/Mutation/Todo.mutation";
import { GET_TODOS } from "@/Client/Queries/Todo.query";
import { converUTCtoLoalTime } from "@/Utils/helper";

export default function TodoList({
  Todos,
  openEditTodo,
}: {
  Todos: Array<TodoType>;
  openEditTodo: (todo: TodoType) => void;
}) {
  const [DeleteTodo] = useMutation(DELETE_TODO);

  const handleDeleteTodo = (id: number) => {
    DeleteTodo({
      variables: { input: { id } },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  return (
    <TodoListContainer>
      {Todos?.length > 0 ? (
        Todos.map((todo) => (
          <TodoCard key={todo.id}>
            <div className="todo-title">{todo.Title}</div>
            <div className="todo-description">{todo.Description}</div>
            <div className="todo-timestamp">
              {converUTCtoLoalTime(todo.CreatedAt)}
            </div>

            <div className="todo-actions">
              <EditOutlined onClick={() => openEditTodo(todo)} />
              <DeleteOutlined onClick={() => handleDeleteTodo(todo.id)} />
            </div>
          </TodoCard>
        ))
      ) : (
        <div>No results found</div>
      )}
    </TodoListContainer>
  );
}
