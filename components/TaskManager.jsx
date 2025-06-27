import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <Card title="Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border px-2 py-1 w-full rounded"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        {["All", "Active", "Completed"].map(f => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks to show.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map(task => (
            <li
              key={task.id}
              className={`flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded`}
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default TaskManager;
