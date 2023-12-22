import { ADD_TODO, UPDATE_TODO } from "@/Server/Config/mutations";
import { GET_TODOS } from "@/Server/Config/querries";
import { TodoType } from "@/Types/TodoTypes";
import { useMutation } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";

export default function AddEditTodoSection({
  open,
  editTodo,
  close,
  setEditTodo,
}: {
  open: boolean;
  editTodo: TodoType | null;
  close: () => void;
  setEditTodo: (val: null) => void;
}) {
  const [todoTitle, setTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const isEditMode = useMemo(() => editTodo !== null, [editTodo]);

  const [addTodo] = useMutation(ADD_TODO);
  const [UpdateTodo] = useMutation(UPDATE_TODO);

  useEffect(() => {
    if (isEditMode && editTodo !== null) {
      setTitle(editTodo.Title);
      setTodoDescription(editTodo.Description);
    }
  }, [isEditMode, editTodo]);

  const handleAddTodo = () => {
    if (isEditMode && editTodo !== null) {
      UpdateTodo({
        variables: {
          input: {
            id: editTodo.id,
            title: todoTitle,
            description: todoDescription,
          },
        },
        refetchQueries: [{ query: GET_TODOS }],
      });
    } else {
      addTodo({
        variables: {
          input: {
            title: todoTitle,
            description: todoDescription,
          },
        },
        refetchQueries: [{ query: GET_TODOS }],
      });
    }
    setTitle("");
    setTodoDescription("");
    setEditTodo(null);
    close();
  };

  if (open)
    return (
      <>
        <form className="w-[75%] flex flex-col gap-4 m-auto">
          <input
            className="w-full p-3 shadow text-gray-700 focus:outline-none"
            placeholder="Enter title"
            type="text"
            value={todoTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full p-3 shadow text-gray-700 focus:outline-none"
            placeholder="Enter description"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
          <div className="flex gap-4">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleAddTodo();
              }}
              className="w-[25%] bg-orange-200 rounded-lg py-2 px-2"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
            <button
              onClick={() => {
                close();
                setEditTodo(null);
                setTitle("");
                setTodoDescription("");
              }}
              className="w-[25%] border rounded-lg py-2 px-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </>
    );

  return <></>;
}
