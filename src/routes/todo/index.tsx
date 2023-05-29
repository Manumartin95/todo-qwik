import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, routeLoader$ } from "@builder.io/qwik-city";

import styles from "./todo.module.css";

export interface Task {
  name: string;
}

const todos: Task[] = [];

export const useTodoLoader = routeLoader$(() => {
  return todos;
});

export const useAddToTodosAction = routeAction$((item) => {
  todos.push(item as unknown as Task);
  return { success: true };
});

export default component$(() => {
  const tasks = useTodoLoader();
  const action = useAddToTodosAction();

  return (
    <div class={styles.todo}>
      <h1>TODO List</h1>
      <div>
        {(tasks.value.length && (
          <ul>
            {tasks.value.map((task) => (
              <li class={styles.task} key={task.name}>
                <span>{task.name}</span>
              </li>
            ))}
          </ul>
        )) || <span>Empty list</span>}
      </div>

      <Form action={action} spaReset>
        <input type="text" name="name" required />
        <button type="submit">Add Task</button>
      </Form>
    </div>
  );
});
