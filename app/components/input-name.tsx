"use client";
import React, { useState } from "react";
import { useTheme } from "./theme-context";

const InputName: React.FC = () => {
  const [name, setName] = useState("");
  const { darkMode } = useTheme();

  return (
    <div className="p-4 text-center">
      <input
        type="text"
        placeholder="Escribe tu nombre"
        className={`w-full max-w-xs p-3 border rounded-lg transition-all duration-300 shadow-md
                    focus:outline-none focus:ring-2 
                    ${
                      darkMode
                        ? "bg-primary text-background border-accent focus:ring-accent placeholder-background"
                        : "bg-background text-primary border-accent focus:ring-accent placeholder-secondary"
                    }`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p
        className={`mt-2 font-semibold ${
          darkMode ? "text-background" : "text-secondary"
        }`}
      >
        Nombre ingresado: {name}
      </p>
    </div>
  );
};

export default InputName;
