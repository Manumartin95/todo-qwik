import { component$ } from "@builder.io/qwik";
import TodoList from "~/components/router-head/todo-list";
import { Form, routeAction$, routeLoader$ } from "@builder.io/qwik-city";

export interface Task {
  id: number;
  name: string;
  done: boolean;
}

const todos: Task[] = [
  { id: 1, name: "Todo 1", done: true },
  { id: 2, name: "Todo 2", done: false },
];

export const useTodoLoader = routeLoader$(() => {
  return todos;
});

export const useAddToTodosAction = routeAction$((item) => {
  todos.push({
    id: 3,
    done: false,
    ...item,
  } as Task);

  return { success: true };
});

export default component$(() => {
  const todos = useTodoLoader();
  const action = useAddToTodosAction();
  return (
    <>
      <TodoList tasks={todos.value}></TodoList>
      <Form action={action} spaReset>
        <input type="text" name="name" required />{" "}
        <button type="submit" class="button-dark">
          Add Task
        </button>
      </Form>
    </>
  );
});
