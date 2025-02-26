import React, { useState } from "react";
import { useTheme } from "./theme-context";

const VisibleText: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const { darkMode } = useTheme();

  return (
    <div>
      <div className="p-4 rounded  text-center">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Ocultar" : "Mostrar"} Texto
        </button>
        {visible && (
          <p
            className={`mt-2 transition-all duration-300 ${
              darkMode ? "text-background" : "text-primary"
            }`}
          >
            ¡Hola, soy un texto visible!
          </p>
        )}
      </div>
    </div>
  );
};

export default VisibleText;
