import { ADD_TODO, UPDATE_TODO } from "@/Client/Mutation/Todo.mutation";
import { GET_TODOS } from "@/Client/Queries/Todo.query";
import { TodoType } from "@/Types/TodoTypes";
import { useMutation } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import {
  Button,
  ButtonRow,
  FormContainer,
  Input,
  TextArea,
} from "./AddEditTodoSection.styled";

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

  if (!open) return null;

  return (
    <FormContainer open={open}>
      <Input
        placeholder="Enter title"
        type="text"
        value={todoTitle}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="Enter description"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <ButtonRow>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            handleAddTodo();
          }}
        >
          {isEditMode ? "Update" : "Add"}
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            close();
            setEditTodo(null);
            setTitle("");
            setTodoDescription("");
          }}
        >
          Cancel
        </Button>
      </ButtonRow>
    </FormContainer>
  );
}
