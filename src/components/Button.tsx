import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <>
      <button
        className="disabled:opacity-0 text-center w-full
        inline-block rounded border border-indigo-600 bg-indigo-600 
        p-3 text-sm font-medium text-white 
        hover:bg-transparent hover:text-indigo-600 
        focus:outline-none focus:ring active:text-indigo-500"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
