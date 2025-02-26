"use client";
import { useState } from "react";
import { Theme } from "./components/dark-mode";
import Counter from "./components/counter";
import { Modal } from "./components/modal";
import InputName from "./components/input-name";
import { AddTask } from "./components/add-task";
import VisibleText from "./components/visible-text";
import { useTheme } from "./components/theme-context";

export default function Home() {
  const { darkMode } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center gap-6 p-8 transition-all duration-300
      ${
        darkMode ? "bg-primary text-background" : "bg-background text-primary"
      }`}
    >
      <div className="fixed top-4 right-4 z-50">
        <Theme />
      </div>

      <div className="flex flex-col items-center gap-4">
        {[
          { title: "Contador", component: <Counter />, color: "bg-primary" },
          {
            title: "Input de Nombre",
            component: <InputName />,
            color: "bg-secondary",
          },
          {
            title: "Lista de Tareas",
            component: <AddTask />,
            color: "bg-accent",
          },
          {
            title: "Texto Visible",
            component: <VisibleText />,
            color: "bg-primary",
          },
        ].map(({ title, component, color }) => (
          <button
            key={title}
            className={`${color} text-white px-6 py-3 rounded shadow-md transition-all duration-300 relative
                    hover:opacity-80 
                    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 
                    before:rounded before:scale-105 before:transition-all before:duration-300 
                    active:before:scale-95 
                    after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-white 
                    after:transition-all after:duration-300 after:-translate-x-1/2 
                    hover:after:w-1/2`}
            onClick={() => openModal(component)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {modalContent}
      </Modal>
    </div>
  );
}
