import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), title: task }]);
      setTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Task Manager</h2>
      <input
        className="p-2 border rounded w-full"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <ul className="space-y-2">
        {tasks.map((t) => (
          <li key={t.id} className="flex justify-between items-center">
            <span>{t.title}</span>
            <button
              className="text-red-500"
              onClick={() => handleDeleteTask(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
