"use client";
import { ReactNode } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTheme } from "./theme-context";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const { darkMode } = useTheme();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`relative p-6 rounded-lg shadow-lg w-96 border transition-all duration-300
          ${
            darkMode
              ? "bg-primary text-background border-accent"
              : "bg-background text-primary border-accent"
          }`}
      >
        {" "}
        <button
          className={`absolute top-2 right-2 text-2xl transition-all duration-200 
                      ${
                        darkMode
                          ? "text-accent hover:text-secondary"
                          : "text-secondary hover:text-primary"
                      }`}
          onClick={onClose}
        >
          <IoIosCloseCircleOutline />
        </button>
        <div className="text-primary">{children}</div>
      </div>
    </div>
  );
};
