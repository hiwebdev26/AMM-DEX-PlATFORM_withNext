'use client';

import React from 'react';

interface ButtonProps {
  text?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mx-2 transition duration-300 ease-in-out"
    > 
      {text}
    </button>
  );
}
