"use client";
import React, { useState } from "react";
import { MdAdd, MdHorizontalRule } from "react-icons/md";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">{count}</h2>
        <button
          className="bg-blue-500 text-white p-2 rounded-full"
          onClick={() => setCount(count + 1)}
        >
          <MdAdd />
        </button>
        <button
          className="bg-red-500 text-white p-2 m-2 rounded-full"
          onClick={() => setCount(count - 1)}
        >
          <MdHorizontalRule />
        </button>
      </div>
    </div>
  );
};

export default Counter;
