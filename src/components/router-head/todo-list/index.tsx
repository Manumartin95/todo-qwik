import { component$ } from "@builder.io/qwik";
import { Task } from "~/routes/todo";

export default component$<{ tasks: Task[] }>(({ tasks }) => {
  return (
    <>
      <h1>TODO List</h1>
      <div>
        {tasks.length && (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
});
