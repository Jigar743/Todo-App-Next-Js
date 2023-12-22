import { TodoType } from "@/Types/TodoTypes";
import { TodoListContainer } from "./TodoList.styled";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteFilled,
  EditFilled,
} from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { DELETE_TODO, UPDATE_TODO } from "@/Server/Config/mutations";
import { GET_TODOS } from "@/Server/Config/querries";
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
      variables: {
        input: {
          id,
        },
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  return (
    <TodoListContainer className="border rounded">
      {Todos?.length > 0 &&
        Todos?.map((todo) => (
          <div className="todo-container border rounded" key={todo.id}>
            <div className="todo-title">{todo.Title}</div>
            <div className="todo-description">{todo.Description}</div>
            <div className="todo-actions">
              {/* {todo.Completed ? <CheckOutlined /> : <CloseOutlined />} */}
              <EditFilled
                onClick={() => openEditTodo(todo)}
                className="edit bg-orange-200"
              />
              <DeleteFilled
                className="delete bg-orange-200"
                onClick={() => handleDeleteTodo(todo.id)}
              />
            </div>
            <div>{converUTCtoLoalTime(todo.CreatedAt)}</div>
          </div>
        ))}
      {Todos?.length === 0 && <div>Nothing here</div>}
    </TodoListContainer>
  );
}
