import React, { ReactNode } from "react";

interface AppButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

function AppButton({ children, onClick, className }:AppButtonProps){
  return (
    <button
      onClick={onClick}
      className={`text-black text-3xl px-4 py-4 rounded-3xl bg-green-800/60 hover:bg-green-700/60 cursor-pointer transition ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default AppButton;