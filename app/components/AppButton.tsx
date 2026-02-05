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
      className={`text-black text-3xl px-4 py-4 rounded-3xl bg-green-800/60 hover:bg-green-700/60 cursor-pointer transition hover:scale-110 active:bg-green-600/70 ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default AppButton;