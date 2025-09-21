import AddEditTodoSection from "@/Client/Components/AddEditTodoSection/AddEditTodoSection";
import LoadingCmp from "@/Client/Components/LoadingScreen/LoadingCmp";
import Timer from "@/Client/Components/Timer";
import TodoList from "@/Client/Components/TodoList/TodoList";
import { GET_TODOS } from "@/Client/Queries/Todo.query";
import { TodoType } from "@/Types/TodoTypes";
import { getAppName } from "@/Utils/Constants";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";

export const TopBar = styled.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  gap: 15px;

  input {
    flex: 3;
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 1rem;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    &:focus {
      outline: none;
      border-color: #ff9800;
      box-shadow: 0 0 10px rgba(255, 152, 0, 0.2);
    }
  }

  button {
    flex: 1;
    background: #ff9800;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background: #fb8c00;
      transform: scale(1.05);
    }
  }
`;

export default function TodosPage() {
  const [open, setOpen] = useState(false);
  const [editTodo, setEditTodo] = useState<TodoType | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <LoadingCmp />;

  if (error) return <p>{error.message}</p>;

  const filteredTodos = data.todos.filter((todo: TodoType) =>
    todo.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>{`${getAppName()} | Todos`}</title>
      </Head>

      <div className="mt-4 flex flex-col gap-4">
        <TopBar>
          <input
            placeholder="Search your todo"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => setOpen(true)}>Add Todo</button>
        </TopBar>

        <AddEditTodoSection
          open={open}
          close={() => {
            setOpen(false);
          }}
          editTodo={editTodo}
          setEditTodo={(val) => setEditTodo(val)}
        />
        <TodoList
          Todos={data.todos}
          openEditTodo={(currentTodo: TodoType) => {
            setOpen(true);
            setEditTodo(currentTodo);
          }}
        />

        <Timer targetHour={0} targetMinute={1} targetSecond={45} />
      </div>
    </>
  );
}
