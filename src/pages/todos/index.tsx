import AddEditTodoSection from "@/Client/Components/AddEditTodoSection/AddEditTodoSection";
import LoadingCmp from "@/Client/Components/LoadingScreen/LoadingCmp";
import TodoList from "@/Client/Components/TodoList/TodoList";
import { GET_TODOS } from "@/Client/Queries/Todo.query";
import { TodoType } from "@/Types/TodoTypes";
import { getAppName } from "@/Utils/Constants";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import React, { useState } from "react";

export default function TodosPage() {
  const [open, setOpen] = useState(false);
  const [editTodo, setEditTodo] = useState<TodoType | null>(null);

  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <LoadingCmp />;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Head>
        <title>{`${getAppName()} | Todos`}</title>
      </Head>

      <div className="mt-4 flex flex-col gap-4">
        <div className="m-auto w-[75%] flex gap-4">
          <div className="w-[75%]">
            <input
              className="w-full p-3 shadow text-gray-700 focus:outline-none"
              placeholder="Search your todo"
              type="text"
            />
          </div>
          <button
            className="w-[25%] bg-orange-200 rounded-lg py-2 px-2"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Todo
          </button>
        </div>
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
      </div>
    </>
  );
}
