"use client";
import { useState } from "react";
import { useTheme } from "./theme-context";

export function AddTask() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const { darkMode } = useTheme();
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div
      className={`p-6 text-center max-w-md mx-auto  transition-all duration-300 
                    ${
                      darkMode
                        ? "bg-primary text-background"
                        : "bg-background text-primary"
                    }`}
    >
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Nueva tarea"
          className={`w-full max-w-xs p-3 border rounded-lg transition-all duration-300 shadow-sm
                      focus:outline-none focus:ring-2 
                      ${
                        darkMode
                          ? "bg-primary text-background border-accent focus:ring-accent placeholder-background"
                          : "bg-background text-primary border-accent focus:ring-accent placeholder-secondary"
                      }`}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className={`px-5 py-2 rounded-lg shadow-md transition-all duration-300 
                      ${
                        darkMode
                          ? "bg-accent text-background hover:bg-secondary"
                          : "bg-accent text-white hover:bg-secondary"
                      }`}
          onClick={addTask}
        >
          Agregar
        </button>
      </div>

      <ul className="mt-4">
        {tasks.map((task) => (
          <li
            key={task}
            className={`p-2 border-l-4 rounded-md shadow-sm my-1 transition-all duration-300 
                        ${
                          darkMode
                            ? "bg-background text-primary border-accent"
                            : "bg-white text-primary border-accent"
                        }`}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
